import { db, ensureDbOpen, AuthSessionRecord, UserProfileRecord } from "@/lib/indexed-db/database";
import { AuthUser, AuthSession } from "@/lib/auth/auth-types";
import { generateDemoJwt } from "@/lib/auth/jwt";
import usersData from "@/data/auth/users.json";

// Default offline session expiration: 24 hours
const OFFLINE_SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export async function loginOnline(
  emailInput: string,
  passwordInput: string
): Promise<{ success: boolean; user?: AuthUser; session?: AuthSession; error?: string }> {
  const userRecord = usersData.find(
    (u) => u.email.toLowerCase() === emailInput.trim().toLowerCase()
  );

  if (!userRecord) {
    return { success: false, error: "Email tidak terdaftar." };
  }

  if (userRecord.password !== passwordInput) {
    return { success: false, error: "Password salah." };
  }

  if (userRecord.status !== "active") {
    return { success: false, error: "Akun tidak aktif." };
  }

  const now = new Date().toISOString();
  const expiresAt = new Date(Date.now() + OFFLINE_SESSION_DURATION_MS).toISOString();

  const token = generateDemoJwt(
    {
      sub: userRecord.id,
      role: userRecord.role,
      operator_subtype: userRecord.operatorSubtype,
      site_id: userRecord.siteId,
    },
    24
  );

  const sessionRecord: AuthSessionRecord = {
    id: "current",
    userId: userRecord.id,
    token,
    role: userRecord.role,
    operatorSubtype: userRecord.operatorSubtype,
    siteId: userRecord.siteId,
    loginAt: now,
    lastAuthenticatedAt: now,
    offlineExpiresAt: expiresAt,
  };

  const profileRecord: UserProfileRecord = {
    id: userRecord.id,
    name: userRecord.name,
    email: userRecord.email,
    role: userRecord.role,
    operatorSubtype: userRecord.operatorSubtype,
    siteId: userRecord.siteId,
    status: userRecord.status,
  };

  if (typeof window !== "undefined") {
    await ensureDbOpen();
    await db.auth_session.put(sessionRecord);
    await db.user_profile.put(profileRecord);

    localStorage.setItem(
      "ggc_user",
      JSON.stringify({
        id: userRecord.id,
        name: userRecord.name,
        role: userRecord.role,
        site: userRecord.siteId === "MAMUJU" ? "Mamuju, Sulawesi" : userRecord.siteId === "MARUNDA" ? "Marunda, Jakarta" : "Teluk Bayur, Padang",
      })
    );
  }

  return {
    success: true,
    user: profileRecord,
    session: sessionRecord,
  };
}

export async function restoreSession(isOnline: boolean): Promise<{ user: AuthUser; session: AuthSession } | null> {
  console.log("[AUTH-TRACE-05] restoreSession() entered");
  if (typeof window === "undefined") {
    console.log("[AUTH-TRACE-10] restoreSession() returned null (SSR)");
    return null;
  }

  console.log("[AUTH-TRACE-ORIGIN]", window.location.origin, {
    typeofWindow: typeof window,
    typeofIndexedDB: typeof indexedDB,
    isSecureContext: window.isSecureContext,
  });

  const restoreCore = async (): Promise<{ user: AuthUser; session: AuthSession } | null> => {
    console.log("[AUTH-TRACE-06] before IndexedDB initialization");
    const isDbReady = await ensureDbOpen();
    console.log("[AUTH-TRACE-07] after IndexedDB initialization. Ready:", isDbReady);

    if (!isDbReady) {
      console.warn("[AUTH-TRACE-10] restoreSession() returned null (IndexedDB unavailable)");
      return null;
    }

    console.log("[AUTH-TRACE-08] before reading auth_session");
    const session = await db.auth_session.get("current");
    console.log("[AUTH-TRACE-09] after reading auth_session. Result:", session ? `User ${session.userId}` : "no session");

    if (!session) {
      console.log("[AUTH-TRACE-10] restoreSession() returned null (empty database / no session)");
      return null;
    }

    const isExpired = new Date(session.offlineExpiresAt).getTime() <= Date.now();
    if (isExpired) {
      console.warn("[AUTH-TRACE-10] restoreSession() returned null (expired session)");
      await logoutAuth();
      return null;
    }

    const profile = await db.user_profile.get(session.userId);
    if (!profile) {
      console.warn("[AUTH-TRACE-10] restoreSession() returned null (missing profile)");
      return null;
    }

    if (isOnline) {
      const match = usersData.find((u) => u.id === profile.id);
      if (!match || match.status !== "active") {
        console.warn("[AUTH-TRACE-10] restoreSession() returned null (inactive user during revalidation)");
        await logoutAuth();
        return null;
      }

      session.lastAuthenticatedAt = new Date().toISOString();
      await db.auth_session.put(session);
    }

    console.log("[AUTH-TRACE-10] restoreSession() returned valid session for user", profile.name);
    return { user: profile, session };
  };

  console.log("[AUTH-TRACE-TIMER] restore timeout timer started");
  const timeoutPromise = new Promise<{ user: AuthUser; session: AuthSession } | null>((resolve) => {
    setTimeout(() => {
      console.warn("[AUTH-TRACE-TIMER] restore timeout timer fired");
      resolve(null);
    }, 4000);
  });

  try {
    return await Promise.race([restoreCore(), timeoutPromise]);
  } catch (err) {
    console.error("[AUTH-TRACE-10] restoreSession() returned null due to exception:", err);
    return null;
  }
}

export async function logoutAuth(): Promise<void> {
  if (typeof window !== "undefined") {
    try {
      if (db.isOpen()) {
        await db.auth_session.delete("current");
        await db.user_profile.clear();
      }
    } catch (e) {
      console.warn("[AUTH] Error clearing IndexedDB stores:", e);
    }
    localStorage.removeItem("ggc_user");
  }
}
