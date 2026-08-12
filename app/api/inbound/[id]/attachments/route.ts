import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

function getMimeTypeAndCategory(fileName: string): { mimeType: string; type: "photo" | "pdf" | "other" } {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return { mimeType: "image/jpeg", type: "photo" };
    case ".png":
      return { mimeType: "image/png", type: "photo" };
    case ".webp":
      return { mimeType: "image/webp", type: "photo" };
    case ".pdf":
      return { mimeType: "application/pdf", type: "pdf" };
    default:
      return { mimeType: "application/octet-stream", type: "other" };
  }
}

async function findAttachmentFolder(id: string): Promise<string | null> {
  const possiblePaths = [
    path.join(process.cwd(), "data", "attachments", id),
    path.join(process.cwd(), "data", "attachment", id),
  ];

  for (const folderPath of possiblePaths) {
    try {
      const stat = await fs.stat(folderPath);
      if (stat.isDirectory()) {
        return folderPath;
      }
    } catch {
      // Folder does not exist
    }
  }

  return null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const resolvedParams = await params;
    const inboundId = resolvedParams.id;

    if (!inboundId) {
      return NextResponse.json(
        { success: false, error: "Missing inbound ID" },
        { status: 400 },
      );
    }

    const folderPath = await findAttachmentFolder(inboundId);

    if (!folderPath) {
      return NextResponse.json({
        success: true,
        inboundId,
        attachments: [],
      });
    }

    const fileNames = await fs.readdir(folderPath);

    const attachments = [];
    for (const fileName of fileNames) {
      const filePath = path.join(folderPath, fileName);
      const stat = await fs.stat(filePath);

      if (stat.isFile()) {
        const { mimeType, type } = getMimeTypeAndCategory(fileName);
        attachments.push({
          fileName,
          url: `/api/inbound/${encodeURIComponent(inboundId)}/attachments/${encodeURIComponent(fileName)}`,
          mimeType,
          type,
          size: stat.size,
        });
      }
    }

    return NextResponse.json({
      success: true,
      inboundId,
      attachments,
    });
  } catch (error) {
    console.error("[API Inbound Attachments List] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to list attachments" },
      { status: 500 },
    );
  }
}
