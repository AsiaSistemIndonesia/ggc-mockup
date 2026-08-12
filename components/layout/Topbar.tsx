"use client";

import { Bell, ChevronDown, Menu, Warehouse, LogOut } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { useState, useRef, useEffect } from "react";
import { logout } from "@/lib/auth";
import { ConnectionStatus } from "@/components/ui-custom/connectivity/connection-status";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const currentNav = navigation.find((n) => n.href === pathname);
  const [site, setSite] = useState(user?.siteId || "MAMUJU");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex lg:pl-[270px] min-h-[60px] lg:h-[76px] items-center justify-between border-b border-[#0B421E] lg:border-[#E2E8F0] bg-[#0B421E] lg:bg-white px-4 lg:px-8 z-30 relative text-white lg:text-[#173A5E] py-2.5 lg:py-0">
      <div className="flex items-center gap-3 lg:gap-4">
        <button
          className="hidden text-white hover:opacity-80"
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </button>
        <div className="flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-3">
          <h1 className="text-[17px] lg:text-xl text-white lg:text-black font-bold m-0 leading-tight">
            {currentNav?.title || "Dashboard"}
          </h1>
          <span className="lg:hidden text-[11px] text-[#A3D8B0] font-medium leading-tight mt-0.5">
            {site} • {user?.role || "GGC"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-[18px]">
        {/* Connection status indicator */}
        <div className="hidden lg:flex items-center pr-3 lg:pr-[18px]">
          <ConnectionStatus variant="pill" showDemoToggle={false} />
        </div>
        <div className="lg:hidden flex items-center pr-3 lg:pr-[18px]">
          <ConnectionStatus variant="compact" showDemoToggle={false} />
        </div>

        <div className="hidden lg:flex items-center gap-[7px] border-none lg:border-r lg:border-[#E2E8F0] lg:pr-[18px] text-[12px] text-white lg:text-[#64748B]">
          <Warehouse size={16} className="hidden lg:block" />
          <select
            value={site}
            onChange={(e) => setSite(e.target.value)}
            className="appearance-none bg-transparent text-white lg:text-[#173A5E] font-bold outline-none cursor-pointer text-xs"
          >
            <option value="MAMUJU" className="text-black">
              Mamuju (Sulawesi)
            </option>
            <option value="MARUNDA" className="text-black">
              Marunda (Jakarta)
            </option>
            <option value="TELUK_BAYUR" className="text-black">
              Teluk Bayur (Padang)
            </option>
          </select>
          <ChevronDown size={14} className="text-white lg:text-[#64748B]" />
        </div>

        <div className="relative hidden lg:block" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-[12px] font-bold hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer"
          >
            <span className="text-[12px] text-[#173A5E]">
              {user?.name || "User"}
            </span>
            <span className="px-1.5 py-0.5 bg-[#EAF5EF] text-[#1B7A3D] rounded text-[10px] font-extrabold uppercase">
              {user?.role || "GGC"}
            </span>
            <ChevronDown
              size={14}
              className={`transition-transform text-[#64748B] ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-48 rounded-xl border border-[#E2E8F0] bg-white py-1 shadow-lg shadow-black/5 z-50">
              <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-500">
                <span className="font-semibold block text-gray-800">
                  {user?.name}
                </span>
                <span className="text-[10px] text-gray-400">{user?.email}</span>
              </div>
              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                  logout();
                }}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#C0392B] hover:bg-red-50 font-medium transition-colors cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
