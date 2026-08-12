/**
 * DEMO ONLY: File system attachment storage for development.
 * In a production environment, attachments should be stored in S3/Blob Storage.
 */

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const ATTACHMENTS_DIR = path.join(process.cwd(), "data", "attachments");

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const inboundId = (formData.get("inboundId") as string) || "general";
    const localId = formData.get("localId") as string || "";
    const type = (formData.get("type") as string) || "photo";

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 },
      );
    }

    const targetFolder = path.join(ATTACHMENTS_DIR, inboundId);
    await fs.mkdir(targetFolder, { recursive: true });

    const fileName = file.name || `attachment_${Date.now()}`;
    const filePath = path.join(targetFolder, fileName);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await fs.writeFile(filePath, buffer);

    const fileUrl = `/api/inbound/attachments?inboundId=${encodeURIComponent(
      inboundId,
    )}&file=${encodeURIComponent(fileName)}`;

    return NextResponse.json({
      success: true,
      data: {
        id: localId || `ATT-${Date.now()}`,
        inboundId,
        fileName,
        mimeType: file.type,
        size: file.size,
        type,
        fileUrl,
        uploadedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("[API Inbound Attachments POST] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to upload attachment" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const inboundId = searchParams.get("inboundId");
    const fileName = searchParams.get("file");

    if (!inboundId || !fileName) {
      return NextResponse.json(
        { success: false, error: "Missing inboundId or file param" },
        { status: 400 },
      );
    }

    const filePath = path.join(ATTACHMENTS_DIR, inboundId, fileName);
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
  } catch (error) {
    console.error("[API Inbound Attachments GET] Error:", error);
    return NextResponse.json(
      { success: false, error: "File not found" },
      { status: 404 },
    );
  }
}
