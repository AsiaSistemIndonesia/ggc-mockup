"use client";

import { useMemo } from "react";
import {
  Boxes,
  ArrowDownToLine,
  ArrowUpFromLine,
  Gauge,
  Search,
  AlertTriangle,
  Clock3,
} from "lucide-react";
import { PageHeader } from "@/components/ui-custom/PageHeader";
import { MetricCard } from "@/components/ui-custom/MetricCard";
import { Badge } from "@/components/ui-custom/Badge";
import { useAuth } from "@/components/providers/auth-provider";
import Link from "next/link";

const stacks = [
  {
    name: "MAM-01",
    site: "Mamuju, Sulawesi",
    stock: "1,280.4",
    tm: 36.2,
    level: 78,
    state: "Healthy" as const,
  },
  {
    name: "MAM-02",
    site: "Mamuju, Sulawesi",
    stock: "940.8",
    tm: 38.7,
    level: 61,
    state: "Watch" as const,
  },
  {
    name: "MAR-01",
    site: "Marunda, Jakarta",
    stock: "2,104.2",
    tm: 34.9,
    level: 88,
    state: "Healthy" as const,
  },
  {
    name: "TB-03",
    site: "Teluk Bayur, Padang",
    stock: "1,672.0",
    tm: 41.1,
    level: 47,
    state: "Critical" as const,
  },
];

const alerts = [
  {
    title: "TM di atas ambang batas",
    detail: "TB-03 · 41.1% moisture content",
    time: "12 min ago",
    tone: "critical" as const,
  },
  {
    title: "ETA barge berubah",
    detail: "BG-2407 · +5 jam dari jadwal",
    time: "38 min ago",
    tone: "warning" as const,
  },
  {
    title: "DO belum discan",
    detail: "PO-2024-089 · 3 truk menunggu",
    time: "1 hr ago",
    tone: "info" as const,
  },
];

