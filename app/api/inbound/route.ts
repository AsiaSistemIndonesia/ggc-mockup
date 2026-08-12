import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const INBOUND_FILE_PATH = path.join(
  process.cwd(),
  "data",
  "inbound",
  "inbound.json",
);

async function getInboundData() {
  try {
    const fileContent = await fs.readFile(INBOUND_FILE_PATH, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("[API Inbound] Error reading inbound.json:", error);
    return [];
  }
}

async function saveInboundData(data: unknown[]) {
  const dir = path.dirname(INBOUND_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(INBOUND_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  try {
    const data = await getInboundData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("[API Inbound GET] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inbound records" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload" },
        { status: 400 },
      );
    }

    const currentRecords = await getInboundData();

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const seq = String(currentRecords.length + 1).padStart(3, "0");
    const serverId = `INB-${dateStr}-${seq}`;

    const newRecord = {
      ...body,
      id: serverId,
      createdAt: body.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    currentRecords.unshift(newRecord);
    await saveInboundData(currentRecords);

    return NextResponse.json({ success: true, data: newRecord }, { status: 201 });
  } catch (error) {
    console.error("[API Inbound POST] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create inbound record" },
      { status: 500 },
    );
  }
}
