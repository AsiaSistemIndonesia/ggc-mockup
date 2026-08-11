"use client";

import { Camera, FileUp, MapPin, Settings, Lock, Scale } from "lucide-react";

export default function InboundPage() {
  return (
    <>
      {/* Mobile PWA Inbound View */}
      <div className="block lg:hidden -m-4 sm:-m-6 bg-white min-h-screen">
        {/* Header Banner */}
        {/* <div className="bg-[#0D472B] text-white p-4">
          <h1 className="text-[18px] font-bold m-0 leading-tight">Inbound Receipt</h1>
          <p className="text-[12px] opacity-80 m-0 mt-0.5 font-normal">Quick entry</p>
        </div> */}

        <div className="p-4 space-y-3">
          {/* DateTime & Truck ID Input */}
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-bold text-[#173A5E] text-center">
            15/06/2026 08:14 • BM 9012 CD
          </div>

          {/* Baca Timbangan Button */}
          <button className="w-full bg-[#1B7A3D] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#166A34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
            <Scale size={18} />
            <span>Baca Timbangan</span>
          </button>

          {/* Gross & Net Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[12px] text-[#64748B] font-medium">
              Gross{" "}
              <span className="text-[#173A5E] font-bold text-[13px] ml-1">
                15,234
              </span>
            </div>
            <div className="bg-[#F1F8F4] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B7A3D] font-bold">
              Net{" "}
              <span className="text-[#1B7A3D] font-extrabold text-[14px] ml-1">
                10,114
              </span>
            </div>
          </div>

          {/* Supplier Select */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>Supplier: PT ASL</span>
            <span className="text-[#94A3B8] text-[10px]">▼</span>
          </div>

          {/* DO Select */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>DO-2026-001 (sisa 214,6)</span>
            <span className="text-[#94A3B8] text-[10px]">▼</span>
          </div>

          {/* SJ / DO-M Info */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[12px] text-[#173A5E] font-medium">
            No. SJ / DO-M: <span className="font-bold">SJ-DO-2026-001</span> •
            Net Asal <span className="font-bold">10,250</span>
          </div>

          {/* Scan Surat Jalan Button */}
          <button className="w-full bg-[#D94343] text-white font-bold text-[13px] py-3 rounded-[12px] hover:bg-[#C0392B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
            <Camera size={16} />
            <span>Scan Surat Jalan PKS (WAJIB)</span>
          </button>

          {/* Scan Success Banner */}
          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B4B2C] font-medium flex items-center gap-1.5">
            <span>✓ Scan DO-M • hash ok • selisih 136 kg</span>
          </div>

          {/* Baca Sensor TM% Button */}
          <button className="w-full bg-white border-2 border-[#1B7A3D] text-[#1B7A3D] font-bold text-[13px] py-2.5 rounded-[12px] hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <Settings size={16} />
            <span>Baca Sensor TM%</span>
          </button>

          {/* TM Alert Banner */}
          <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[12px] p-3 text-[12px] text-[#991B1B] font-medium flex items-center gap-1.5">
            <span className="text-[#DC2626]">🔴</span>
            <span>TM% 17,2% — sample lab wajib</span>
          </div>

          {/* Dry Matter Card */}
          <div className="bg-[#F1F8F4] border border-[#C5E1CE] rounded-[12px] p-3 text-[13px] text-[#1B7A3D] font-bold text-center">
            Berat Kering 8,374 MT{" "}
            <span className="font-normal text-[12px] text-[#2D6A4F]">
              (Net × 82,8%)
            </span>
          </div>

          {/* Stack & Condition Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
              <span>Stack A1</span>
              <span className="text-[#94A3B8] text-[10px]">▼</span>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
              <span>Good</span>
              <span className="text-[#94A3B8] text-[10px]">▼</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 pb-4">
            <button className="w-full bg-[#1B7A3D] text-white font-bold text-[15px] py-3.5 rounded-[12px] hover:bg-[#166A34] transition-colors cursor-pointer shadow-md">
              Submit Receipt
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-[22px] font-bold text-[#173A5E] m-0">
            Inbound Truck Receipt
          </h1>
          <div className="flex items-center gap-3 text-[12px]">
            <div className="bg-[#EAF2FC] text-[#2872A6] px-3 py-1 rounded-full font-semibold flex items-center gap-1 cursor-pointer">
              <MapPin size={13} className="text-[#2872A6]" />
              <span>Mamuju, Sulawesi</span>
              <span className="text-[10px]">▼</span>
            </div>
            <div className="text-[#64748B] font-medium">
              <span className="text-[#173A5E] font-bold">operator.mmj</span> •
              Operator <span className="text-[#CBD5E1]">|</span>
            </div>
            <div className="bg-[#EBF7EE] text-[#1B7A3D] px-2.5 py-0.5 rounded-full font-bold text-[11px] flex items-center gap-1">
              <span className="text-[#1B7A3D]">•</span> Online
            </div>
          </div>
        </div>

        {/* Section 1: Data Truk & Timbangan + Supplier / PO & Mutu */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Data Truk & Timbangan */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[14px] font-bold m-0 mb-4">
                Data Truk & Timbangan
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Tanggal / Jam Tiba
                  </label>
                  <input
                    type="text"
                    defaultValue="15/06/2026 08:14"
                    className="w-full text-[12px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Truck ID
                  </label>
                  <select className="w-full text-[12px] font-bold bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>BM 9012 CD</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                  Berat Bruto (Gross)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    defaultValue="15,234 MT"
                    className="flex-1 text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-[#173A5E] outline-none"
                  />
                  <button className="flex items-center gap-1.5 bg-[#1B7A3D] text-white text-[11px] font-bold px-3.5 py-2 rounded-[8px] hover:bg-[#166A34] transition-colors cursor-pointer shrink-0">
                    <Scale size={14} /> Baca Timbangan
                  </button>
                </div>
                <p className="text-[10px] text-[#64748B] m-0 mt-1">
                  Modbus TCP - sumber:{" "}
                  <span className="font-bold text-[#173A5E]">scale</span>{" "}
                  (otomatis)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Tare
                  </label>
                  <input
                    type="text"
                    defaultValue="5,120 MT"
                    className="w-full text-[12px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Net (auto)
                  </label>
                  <input
                    type="text"
                    defaultValue="10,114 MT"
                    className="w-full text-[12px] font-extrabold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#1B7A3D] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2.5 text-[11px] text-[#1B4B2C] font-semibold flex items-center gap-1.5">
              <span>✓ Net dalam rentang valid (8–25 MT).</span>
            </div>
          </div>

          {/* Card 2: Supplier / PO & Mutu */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[14px] font-bold m-0 mb-4">
                Supplier / PO & Mutu
              </h2>

              <div className="space-y-3 mb-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Supplier / Mill
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>PT Andalan Sukses Lestari (ASL)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Delivery Order (DO)
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>DO-2026-001 — sisa 214,6 MT</option>
                  </select>
                  <p className="text-[10px] text-[#64748B] mt-1 m-0">
                    PO-2026-042 • harga $35,00/MT • jatuh tempo 20/06
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    TM% (Total Moisture)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      defaultValue="17,2 %"
                      className="flex-1 text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-[#173A5E] outline-none"
                    />
                    <button className="flex items-center gap-1.5 bg-[#1B7A3D] text-white text-[11px] font-bold px-3.5 py-2 rounded-[8px] hover:bg-[#166A34] transition-colors cursor-pointer shrink-0">
                      <Settings size={14} /> Baca Sensor TM%
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[8px] p-2.5 text-[11px] text-[#991B1B] font-medium flex items-center gap-1.5 mt-2">
              <span className="text-[#DC2626]">🔴</span>
              <span>
                <strong className="font-bold">
                  TM% &gt; 16% — Sample lab WAJIB.
                </strong>{" "}
                Masukkan Sample Ref#.
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Surat Jalan PKS — Alat Bukti (DO-M) */}
        <div className="bg-white border-2 border-[#FCA5A5] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#173A5E] text-[14px] font-bold m-0">
              Surat Jalan PKS — Alat Bukti (DO-M)
            </h2>
            <div className="bg-[#FEE2E2] text-[#DC2626] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
              <Lock size={12} />
              <span>HR-2 • No Scan = No Receipt</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                No. Surat Jalan / DO-M
              </label>
              <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                <option>SJ-DO-2026-001</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Net Asal (NET ASAL — slip/DO Mill)
              </label>
              <input
                type="text"
                defaultValue="10,250 MT"
                className="w-full text-[12px] font-medium bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Selisih Muat = Net Asal - Net Timbang STF
              </label>
              <input
                type="text"
                defaultValue="+0,136 MT • 1,3%"
                className="w-full text-[12px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#64748B] mb-1">
              Scan Surat Jalan (foto / PDF DO-M) — WAJIB
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-3">
              <div className="flex items-center gap-3 border-2 border-dashed border-[#1B7A3D]/40 bg-[#F4F9F5] rounded-[10px] p-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white border border-[#C5E1CE] rounded-[8px] shrink-0 text-[#1B7A3D]">
                  <FileUp size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-bold text-[#173A5E] truncate">
                    surat_jalan_DO-2026-001.jpg
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    1,2 MB • diunggah 08:19 • operator.mmj
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="flex items-center gap-1.5 text-[10px] font-bold bg-[#1B7A3D] text-white px-3 py-1.5 rounded-[6px] hover:bg-[#166A34] transition-colors cursor-pointer">
                      <Camera size={12} /> Ambil Foto
                    </button>
                    <button className="flex items-center gap-1.5 text-[10px] font-bold border border-[#C5E1CE] text-[#1B7A3D] px-3 py-1.5 rounded-[6px] bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                      <FileUp size={12} /> Pilih File
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-bold text-[#64748B] mb-1">
                  Hash sha256 (anti-tukar / anti-dupe HR-3)
                </label>
                <div className="text-[11px] font-mono text-[#173A5E] bg-[#F1F5F9] border border-[#E2E8F0] p-2.5 rounded-[8px] font-bold text-center">
                  a3f9c1...7b2e
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2.5 text-[11px] text-[#1B4B2C] font-medium leading-normal">
            ✓ Scan DO-M terlampir & hash tersimpan • Selisih 136 kg &lt; 200 kg
            — Submit diizinkan. Bila scan kosong →{" "}
            <span className="text-[#DC2626]">
              🔴 submit DITOLAK (No Scan = No Receipt)
            </span>
            .
          </div>
        </div>

        {/* Section 3: Basis Berat Kering (Dry Matter) */}
        <div className="bg-white border-2 border-[#1B7A3D] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#173A5E] text-[14px] font-bold m-0">
              Basis Berat Kering (Dry Matter)
            </h2>
            <div className="bg-[#EBF7EE] text-[#1B7A3D] px-3 py-1 rounded-full text-[10px] font-bold">
              inti perhitungan semua stok
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Net (basah)
              </label>
              <input
                type="text"
                defaultValue="10,114 MT"
                className="w-full text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                TM% (Total Moisture)
              </label>
              <input
                type="text"
                defaultValue="17,2 %"
                className="w-full text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Berat Kering = Net × (100–TM)/100
              </label>
              <input
                type="text"
                defaultValue="8,374 MT"
                className="w-full text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#1B7A3D] outline-none"
              />
            </div>
          </div>

          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2.5 text-[11px] text-[#1B4B2C] font-medium leading-relaxed">
            ✓ <strong className="font-bold">Berat Kering 8,374 MT</strong>{" "}
            disimpan sebagai basis kekal stok; air{" "}
            <strong className="font-bold">1,740 MT</strong> (17,2%) akan
            menyusut alami saat aging — bukan kehilangan. Setiap pergerakan stok
            mencatat TM% saat kejadian sehingga Berat Kering selalu dapat
            dihitung & direkonsiliasi.
          </div>
        </div>

        {/* Section 4: Unloading & Tujuan */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
          <h2 className="text-[#173A5E] text-[14px] font-bold m-0 mb-4">
            Unloading & Tujuan
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Sample Ref#
              </label>
              <input
                type="text"
                defaultValue="LAB-2026-0615-03"
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Destination Stack
              </label>
              <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                <option>A1</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Kondisi Visual
              </label>
              <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                <option>Good</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Unload Start
              </label>
              <input
                type="text"
                defaultValue="08:25"
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Unload End
              </label>
              <input
                type="text"
                defaultValue="08:52"
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                PIC Penerima (login)
              </label>
              <div className="w-full text-[11px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] flex items-center gap-1.5">
                <Lock size={12} className="text-[#D97706]" />
                <span>
                  <strong className="text-[#173A5E]">operator.mmj</strong>{" "}
                  (auto, terverifikasi)
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[10px] font-bold text-[#64748B] mb-1">
              Catatan
            </label>
            <input
              type="text"
              defaultValue="—"
              className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button className="px-5 py-2.5 text-[12px] font-bold text-[#173A5E] bg-[#E2E8F0]/60 hover:bg-[#E2E8F0] rounded-[8px] transition-colors cursor-pointer">
              Simpan Draft
            </button>
            <button className="px-5 py-2.5 text-[12px] font-bold text-white bg-[#136A35] hover:bg-[#0F552A] rounded-[8px] transition-colors cursor-pointer shadow-sm">
              Submit Receipt → Queue-In A1
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
