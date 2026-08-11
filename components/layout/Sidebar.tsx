"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { X } from "lucide-react";

export function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#173A5E]/40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[252px] flex-col bg-[#11552F] text-white transition-transform duration-200  lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-center px-[22px] pt-[36px] pb-[24px]">
          <strong className="block text-[18px] font-black leading-none tracking-wide text-white">
            GGC STOCKFILE
          </strong>
          <span className="mt-1.5 block text-[12px] tracking-[0.05em] text-[#86BA9C] uppercase font-medium">
            PKS LOGISTICS
          </span>
          <button
            className="absolute top-4 right-4 text-white lg:hidden"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col flex-1 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex min-h-[48px] items-center gap-3 px-6 text-[14px] transition-colors ${
                  isActive
                    ? "bg-[#1B7040] font-medium text-white border-l-4 border-[#86BA9C]"
                    : "text-[#A3C7B3] hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-white" : "text-[#86BA9C]"}
                />
                <span className="flex-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
