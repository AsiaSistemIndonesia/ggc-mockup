export type AttachmentType = "photo" | "scan" | "pdf";

export type SyncStatus = "pending" | "synced" | "failed";

export interface InboundAttachment {
  id?: string;
  localId: string;
  inboundLocalId: string;
  fileName: string;
  mimeType: string;
  size: number;
  type: AttachmentType;
  blob?: Blob | File;
  previewUrl?: string;
  fileUrl?: string;
  hash?: string;
  syncStatus: SyncStatus;
  createdAt: string;
}
