"use client";

import { AlertTriangle, Lock, ArrowDown } from "lucide-react";

export default function StockCardPage() {
  return (
    <>
      {/* Mobile PWA Stock View */}
      <div className="block lg:hidden space-y-3">
        {/* Card 1: A1 */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 shadow-[0_2px_5px_rgba(23,58,94,0.035)]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[16px] font-bold text-[#173A5E]">A1</span>
            <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              Aging
            </span>
          </div>
          <div className="text-[22px] font-extrabold text-[#173A5E] mb-1">
            340,2 MT
          </div>
          <div className="text-[11px] text-[#64748B] font-medium mb-3">
            TM 13,1% ✓ • <span className="text-[#1B7A3D] font-bold">BK 295,6 MT</span>
          </div>
          <div className="h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
            <div className="h-full bg-[#1B7A3D] w-[80%] rounded-full"></div>
          </div>
        </div>

        {/* Card 2: A2 */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 shadow-[0_2px_5px_rgba(23,58,94,0.035)]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[16px] font-bold text-[#173A5E]">A2</span>
            <span className="bg-[#F1F5F9] text-[#64748B] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              Fresh Scr.
            </span>
          </div>
          <div className="text-[22px] font-extrabold text-[#173A5E] mb-1">
            180,5 MT
          </div>
          <div className="text-[11px] text-[#64748B] font-medium mb-3">
            TM 14,0% • <span className="text-[#1B7A3D] font-bold">BK 155,2 MT</span>
          </div>
          <div className="h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
            <div className="h-full bg-[#1B7A3D] w-[40%] rounded-full"></div>
          </div>
        </div>

        {/* Card 3: B1 Warning */}
        <div className="bg-white border-2 border-[#FCE8D5] rounded-[14px] p-4 shadow-[0_2px_5px_rgba(23,58,94,0.035)]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[16px] font-bold text-[#173A5E] flex items-center gap-1">
              B1 <AlertTriangle size={14} className="text-[#173A5E]" />
            </span>
            <span className="bg-[#FFF0D5] text-[#B47711] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              Aging 22d
            </span>
          </div>
          <div className="text-[22px] font-extrabold text-[#173A5E] mb-1">
            890,0 MT
          </div>
          <div className="text-[11px] font-medium mb-3">
            <span className="text-[#C0392B]">TM 17,8% ⚠️</span> • <span className="text-[#1B7A3D] font-bold">BK 731,6 MT</span>
          </div>
          <div className="h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
            <div className="h-full bg-[#D97706] w-[90%] rounded-full"></div>
          </div>
        </div>

        {/* Input Section */}
        <div className="pt-2 space-y-2.5">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0">
            Input A1 (tinggi & TM%)
          </h2>

          <div className="grid grid-cols-2 gap-2.5">
            <input
              type="text"
              defaultValue="Pagi 4,2"
              className="w-full bg-white border border-[#E2E8F0] rounded-[10px] p-2.5 text-[12px] text-[#173A5E] font-medium outline-none"
            />
            <input
              type="text"
              defaultValue="TM 13,1"
              className="w-full bg-white border border-[#E2E8F0] rounded-[10px] p-2.5 text-[12px] text-[#173A5E] font-medium outline-none"
            />
          </div>

          <button className="w-full bg-white border-2 border-[#1B7A3D] text-[#1B7A3D] font-bold text-[13px] py-2.5 rounded-[12px] hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
            <ArrowDown size={14} />
            <span>Push CSV TM%</span>
          </button>

          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[10px] p-2.5 text-[12px] text-[#1B4B2C] font-semibold text-center">
            ~340 MT • var +0,8% ✓
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Card 1: Stack A1 */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 cursor-pointer hover:border-[#1B7A3D] transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#173A5E] text-[16px] font-bold">Stack A1</span>
              <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[11px] font-bold px-3 py-1 rounded-full">
                Aging Stock
              </span>
            </div>
            <div className="text-[26px] font-extrabold text-[#173A5E] mb-1">
              340,2 <span className="text-[14px] font-bold text-[#173A5E]">MT basah</span>
            </div>
            <p className="text-[11px] text-[#64748B] m-0 mb-2">
              Tinggi 4,2 m • 12 hari • <span className="font-semibold">TM 13,1% ✓</span>
            </p>
            <p className="text-[11px] font-bold text-[#1B7A3D] m-0 mb-3">
              Berat Kering 295,6 MT
            </p>
            <div className="h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
              <div className="h-full bg-[#1B7A3D] w-[80%] rounded-full"></div>
            </div>
          </div>

          {/* Card 2: A2 */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#173A5E] text-[16px] font-bold">A2</span>
              <span className="bg-[#F1F5F9] text-[#64748B] text-[11px] font-bold px-3 py-1 rounded-full">
                Fresh Screening
              </span>
            </div>
            <div className="text-[26px] font-extrabold text-[#173A5E] mb-1">
              180,5 <span className="text-[14px] font-bold text-[#173A5E]">MT basah</span>
            </div>
            <p className="text-[11px] text-[#64748B] m-0 mb-2">
              Tinggi 2,6 m • 8 hari • <span className="font-semibold">TM 14,0%</span>
            </p>
            <p className="text-[11px] font-bold text-[#1B7A3D] m-0 mb-3">
              Berat Kering 155,2 MT
            </p>
            <div className="h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
              <div className="h-full bg-[#1B7A3D] w-[40%] rounded-full"></div>
            </div>
          </div>

          {/* Card 3: B1 Warning */}
          <div className="bg-white border-2 border-[#FCE8D5] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#173A5E] text-[16px] font-bold flex items-center gap-1">
                B1 <AlertTriangle size={15} className="text-[#173A5E]" />
              </span>
              <span className="bg-[#FFF0D5] text-[#B47711] text-[11px] font-bold px-3 py-1 rounded-full">
                Aging - 22d
              </span>
            </div>
            <div className="text-[26px] font-extrabold text-[#173A5E] mb-1">
              890,0 <span className="text-[14px] font-bold text-[#173A5E]">MT basah</span>
            </div>
            <p className="text-[11px] text-[#64748B] m-0 mb-2">
              Tinggi 6,1 m • <span className="text-[#C0392B] font-bold">TM 17,8% ⚠️</span>
            </p>
            <p className="text-[11px] font-bold text-[#1B7A3D] m-0 mb-3">
              Berat Kering 731,6 MT
            </p>
            <div className="h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
              <div className="h-full bg-[#D97706] w-[90%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Center explanation text */}
        <p className="text-[11px] text-[#64748B] leading-relaxed my-2">
          3 standar tumpukan: <strong className="font-bold text-[#173A5E]">Loading Bay</strong> (truk masuk) → <strong className="font-bold text-[#173A5E]">Fresh Screening</strong> → <strong className="font-bold text-[#173A5E]">Aging Stock</strong> (siap muat). Setiap stack disimpan dalam <strong className="font-bold text-[#173A5E]">MT basah + TM%</strong>; <strong className="font-bold text-[#173A5E]">Berat Kering</strong> (bahan kering kekal) dihitung otomatis — basis rekonsiliasi semua stok.
        </p>

        {/* Bottom 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4">
          {/* Left Column: Form & Calculations */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#173A5E] text-[15px] font-bold">Stack A1</span>
                <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Aging Stock
                </span>
                <span className="text-[#173A5E] text-[14px] font-bold">— Tinggi & TM% berkala</span>
              </div>

              {/* Form Inputs Grid */}
              <div className="space-y-3 mb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                      Tinggi Pagi (m)
                    </label>
                    <input
                      type="text"
                      defaultValue="4,2"
                      className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                      Tinggi Sore (m)
                    </label>
                    <input
                      type="text"
                      defaultValue="4,1"
                      className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                      TM% (reading berkala)
                    </label>
                    <input
                      type="text"
                      defaultValue="13,1"
                      className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                      Density
                    </label>
                    <div className="w-full text-[12px] font-extrabold bg-[#F1F5F9] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E]">
                      0,85 MT/m³
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                      Sumber TM%
                    </label>
                    <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                      <option>Manual input</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full text-[11px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white rounded-[8px] p-2 hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-1 cursor-pointer">
                      <ArrowDown size={14} />
                      <span>Push / Import CSV TM%</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimation Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] mb-3 leading-relaxed">
                Est. Stok = 4,2 × 20 × 9,5 × 0,85 = <strong className="font-bold">678,3 m³ → ~340 MT</strong>. Variance vs saldo: <strong className="font-bold">+0,8% ✓</strong>
              </div>

              {/* Calculation Explanation Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] mb-3 leading-relaxed">
                Berat Kering (kekal) = 340,2 × (100–13,1)/100 = <strong className="font-bold">295,6 MT</strong>. Bila aging menurunkan TM% 13,1% → 12,0%: berat basah → <strong className="font-bold">335,9 MT</strong> (susut 4,3 MT = air menguap; <strong className="font-bold">bahan kering tetap 295,6 MT</strong>, bukan kehilangan).
              </div>

              {/* Subtext info */}
              <p className="text-[10px] text-[#64748B] leading-relaxed mb-4">
                TM% dikontrol operator berkala (mis. 3×/hari) — input manual atau push CSV dari alat ukur ke STF. Tiap reading menyimpan TM% → Berat Kering selalu terhitung. Riwayat TM% per tumpukan tersimpan untuk tren & analisa.
              </p>
            </div>

            {/* Simpan Button */}
            <div>
              <button className="w-full bg-[#136A35] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#0F552A] transition-colors cursor-pointer shadow-sm">
                Simpan Tinggi & TM%
              </button>
            </div>
          </div>

          {/* Right Column: Ledger Pergerakan Stok */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
                  Ledger Pergerakan Stok (A1)
                </h2>
                <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full">
                  PIC ter-login
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">WAKTU</th>
                      <th className="pb-2 font-bold">TIPE</th>
                      <th className="pb-2 font-bold">REF</th>
                      <th className="pb-2 font-bold">MT</th>
                      <th className="pb-2 font-bold">PIC (LOGIN)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-3">08:52</td>
                      <td className="py-3">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-2.5 py-1 rounded-full font-bold">
                          Queue-In
                        </span>
                      </td>
                      <td className="py-3">RCV-0615-06</td>
                      <td className="py-3 font-semibold">+10,1</td>
                      <td className="py-3">operator.mmj</td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-3">07:40</td>
                      <td className="py-3">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-2.5 py-1 rounded-full font-bold">
                          Queue-In
                        </span>
                      </td>
                      <td className="py-3">RCV-0615-04</td>
                      <td className="py-3 font-semibold">+18,7</td>
                      <td className="py-3">operator.mmj</td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-3">14/06</td>
                      <td className="py-3">
                        <span className="bg-[#FDE8E8] text-[#C0392B] px-2.5 py-1 rounded-full font-bold">
                          Queue-Out
                        </span>
                      </td>
                      <td className="py-3">BRG-0614-01</td>
                      <td className="py-3 font-semibold text-[#C0392B]">-120,0</td>
                      <td className="py-3">danang</td>
                    </tr>
                    <tr>
                      <td className="py-3">14/06</td>
                      <td className="py-3">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-2.5 py-1 rounded-full font-bold">
                          Queue-In
                        </span>
                      </td>
                      <td className="py-3">RCV-0614-09</td>
                      <td className="py-3 font-semibold">+16,2</td>
                      <td className="py-3">frans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              {/* Green Audit Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] flex gap-2 items-start leading-relaxed">
                <Lock size={14} className="text-[#1B7A3D] shrink-0 mt-0.5" />
                <span>
                  Setiap baris terikat ke PIC terautentikasi + timestamp + device (audit trail). Tidak ada pergerakan anonim.
                </span>
              </div>

              {/* Orange QA Banner */}
              <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] flex gap-2 items-start leading-relaxed">
                <AlertTriangle size={14} className="text-[#B58A2B] shrink-0 mt-0.5" />
                <span>
                  QA inspeksi terakhir 8 hari lalu — jadwalkan walkthrough.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
