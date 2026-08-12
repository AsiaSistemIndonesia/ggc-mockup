"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  ConnectivityContextType,
  ConnectivityState,
} from "@/lib/connectivity/types";
import { SyncEngine } from "@/lib/sync/sync-engine";

const initialConnectivityState: ConnectivityState = {
  status: "checking",
  isOnline: true,
  isRealOnline: true,
  lastOnlineAt: null,
  demoOffline: false,
};

const ConnectivityContext = createContext<ConnectivityContextType>({
  ...initialConnectivityState,
  setDemoOffline: () => {},
  toggleDemoOffline: () => {},
});

export function ConnectivityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRealOnline, setIsRealOnline] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [lastOnlineAt, setLastOnlineAt] = useState<string | null>(null);

  // Check if demo offline mode is enabled via environment variable
  const [demoOffline, setDemoOfflineState] = useState<boolean>(() => {
    if (process.env.NODE_ENV !== "production") {
      return process.env.NEXT_PUBLIC_ENABLE_OFFLINE_DEMO === "true";
    }
    return false;
  });

  const handleOnline = useCallback(() => {
    setIsRealOnline(true);
    setLastOnlineAt(new Date().toISOString());
  }, []);

  const handleOffline = useCallback(() => {
    setIsRealOnline(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const currentOnline = navigator.onLine;
      setIsRealOnline(currentOnline);
      if (currentOnline) {
        setLastOnlineAt(new Date().toISOString());
      }

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, [handleOnline, handleOffline]);

  const setDemoOffline = useCallback((enabled: boolean) => {
    // Only allow demo override in non-production or when env flag allows it
    if (
      process.env.NODE_ENV !== "production" ||
      process.env.NEXT_PUBLIC_ENABLE_OFFLINE_DEMO === "true"
    ) {
      setDemoOfflineState(enabled);
    }
  }, []);

  const toggleDemoOffline = useCallback(() => {
    setDemoOffline(!demoOffline);
  }, [demoOffline, setDemoOffline]);

  // Compute effective application status
  const isEffectiveOnline = isMounted ? isRealOnline && !demoOffline : true;
  const effectiveStatus = isMounted
    ? isEffectiveOnline
      ? "online"
      : "offline"
    : "checking";

  // Trigger automatic sync whenever status becomes online
  useEffect(() => {
    if (isMounted && isEffectiveOnline) {
      console.log(
        "[ConnectivityProvider] Online detected -> Triggering SyncEngine processQueue",
      );
      SyncEngine.processQueue();
    }
  }, [isMounted, isEffectiveOnline]);

  const contextValue: ConnectivityContextType = {
    status: effectiveStatus,
    isOnline: isEffectiveOnline,
    isRealOnline,
    lastOnlineAt,
    demoOffline,
    setDemoOffline,
    toggleDemoOffline,
  };

  return (
    <ConnectivityContext.Provider value={contextValue}>
      {children}
    </ConnectivityContext.Provider>
  );
}

export function useConnectivity(): ConnectivityContextType {
  const context = useContext(ConnectivityContext);
  if (!context) {
    throw new Error(
      "useConnectivity must be used within a ConnectivityProvider",
    );
  }
  return context;
}
