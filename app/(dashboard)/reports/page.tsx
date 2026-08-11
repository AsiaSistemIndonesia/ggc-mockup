"use client";

import { useState } from "react";
import { FileDown, Check, AlertTriangle, Mail } from "lucide-react";

export default function ReportsPage() {
  const [tab, setTab] = useState("Harian");

  return (
    <>
      {/* Mobile PWA Reports View */}
      <div className="block lg:hidden space-y-3">
        {/* Top 2 Segmented Tabs */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setTab("Harian")}
            className={`py-2.5 rounded-[12px] text-[13px] font-bold cursor-pointer ${
              tab === "Harian"
                ? "bg-[#1B7A3D] text-white shadow-sm"
                : "bg-white border border-[#E2E8F0] text-[#173A5E]"
            }`}
          >
            Harian
          </button>
          <button
            onClick={() => setTab("Mingguan")}
            className={`py-2.5 rounded-[12px] text-[13px] font-medium cursor-pointer ${
              tab === "Mingguan"
                ? "bg-[#1B7A3D] text-white shadow-sm"
                : "bg-white border border-[#E2E8F0] text-[#173A5E]"
            }`}
          >
            Mingguan
          </button>
        </div>

        {/* Date Subtitle */}
        <div className="text-[13px] font-bold text-[#173A5E] px-1">
          15/06/2026
        </div>

        {/* Inbound Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3.5">
          <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">
            INBOUND
          </div>
          <div className="text-[15px] font-extrabold text-[#173A5E]">
            6 truk • 112,4 MT
          </div>
        </div>

        {/* Total Stok Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3.5">
          <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">
            TOTAL STOK
          </div>
          <div className="text-[15px] font-extrabold text-[#173A5E]">
            1.465,7 MT
          </div>
        </div>

        {/* Cost Tracker Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3.5">
          <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">
            COST TRACKER
          </div>
          <div className="text-[14px] font-extrabold text-[#173A5E]">
            Ditangguhkan (HPP)
          </div>
        </div>

        {/* Orange Warning Banner */}
        <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[12px] p-3 text-[12px] text-[#91712A] font-medium flex items-center gap-1.5">
          <span>⚠️ B1 moisture 17,8%</span>
        </div>

        {/* 2 Export Buttons Row */}
        <div className="grid grid-cols-2 gap-2.5 pt-1 pb-4">
          <button className="bg-white border-2 border-[#1B7A3D] text-[#1B7A3D] font-bold text-[13px] py-2.5 rounded-[12px] hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
            <FileDown size={16} />
            <span>Excel</span>
          </button>
          <button className="bg-white border-2 border-[#1B7A3D] text-[#1B7A3D] font-bold text-[13px] py-2.5 rounded-[12px] hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
            <FileDown size={16} />
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Top Bar Filter & Exports */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setTab("Harian")}
              className={`px-4 py-2 rounded-[8px] text-[11px] font-bold transition-colors cursor-pointer ${
                tab === "Harian"
                  ? "bg-[#1B7A3D] text-white shadow-sm"
                  : "bg-[#F1F5F9] text-[#64748B] hover:bg-gray-200"
              }`}
            >
              Harian
            </button>
            <button
              onClick={() => setTab("Mingguan")}
              className={`px-4 py-2 rounded-[8px] text-[11px] font-bold transition-colors cursor-pointer ${
                tab === "Mingguan"
                  ? "bg-[#1B7A3D] text-white shadow-sm"
                  : "bg-[#F1F5F9] text-[#64748B] hover:bg-gray-200"
              }`}
            >
              Mingguan
            </button>
            <button
              onClick={() => setTab("Bulanan")}
              className={`px-4 py-2 rounded-[8px] text-[11px] font-bold transition-colors cursor-pointer ${
                tab === "Bulanan"
                  ? "bg-[#1B7A3D] text-white shadow-sm"
                  : "bg-[#F1F5F9] text-[#64748B] hover:bg-gray-200"
              }`}
            >
              Bulanan
            </button>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border-2 border-[#1B7A3D] text-[#1B7A3D] rounded-[8px] bg-white text-[11px] font-bold hover:bg-[#F4F9F5] transition-colors cursor-pointer">
              <FileDown size={14} /> Export Excel
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 border-2 border-[#1B7A3D] text-[#1B7A3D] rounded-[8px] bg-white text-[11px] font-bold hover:bg-[#F4F9F5] transition-colors cursor-pointer">
              <FileDown size={14} /> Export PDF
            </button>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-6 max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-4">
            <h2 className="text-[#173A5E] text-[16px] font-bold m-0">
              Daily Stockfile Summary — 15/06/2026
            </h2>
            <div className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full">
              Mamuju, Sulawesi
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Sub-Column */}
            <div className="space-y-6">
              {/* Inbound Hari Ini */}
              <div>
                <h3 className="text-[#64748B] text-[10px] font-bold mb-3 uppercase tracking-wider">
                  INBOUND HARI INI
                </h3>
                <div className="space-y-2.5 text-[11px]">
                  <div className="flex justify-between pb-1.5 border-b border-[#EDF1F4]">
                    <span className="text-[#64748B]">Truk</span>
                    <span className="font-bold text-[#173A5E]">6</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-[#EDF1F4]">
                    <span className="text-[#64748B]">Net MT</span>
                    <span className="font-extrabold text-[#173A5E]">
                      112,4 MT
                    </span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-[#EDF1F4]">
                    <span className="text-[#64748B]">Avg net wt</span>
                    <span className="font-semibold text-[#173A5E]">
                      18,7 MT
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-1.5 border-b border-[#EDF1F4]">
                    <span className="text-[#64748B]">High-TM% flag</span>
                    <span className="bg-[#FFF0D5] text-[#B47711] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      1 truk (17,2%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">PO compliance</span>
                    <span className="font-semibold text-[#173A5E]">5 / 6</span>
                  </div>
                </div>
              </div>

              {/* Barge Operations */}
              <div>
                <h3 className="text-[#64748B] text-[10px] font-bold mb-3 uppercase tracking-wider">
                  BARGE OPERATIONS
                </h3>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between pb-1.5 border-b border-[#EDF1F4]">
                    <span className="text-[#64748B]">Barge sailed</span>
                    <span className="font-medium text-[#173A5E]">—</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Next barge</span>
                    <span className="font-semibold text-[#173A5E]">
                      Rabu, 3.000 MT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sub-Column */}
            <div className="space-y-6">
              {/* Saldo Stockpile (18:00) */}
              <div>
                <h3 className="text-[#64748B] text-[10px] font-bold mb-3 uppercase tracking-wider">
                  SALDO STOCKPILE (18:00)
                </h3>
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-1 font-bold">STACK</th>
                      <th className="pb-1 font-bold">MT</th>
                      <th className="pb-1 font-bold">AGE</th>
                      <th className="pb-1 font-bold">TM%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-1.5 font-bold text-[#173A5E]">A1</td>
                      <td className="py-1.5 font-medium">340,2</td>
                      <td className="py-1.5 text-[#64748B]">12d</td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#173A5E]">
                          13,1%{" "}
                          <span className="bg-[#EBF7EE] text-[#1B7A3D] p-0.5 rounded text-[9px] font-bold">
                            ✓
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-1.5 font-bold text-[#173A5E]">A2</td>
                      <td className="py-1.5 font-medium">180,5</td>
                      <td className="py-1.5 text-[#64748B]">8d</td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#173A5E]">
                          14,0%{" "}
                          <span className="bg-[#EBF7EE] text-[#1B7A3D] p-0.5 rounded text-[9px] font-bold">
                            ✓
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-1.5 font-bold text-[#173A5E]">B1</td>
                      <td className="py-1.5 font-medium">890,0</td>
                      <td className="py-1.5 text-[#64748B]">22d</td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#173A5E]">
                          17,8%{" "}
                          <span className="text-[#C0392B] text-[10px]">⚠️</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-1.5 font-bold text-[#173A5E]">B2</td>
                      <td className="py-1.5 font-medium">55,0</td>
                      <td className="py-1.5 text-[#64748B]">4d</td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#173A5E]">
                          12,5%{" "}
                          <span className="bg-[#EBF7EE] text-[#1B7A3D] p-0.5 rounded text-[9px] font-bold">
                            ✓
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr className="font-bold border-t border-[#CBD5E1]">
                      <td className="py-2 text-[#173A5E]">TOTAL</td>
                      <td className="py-2 text-[#173A5E]">1.465,7</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pergerakan Stok Per PIC (Hari Ini) */}
              <div>
                <h3 className="text-[#64748B] text-[10px] font-bold mb-3 uppercase tracking-wider">
                  PERGERAKAN STOK PER PIC (HARI INI)
                </h3>
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-1 font-bold">PIC</th>
                      <th className="pb-1 font-bold">IN</th>
                      <th className="pb-1 font-bold">OUT</th>
                      <th className="pb-1 font-bold">MT NET</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-1.5 font-medium text-[#173A5E]">
                        operator.mmj
                      </td>
                      <td className="py-1.5">5</td>
                      <td className="py-1.5">1</td>
                      <td className="py-1.5 font-semibold text-[#1B7A3D]">
                        +96,1
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-1.5 font-medium text-[#173A5E]">
                        danang
                      </td>
                      <td className="py-1.5">0</td>
                      <td className="py-1.5">2</td>
                      <td className="py-1.5 font-semibold text-[#C0392B]">
                        -64,3
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium text-[#173A5E]">
                        frans
                      </td>
                      <td className="py-1.5">1</td>
                      <td className="py-1.5">1</td>
                      <td className="py-1.5 font-semibold text-[#C0392B]">
                        -183,8
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Cost Tracker (MTD) */}
              <div>
                <h3 className="text-[#64748B] text-[10px] font-bold mb-3 uppercase tracking-wider">
                  COST TRACKER (MTD)
                </h3>
                <div className="flex justify-between items-center text-[11px] bg-[#F8FAFC] border border-[#E2E8F0] p-2.5 rounded-[8px]">
                  <span className="text-[#64748B] font-medium">
                    Landed cost / margin
                  </span>
                  <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    ditangguhkan — menunggu HPP Finance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Orange Alert Banner */}
          <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
            ⚠️ Alert hari ini: Aging Stock B1 TM% 17,8% — monitor; mendekati
            ambang 18%.
          </div>

          {/* Footnote Email Subtext */}
          <div className="text-[10px] text-[#64748B] flex items-center gap-1.5 pt-2 border-t border-[#E2E8F0]">
            <Mail size={12} className="text-[#64748B]" />
            <span>
              Auto-email 18:00 WIB ke:{" "}
              <strong className="font-bold text-[#173A5E]">
                Danang, Ridho, Randi
              </strong>{" "}
              — lampiran Excel data hari ini.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
