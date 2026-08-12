import Dexie, { type Table } from "dexie";

export interface AuthSessionRecord {
  id: string; // Always "current"
  userId: string;
  token: string;
  role: string;
  operatorSubtype?: string;
  siteId: string;
  loginAt: string;
  lastAuthenticatedAt: string;
  offlineExpiresAt: string;
}

export interface UserProfileRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  operatorSubtype?: string;
  siteId: string;
  status: string;
}

export interface AppStateRecord {
  key: string;
  value: unknown;
  updatedAt: string;
}

export interface SyncQueueRecord {
  id?: number;
  entity: string;
  entityLocalId: string;
  operation: "CREATE" | "UPDATE" | "DELETE";
  status: "pending" | "synced" | "failed" | "completed";
  attempts: number;
  createdAt: string;
  lastAttemptAt?: string;
  error?: string;
}

export interface InboundTransactionRecord {
  localId: string;
  serverId?: string;
  data: Record<string, unknown>;
  syncStatus: "pending" | "synced" | "failed";
  createdAt: string;
  updatedAt: string;
}

export interface InboundAttachmentRecord {
  localId: string;
  inboundLocalId: string;
  fileName: string;
  mimeType: string;
  size: number;
  type: string;
  blob: Blob;
  syncStatus: "pending" | "synced" | "failed";
  createdAt: string;
}

export class GGCStockfileDB extends Dexie {
  auth_session!: Table<AuthSessionRecord, string>;
  user_profile!: Table<UserProfileRecord, string>;
  app_state!: Table<AppStateRecord, string>;
  sync_queue!: Table<SyncQueueRecord, number>;
  inbound_transactions!: Table<InboundTransactionRecord, string>;
  inbound_attachments!: Table<InboundAttachmentRecord, string>;

  constructor() {
    super("GGCStockfileDB");

    // Version 1 Schema
    this.version(1).stores({
      auth_session: "id, userId, siteId, offlineExpiresAt",
      user_profile: "id, email, role, siteId",
      app_state: "key, updatedAt",
      sync_queue: "++id, type, status, createdAt",
    });

    // Version 2 Schema (Inbound & Offline Sync extension)
    this.version(2).stores({
      auth_session: "id, userId, siteId, offlineExpiresAt",
      user_profile: "id, email, role, siteId",
      app_state: "key, updatedAt",
      sync_queue: "++id, entity, entityLocalId, status, createdAt",
      inbound_transactions: "localId, serverId, syncStatus, createdAt",
      inbound_attachments: "localId, inboundLocalId, syncStatus, createdAt",
    });
  }
}

// Singleton database instance
export const db = new GGCStockfileDB();

/**
 * Safely ensure database is open with explicit diagnostic logging
 */
export async function ensureDbOpen(): Promise<boolean> {
  if (typeof window === "undefined" || !("indexedDB" in window)) {
    console.warn(
      "[DB-TRACE-04] Database open failed: IndexedDB unavailable in current context",
    );
    return false;
  }
  try {
    console.log("[DB-TRACE-01] Database initialization started");
    console.log(
      "[DB-TRACE-02] Database open started. Status before:",
      db.isOpen() ? "open" : "closed",
    );
    if (!db.isOpen()) {
      await db.open();
    }
    console.log(
      "[DB-TRACE-03] Database open completed. Status after:",
      db.isOpen() ? "open" : "closed",
    );
    return true;
  } catch (err) {
    console.error("[DB-TRACE-04] Database open failed:", err);
    return false;
  }
}
