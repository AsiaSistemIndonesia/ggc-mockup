"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    console.log("[PWA-TRACE-01] Service Worker registration started");
    const isSecureContext = Boolean(
      window.isSecureContext ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
    );
    const swSupported = "serviceWorker" in navigator;

    console.log(`[PWA-TRACE-02] Secure context: ${isSecureContext} (origin: ${window.location.origin})`);
    console.log(`[PWA-TRACE-03] Service Worker supported: ${swSupported}`);

    if (!swSupported) {
      console.warn("[PWA-TRACE-04] Registration result: skipped (Service Worker API not supported by browser)");
      return;
    }

    if (!isSecureContext) {
      console.warn(
        `[PWA-TRACE-04] Registration result: skipped (HTTP LAN origin "${window.location.origin}" is not a secure context. HTTPS or localhost required by W3C PWA standard)`
      );
      return;
    }

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[PWA-TRACE-04] Registration result: success");
          console.log("[PWA-TRACE-05] Service Worker ready:", registration.scope);
        })
        .catch((error) => {
          console.error("[PWA-TRACE-04] Registration result: error", error);
        });
    });
  }, []);

  return null;
}
