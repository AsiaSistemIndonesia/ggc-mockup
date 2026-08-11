"use client";

import { FileUp, Plus, AlertTriangle } from "lucide-react";

export default function BargePage() {
  return (
    <>
      {/* Mobile PWA Barge View */}
      <div className="block lg:hidden space-y-3">
        {/* Header Vessel Info Box */}
        <div className="bg-white border text-primary border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-bold text-[#173A5E]">
          MV Sinar Abadi • FC-2026-018
        </div>

        {/* Manifest Section */}
        <div className="space-y-2">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0">Manifest</h2>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
              A1 → <span className="font-bold">300</span>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
              B1 → <span className="font-bold">890</span>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            B2 → <span className="font-bold">55</span>
          </div>
        </div>

        {/* Total & Dead Freight Box */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 text-center space-y-1">
          <div className="text-[10px] font-bold text-[#64748B] uppercase">
            TOTAL / KAPASITAS
          </div>
          <div className="text-[16px] font-extrabold text-[#173A5E]">
            1.245 / 4.000 MT
          </div>
          <div className="text-[22px] font-extrabold text-[#C0392B]">
            DF 68,9%
          </div>
        </div>

        {/* Dry Matter & TM Summary Box */}
        <div className="bg-white border text-primary border-[#E2E8F0] rounded-[12px] p-3 text-[12px] font-bold text-[#173A5E] text-center">
          BK 1.040,4 MT • TM 16,4% • tiba@15% 1.224 MT
        </div>

        {/* Orange TM Warning Banner */}
        <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[12px] p-3 text-[12px] text-[#91712A] font-medium flex items-center gap-1.5">
          <span>⚠️ TM muatan 16,4% &gt; spek 15% — blending</span>
        </div>

        {/* Red Dead Freight Banner */}
        <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[12px] p-3 text-[12px] text-[#991B1B] font-medium flex items-center gap-1.5">
          <span className="text-[#DC2626]">🔴</span>
          <span>Dead freight &gt;20% — perlu approval</span>
        </div>

        {/* Main Submit Button */}
        <div className="pt-1 pb-4">
          <button className="w-full bg-[#1B7A3D] text-white font-bold text-[15px] py-3.5 rounded-[12px] hover:bg-[#166A34] transition-colors cursor-pointer shadow-md">
            Approve & Submit
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Top 2 Columns Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Detail Barge & Charter */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Detail Barge & Charter
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Nama Barge
                  </label>
                  <input
                    type="text"
                    defaultValue="MV Sinar Abadi"
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Charter Event ID
                  </label>
                  <input
                    type="text"
                    defaultValue="FC-2026-018"
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Tipe Charter
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>FC — Freight Charter</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Discharge Port
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>Dumai</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Kapasitas (MT)
                  </label>
                  <input
                    type="text"
                    defaultValue="4.000"
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Rate (Rp/MT)
                  </label>
                  <input
                    type="text"
                    defaultValue="136.000"
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[#64748B] m-0 leading-relaxed">
              Asumsi kurs USD 1 = Rp 16.000 (placeholder — ganti dengan rate
              charter aktual).
            </p>
          </div>

          {/* Card 2: Manifest Builder */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Manifest Builder
              </h2>

              <div className="overflow-x-auto mb-3">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">STACK</th>
                      <th className="pb-2 font-bold">SALDO</th>
                      <th className="pb-2 font-bold">MUAT (MT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">A1</td>
                      <td className="py-2.5">340,2</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-3 py-1 rounded-full font-bold">
                          300,0
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">B1</td>
                      <td className="py-2.5">890,0</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-3 py-1 rounded-full font-bold">
                          890,0
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#173A5E]">B2</td>
                      <td className="py-2.5">55,0</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-3 py-1 rounded-full font-bold">
                          55,0
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-[11px] mb-3 border-t border-[#E2E8F0] pt-3">
                <span className="text-[#64748B]">
                  Stack terkunci selama sesi ini
                </span>
                <span className="text-[#173A5E] font-bold">
                  Total Manifest: 1.245 / 4.000 MT
                </span>
              </div>

              <button className="flex items-center gap-1.5 text-[11px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white rounded-[8px] px-3.5 py-1.5 hover:bg-[#F4F9F5] transition-colors cursor-pointer">
                <Plus size={14} />
                <span>Tambah Stack</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle 2 Columns Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 3: Dead Freight & Utilisasi */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Dead Freight & Utilisasi
              </h2>

              <div className="mb-4">
                <div className="h-3 rounded-full bg-[#E2E8F0] overflow-hidden mb-4">
                  <div className="h-full bg-[#C0392B] w-[31.1%] rounded-full"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-[36px] font-extrabold text-[#C0392B] leading-none">
                      68,9%
                    </div>
                    <div className="text-[10px] font-bold text-[#64748B] mt-1">
                      Dead Freight
                    </div>
                  </div>

                  <div className="text-[11px] text-[#64748B] leading-relaxed border-l border-[#E2E8F0] pl-4">
                    Muat 1.245 MT dari kapasitas 4.000 MT — utilisasi 31,1%
                    <br />
                    Dead Freight = 2.755 MT × Rp 136.000 ={" "}
                    <strong className="text-[#C0392B] font-bold">
                      Rp 374,68 jt (dibayar GGC)
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[8px] p-3 text-[11px] text-[#991B1B] leading-relaxed">
              <span className="text-[#DC2626]">🔴</span>{" "}
              <strong className="font-bold">
                Dead freight &gt; 20% — eskalasi ke Danang + Randi.
              </strong>{" "}
              Konfirmasi supervisor diperlukan sebelum lanjut.
            </div>
          </div>

          {/* Card 4: Dokumentasi & Finalisasi */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Dokumentasi & Finalisasi
              </h2>

              {/* Tally Sheet */}
              <div className="mb-3">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                  Tally Sheet
                </label>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 flex items-center justify-between text-[11px] font-medium text-[#173A5E]">
                  <div className="flex items-center gap-1.5">
                    <FileUp size={14} className="text-[#64748B]" />
                    <span>tally_0615.pdf</span>
                  </div>
                  <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    uploaded
                  </span>
                </div>
              </div>

              {/* Load Quality & Witness */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Load Quality
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>Passed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Witness
                  </label>
                  <input
                    type="text"
                    defaultValue="Frans (QA)"
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
              </div>

              {/* BoL & ETA Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    BoL Ref
                  </label>
                  <input
                    type="text"
                    defaultValue="BL-DMI-0615"
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Sailing / ETA
                  </label>
                  <input
                    type="text"
                    defaultValue="15/06 18:00 → +3 hari"
                    className="w-full text-[12px] font-medium bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="w-[30%] py-2.5 text-[12px] font-bold text-[#173A5E] bg-[#E2E8F0]/60 hover:bg-[#E2E8F0] rounded-[8px] transition-colors cursor-pointer">
                Draft
              </button>
              <button className="w-[70%] py-2.5 text-[12px] font-bold text-white bg-[#136A35] hover:bg-[#0F552A] rounded-[8px] transition-colors cursor-pointer shadow-sm">
                Approve & Submit → Queue-Out
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Card */}
        <div className="bg-white border-2 border-[#1B7A3D] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
              Berat Kering Manifest & Proyeksi TM Tiba (Dumai)
            </h2>
            <div className="bg-[#EBF7EE] text-[#1B7A3D] px-3 py-1 rounded-full text-[10px] font-bold">
              basis perhitungan muatan
            </div>
          </div>

          {/* Top 3 KPI Sub-Cards */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-4">
              <div className="text-[10px] font-bold text-[#64748B] mb-1 uppercase">
                MANIFEST (BASAH)
              </div>
              <div className="text-[22px] font-extrabold text-[#173A5E] mb-1">
                1.245 MT
              </div>
              <div className="text-[10px] text-[#64748B]">A1+B1+B2</div>
            </div>

            <div className="bg-[#F1F8F4] border border-[#C5E1CE] rounded-[10px] p-4">
              <div className="text-[10px] font-bold text-[#1B7A3D] mb-1 uppercase">
                BERAT KERING (KEKAL)
              </div>
              <div className="text-[22px] font-extrabold text-[#1B7A3D] mb-1">
                1.040,4 MT
              </div>
              <div className="text-[10px] font-semibold text-[#1B7A3D]">
                TM gabungan 16,4%
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-4">
              <div className="text-[10px] font-bold text-[#64748B] mb-1 uppercase">
                PROYEKSI TIBA @ TM 15%
              </div>
              <div className="text-[22px] font-extrabold text-[#173A5E] mb-1">
                1.224,0 MT
              </div>
              <div className="text-[10px] font-medium text-[#C0392B]">
                susut transit 21,0 MT (1,7%)
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                  <th className="pb-2 font-bold">STACK</th>
                  <th className="pb-2 font-bold">MUAT (MT)</th>
                  <th className="pb-2 font-bold">TM%</th>
                  <th className="pb-2 font-bold">BERAT KERING</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E]">A1</td>
                  <td className="py-2.5 font-medium">300,0</td>
                  <td className="py-2.5">13,1%</td>
                  <td className="py-2.5 font-medium">260,7</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E]">B1</td>
                  <td className="py-2.5 font-medium">890,0</td>
                  <td className="py-2.5">17,8%</td>
                  <td className="py-2.5 font-medium">731,6</td>
                </tr>
                <tr className="border-b border-[#EDF1F4]">
                  <td className="py-2.5 font-bold text-[#173A5E]">B2</td>
                  <td className="py-2.5 font-medium">55,0</td>
                  <td className="py-2.5">12,5%</td>
                  <td className="py-2.5 font-medium">48,1</td>
                </tr>
                <tr className="font-bold border-t border-[#CBD5E1]">
                  <td className="py-2.5 text-[#173A5E]">Total</td>
                  <td className="py-2.5 text-[#173A5E]">1.245,0</td>
                  <td className="py-2.5 text-[#173A5E]">16,4%</td>
                  <td className="py-2.5 text-[#1B7A3D]">1.040,4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[10px] text-[#64748B] leading-relaxed mb-4">
            TM gabungan = bobot Berat Kering: (1.245 − 1.040,4) / 1.245 = 16,4%.
            Berat tiba @TM tujuan = Berat Kering / (100 − TM tujuan) × 100.
          </p>

          <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
            ⚠ TM gabungan muatan 16,4% &gt; spek buyer 15% — B1 (TM 17,8%)
            menaikkan rata-rata. Pertimbangkan blending / tambah porsi A1&amp;B2
            kering sebelum muat, atau antisipasi penyusutan &amp; potensi
            penalti TM di discharge.
          </div>
        </div>
      </div>
    </>
  );
}
