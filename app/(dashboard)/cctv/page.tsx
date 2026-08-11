"use client";

import { Camera, RadioTower, Download, Tv, MapPin } from "lucide-react";

export default function CCTVPage() {
  return (
    <>
      {/* Mobile PWA CCTV View */}
      <div className="block lg:hidden space-y-3">
        {/* Header Status Banner */}
        <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[13px] font-semibold text-[#1B4B2C] flex items-center gap-2">
          <Camera size={16} className="text-[#1B7A3D]" />
          <span>NVR 6/6 online • pull 16:55</span>
        </div>

        {/* 2 KPI Cards Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              SNAPSHOT
            </div>
            <div className="text-[18px] font-extrabold text-[#1B7A3D]">4/5</div>
          </div>
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              NEXT
            </div>
            <div className="text-[18px] font-extrabold text-[#173A5E]">
              18:00
            </div>
          </div>
        </div>

        {/* 2 Camera Select Cards Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#111827] rounded-[12px] p-3 text-center text-white text-[13px] font-bold">
            CAM-02
          </div>
          <div className="bg-[#111827] rounded-[12px] p-3 text-center text-white text-[13px] font-bold">
            CAM-01
          </div>
        </div>

        {/* Evidence Terbaru Section */}
        <div className="space-y-2 pt-1">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0">
            Evidence terbaru
          </h2>

          {/* Large Stamped Evidence Card */}
          <div className="bg-[#1C2C24] border border-[#2D4538] rounded-[14px] p-4 text-white relative shadow-md overflow-hidden">
            <div className="flex justify-between items-start mb-3">
              {/* Map Inset */}
              <div className="bg-[#64748B]/60 border border-[#94A3B8] rounded-[6px] px-2 py-1 text-[9px] font-bold flex items-center gap-1">
                <MapPin size={10} className="text-[#F43F5E]" />
                <span>map</span>
              </div>
              <span className="text-[#F59E0B] font-bold text-[11px]">
                CAM-02
              </span>
            </div>

            {/* Logo */}
            <div className="text-[13px] font-extrabold text-white flex items-center gap-1.5 mb-6">
              <span>🌿</span>
              <span>GGC</span>
            </div>

            {/* Time */}
            <div className="text-[26px] font-extrabold text-white leading-none mb-2">
              16:55 <span className="text-[12px] font-bold">WITA</span>
            </div>

            {/* Timestamp & Location Subtext */}
            <p className="text-[10px] text-[#A7F3D0] m-0 leading-tight">
              14/06/2026 Minggu • Belang-Belang, Mamuju, SulBar • auto-pull
            </p>
          </div>
        </div>

        {/* Pull Snapshot Button */}
        <div className="pt-1 pb-4">
          <button className="w-full bg-[#1B7A3D] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#166A34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md">
            <Download size={16} />
            <span>Tarik Snapshot Sekarang</span>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Top Sync Banner */}
        <div className="flex items-center justify-between bg-[#EBF7EE] border border-[#C5E1CE] rounded-[10px] p-3 text-[#1B4B2C] text-[11px] font-semibold">
          <div className="flex items-center gap-2">
            <RadioTower size={14} className="text-[#1B7A3D]" />
            <span>
              Terhubung{" "}
              <strong className="font-bold">
                CCTV / NVR Stockpile Belang-Belang
              </strong>{" "}
              — pull terakhir 16:55 WITA • 6/6 kamera online.
            </span>
            <span className="text-[#64748B] font-normal">
              Snapshot terjadwal 3–6×/hari → di-push ke storage evidence
              terpisah (S3 evidence/), retensi 7 thn.
            </span>
          </div>
          <button className="bg-white border border-[#1B7A3D] text-[#1B7A3D] rounded-[8px] px-3.5 py-1 text-[11px] font-bold hover:bg-[#F4F9F5] transition-colors cursor-pointer shrink-0">
            Pull Manual
          </button>
        </div>

        {/* Top 4 KPI Cards Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              KAMERA AKTIF
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              6 / 6
            </div>
            <div className="text-[10px] text-[#64748B]">semua online</div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              SNAPSHOT HARI INI
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              4 / 5
            </div>
            <div className="text-[10px] text-[#64748B]">jadwal terpenuhi</div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              EVIDENCE TERSIMPAN
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              1.284
            </div>
            <div className="text-[10px] text-[#64748B]">file • 92 hari</div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              PULL BERIKUTNYA
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              18:00
            </div>
            <div className="text-[10px] text-[#64748B]">WITA • otomatis</div>
          </div>
        </div>

        {/* Middle 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column: Kamera Stockpile */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Kamera Stockpile (live / snapshot)
              </h2>

              {/* 6 Camera Cards Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CAM-01 Dermaga
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CAM-02 Stockpile A
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CAM-03 Stockpile B
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CAM-04 Jbt Timbang
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CAM-05 Gate
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CAM-06 Conveyor
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-1.5 bg-[#1B7A3D] text-white text-[11px] font-bold py-2.5 px-4 rounded-[8px] hover:bg-[#166A34] transition-colors cursor-pointer">
                <Tv size={14} /> Live View
              </button>
              <button className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white rounded-[8px] py-2.5 px-4 hover:bg-[#F4F9F5] transition-colors cursor-pointer">
                <Download size={14} /> Tarik Snapshot Sekarang
              </button>
            </div>
          </div>

          {/* Right Column: Jadwal Pull & Push */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Jadwal Pull &amp; Push Evidence
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">JAM (WITA)</th>
                      <th className="pb-2 font-bold">KAMERA</th>
                      <th className="pb-2 font-bold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        07:00
                      </td>
                      <td className="py-2.5">6 kamera</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ✓ pushed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        10:00
                      </td>
                      <td className="py-2.5">6 kamera</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ✓ pushed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        13:00
                      </td>
                      <td className="py-2.5">6 kamera</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ✓ pushed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        16:00
                      </td>
                      <td className="py-2.5">6 kamera</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ✓ pushed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        18:00
                      </td>
                      <td className="py-2.5">6 kamera</td>
                      <td className="py-2.5">
                        <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          terjadwal
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Green Storage Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed mb-3">
                Sumber: NVR (RTSP/ONVIF) → stamp overlay (waktu WITA + GPS +
                watermark GGC) → push S3 evidence/2026/06/14/site-MMJ/.
              </div>
            </div>

            {/* Warning Banner */}
            <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
              ⚠️ Pull 13:00 retry 1 × (NVR timeout) — berhasil; pull gagal →
              alert IT (F13).
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Section: Galeri Evidence Harian */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
              Galeri Evidence Harian (auto)
            </h2>
            <div className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full">
              format ter-stamp — 14/06/2026
            </div>
          </div>

          {/* 3 Evidence Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-[#1C2C24] border border-[#2D4538] rounded-[12px] p-4 text-white relative shadow-sm overflow-hidden min-h-[140px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-[#64748B]/60 border border-[#94A3B8] rounded-[6px] px-2 py-0.5 text-[9px] font-bold flex items-center gap-1">
                  <MapPin size={10} className="text-[#F43F5E]" />
                  <span>map</span>
                </div>
                <span className="text-[#F59E0B] font-bold text-[10px]">
                  CAM-02 • Stockpile A
                </span>
              </div>
              <div className="my-2">
                <div className="text-[11px] font-extrabold text-white flex items-center gap-1 mb-1">
                  <span>🌿</span> <span>GGC</span>
                </div>
                <div className="text-[20px] font-extrabold text-white leading-none">
                  16:55 <span className="text-[10px] font-bold">WITA</span>
                </div>
              </div>
              <p className="text-[9px] text-[#A7F3D0] m-0 leading-tight truncate">
                14/06/2026 Minggu • Pelabuhan, Jl. Belang Belang, Kalukku,
                Mamuju... • auto-pull
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1C2C24] border border-[#2D4538] rounded-[12px] p-4 text-white relative shadow-sm overflow-hidden min-h-[140px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-[#64748B]/60 border border-[#94A3B8] rounded-[6px] px-2 py-0.5 text-[9px] font-bold flex items-center gap-1">
                  <MapPin size={10} className="text-[#F43F5E]" />
                  <span>map</span>
                </div>
                <span className="text-[#F59E0B] font-bold text-[10px]">
                  CAM-01 • Dermaga
                </span>
              </div>
              <div className="my-2">
                <div className="text-[11px] font-extrabold text-white flex items-center gap-1 mb-1">
                  <span>🌿</span> <span>GGC</span>
                </div>
                <div className="text-[20px] font-extrabold text-white leading-none">
                  13:00 <span className="text-[10px] font-bold">WITA</span>
                </div>
              </div>
              <p className="text-[9px] text-[#A7F3D0] m-0 leading-tight truncate">
                14/06/2026 Minggu • Pelabuhan, Jl. Belang Belang, Kalukku,
                Mamuju... • auto-pull
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1C2C24] border border-[#2D4538] rounded-[12px] p-4 text-white relative shadow-sm overflow-hidden min-h-[140px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-[#64748B]/60 border border-[#94A3B8] rounded-[6px] px-2 py-0.5 text-[9px] font-bold flex items-center gap-1">
                  <MapPin size={10} className="text-[#F43F5E]" />
                  <span>map</span>
                </div>
                <span className="text-[#F59E0B] font-bold text-[10px]">
                  CAM-03 • Stockpile B
                </span>
              </div>
              <div className="my-2">
                <div className="text-[11px] font-extrabold text-white flex items-center gap-1 mb-1">
                  <span>🌿</span> <span>GGC</span>
                </div>
                <div className="text-[20px] font-extrabold text-white leading-none">
                  10:00 <span className="text-[10px] font-bold">WITA</span>
                </div>
              </div>
              <p className="text-[9px] text-[#A7F3D0] m-0 leading-tight truncate">
                14/06/2026 Minggu • Pelabuhan, Jl. Belang Belang, Kalukku,
                Mamuju... • auto-pull
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[#64748B] leading-relaxed m-0">
            Tiap evidence membawa: kamera, timestamp WITA, koordinat + alamat
            GPS, watermark GGC, inset peta — sesuai format Timemark. Disimpan
            immutable untuk bukti harian &amp; rekonsiliasi stok.
          </p>
        </div>
      </div>
    </>
  );
}
