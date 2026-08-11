import {
  LayoutDashboard,
  Boxes,
  ClipboardCheck,
  ArrowDownToLine,
  ArrowUpFromLine,
  PackageCheck,
  Warehouse,
  Truck,
  ShieldCheck,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    title: "Dashboard Operasional",
  },
  {
    label: "Procurement",
    href: "/procure",
    icon: ClipboardCheck,
    title: "Procurement - PR & PO Tracking (ECount)",
  },
  {
    label: "Inbound",
    href: "/inbound",
    icon: ArrowDownToLine,
    title: "Inbound Truck Receipt",
  },
  {
    label: "Stock Card",
    href: "/stock",
    icon: Boxes,
    title: "Stock Card - Perpetual Inventory",
  },
  {
    label: "Outbound",
    href: "/outbound",
    icon: ArrowUpFromLine,
    title: "Outbound - Pengeluaran Stok (Lokal / Ekspor / Transfer)",
  },
  {
    label: "Retail / Kasir",
    href: "/retail",
    icon: PackageCheck,
    title: "Retail - Pembelian Lokal (POS Kasir)",
  },
  {
    label: "Barge Loader",
    href: "/barge",
    icon: Warehouse,
    title: "Barge Loading & Dead Fright",
  },
  {
    label: "Cartrack / Fleet",
    href: "/cartrack",
    icon: Truck,
    title: "Cartrack - GPS, Telematics & Kamera AI Armada",
  },
  {
    label: "CCTV / Evidence",
    href: "/cctv",
    icon: ShieldCheck,
    title: "CCTV Stockpile - Monitoring & Daily Evidence (M11)",
  },
  {
    label: "Analisa",
    href: "/analisa",
    icon: BarChart3,
    title: "Analisa - Trucking, Performance PKS & STF",
  },
  {
    label: "Laporan",
    href: "/reports",
    icon: FileText,
    title: "Laporan Harian & Mingguan",
  },
  {
    label: "Admin",
    href: "/admin",
    icon: Settings,
    title: "Admin Panel - Users, Alert, Kalibrasi",
  },
];
