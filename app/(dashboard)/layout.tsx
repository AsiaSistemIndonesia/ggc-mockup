"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Activity } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#EEF2F6]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex flex-1 flex-col min-w-0">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:pl-[252px] lg:p-8 pb-20 lg:pb-8 max-w-[1500px] mx-auto w-full">
          {children}
        </main>

        <footer className="hidden lg:flex h-[43px] px-8 items-center justify-between text-[10px] text-[#94A3B8]">
          <span>GGC Stockfile v1.0.0</span>
          <span className="flex items-center gap-1.5 text-[#1B7A3D]">
            <Activity size={13} /> All systems operational
          </span>
        </footer>
      </div>

      <MobileNav onMoreClick={() => setIsSidebarOpen(true)} />
    </div>
  );
}
