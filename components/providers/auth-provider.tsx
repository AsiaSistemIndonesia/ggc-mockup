"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthUser, AuthSession, AuthStatus, AuthMode, AuthContextType } from "@/lib/auth/auth-types";
import { loginOnline, restoreSession, logoutAuth } from "@/lib/auth/auth-service";
import { useConnectivity } from "@/components/providers/connectivity-provider";
import { canAccessRoute, getLandingRouteForRole } from "@/lib/rbac/rbac-engine";

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  status: "restoring",
  mode: "online",
  isRestoring: true,
  isAuthenticated: false,
  login: async () => ({ success: false, error: "Not initialized" }),
  logout: async () => {},
  restoreSession: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [status, setStatus] = useState<AuthStatus>("restoring");
  const { isOnline } = useConnectivity();
  const router = useRouter();
  const pathname = usePathname();

  const mode: AuthMode = isOnline ? "online" : "offline";

  useEffect(() => {
    console.log("[AUTH-TRACE-01] Root/Auth provider mounted");
    console.log("[AUTH-TRACE-02] AuthProvider initialization started");
  }, []);

  console.log(`[AUTH-TRACE-03] Initial auth state: status=${status}`);

  // Restore session from IndexedDB on startup & network transitions
  const performRestore = useCallback(async () => {
    console.log("[AUTH-TRACE-04] performRestore() entered");
    setStatus("restoring");

    try {
      const result = await restoreSession(isOnline);

      console.log("[AUTH-TRACE-11] performRestore() before state update. Result found:", !!result);
      if (result) {
        setUser(result.user);
        setSession(result.session);
        setStatus("authenticated");
      } else {
        setUser(null);
        setSession(null);
        setStatus("unauthenticated");
      }
      console.log("[AUTH-TRACE-12] performRestore() state update completed");
    } catch (err) {
      console.error("[AUTH-TRACE-11] performRestore() exception:", err);
      setUser(null);
      setSession(null);
      setStatus("unauthenticated");
    } finally {
      console.log("[AUTH-TRACE-13] performRestore() finally executed");
    }
  }, [isOnline]);

  useEffect(() => {
    performRestore();
  }, [performRestore]);

  // Login handler
  const handleLogin = useCallback(
    async (emailInput: string, passwordInput: string) => {
      if (!isOnline) {
        return {
          success: false,
          error: "Mode offline: Login awal pertama kali memerlukan koneksi internet.",
        };
      }

      const res = await loginOnline(emailInput, passwordInput);
      if (res.success && res.user && res.session) {
        setUser(res.user);
        setSession(res.session);
        setStatus("authenticated");

        const targetLanding = getLandingRouteForRole(res.user.role);
        router.push(targetLanding);
      }
      return res;
    },
    [isOnline, router]
  );

  // Logout handler
  const handleLogout = useCallback(async () => {
    await logoutAuth();
    setUser(null);
    setSession(null);
    setStatus("unauthenticated");
    router.push("/login");
  }, [router]);

  // Route & RBAC Protection Guard
  useEffect(() => {
    if (status === "restoring") return;

    if (status === "unauthenticated") {
      if (pathname !== "/login") {
        router.push("/login");
      }
    } else if (status === "authenticated" && user) {
      if (pathname === "/login" || pathname === "/") {
        const landing = getLandingRouteForRole(user.role);
        router.push(landing);
      } else if (!canAccessRoute(user.role, pathname)) {
        console.warn(`[RBAC] Access denied for role "${user.role}" to route "${pathname}". Redirecting to landing.`);
        const landing = getLandingRouteForRole(user.role);
        router.push(landing);
      }
    }
  }, [status, user, pathname, router]);

  const contextValue: AuthContextType = {
    user,
    session,
    status,
    mode,
    isRestoring: status === "restoring",
    isAuthenticated: status === "authenticated",
    login: handleLogin,
    logout: handleLogout,
    restoreSession: performRestore,
  };

  console.log(`[AUTH-TRACE-14] AuthProvider render state: status=${status}`);

  if (status === "restoring") {
    console.log("[AUTH-TRACE-15] Authentication loading UI rendered");
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#EEF2F6] text-[#0B4A2B] font-semibold text-sm">
        <div className="w-8 h-8 border-3 border-[#0B4A2B] border-t-transparent rounded-full animate-spin mb-3"></div>
        <span>Memuat sesi GGC Stockfile...</span>
        <span className="text-xs text-gray-400 mt-2 font-mono">Status: {status}</span>
      </div>
    );
  }

  if (pathname === "/login") {
    console.log("[AUTH-TRACE-16] Login UI rendered");
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
