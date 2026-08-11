"use client";

import { useState } from "react";
import { AlertTriangle, Check } from "lucide-react";

export default function AnalyticsPage() {
  const [tab, setTab] = useState("Trucking");

  return (
    <>
      {/* Mobile PWA Analytics View */}
      <div className="block lg:hidden space-y-3">
        {/* Segmented Top Filter Tabs */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setTab("Trucking")}
            className={`py-2.5 rounded-[12px] text-[13px] font-bold cursor-pointer ${
              tab === "Trucking"
                ? "bg-[#1B7A3D] text-white shadow-sm"
                : "bg-white border border-[#E2E8F0] text-[#173A5E]"
            }`}
          >
            Trucking
          </button>
          <button
            onClick={() => setTab("PKS")}
            className={`py-2.5 rounded-[12px] text-[13px] font-medium cursor-pointer ${
              tab === "PKS"
                ? "bg-[#1B7A3D] text-white shadow-sm"
                : "bg-white border border-[#E2E8F0] text-[#173A5E]"
            }`}
          >
            PKS
          </button>
          <button
            onClick={() => setTab("STF")}
            className={`py-2.5 rounded-[12px] text-[13px] font-medium cursor-pointer ${
              tab === "STF"
                ? "bg-[#1B7A3D] text-white shadow-sm"
                : "bg-white border border-[#E2E8F0] text-[#173A5E]"
            }`}
          >
            STF
          </button>
        </div>

        {/* 2 KPI Cards Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              RIT/HARI
            </div>
            <div className="text-[18px] font-extrabold text-[#173A5E]">18</div>
          </div>
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              ETA ACC
            </div>
            <div className="text-[18px] font-extrabold text-[#1B7A3D]">91%</div>
          </div>
        </div>

        {/* PKS — TM% per tahap Section */}
        <div className="space-y-2 pt-1">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0 mb-3">
            PKS — TM% per tahap
          </h2>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>Loading Bay 18,2%</span>
            <AlertTriangle size={14} className="text-[#C0392B]" />
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Fresh 15,1%
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#1B7A3D] font-semibold flex justify-between items-center">
            <span>Aging 13,4% ✓</span>
          </div>

          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-bold text-[#1B7A3D] text-center">
            Susut timbangan 0,46%
          </div>
        </div>

        {/* STF — dekomposisi susut (BK) Section */}
        <div className="space-y-2 pt-1 pb-4">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0 mb-3">
            STF — dekomposisi susut (BK)
          </h2>

          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B4B2C] font-medium leading-relaxed">
            ✓ Susut 3,80% = air 3,53% + fisik{" "}
            <strong className="font-bold">0,28%</strong>. Hanya 0,28% perlu
            diselidiki.
          </div>

          <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[12px] p-3 text-[12px] text-[#91712A] font-medium flex items-center gap-1.5">
            <span>⚠️ Aging TM% muat 13,6% (&lt;15% ✓)</span>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Filter Bar Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2">
            <button
              onClick={() => setTab("Trucking (Cartrack)")}
              className={`px-4 py-2 rounded-[8px] text-[11px] font-bold transition-colors cursor-pointer ${
                tab.includes("Trucking")
                  ? "bg-[#1B7A3D] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B] hover:bg-gray-50"
              }`}
            >
              Trucking (Cartrack)
            </button>
            <button
              onClick={() => setTab("Performance PKS")}
              className={`px-4 py-2 rounded-[8px] text-[11px] font-bold transition-colors cursor-pointer ${
                tab.includes("PKS")
                  ? "bg-[#1B7A3D] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B] hover:bg-gray-50"
              }`}
            >
              Performance PKS
            </button>
            <button
              onClick={() => setTab("Analisa STF")}
              className={`px-4 py-2 rounded-[8px] text-[11px] font-bold transition-colors cursor-pointer ${
                tab.includes("STF")
                  ? "bg-[#1B7A3D] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B] hover:bg-gray-50"
              }`}
            >
              Analisa STF
            </button>
          </div>

          <div className="text-[11px] bg-white border border-[#E2E8F0] px-3.5 py-1.5 rounded-[8px] text-[#64748B] font-medium">
            Periode: 01–15 Juni 2026 • Mamuju
          </div>
        </div>

        {/* Section 1: Performance Trucking */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
              1. Performance Trucking
            </h2>
            <div className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full">
              sumber: Cartrack
            </div>
          </div>

          {/* 4 KPI Cards Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-3 text-center">
              <div className="text-[9px] font-bold text-[#64748B] uppercase mb-1">
                RITASE / HARI
              </div>
              <div className="text-[22px] font-extrabold text-[#173A5E] mb-0.5">
                18
              </div>
              <div className="text-[10px] font-bold text-[#1B7A3D]">
                ▲ vs 15 target
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-3 text-center">
              <div className="text-[9px] font-bold text-[#64748B] uppercase mb-1">
                UTILISASI ARMADA
              </div>
              <div className="text-[22px] font-extrabold text-[#173A5E] mb-0.5">
                86%
              </div>
              <div className="text-[10px] text-[#64748B]">12/14 unit</div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-3 text-center">
              <div className="text-[9px] font-bold text-[#64748B] uppercase mb-1">
                IDLING RATA-RATA
              </div>
              <div className="text-[22px] font-extrabold text-[#173A5E] mb-0.5">
                9,4 <span className="text-[12px]">mnt</span>
              </div>
              <div className="text-[10px] font-bold text-[#C0392B]">
                ▲ di atas 8
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-3 text-center">
              <div className="text-[9px] font-bold text-[#64748B] uppercase mb-1">
                AKURASI ETA
              </div>
              <div className="text-[22px] font-extrabold text-[#173A5E] mb-0.5">
                91%
              </div>
              <div className="text-[10px] text-[#64748B]">on-time</div>
            </div>
          </div>

          {/* Trucking Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                  <th className="pb-2 font-bold">UNIT</th>
                  <th className="pb-2 font-bold">RIT</th>
                  <th className="pb-2 font-bold">JARAK (KM)</th>
                  <th className="pb-2 font-bold">IDLING</th>
                  <th className="pb-2 font-bold">DRIVER SCORE</th>
                  <th className="pb-2 font-bold">FUEL (L/100KM)</th>
                  <th className="pb-2 font-bold">ETA ACC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E]">
                    BM 9012 CD
                  </td>
                  <td className="py-2.5">3</td>
                  <td className="py-2.5">142</td>
                  <td className="py-2.5">12 mnt</td>
                  <td className="py-2.5">
                    <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      82
                    </span>
                  </td>
                  <td className="py-2.5">28,4</td>
                  <td className="py-2.5 font-medium">94%</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E]">
                    BM 7781 AB
                  </td>
                  <td className="py-2.5">4</td>
                  <td className="py-2.5">96</td>
                  <td className="py-2.5 text-[#C0392B] font-semibold">
                    22 mnt
                  </td>
                  <td className="py-2.5">
                    <span className="bg-[#FFF0D5] text-[#B47711] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      74
                    </span>
                  </td>
                  <td className="py-2.5">31,0</td>
                  <td className="py-2.5 font-medium">89%</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold text-[#173A5E]">
                    BM 4523 CD
                  </td>
                  <td className="py-2.5">2</td>
                  <td className="py-2.5">88</td>
                  <td className="py-2.5 text-[#C0392B] font-semibold">
                    31 mnt
                  </td>
                  <td className="py-2.5">
                    <span className="bg-[#FFF0D5] text-[#B47711] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      70
                    </span>
                  </td>
                  <td className="py-2.5">33,7 ⚠</td>
                  <td className="py-2.5 font-medium">83%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Warning Banner */}
          <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
            ⚠️ Idling &amp; fuel BM 4523/7781 di atas rata-rata — cek perilaku /
            potensi penyedotan (Alert Center Cartrack).
          </div>
        </div>

        {/* Section 2: Performance PKS & Analisa STF Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card 2: Performance PKS */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
                  2. Performance PKS
                </h2>
                <div className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full">
                  TM% &amp; susut timbangan vs STF
                </div>
              </div>

              {/* TM Progress Bars */}
              <div className="mb-5 space-y-3">
                <h3 className="text-[12px] font-bold text-[#173A5E] m-0">
                  TM% rata-rata per tahap (tren pengeringan)
                </h3>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold mb-1">
                    <span className="text-[#173A5E]">Loading Bay</span>
                    <span className="text-[#C0392B]">18,2%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#E2E8F0] overflow-hidden">
                    <div className="h-full bg-[#C0392B] w-[90%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold mb-1">
                    <span className="text-[#173A5E]">Fresh Screening</span>
                    <span className="text-[#D97706]">15,1%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#E2E8F0] overflow-hidden">
                    <div className="h-full bg-[#D97706] w-[75%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold mb-1">
                    <span className="text-[#173A5E]">Aging Stock</span>
                    <span className="text-[#1B7A3D]">13,4% ✓</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#E2E8F0] overflow-hidden">
                    <div className="h-full bg-[#1B7A3D] w-[60%] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Susut Timbangan Table */}
              <div className="mb-4 space-y-2">
                <h3 className="text-[12px] font-bold text-[#173A5E] m-0">
                  Susut timbangan PKS vs STF
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                        <th className="pb-2 font-bold">KOMPONEN</th>
                        <th className="pb-2 font-bold">TIMBANGAN</th>
                        <th className="pb-2 font-bold">STF</th>
                        <th className="pb-2 font-bold">SUSUT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#EDF1F4]">
                        <td className="py-2 font-medium text-[#173A5E]">
                          Inbound (Σ net)
                        </td>
                        <td className="py-2">2.450,0 MT</td>
                        <td className="py-2">2.438,8 MT</td>
                        <td className="py-2">
                          <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            0,46%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-[#173A5E]">
                          Loading barge
                        </td>
                        <td className="py-2">1.245,0 MT</td>
                        <td className="py-2">1.240,1 MT</td>
                        <td className="py-2">
                          <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            0,39%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed">
              ✓ Susut timbangan &lt;0,5% (toleransi). Penurunan TM%
              Loading→Aging menunjukkan pengeringan alami (mengurangi giveaway).
            </div>
          </div>

          {/* Card 3: Analisa STF (Green Border) */}
          <div className="bg-white border-2 border-[#1B7A3D] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
                  3. Analisa STF
                </h2>
                <div className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-3 py-1 rounded-full">
                  rekonsiliasi Berat Kering - dekomposisi susut
                </div>
              </div>

              {/* Stock Balance Table */}
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">ARUS</th>
                      <th className="pb-2 font-bold">MT BASAH</th>
                      <th className="pb-2 font-bold">CATATAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2 font-medium text-[#173A5E]">
                        Saldo awal periode
                      </td>
                      <td className="py-2 font-medium">1.395,0</td>
                      <td className="py-2 text-[#64748B]">01/06</td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2 font-medium text-[#173A5E]">
                        Inbound (DO diterima)
                      </td>
                      <td className="py-2 font-bold text-[#1B7A3D]">
                        +2.450,0
                      </td>
                      <td className="py-2 text-[#64748B]">112 truk</td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2 font-medium text-[#173A5E]">
                        Outbound (lokal+ekspor+transfer)
                      </td>
                      <td className="py-2 font-bold text-[#C0392B]">
                        -2.380,0
                      </td>
                      <td className="py-2 text-[#64748B]">per kanal</td>
                    </tr>
                    <tr className="font-bold border-t border-[#CBD5E1]">
                      <td className="py-2 text-[#173A5E]">
                        Saldo akhir (sistem)
                      </td>
                      <td className="py-2 text-[#173A5E]">1.465,0</td>
                      <td className="py-2 text-[#173A5E]">
                        1.395+2.450−2.380 ✓
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[10px] text-[#64748B] leading-relaxed mb-4">
                Saldo basah{" "}
                <strong className="font-bold text-[#173A5E]">berimbang</strong>{" "}
                — selisih in-out (70 MT) = pertambahan stok,{" "}
                <strong className="font-bold text-[#173A5E]">
                  bukan susut
                </strong>
                . Susut nyata hanya terlihat di basis{" "}
                <strong className="font-bold text-[#173A5E]">
                  Berat Kering
                </strong>
                .
              </p>

              {/* Dekomposisi Table */}
              <div className="space-y-2 mb-3">
                <h3 className="text-[12px] font-bold text-[#173A5E] m-0">
                  Dekomposisi susut 1 siklus (intake → muat)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                        <th className="pb-2 font-bold"></th>
                        <th className="pb-2 font-bold">BASAH</th>
                        <th className="pb-2 font-bold">TM%</th>
                        <th className="pb-2 font-bold text-[#1B7A3D]">
                          BERAT KERING
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#EDF1F4]">
                        <td className="py-2 font-medium text-[#173A5E]">
                          Masuk (intake)
                        </td>
                        <td className="py-2">1.000,0</td>
                        <td className="py-2">18,0%</td>
                        <td className="py-2">820,0</td>
                      </tr>
                      <tr className="border-b border-[#EDF1F4]">
                        <td className="py-2 font-medium text-[#173A5E]">
                          Keluar (muat)
                        </td>
                        <td className="py-2">962,0</td>
                        <td className="py-2">15,0%</td>
                        <td className="py-2">817,7</td>
                      </tr>
                      <tr className="font-bold border-t border-[#CBD5E1]">
                        <td className="py-2 text-[#C0392B]">Susut</td>
                        <td className="py-2 text-[#C0392B]">38,0 (3,80%)</td>
                        <td className="py-2 text-[#C0392B]">-3,0</td>
                        <td className="py-2 text-[#C0392B]">2,3 (0,28%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Green Losses Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed mb-3">
                ✓ Dari susut berat <strong className="font-bold">3,80%</strong>,{" "}
                <strong className="font-bold">3,53% = air menguap</strong>{" "}
                (terhitung dari turunnya TM 18%→15% — wajar, bahan kering kekal)
                dan hanya{" "}
                <strong className="font-bold text-[#1B7A3D]">
                  0,28% = losses fisik
                </strong>{" "}
                (Berat Kering hilang: ceceran/handling).{" "}
                <strong className="font-bold text-[#1B7A3D]">
                  Hanya 0,28% ini yang perlu diselidiki
                </strong>
                , bukan 3,80%.
              </div>
            </div>

            {/* Orange Warning Banner */}
            <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
              ⚠️ TM% Aging Stock saat muat rata 13,6% (target &lt;15% ✓). Stack
              B1 (TM 17,8%) belum ideal — prioritaskan pengeringan / blending
              sebelum ekspor.
            </div>
          </div>
        </div>

        {/* Section 3: Bottom Full Width Reference Table */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
              Tabel Acuan Penyusutan Berat terhadap TM
            </h2>
            <div className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full">
              Penyusutan% = (TM₁−TM₂) / (100−TM₂) × 100
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-[11px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                  <th className="pb-2 font-bold text-left">
                    TM AWAL ↓ \ TM AKHIR →
                  </th>
                  <th className="pb-2 font-bold">20%</th>
                  <th className="pb-2 font-bold">15%</th>
                  <th className="pb-2 font-bold">12%</th>
                  <th className="pb-2 font-bold">10%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E] text-left">
                    30%
                  </td>
                  <td className="py-2.5">12,50%</td>
                  <td className="py-2.5">17,65%</td>
                  <td className="py-2.5">20,45%</td>
                  <td className="py-2.5">22,22%</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E] text-left">
                    28%
                  </td>
                  <td className="py-2.5">10,00%</td>
                  <td className="py-2.5">15,29%</td>
                  <td className="py-2.5">18,18%</td>
                  <td className="py-2.5">20,00%</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E] text-left">
                    25%
                  </td>
                  <td className="py-2.5">6,25%</td>
                  <td className="py-2.5">11,76%</td>
                  <td className="py-2.5">14,77%</td>
                  <td className="py-2.5">16,67%</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E] text-left">
                    22%
                  </td>
                  <td className="py-2.5">2,50%</td>
                  <td className="py-2.5">8,24%</td>
                  <td className="py-2.5">11,36%</td>
                  <td className="py-2.5">13,33%</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E] text-left">
                    20%
                  </td>
                  <td className="py-2.5">—</td>
                  <td className="py-2.5">5,88%</td>
                  <td className="py-2.5">9,09%</td>
                  <td className="py-2.5">11,11%</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold text-[#173A5E] text-left">
                    18%
                  </td>
                  <td className="py-2.5">—</td>
                  <td className="py-2.5">3,53%</td>
                  <td className="py-2.5">6,82%</td>
                  <td className="py-2.5">8,89%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
