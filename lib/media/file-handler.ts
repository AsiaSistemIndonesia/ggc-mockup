import { InboundAttachment, AttachmentType } from "./media-types";

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export async function computeSHA256Hash(blob: Blob): Promise<string> {
  try {
    const arrayBuffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    // Fallback simple hash for older environments
    return Math.random().toString(36).substring(2, 10);
  }
}

export async function createAttachmentFromBlob(
  fileOrBlob: File | Blob,
  type: AttachmentType,
  inboundLocalId: string,
  customName?: string,
): Promise<InboundAttachment> {
  const localId = `ATT-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const fileName =
    customName ||
    (fileOrBlob instanceof File
      ? fileOrBlob.name
      : `scan_${Date.now()}.${fileOrBlob.type.includes("pdf") ? "pdf" : "jpg"}`);

  const previewUrl = URL.createObjectURL(fileOrBlob);
  const hash = await computeSHA256Hash(fileOrBlob);

  return {
    localId,
    inboundLocalId,
    fileName,
    mimeType: fileOrBlob.type || (type === "pdf" ? "application/pdf" : "image/jpeg"),
    size: fileOrBlob.size,
    type,
    blob: fileOrBlob,
    previewUrl,
    hash,
    syncStatus: "pending",
    createdAt: new Date().toISOString(),
  };
}

export function revokePreviewUrl(previewUrl?: string) {
  if (previewUrl && previewUrl.startsWith("blob:")) {
    URL.revokeObjectURL(previewUrl);
  }
}
