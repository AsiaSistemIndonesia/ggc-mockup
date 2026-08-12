import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

function getMimeType(fileName: string): string {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".pdf":
      return "application/pdf";
    default:
      return "application/octet-stream";
  }
}

async function findAttachmentFile(id: string, fileName: string): Promise<string | null> {
  const possibleFolders = [
    path.join(process.cwd(), "data", "attachments", id),
    path.join(process.cwd(), "data", "attachment", id),
  ];

  for (const folderPath of possibleFolders) {
    const resolvedFolder = path.resolve(folderPath);
    const targetFile = path.resolve(folderPath, fileName);

    // Path traversal check: target file must remain inside resolved folder
    if (!targetFile.startsWith(resolvedFolder)) {
      console.warn(`[Security] Path traversal attempt blocked: id=${id}, filename=${fileName}`);
      return null;
    }

    try {
      const stat = await fs.stat(targetFile);
      if (stat.isFile()) {
        return targetFile;
      }
    } catch {
      // File not found in this folder
    }
  }

  return null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string; filename: string }> },
) {
  try {
    const resolvedParams = await params;
    const { id, filename } = resolvedParams;

    if (!id || !filename) {
      return NextResponse.json(
        { success: false, error: "Missing id or filename" },
        { status: 400 },
      );
    }

    // Additional sanitization: prohibit path separators in filename
    if (filename.includes("/") || filename.includes("\\") || filename.includes("..")) {
      return NextResponse.json(
        { success: false, error: "Invalid filename parameter" },
        { status: 400 },
      );
    }

    const filePath = await findAttachmentFile(id, filename);

    if (!filePath) {
      return NextResponse.json(
        { success: false, error: "File not found" },
        { status: 404 },
      );
    }

    const fileBuffer = await fs.readFile(filePath);
    const mimeType = getMimeType(filename);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("[API Serve Attachment] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to serve attachment" },
      { status: 500 },
    );
  }
}
