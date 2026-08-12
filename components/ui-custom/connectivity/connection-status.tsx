"use client";

import React from "react";
import { useConnectivity } from "@/components/providers/connectivity-provider";
import { Wifi, WifiOff, AlertTriangle } from "lucide-react";

interface ConnectionStatusProps {
  /** Display variant: "compact" (dot + text), "pill" (rounded badge), or "banner" (full alert box) */
  variant?: "compact" | "pill" | "banner";
  /** Show interactive demo offline toggle button in dev environment */
  showDemoToggle?: boolean;
  className?: string;
}

export function ConnectionStatus({
  variant = "compact",
  showDemoToggle = false,
  className = "",
}: ConnectionStatusProps) {
  const { isOnline, status, demoOffline, toggleDemoOffline } =
    useConnectivity();

  if (status === "checking") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 text-xs text-gray-400 ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></span>
        <span>Connecting...</span>
      </div>
    );
  }

  // Variant: Full Banner (used in Login page or Dashboard notifications)
  if (variant === "banner") {
    if (!isOnline) {
      return (
        <div
          className={`rounded-xl bg-[#FFF6E5] border border-[#FCE3BE] px-4 py-3 text-xs text-[#8A5A1F] flex items-start justify-between gap-2.5 leading-snug ${className}`}
        >
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#8A5A1F] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Mode offline</span>
              <span className="text-[11px] text-[#A27334]">
                Data tersimpan lokal bila sinyal hilang.
              </span>
            </div>
          </div>
          {showDemoToggle && (
            <button
              onClick={toggleDemoOffline}
              type="button"
              className="text-[10px] bg-[#FCE3BE] hover:bg-[#f7d6a5] text-[#744A17] font-bold px-2 py-1 rounded transition-colors cursor-pointer flex-shrink-0"
            >
              {demoOffline ? "Disable Demo" : "Enable Demo"}
            </button>
          )}
        </div>
      );
    }

    return (
      <div
        className={`rounded-xl bg-[#EAF5EF] border border-[#C5E6D3] px-4 py-2.5 text-xs text-[#0B4A2B] flex items-center justify-between gap-2 font-medium ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0B4A2B] flex-shrink-0"></span>
          <span>Online</span>
        </div>
        {showDemoToggle && (
          <button
            onClick={toggleDemoOffline}
            type="button"
            className="text-[10px] bg-[#C5E6D3] hover:bg-[#a8dab8] text-[#0B4A2B] font-bold px-2 py-1 rounded transition-colors cursor-pointer"
          >
            Force Offline
          </button>
        )}
      </div>
    );
  }

  // Variant: Pill (rounded chip)
  if (variant === "pill") {
    return (
      <div className="inline-flex items-center gap-2">
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
            isOnline
              ? "bg-[#EAF5EF] text-[#0B4A2B] border border-[#C5E6D3]"
              : "bg-[#FFF6E5] text-[#8A5A1F] border border-[#FCE3BE]"
          } ${className}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isOnline ? "bg-[#51C878]" : "bg-[#E1A540]"
            }`}
          ></span>
          <span>{isOnline ? "Online" : "Mode offline"}</span>
          {demoOffline && (
            <span className="text-[10px] opacity-75">(Demo)</span>
          )}
        </div>
        {showDemoToggle && (
          <button
            onClick={toggleDemoOffline}
            type="button"
            className="text-[10px] text-gray-500 hover:text-gray-800 underline font-medium cursor-pointer"
            title="Toggle Demo Offline Mode"
          >
            {demoOffline ? "[Reset Online]" : "[Simulate Offline]"}
          </button>
        )}
      </div>
    );
  }

  // Variant: Compact (dot + text)
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="inline-flex items-center gap-1.5 text-xs">
        <span
          className={`w-2 h-2 rounded-full ${
            isOnline ? "bg-[#51C878]" : "bg-[#E1A540]"
          }`}
        ></span>
        <span
          className={
            isOnline
              ? "text-gray-200 lg:text-gray-700 font-medium"
              : "text-amber-300 lg:text-amber-700 font-bold"
          }
        >
          {isOnline ? "Online" : "Mode offline"}
        </span>
        {demoOffline && (
          <span className="text-[10px] text-amber-400 lg:text-amber-600 font-semibold">
            (Demo)
          </span>
        )}
      </div>

      {/* {showDemoToggle && (
        <button
          onClick={toggleDemoOffline}
          type="button"
          className="text-[10px] text-gray-400 hover:text-white lg:hover:text-gray-800 underline cursor-pointer"
        >
          {demoOffline ? "Online" : "Offline Demo"}
        </button>
      )} */}
    </div>
  );
}
