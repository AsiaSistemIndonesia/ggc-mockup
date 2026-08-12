import { db, ensureDbOpen } from "@/lib/indexed-db/database";

export class SyncEngine {
  private static isSyncing = false;

  /**
   * Process all pending items in sync_queue
   */
  static async processQueue(): Promise<{ processed: number; succeeded: number; failed: number }> {
    if (this.isSyncing) {
      console.log("[SyncEngine] Sync already in progress, skipping.");
      return { processed: 0, succeeded: 0, failed: 0 };
    }

    this.isSyncing = true;
    let processed = 0;
    let succeeded = 0;
    let failed = 0;

    try {
      await ensureDbOpen();

      const pendingQueue = await db.sync_queue
        .where("status")
        .equals("pending")
        .toArray();

      if (pendingQueue.length === 0) {
        this.isSyncing = false;
        return { processed: 0, succeeded: 0, failed: 0 };
      }

      console.log(`[SyncEngine] Found ${pendingQueue.length} pending items to sync.`);

      for (const queueItem of pendingQueue) {
        processed++;
        const nowIso = new Date().toISOString();

        if (queueItem.entity === "inbound") {
          try {
            const txn = await db.inbound_transactions.get(queueItem.entityLocalId);
            if (!txn) {
              await db.sync_queue.update(queueItem.id!, {
                status: "failed",
                lastAttemptAt: nowIso,
                error: "Local transaction record not found",
              });
              failed++;
              continue;
            }

            // 1. Post transaction data to server
            const res = await fetch("/api/inbound", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(txn.data),
            });

            if (!res.ok) {
              throw new Error(`Server returned status ${res.status}`);
            }

            const resJson = await res.json();
            if (!resJson.success || !resJson.data?.id) {
              throw new Error(resJson.error || "Server response missing ID");
            }

            const serverId = resJson.data.id;

            // 2. Upload attachments
            const attachments = await db.inbound_attachments
              .where("inboundLocalId")
              .equals(queueItem.entityLocalId)
              .toArray();

            for (const att of attachments) {
              if (att.blob) {
                const formData = new FormData();
                formData.append("file", att.blob, att.fileName);
                formData.append("inboundId", serverId);
                formData.append("localId", att.localId);
                formData.append("type", att.type);

                const attRes = await fetch("/api/inbound/attachments", {
                  method: "POST",
                  body: formData,
                });

                if (attRes.ok) {
                  await db.inbound_attachments.update(att.localId, {
                    syncStatus: "synced",
                  });
                }
              }
            }

            // 3. Mark transaction as synced in IndexedDB
            await db.inbound_transactions.update(queueItem.entityLocalId, {
              serverId,
              syncStatus: "synced",
              updatedAt: nowIso,
              data: {
                ...txn.data,
                id: serverId,
                syncStatus: "synced",
              },
            });

            // 4. Mark sync queue item completed
            await db.sync_queue.update(queueItem.id!, {
              status: "completed",
              lastAttemptAt: nowIso,
              error: undefined,
            });

            succeeded++;
            console.log(`[SyncEngine] Successfully synced inbound item ${queueItem.entityLocalId} -> ${serverId}`);
          } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            console.error(`[SyncEngine] Failed to sync item ${queueItem.entityLocalId}:`, err);
            failed++;

            await db.sync_queue.update(queueItem.id!, {
              attempts: (queueItem.attempts || 0) + 1,
              lastAttemptAt: nowIso,
              error: errorMessage,
            });

            await db.inbound_transactions.update(queueItem.entityLocalId, {
              syncStatus: "failed",
              updatedAt: nowIso,
            });
          }
        }
      }
    } catch (err) {
      console.error("[SyncEngine] Global processQueue error:", err);
    } finally {
      this.isSyncing = false;
    }

    return { processed, succeeded, failed };
  }
}
