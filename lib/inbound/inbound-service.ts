import { db, ensureDbOpen } from "@/lib/indexed-db/database";
import { InboundAttachment } from "@/lib/media/media-types";

export interface InboundReceiptData {
  id?: string;
  localId: string;
  timestamp: string;
  truckId: string;
  grossWeight: number;
  tareWeight: number;
  netWeight: number;
  supplier: string;
  doNumber: string;
  sjNumber: string;
  netAsal: number;
  selisihMuat: number;
  totalMoisture: number;
  beratKering: number;
  destinationStack: string;
  kondisiVisual: string;
  sampleRef: string;
  unloadStart: string;
  unloadEnd: string;
  picPenerima: string;
  catatan: string;
  attachments?: InboundAttachment[];
  syncStatus: "synced" | "pending" | "failed";
  createdAt: string;
  updatedAt: string;
}

export class InboundService {
  /**
   * Fetch all inbound records merging server data and local offline pending data
   */
  static async getAllRecords(isOnline: boolean): Promise<InboundReceiptData[]> {
    await ensureDbOpen();

    let serverRecords: InboundReceiptData[] = [];
    if (isOnline) {
      try {
        const res = await fetch("/api/inbound");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            serverRecords = json.data.map((item: Record<string, unknown>) => ({
              ...item,
              localId: (item.localId as string) || (item.id as string),
              syncStatus: "synced",
            })) as InboundReceiptData[];
          }
        }
      } catch (err) {
        console.warn("[InboundService] Failed to fetch server records:", err);
      }
    }

    // Get offline pending or non-synced transactions from IndexedDB
    let localRecords: InboundReceiptData[] = [];
    try {
      const dbTxns = await db.inbound_transactions.toArray();
      localRecords = dbTxns.map((tx) => ({
        ...(tx.data as unknown as InboundReceiptData),
        localId: tx.localId,
        id: tx.serverId || (tx.data.id as string) || tx.localId,
        syncStatus: tx.syncStatus,
        createdAt: tx.createdAt,
        updatedAt: tx.updatedAt,
      }));
    } catch (err) {
      console.error("[InboundService] Error loading IndexedDB transactions:", err);
    }

    // Combine records ensuring local pending items take precedence over server items
    const recordMap = new Map<string, InboundReceiptData>();
    serverRecords.forEach((rec) => recordMap.set(rec.localId || rec.id!, rec));
    localRecords.forEach((rec) => recordMap.set(rec.localId, rec));

    return Array.from(recordMap.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  /**
   * Create an inbound receipt record, executing online API POST when online or
   * persisting to IndexedDB & sync_queue when offline.
   */
  static async createInbound(
    formData: Omit<InboundReceiptData, "localId" | "syncStatus" | "createdAt" | "updatedAt">,
    attachments: InboundAttachment[],
    isOnline: boolean,
  ): Promise<{ success: boolean; localId: string; serverId?: string; syncStatus: "synced" | "pending" }> {
    await ensureDbOpen();

    const localId = `LOC-INB-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const nowIso = new Date().toISOString();

    const fullRecord: InboundReceiptData = {
      ...formData,
      localId,
      syncStatus: isOnline ? "synced" : "pending",
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    if (isOnline) {
      try {
        const response = await fetch("/api/inbound", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fullRecord),
        });

        if (response.ok) {
          const resJson = await response.json();
          if (resJson.success && resJson.data) {
            const serverId = resJson.data.id;

            // Upload attachments if present
            for (const att of attachments) {
              if (att.blob) {
                const attFormData = new FormData();
                attFormData.append("file", att.blob, att.fileName);
                attFormData.append("inboundId", serverId);
                attFormData.append("localId", att.localId);
                attFormData.append("type", att.type);

                await fetch("/api/inbound/attachments", {
                  method: "POST",
                  body: attFormData,
                });
              }
            }

            // Also store in IndexedDB as synced for offline viewing
            await db.inbound_transactions.put({
              localId,
              serverId,
              data: { ...fullRecord, id: serverId },
              syncStatus: "synced",
              createdAt: nowIso,
              updatedAt: nowIso,
            });

            return { success: true, localId, serverId, syncStatus: "synced" };
          }
        }
      } catch (err) {
        console.warn("[InboundService] Online POST failed, falling back to offline IndexedDB storage:", err);
      }
    }

    // OFFLINE PATH or FALLBACK
    // 1. Store transaction in IndexedDB
    await db.inbound_transactions.put({
      localId,
      data: fullRecord as unknown as Record<string, unknown>,
      syncStatus: "pending",
      createdAt: nowIso,
      updatedAt: nowIso,
    });

    // 2. Store attachments in IndexedDB inbound_attachments
    for (const att of attachments) {
      if (att.blob) {
        await db.inbound_attachments.put({
          localId: att.localId,
          inboundLocalId: localId,
          fileName: att.fileName,
          mimeType: att.mimeType,
          size: att.size,
          type: att.type,
          blob: att.blob,
          syncStatus: "pending",
          createdAt: nowIso,
        });
      }
    }

    // 3. Create sync_queue entry
    await db.sync_queue.add({
      entity: "inbound",
      entityLocalId: localId,
      operation: "CREATE",
      status: "pending",
      attempts: 0,
      createdAt: nowIso,
    });

    return { success: true, localId, syncStatus: "pending" };
  }
}