export default function DashboardPage() {
  const { user } = useAuth();

  const site = user?.site || "Mamuju, Sulawesi";
  const filteredStacks = useMemo(
    () =>
      site.startsWith("All") ? stacks : stacks.filter((s) => s.site === site),
    [site],
  );

  return (
    <>
      {/* Mobile PWA Dashboard View */}
      <div className="block lg:hidden space-y-4">
        {/* TOTAL STOK Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
          <div className="text-[10px] font-bold text-[#94A3B8] mb-1 uppercase tracking-wide">
            TOTAL STOK
          </div>
          <div className="text-[26px] font-extrabold text-[#173A5E] flex items-baseline gap-1.5">
            <span>1.465</span>
            <span className="text-[20px] text-[#1B7A3D]">MT</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#27AE60] font-semibold mt-1">
            <span>▲</span>
            <span>+180 MT hari ini</span>
          </div>
        </div>

        {/* 3 Small Metric Cards Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-3">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-1 uppercase">
              TRUK
            </div>
            <div className="text-[22px] font-extrabold text-[#173A5E]">
              6
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-3">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-1 uppercase">
              BARGE
            </div>
            <div className="text-[22px] font-extrabold text-[#173A5E]">
              1
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-3">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-1 uppercase">
              SIAP
            </div>
            <div className="text-[22px] font-extrabold text-[#173A5E]">
              1.230
            </div>
          </div>
        </div>

        {/* TM% Stockpile Section */}
        <div className="space-y-3 pt-1">
          <h2 className="text-[14px] font-bold text-[#173A5E] m-0">
            TM% Stockpile
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center text-[12px] mb-1.5">
                <span className="font-bold text-[#173A5E]">A1 (Aging)</span>
                <span className="text-[#64748B]">340 MT • TM 13,1%</span>
              </div>
              <div className="h-[7px] rounded-full bg-[#E2E8F0] overflow-hidden w-full">
                <div className="h-full bg-[#27AE60] w-[55%] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-[12px] mb-1.5">
                <span className="font-bold text-[#173A5E]">B1 (Aging)</span>
                <span className="text-[#E5386B] font-medium">890 MT • TM 17,8% ⚠</span>
              </div>
              <div className="h-[7px] rounded-full bg-[#E2E8F0] overflow-hidden w-full">
                <div className="h-full bg-[#F59E0B] w-[90%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout Boxes */}
        <div className="space-y-3 pt-2">
          <div className="bg-[#E9F5ED] border border-[#C5E1CE] rounded-[12px] p-3.5 text-[12px] text-[#1B4B2C] leading-snug">
            ⚖ Total 1.465,7 MT basah = <strong className="font-bold text-[#1B4B2C]">1.230,5 MT Berat Kering</strong>
          </div>

          <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[12px] p-3.5 text-[12px] text-[#91712A] flex items-center gap-1.5">
            <span className="text-[#B58A2B]">⚠</span>
            <span className="font-semibold text-[#8C6D27]">Aging B1 TM% 17,8%</span>
          </div>
        </div>
      </div>

      {/* Desktop Dashboard View */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <MetricCard
            label="TOTAL STOK"
            value="1.465"
            unit=" MT"
            trend="+180 MT hari ini"
            icon={Boxes}
            tone="green"
          />
          <MetricCard
            label="TRUK MASUK (HARI INI)"
            value="6"
            unit=""
            trend="112.4 MT net"
            note=""
            icon={ArrowDownToLine}
            tone="blue"
          />
          <MetricCard
            label="BARGE AKTIF"
            value="1"
            unit=""
            trend="MV Sinar — Loading"
            icon={ArrowUpFromLine}
            tone="amber"
          />
          <MetricCard
            label="STOK SIAP MUAT"
            value="1.230"
            unit=" MT"
            trend="A1 + B1 (Ready)"
            icon={Gauge}
            tone="navy"
          />
        </div>

        <div className="mb-4">
          <section className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
            <div className="flex justify-between items-center gap-3">
              <h2 className="text-[#173A5E] text-[16px] font-bold m-0">
                Stok per Stockpile
              </h2>
              <div className="bg-[#EBF3FF] text-[#2C74B3] px-2.5 py-1 rounded-full text-[11px] font-semibold">
                3 site • konsolidasi
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="text-[#E5386B]"><svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 0C2.2 0 0 2.2 0 5C0 8.7 5 12 5 12C5 12 10 8.7 10 5C10 2.2 7.8 0 5 0ZM5 6.8C4.0 6.8 3.2 6.0 3.2 5C3.2 4.0 4.0 3.2 5 3.2C6.0 3.2 6.8 4.0 6.8 5C6.8 6.0 6.0 6.8 5 6.8Z" /></svg></div>
                    <strong className="text-[13px] text-[#173A5E]">Mamuju (Sulawesi)</strong>
                  </div>
                  <span className="text-[12px] text-[#64748B]">1.465 MT</span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden mb-1.5">
                  <div className="h-full bg-[#27AE60] w-[100%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight">primary • 2025 • ekspor via Belang-Belang</p>
              </div>
              
              {/* Item 2 */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="text-[#E5386B]"><svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 0C2.2 0 0 2.2 0 5C0 8.7 5 12 5 12C5 12 10 8.7 10 5C10 2.2 7.8 0 5 0ZM5 6.8C4.0 6.8 3.2 6.0 3.2 5C3.2 4.0 4.0 3.2 5 3.2C6.0 3.2 6.8 4.0 6.8 5C6.8 6.0 6.0 6.8 5 6.8Z" /></svg></div>
                    <strong className="text-[13px] text-[#173A5E]">Marunda (Jakarta)</strong>
                  </div>
                  <span className="text-[12px] text-[#64748B]">820 MT</span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden mb-1.5">
                  <div className="h-full bg-[#27AE60] w-[65%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight">2026 • lokal + ekspor</p>
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="text-[#E5386B]"><svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 0C2.2 0 0 2.2 0 5C0 8.7 5 12 5 12C5 12 10 8.7 10 5C10 2.2 7.8 0 5 0ZM5 6.8C4.0 6.8 3.2 6.0 3.2 5C3.2 4.0 4.0 3.2 5 3.2C6.0 3.2 6.8 4.0 6.8 5C6.8 6.0 6.0 6.8 5 6.8Z" /></svg></div>
                    <strong className="text-[13px] text-[#173A5E]">Teluk Bayur (Padang)</strong>
                  </div>
                  <span className="text-[12px] text-[#64748B]">540 MT</span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden mb-1.5">
                  <div className="h-full bg-[#27AE60] w-[45%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight">2026 • ekspor via Teluk Bayur</p>
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 mb-4">
          <section className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
            <div className="flex justify-between items-center gap-3 mb-6">
              <h2 className="text-[#173A5E] text-[16px] font-bold m-0">
                TM% Stockpile per Stack
              </h2>
              <div className="bg-[#F1F5F9] text-[#64748B] px-2.5 py-1 rounded-full text-[11px] font-semibold">
                3 tahap • live
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-5">
              {/* Item 1 */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#173A5E] text-[13px]">B2</span>
                    <span className="bg-[#EAF2FC] text-[#2872A6] px-2 py-0.5 rounded text-[10px] font-semibold">Loading Bay</span>
                  </div>
                  <span className="text-[#64748B] text-[12px]">55,0 MT • TM 12,5%</span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden w-full max-w-[200px]">
                  <div className="h-full bg-[#27AE60] w-[15%] rounded-full"></div>
                </div>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#173A5E] text-[13px]">A2</span>
                    <span className="bg-[#F1F5F9] text-[#64748B] px-2 py-0.5 rounded text-[10px] font-semibold">Fresh Screening</span>
                  </div>
                  <span className="text-[#64748B] text-[12px]">180,5 MT • TM 14,0%</span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden w-full max-w-[200px]">
                  <div className="h-full bg-[#27AE60] w-[45%] rounded-full"></div>
                </div>
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#173A5E] text-[13px]">A1</span>
                    <span className="bg-[#ECF7ED] text-[#245D36] px-2 py-0.5 rounded text-[10px] font-semibold">Aging Stock</span>
                  </div>
                  <span className="text-[#64748B] text-[12px]">340,2 MT • TM 13,1% <span className="text-[#245D36]">✓</span></span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden w-full max-w-[300px]">
                  <div className="h-full bg-[#27AE60] w-[75%] rounded-full"></div>
                </div>
              </div>

              {/* Item 4 */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#173A5E] text-[13px]">B1</span>
                    <span className="bg-[#ECF7ED] text-[#245D36] px-2 py-0.5 rounded text-[10px] font-semibold">Aging Stock</span>
                  </div>
                  <span className="text-[#64748B] text-[12px]">890,0 MT • TM <span className="text-[#D97706] font-semibold">17,8%</span> <span className="text-[#D97706]">⚠</span></span>
                </div>
                <div className="h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden w-full max-w-[350px]">
                  <div className="h-full bg-[#F59E0B] w-[95%] rounded-full"></div>
                </div>
              </div>
              
              <div className="mt-2 bg-[#E9F5ED] rounded-lg p-3.5 text-[12px] text-[#1B4B2C] leading-relaxed">
                ⚖ <strong className="font-semibold">Total: 1.465,7 MT basah = 1.230,5 MT Berat Kering</strong> (air 235,2 MT / TM rata-rata 16,0%). Berat Kering = basis kekal yang dipakai untuk semua rekonsiliasi & analisa stok.
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-4">
            <section className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
              <div className="flex justify-between items-center gap-3 mb-4">
                <h2 className="text-[#173A5E] text-[16px] font-bold m-0">
                  Alert & Eskalasi
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-md p-3 text-[12px] text-[#91712A] flex items-start gap-2">
                  <span className="text-[#B58A2B] mt-[1px]">⚠</span>
                  <p className="m-0 leading-relaxed">
                    <span className="font-semibold text-[#8C6D27]">Aging Stock B1 TM% 17,8%</span> — mendekati ambang 18%. Prioritaskan barge berikutnya.
                  </p>
                </div>
                
                <div className="bg-[#ECF7ED] border border-[#C5E1CE] rounded-md p-3 text-[12px] text-[#245D36] flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#2C7A44] mt-[6px]"></div>
                  <p className="m-0 leading-relaxed">
                    PO compliance hari ini: 5/6 truk cocok DO.
                  </p>
                </div>

                <div className="bg-[#FDEDEC] border border-[#F5C2C0] rounded-md p-3 text-[12px] text-[#9A2D2A] flex items-start gap-2">
                  <span className="mt-[1px]">🚚</span>
                  <p className="m-0 leading-relaxed">
                    <span className="font-semibold text-[#8C2320]">Truk BM 9012 CD</span> — ETA ~2 jam dari Mill MAS (GPS Cartrack).
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex-1">
              <div className="flex justify-between items-center gap-3 mb-4">
                <h2 className="text-[#173A5E] text-[16px] font-bold m-0">
                  Barge Terjadwal
                </h2>
              </div>

              <div className="mt-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[10px] font-bold text-[#64748B]">
                      <th className="pb-2 font-semibold">BARGE</th>
                      <th className="pb-2 font-semibold">TARGET</th>
                      <th className="pb-2 font-semibold">SUMBER</th>
                      <th className="pb-2 font-semibold text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] text-[#173A5E]">
                    <tr className="border-b border-[#F1F5F9]">
                      <td className="py-3">
                        <span className="block font-semibold">MV</span>
                        <span className="block font-semibold">Sinar</span>
                      </td>
                      <td className="py-3 text-[#64748B]">
                        <span className="block">3.000</span>
                        <span className="block">MT</span>
                      </td>
                      <td className="py-3 text-[#64748B]">A1+B1+B2</td>
                      <td className="py-3 text-right">
                        <span className="inline-block bg-[#EAF2FC] text-[#2872A6] px-2.5 py-1 rounded-full text-[11px] font-bold">Loading</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <span className="block font-semibold">MV</span>
                        <span className="block font-semibold">Harapan</span>
                      </td>
                      <td className="py-3 text-[#64748B]">
                        <span className="block">3.200</span>
                        <span className="block">MT</span>
                      </td>
                      <td className="py-3 text-[#64748B]">Rabu</td>
                      <td className="py-3 text-right">
                        <span className="inline-block bg-[#F1F5F9] text-[#64748B] px-2.5 py-1 rounded-full text-[11px] font-bold">Planned</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
