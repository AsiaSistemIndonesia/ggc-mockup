"use client";

import { FileUp, Lock, Scale } from "lucide-react";

export default function RetailPage() {
  return (
    <>
      {/* Mobile PWA Retail View */}
      <div className="block lg:hidden space-y-3">
        {/* Segmented Top Tabs */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-[#1B7A3D] text-white py-2.5 rounded-[12px] text-[13px] font-bold shadow-sm cursor-pointer">
            Walk-in
          </button>
          <button className="bg-white border border-[#E2E8F0] text-[#173A5E] py-2.5 rounded-[12px] text-[13px] font-medium hover:bg-gray-50 cursor-pointer">
            Tertaut SO
          </button>
        </div>

        {/* Price Select Display */}
        <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-bold text-[#173A5E]">
          PKS Retail • Rp 900.000/MT
        </div>

        {/* Baca Timbangan Button */}
        <button className="w-full bg-[#1B7A3D] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#166A34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
          <Scale size={18} />
          <span>Baca Timbangan (Out)</span>
        </button>

        {/* Net & Stack Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Net <span className="font-bold ml-1">3,24</span>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>Stack A1</span>
            <span className="text-[#94A3B8] text-[10px]">▼</span>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-[#1B7A3D] text-white py-2.5 rounded-[12px] text-[13px] font-bold cursor-pointer">
            Tunai
          </button>
          <button className="bg-white border border-[#E2E8F0] text-[#173A5E] py-2.5 rounded-[12px] text-[13px] font-medium hover:bg-gray-50 cursor-pointer">
            QRIS
          </button>
          <button className="bg-white border border-[#E2E8F0] text-[#173A5E] py-2.5 rounded-[12px] text-[13px] font-medium hover:bg-gray-50 cursor-pointer">
            Transfer
          </button>
        </div>

        {/* Total Price Box */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[14px] font-extrabold text-[#173A5E]">
          TOTAL Rp 2.916.000
        </div>

        {/* Kasir Info Lock Box */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[12px] text-[#173A5E] font-medium flex items-center gap-1.5">
          <Lock size={14} className="text-[#D97706] shrink-0" />
          <span>Kasir: <strong className="font-bold">sari (login)</strong> — PIN</span>
        </div>

        {/* Main Action Button */}
        <button className="w-full bg-[#1B7A3D] text-white font-bold text-[15px] py-3.5 rounded-[12px] hover:bg-[#166A34] transition-colors cursor-pointer shadow-md">
          Bayar & Cetak Struk
        </button>

        {/* Hari ini Summary Section */}
        <div className="pt-2 space-y-2">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0">Hari ini</h2>
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-semibold text-[#173A5E]">
            Kas Rp 42,1 jt • 14 transaksi
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* KPI Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              TRANSAKSI HARI INI
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              14
            </div>
            <div className="text-[10px] text-[#64748B]">
              Tunai 9 • QRIS 4 • Transfer 1
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              MT TERJUAL (RETAIL)
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              37,8
            </div>
            <div className="text-[10px] text-[#64748B]">
              Berat Kering 31,1 MT @ TM 17,7%
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              KAS MASUK (RP)
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              42,1 jt
            </div>
            <div className="text-[10px] text-[#1B7A3D] font-medium">
              Harus cocok saat tutup kasir
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              DO CASH-SALE → ECOUNT
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              12 / 14
            </div>
            <div className="text-[10px] text-[#64748B]">2 menunggu batch CSV</div>
          </div>
        </div>

        {/* Main 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4">
          {/* Left Panel: Form */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Transaksi Retail — POS
              </h2>

              {/* Tipe Pembeli */}
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1.5">
                  Tipe Pembeli
                </label>
                <div className="grid grid-cols-2 gap-3 mb-1.5">
                  <button className="bg-[#1B7A3D] text-white text-[11px] font-bold py-2 rounded-[8px] cursor-pointer">
                    Walk-in (Tunai)
                  </button>
                  <button className="bg-white border border-[#E2E8F0] text-[#64748B] text-[11px] font-medium py-2 rounded-[8px] hover:bg-gray-50 cursor-pointer">
                    Tertaut SO / Kontrak
                  </button>
                </div>
                <p className="text-[9px] text-[#64748B] m-0 leading-tight">
                  Walk-in = tanpa SO. Bila pembeli punya SO/kontrak Ecount, pilih kanan untuk menautkan (harga & sisa qty ikut SO).
                </p>
              </div>

              {/* Pembeli & SO Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Pembeli (opsional registrasi)
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>H. Mahmud — CV Berkah Tani</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    SO Tertaut (opsional)
                  </label>
                  <div className="w-full text-[12px] font-bold bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2 text-[#1B7A3D]">
                    — tidak tertaut (walk-in)
                  </div>
                </div>
              </div>

              {/* Price & Stack Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Daftar Harga Retail
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>PKS Retail — Rp 900.000/MT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Ambil dari Stack
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>A1 (saldo 340 MT)</option>
                  </select>
                </div>
              </div>

              {/* Weigh-Out Block */}
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                  Weigh-Out (timbangan keluar)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-2">
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-center">
                    <div className="text-[10px] font-bold text-[#64748B] mb-0.5">Gross</div>
                    <div className="text-[13px] font-bold text-[#173A5E]">6.420</div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-center">
                    <div className="text-[10px] font-bold text-[#64748B] mb-0.5">Tare</div>
                    <div className="text-[13px] font-bold text-[#173A5E]">3.180</div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-center">
                    <div className="text-[10px] font-bold text-[#1B7A3D] mb-0.5">Net 3,24 MT</div>
                    <div className="text-[13px] font-extrabold text-[#173A5E]">—</div>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-1.5 bg-[#1B7A3D] text-white text-[11px] font-bold py-2 px-4 rounded-[8px] hover:bg-[#166A34] transition-colors cursor-pointer">
                  <Scale size={14} />
                  <span>Baca Timbangan</span>
                </button>
              </div>

              {/* Metode Bayar */}
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1.5">
                  Metode Bayar
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="bg-[#1B7A3D] text-white text-[11px] font-bold py-2 rounded-[8px] cursor-pointer">
                    Tunai
                  </button>
                  <button className="bg-white border border-[#E2E8F0] text-[#64748B] text-[11px] font-medium py-2 rounded-[8px] hover:bg-gray-50 cursor-pointer">
                    QRIS
                  </button>
                  <button className="bg-white border border-[#E2E8F0] text-[#64748B] text-[11px] font-medium py-2 rounded-[8px] hover:bg-gray-50 cursor-pointer">
                    Transfer
                  </button>
                </div>
              </div>

              {/* Saldo status banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed mb-4">
                ✓ <strong className="font-bold">Saldo cukup.</strong> A1 setelah keluar = 336,76 MT. Queue-Out simpan TM% + PIC Kasir otomatis ke Ledger Stock Card.
              </div>

              {/* PIC Kasir */}
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                  PIC Kasir (login)
                </label>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-[11px] font-medium text-[#173A5E]">
                  <strong className="font-bold text-[#173A5E]">sari • Kasir/Retail</strong> — terverifikasi 15/06 11:48
                </div>
                <p className="text-[9px] text-[#64748B] m-0 mt-1 flex items-center gap-1">
                  <Lock size={10} className="text-[#D97706]" />
                  <span>PIC otomatis dari sesi login; transaksi tidak dapat disubmit tanpa PIC + konfirmasi PIN.</span>
                </p>
              </div>
            </div>

            {/* Bottom 3 Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="w-[20%] py-2.5 text-[12px] font-bold text-[#173A5E] bg-[#E2E8F0]/60 hover:bg-[#E2E8F0] rounded-[8px] transition-colors cursor-pointer">
                Batal
              </button>
              <button className="w-[25%] py-2.5 text-[12px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white hover:bg-[#F4F9F5] rounded-[8px] transition-colors cursor-pointer">
                Cetak Struk
              </button>
              <button className="w-[55%] py-2.5 text-[12px] font-bold text-white bg-[#136A35] hover:bg-[#0F552A] rounded-[8px] transition-colors cursor-pointer shadow-sm">
                Konfirmasi PIN & Bayar → Queue-Out
              </button>
            </div>
          </div>

          {/* Right Panel: Receipt & Reconciliation */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Struk & Tutup Kasir Harian
              </h2>

              {/* Receipt Component */}
              <div className="border-2 border-dashed border-[#CBD5E1] rounded-[12px] p-4 font-mono text-[11px] text-[#173A5E] mb-5 bg-[#F8FAFC]/50">
                <div className="text-center font-bold text-[12px] mb-3 pb-2 border-b border-dashed border-[#CBD5E1]">
                  GGC STOCKFILE — STRUK RETAIL
                </div>
                <div className="space-y-1 mb-3">
                  <div className="flex justify-between">
                    <span>No</span>
                    <span className="font-bold">RTL-MMJ-0615-014</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tgl</span>
                    <span>15/06/2026 11:48 WITA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pembeli</span>
                    <span className="font-bold">CV Berkah Tani</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Komoditas</span>
                    <span>PKS / Cangkang</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Qty (basah)</span>
                    <span>3,24 MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Harga</span>
                    <span>Rp 900.000/MT</span>
                  </div>
                </div>
                <div className="border-t border-dashed border-[#CBD5E1] pt-2 mb-3 flex justify-between font-extrabold text-[14px] text-[#173A5E]">
                  <span>TOTAL</span>
                  <span>Rp 2.916.000</span>
                </div>
                <div className="space-y-1 mb-3">
                  <div className="flex justify-between">
                    <span>Bayar</span>
                    <span>Tunai</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kasir</span>
                    <span>sari</span>
                  </div>
                </div>
                <div className="text-center text-[9px] text-[#64748B] pt-2 border-t border-dashed border-[#CBD5E1]">
                  QR struk + watermark GGC; salinan PDF ke evidence store.
                </div>
              </div>

              {/* Reconciliation Table */}
              <h3 className="text-[#173A5E] text-[14px] font-bold m-0 mb-3">
                Tutup Kasir (rekonsiliasi)
              </h3>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">METODE</th>
                      <th className="pb-2 font-bold">SISTEM (RP)</th>
                      <th className="pb-2 font-bold">FISIK/HITUNG</th>
                      <th className="pb-2 font-bold text-center">SELISIH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium">Tunai</td>
                      <td className="py-2.5 font-mono">28.450.000</td>
                      <td className="py-2.5 font-mono">28.450.000</td>
                      <td className="py-2.5 text-center">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2 py-0.5 rounded-full inline-block min-w-[20px]">
                          0
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium">QRIS</td>
                      <td className="py-2.5 font-mono">11.200.000</td>
                      <td className="py-2.5 font-mono">11.200.000</td>
                      <td className="py-2.5 text-center">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2 py-0.5 rounded-full inline-block min-w-[20px]">
                          0
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium">Transfer</td>
                      <td className="py-2.5 font-mono">2.450.000</td>
                      <td className="py-2.5 font-mono">2.450.000</td>
                      <td className="py-2.5 text-center">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2 py-0.5 rounded-full inline-block min-w-[20px]">
                          0
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Warning Banner */}
              <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] mb-4 leading-relaxed">
                ⚠ Tutup kasir wajib sebelum logout shift. Selisih ≠ 0 → butuh persetujuan Supervisor + catatan.
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="w-[60%] py-2.5 text-[11px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white hover:bg-[#F4F9F5] rounded-[8px] transition-colors cursor-pointer">
                Export Cash-Sale CSV → Ecount
              </button>
              <button className="w-[40%] py-2.5 text-[12px] font-bold text-white bg-[#136A35] hover:bg-[#0F552A] rounded-[8px] transition-colors cursor-pointer shadow-sm">
                Tutup Kasir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
