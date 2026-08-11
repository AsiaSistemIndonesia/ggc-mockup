"use client";

import { ShoppingBag, Store, Ship, ArrowRightLeft, Scale, Lock } from "lucide-react";

export default function OutboundPage() {
  return (
    <>
      {/* Mobile PWA Outbound View */}
      <div className="block lg:hidden space-y-3">
        {/* Top Channel Selector Tabs */}
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-[#1B7A3D] text-white py-2.5 rounded-[12px] text-[13px] font-bold shadow-sm cursor-pointer">
            Lokal
          </button>
          <button className="bg-white border border-[#E2E8F0] text-[#173A5E] py-2.5 rounded-[12px] text-[13px] font-medium hover:bg-gray-50 cursor-pointer">
            Ekspor
          </button>
          <button className="bg-white border border-[#E2E8F0] text-[#173A5E] py-2.5 rounded-[12px] text-[13px] font-medium hover:bg-gray-50 cursor-pointer">
            Transfer
          </button>
        </div>

        {/* SO & Buyer Select Block */}
        <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-bold text-[#173A5E]">
          SO-2026-118 • PT EHN
        </div>

        {/* Baca Timbangan Button */}
        <button className="w-full bg-[#1B7A3D] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#166A34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
          <Scale size={18} />
          <span>Baca Timbangan (Out)</span>
        </button>

        {/* Net & Stack Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Net <span className="font-bold ml-1">16,3</span>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>Stack B1</span>
            <span className="text-[#94A3B8] text-[10px]">▼</span>
          </div>
        </div>

        {/* Saldo After Status */}
        <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B4B2C] font-semibold">
          ✓ B1 setelah: 873,7 MT
        </div>

        {/* PIC Info */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[12px] text-[#173A5E] font-medium flex items-center gap-1.5">
          <Lock size={14} className="text-[#D97706] shrink-0" />
          <span>PIC: <strong className="font-bold">danang (login)</strong> — terverifikasi</span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#1B7A3D] text-white font-bold text-[15px] py-3.5 rounded-[12px] hover:bg-[#166A34] transition-colors cursor-pointer shadow-md">
          Konfirmasi PIN & Submit
        </button>

        {/* Hari Ini List */}
        <div className="pt-2 space-y-2">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0">Hari ini</h2>
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-semibold text-[#173A5E] flex items-center gap-2">
            <Ship size={16} className="text-[#64748B]" />
            <span>BRG-0615-02 • 1.245 MT</span>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-semibold text-[#173A5E] flex items-center gap-2">
            <ArrowRightLeft size={16} className="text-[#64748B]" />
            <span>TRF-01 • → Marunda 200 MT</span>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Channel Selector Header Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border-2 border-[#1B7A3D] rounded-[14px] p-4 cursor-pointer shadow-sm">
            <div className="flex items-center gap-2 text-[#1B7A3D] font-bold text-[14px] mb-1">
              <ShoppingBag size={18} />
              <span>Penjualan Lokal</span>
            </div>
            <p className="text-[10px] text-[#64748B] m-0 leading-tight">
              Ecount Sales Order → weigh-out truk buyer
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 cursor-pointer hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-2 text-[#173A5E] font-bold text-[14px] mb-1">
              <Store size={18} className="text-[#64748B]" />
              <span>Retail / Kasir</span>
            </div>
            <p className="text-[10px] text-[#64748B] m-0 leading-tight">
              Walk-in POS → struk → cash-sale DO (lihat layar Retail)
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 cursor-pointer hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-2 text-[#173A5E] font-bold text-[14px] mb-1">
              <Ship size={18} className="text-[#64748B]" />
              <span>Ekspor (Barge / Vessel)</span>
            </div>
            <p className="text-[10px] text-[#64748B] m-0 leading-tight">
              Manifest → Barge Loader → PEB/NPE
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 cursor-pointer hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-2 text-[#173A5E] font-bold text-[14px] mb-1">
              <ArrowRightLeft size={18} className="text-[#64748B]" />
              <span>Transfer antar-Stockpile</span>
            </div>
            <p className="text-[10px] text-[#64748B] m-0 leading-tight">
              Mamuju → Marunda / Teluk Bayur
            </p>
          </div>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4">
          {/* Left Column: Form Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Penjualan Lokal — Sales Order (Ecount)
              </h2>

              {/* SO & Buyer Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Sales Order No
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>SO-2026-118</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Buyer
                  </label>
                  <input
                    type="text"
                    defaultValue="PT Energi Hijau Nusantara"
                    className="w-full text-[12px] font-medium bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
              </div>

              {/* Komoditas & Qty Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Komoditas
                  </label>
                  <div className="text-[12px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#1B7A3D]">
                    PKS / Cangkang Sawit
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Qty Dipesan
                  </label>
                  <input
                    type="text"
                    defaultValue="120 MT"
                    className="w-full text-[12px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
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
                    <div className="text-[13px] font-bold text-[#173A5E]">25,400</div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-center">
                    <div className="text-[10px] font-bold text-[#64748B] mb-0.5">Tare</div>
                    <div className="text-[13px] font-bold text-[#173A5E]">9,100</div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-center">
                    <div className="text-[10px] font-bold text-[#64748B] mb-0.5">Net</div>
                    <div className="text-[13px] font-extrabold text-[#173A5E]">16,300</div>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-1.5 bg-[#1B7A3D] text-white text-[11px] font-bold py-2 px-4 rounded-[8px] hover:bg-[#166A34] transition-colors cursor-pointer">
                  <Scale size={14} />
                  <span>Baca Timbangan</span>
                </button>
              </div>

              {/* Stack & SJ Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Ambil dari Stack
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>B1 (saldo 890 MT)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Surat Jalan / DO-Out
                  </label>
                  <input
                    type="text"
                    defaultValue="SJ-MMJ-0615-03"
                    className="w-full text-[12px] font-medium bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
              </div>

              {/* PIC Pengeluaran */}
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                  PIC Pengeluaran (login)
                </label>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-[11px] font-medium text-[#173A5E]">
                  <strong className="font-bold text-[#173A5E]">danang • Supervisor</strong> — terverifikasi 15/06 14:22
                </div>
                <p className="text-[9px] text-[#64748B] m-0 mt-1 flex items-center gap-1">
                  <Lock size={10} className="text-[#D97706]" />
                  <span>PIC otomatis dari sesi login; pergerakan tidak dapat disubmit tanpa PIC terautentikasi.</span>
                </p>
              </div>

              {/* Saldo Status Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed mb-4">
                ✓ <strong className="font-bold">Saldo cukup.</strong> Setelah keluar: B1 = 873,7 MT (Berat Kering ~13,4 MT @ TM 17,8%). Queue-Out menyimpan TM% saat keluar + PIC otomatis ke Ledger Stock Card.
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="w-1/3 py-2.5 text-[12px] font-bold text-[#173A5E] bg-[#E2E8F0]/60 hover:bg-[#E2E8F0] rounded-[8px] transition-colors cursor-pointer">
                Draft
              </button>
              <button className="w-2/3 py-2.5 text-[12px] font-bold text-white bg-[#136A35] hover:bg-[#0F552A] rounded-[8px] transition-colors cursor-pointer shadow-sm">
                Konfirmasi PIN & Submit → Queue-Out
              </button>
            </div>
          </div>

          {/* Right Column: Tables & Banners */}
          <div className="flex flex-col gap-4">
            {/* Pengeluaran Hari Ini Table Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Pengeluaran Hari Ini (semua kanal)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">KANAL</th>
                      <th className="pb-2 font-bold">REF</th>
                      <th className="pb-2 font-bold">MT</th>
                      <th className="pb-2 font-bold">TUJUAN</th>
                      <th className="pb-2 font-bold">PIC</th>
                      <th className="pb-2 font-bold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5">
                        <span className="flex items-center gap-1 font-medium text-[#173A5E]">
                          <ShoppingBag size={12} className="text-[#1B7A3D]" /> Lokal
                        </span>
                      </td>
                      <td className="py-2.5">SO-118</td>
                      <td className="py-2.5 font-semibold">16,3</td>
                      <td className="py-2.5">PT EHN</td>
                      <td className="py-2.5">danang</td>
                      <td className="py-2.5">
                        <span className="bg-[#EAF2FC] text-[#2872A6] px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                          Loading
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5">
                        <span className="flex items-center gap-1 font-medium text-[#173A5E]">
                          <ShoppingBag size={12} className="text-[#1B7A3D]" /> Lokal
                        </span>
                      </td>
                      <td className="py-2.5">SO-117</td>
                      <td className="py-2.5 font-semibold">48,0</td>
                      <td className="py-2.5">PT Sawit M.</td>
                      <td className="py-2.5">operator.mmj</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                          Selesai
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5">
                        <span className="flex items-center gap-1 font-medium text-[#173A5E]">
                          <Ship size={12} className="text-[#64748B]" /> Ekspor
                        </span>
                      </td>
                      <td className="py-2.5">BRG-0615-02</td>
                      <td className="py-2.5 font-semibold">1.245</td>
                      <td className="py-2.5">Dumai</td>
                      <td className="py-2.5">danang</td>
                      <td className="py-2.5">
                        <span className="bg-[#EAF2FC] text-[#2872A6] px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                          Sailing
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5">
                        <span className="flex items-center gap-1 font-medium text-[#173A5E]">
                          <ArrowRightLeft size={12} className="text-[#64748B]" /> Transfer
                        </span>
                      </td>
                      <td className="py-2.5">TRF-0615-01</td>
                      <td className="py-2.5 font-semibold">200,0</td>
                      <td className="py-2.5">→ Marunda</td>
                      <td className="py-2.5">frans</td>
                      <td className="py-2.5">
                        <span className="bg-[#FFF0D5] text-[#B47711] px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                          In-transit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Saldo setelah keluar (per stack) Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 space-y-4">
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
                Saldo setelah keluar (per stack)
              </h2>

              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                    <th className="pb-2 font-bold">STACK</th>
                    <th className="pb-2 font-bold">SEBELUM</th>
                    <th className="pb-2 font-bold">KELUAR</th>
                    <th className="pb-2 font-bold">SESUDAH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-2 font-bold text-[#173A5E]">A1</td>
                    <td className="py-2">340,2</td>
                    <td className="py-2 text-[#64748B]">0</td>
                    <td className="py-2 font-medium">340,2</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-[#173A5E]">B1</td>
                    <td className="py-2">890,0</td>
                    <td className="py-2 font-semibold text-[#C0392B]">-16,3</td>
                    <td className="py-2 font-medium">873,7</td>
                  </tr>
                </tbody>
              </table>

              {/* Green Export Target Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed">
                <span className="font-bold">⚖ Hitung mundur target ekspor:</span> untuk kirim <strong className="font-bold">1.000 MT @ TM 15%</strong> (spek buyer) dari stok @ TM 17,8% → muat 1.000 × (100−15)/(100−17,8) = <strong className="font-bold">1.034 MT basah</strong> (Berat Kering 850 MT). Basis kering memastikan tonase & TM tujuan tepat.
              </div>

              {/* Orange PEB Banner */}
              <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
                ⚠ Ekspor: pastikan dokumen PEB/NPE & DHE SDA tercatat untuk rekonsiliasi Bank Indonesia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
