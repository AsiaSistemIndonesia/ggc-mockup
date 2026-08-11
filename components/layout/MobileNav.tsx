"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { MoreHorizontal } from "lucide-react";

export function MobileNav({ onMoreClick }: { onMoreClick?: () => void }) {
  const pathname = usePathname();

  const bottomNavItems = [
    {
      label: "Home",
      href: "/dashboard",
      icon: navigation.find((n) => n.label === "Dashboard")?.icon,
    },
    {
      label: "Inbound",
      href: "/inbound",
      icon: navigation.find((n) => n.label === "Inbound")?.icon,
    },
    {
      label: "Stock",
      href: "/stock",
      icon: navigation.find((n) => n.label === "Stock Card")?.icon,
    },
    {
      label: "Outbound",
      href: "/outbound",
      icon: navigation.find((n) => n.label === "Outbound")?.icon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-[61px] items-center justify-around border-t border-[#E2E8F0] bg-white px-1 lg:hidden">
      {bottomNavItems.map((item) => {
        const Icon = item.icon!;
        // We match start of pathname because e.g. /dashboard/something
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 flex-col items-center justify-center gap-1 text-[9px] ${
              isActive ? "text-[#1B7A3D] font-extrabold" : "text-[#94A3B8]"
            }`}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <button
        onClick={onMoreClick}
        className="flex flex-1 flex-col items-center justify-center gap-1 text-[#94A3B8]  hover:text-[#1B7A3D] cursor-pointer"
      >
        <MoreHorizontal size={18} />
        <span className="text-[9px] text-[#94A3B8]">More</span>
      </button>
    </nav>
  );
}
