import { db, ensureDbOpen } from "@/lib/indexed-db/database";
import { InboundAttachment } from "@/lib/media/media-types";
import { InboundReceiptData } from "@/lib/inbound/inbound-service";

export async function resolveInboundAttachments(
  record: InboundReceiptData,
  isOnline: boolean = true,
): Promise<InboundAttachment[]> {
  const resolvedList: InboundAttachment[] = [];

  // Priority 1: Synced records + Online -> Fetch from server attachment API
  if (isOnline && record.id && record.syncStatus !== "pending") {
    try {
      const res = await fetch(`/api/inbound/${encodeURIComponent(record.id)}/attachments`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.attachments) && json.attachments.length > 0) {
          for (const att of json.attachments) {
            resolvedList.push({
              localId: att.fileName,
              inboundLocalId: record.localId,
              fileName: att.fileName,
              mimeType: att.mimeType,
              size: att.size,
              type: att.type as InboundAttachment["type"],
              previewUrl: att.url,
              fileUrl: att.url,
              syncStatus: "synced",
              createdAt: record.createdAt,
            });
          }
          return resolvedList;
        }
      }
    } catch (err) {
      console.warn("[AttachmentResolver] Server API attachment fetch failed, falling back to local DB:", err);
    }
  }

  // Priority 2: Offline or Pending records -> Resolve from Dexie IndexedDB
  try {
    const dbOpen = await ensureDbOpen();
    if (dbOpen) {
      const localAtts = await db.inbound_attachments
        .where("inboundLocalId")
        .equals(record.localId)
        .toArray();

      for (const attRec of localAtts) {
        if (!resolvedList.some((a) => a.localId === attRec.localId || a.fileName === attRec.fileName)) {
          let previewUrl: string | undefined;
          if (attRec.blob) {
            try {
              previewUrl = URL.createObjectURL(attRec.blob);
            } catch (err) {
              console.warn("[AttachmentResolver] Failed to create ObjectURL for Blob:", err);
            }
          }

          resolvedList.push({
            localId: attRec.localId,
            inboundLocalId: attRec.inboundLocalId,
            fileName: attRec.fileName,
            mimeType: attRec.mimeType,
            size: attRec.size,
            type: attRec.type as InboundAttachment["type"],
            blob: attRec.blob,
            previewUrl,
            syncStatus: attRec.syncStatus,
            createdAt: attRec.createdAt,
          });
        }
      }
    }
  } catch (err) {
    console.error("[AttachmentResolver] Error loading attachments from IndexedDB:", err);
  }

  // Priority 3: Check in-memory attachments array attached to record
  if (record.attachments && Array.isArray(record.attachments) && record.attachments.length > 0) {
    for (const att of record.attachments as unknown as InboundAttachment[]) {
      if (!resolvedList.some((a) => a.fileName === att.fileName)) {
        resolvedList.push({
          localId: att.localId || att.id || `ATT-${Math.random().toString(36).slice(2, 7)}`,
          inboundLocalId: record.localId,
          fileName: att.fileName || "dokumen_lampiran",
          mimeType: att.mimeType || (att.type === "pdf" ? "application/pdf" : "image/jpeg"),
          size: att.size || 0,
          type: att.type || (att.fileName?.endsWith(".pdf") ? "pdf" : "photo"),
          previewUrl: att.previewUrl || att.fileUrl,
          blob: att.blob,
          syncStatus: att.syncStatus || record.syncStatus,
          createdAt: att.createdAt || record.createdAt,
        });
      }
    }
  }

  return resolvedList;
}
