"use client";

import { PageHeader } from "@/components/ui-custom/PageHeader";
import { Badge } from "@/components/ui-custom/Badge";
import { FileUp, RefreshCw, Check } from "lucide-react";

export default function ProcurementPage() {
  return (
    <>
      {/* <PageHeader 
        title="Procurement — PR & PO Tracking (Ecount)" 
        description="Sisi pengadaan: sinkronisasi Purchase Requisition / Purchase Order / Delivery Order dari Ecount ERP + umpan balik Goods Receipt." 
      /> */}
      {/* Mobile PWA Procurement View */}
      <div className="block lg:hidden space-y-4">
        {/* Sync Banner */}
        <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B4B2C] flex items-center gap-2 font-medium">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#3B82F6] text-white">
            <RefreshCw size={12} />
          </div>
          <span>Sync Ecount 06:00 — OK</span>
        </div>

        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-3">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-1 uppercase">
              PO AKTIF
            </div>
            <div className="text-[22px] font-extrabold text-[#173A5E]">12</div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-3">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-1 uppercase">
              GR READY
            </div>
            <div className="text-[22px] font-extrabold text-[#1B7A3D]">2</div>
          </div>
        </div>

        {/* PO Terbuka Section */}
        <div className="space-y-2 pt-1">
          <h2 className="text-[14px] font-bold text-[#173A5E] m-0">
            PO Terbuka
          </h2>

          <div className="space-y-2">
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3.5 text-[12px] text-[#173A5E] font-medium">
              PO-042 • ASL • sisa 214,6 MT
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3.5 text-[12px] text-[#173A5E] font-medium flex items-center justify-between">
              <span>
                PO-041 • MAS •{" "}
                <span className="text-[#2872A6] font-semibold">GR Ready</span>
              </span>
            </div>
          </div>
        </div>

        {/* DO Feedback Section */}
        <div className="space-y-2 pt-1">
          <h2 className="text-[14px] font-bold text-[#173A5E] m-0">
            DO Feedback
          </h2>

          <div className="bg-[#EAF2FC] border border-[#D0E2FA] rounded-[12px] p-3.5 text-[12px] text-[#173A5E] font-medium flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span>DO-003 • CSV Ready</span>
            </div>
            <FileUp size={16} className="text-[#2872A6] rotate-180" />
          </div>
        </div>

        {/* Download Button */}
        <div className="pt-2">
          <button className="w-full bg-[#136A35] text-white font-extrabold text-[14px] py-3 rounded-[12px] hover:bg-[#0F552A] transition-colors shadow-sm cursor-pointer">
            Download GR CSV
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        {/* Sync Banner */}
        <div className="flex items-center justify-between bg-[#E1F2E5] border border-[#1B7A3D] rounded-lg p-3 mb-4 text-[#1B7A3D] text-[11px] font-bold">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="text-[#1B7A3D]" />
            <span>
              Sinkronisasi <strong>Ecount ERP</strong> terakhir: 15/06 06:00 WIB
              — 12 PO ter-update, 0 error.
            </span>
            <span className="text-[#64748B] font-normal hidden md:inline">
              Sumber: api.ecount.com (read-only)
            </span>
          </div>
          <button className="bg-white border border-[#1B7A3D] text-[#1B7A3D] rounded-[6px] px-3 py-1.5 hover:bg-gray-50 font-bold">
            Sync Manual
          </button>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-2 uppercase">
              PR PENDING
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              3
            </div>
            <div className="text-[10px] text-[#64748B]">menunggu jadi PO</div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-2 uppercase">
              PO AKTIF
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              12
            </div>
            <div className="text-[10px] text-[#64748B]">open + partial</div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-2 uppercase">
              DO TERBUKA
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              7
            </div>
            <div className="text-[10px] text-[#64748B]">truk berjalan</div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#94A3B8] mb-2 uppercase">
              GR PENDING FEEDBACK
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              2
            </div>
            <div className="text-[10px] text-[#c0392b] font-bold">
              CSV siap ekspor
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          {/* Left Col */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 overflow-x-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#173A5E] text-[14px] font-bold m-0">
                  Purchase Requisition → Purchase Order (dari Ecount)
                </h2>
                <span className="text-[10px] bg-[#F1F5F9] text-[#64748B] px-3 py-1 rounded-full font-bold">
                  PR → PO → DO
                </span>
              </div>

              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                    <th className="pb-2 font-bold">PR NO</th>
                    <th className="pb-2 font-bold">PO NO</th>
                    <th className="pb-2 font-bold">SUPPLIER</th>
                    <th className="pb-2 font-bold">ORDERED</th>
                    <th className="pb-2 font-bold">DITERIMA</th>
                    <th className="pb-2 font-bold">SISA</th>
                    <th className="pb-2 font-bold">JATUH TEMPO</th>
                    <th className="pb-2 font-bold">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-3">PR-2026-051</td>
                    <td className="py-3">PO-2026-042</td>
                    <td className="py-3">PT ASL</td>
                    <td className="py-3">400 MT</td>
                    <td className="py-3">185,4 MT</td>
                    <td className="py-3">214,6 MT</td>
                    <td className="py-3">20/06</td>
                    <td className="py-3">
                      <span className="inline-block bg-[#FFF0D5] text-[#B47711] px-2.5 py-1 rounded-full font-bold">
                        Partial
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-3">PR-2026-050</td>
                    <td className="py-3">PO-2026-041</td>
                    <td className="py-3">PT MAS</td>
                    <td className="py-3">500 MT</td>
                    <td className="py-3">500 MT</td>
                    <td className="py-3">0 MT</td>
                    <td className="py-3">14/06</td>
                    <td className="py-3">
                      <span className="inline-block bg-[#EAF2FC] text-[#2872A6] px-2.5 py-1 rounded-full font-bold">
                        GR Ready
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-3">PR-2026-049</td>
                    <td className="py-3">PO-2026-040</td>
                    <td className="py-3">PT ASL</td>
                    <td className="py-3">300 MT</td>
                    <td className="py-3">300 MT</td>
                    <td className="py-3">0 MT</td>
                    <td className="py-3">10/06</td>
                    <td className="py-3">
                      <span className="inline-block bg-[#EDF7EF] text-[#1B7A3D] px-2.5 py-1 rounded-full font-bold">
                        Closed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">PR-2026-052</td>
                    <td className="py-3 text-[#94A3B8]">-- (belum PO)</td>
                    <td className="py-3">PT TIP</td>
                    <td className="py-3">250 MT</td>
                    <td className="py-3">--</td>
                    <td className="py-3">--</td>
                    <td className="py-3">--</td>
                    <td className="py-3">
                      <span className="inline-block bg-[#F1F5F9] text-[#64748B] px-2.5 py-1 rounded-full font-bold text-center leading-tight">
                        PR
                        <br />
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
              <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 overflow-x-auto flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[#173A5E] text-[14px] font-bold m-0">
                      DO Status & GR Feedback → Ecount
                    </h2>
                    <span className="text-[10px] bg-[#F1F5F8] text-[#64748B] px-3 py-1 rounded-full font-bold">
                      F15
                    </span>
                  </div>

                  <table className="w-full text-left text-[11px] mb-4">
                    <thead>
                      <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                        <th className="pb-2 font-bold">DO NO</th>
                        <th className="pb-2 font-bold">SUPPLIER</th>
                        <th className="pb-2 font-bold">ORDERED</th>
                        <th className="pb-2 font-bold">DITERIMA</th>
                        <th className="pb-2 font-bold text-center">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#EDF1F4]">
                        <td className="py-3 font-bold">DO-2026-001</td>
                        <td className="py-3">PT ASL</td>
                        <td className="py-3">400 MT</td>
                        <td className="py-3">400 MT</td>
                        <td className="py-3 text-center">
                          <span className="inline-flex items-center gap-1 bg-[#EDF7EF] text-[#1B7A3D] px-2.5 py-1 rounded-full font-bold">
                            <Check size={12} /> Closed
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-[#EDF1F4]">
                        <td className="py-3 font-bold">DO-2026-002</td>
                        <td className="py-3">PT TIP</td>
                        <td className="py-3">300 MT</td>
                        <td className="py-3">285 MT</td>
                        <td className="py-3 text-center">
                          <span className="inline-block bg-[#FFF0D5] text-[#B47711] px-2.5 py-1 rounded-full font-bold">
                            Partial
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold">DO-2026-003</td>
                        <td className="py-3">PT MAS</td>
                        <td className="py-3">500 MT</td>
                        <td className="py-3">500 MT</td>
                        <td className="py-3 text-center">
                          <span className="inline-flex flex-col items-center justify-center bg-[#EAF2FC] text-[#2872A6] px-2 py-1 rounded-full font-bold leading-tight min-w-[70px]">
                            <FileUp size={12} className="rotate-180 mb-0.5" />
                            <span>CSV Ready</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 text-[11px] font-bold text-[#1B7A3D] border border-[#1B7A3D] rounded-[12px] bg-white hover:bg-[#F4F8F5]">
                    Export Semua CSV
                  </button>
                  <button className="flex-1 py-2 text-[11px] font-bold text-white bg-[#1B7A3D] rounded-[12px] hover:bg-[#166A34]">
                    Download GR CSV (DO-003)
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
                <h2 className="text-[#173A5E] text-[14px] font-bold m-0 mb-4">
                  Alur Umpan Balik ke Ecount
                </h2>

                <div className="flex flex-col gap-2.5 text-[10px]">
                  <div className="bg-[#EBF7EE] border border-[#C5E1CE] text-[#1B4B2C] p-2.5 rounded text-left">
                    1. DO terpenuhi (qty diterima ≥ dipesan) → status{" "}
                    <strong>CSV Ready</strong>.
                  </div>
                  <div className="bg-[#EBF7EE] border border-[#C5E1CE] text-[#1B4B2C] p-2.5 rounded text-left">
                    2. Randi unduh CSV format Penerimaan Barang (GR) Ecount.
                  </div>
                  <div className="bg-[#EBF7EE] border border-[#C5E1CE] text-[#1B4B2C] p-2.5 rounded text-left">
                    3. Import ke Ecount → AP invoice diproses, PO ditutup.
                  </div>
                  <div className="mt-2 bg-[#FFF8E6] border border-[#FBE5B5] text-[#91712A] p-2.5 rounded flex gap-1.5 items-start text-left">
                    <span className="text-[#B58A2B]">⚠</span>
                    <span>
                      <strong className="font-semibold text-[#8C6D27]">
                        DO-002 over/under-delivery?
                      </strong>{" "}
                      sistem minta konfirmasi supervisor sebelum CSV dibuat.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#1B7A3D] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 overflow-x-auto ring-1 ring-[#1B7A3D] ring-opacity-20">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[#173A5E] text-[14px] font-bold m-0">
                  Basis Berat Kering Pembelian
                </h2>
                <span className="text-[10px] bg-[#EBF7EE] text-[#1B7A3D] px-3 py-1 rounded-full font-bold">
                  harga per bahan kering, bukan air
                </span>
              </div>

              <table className="w-full text-left text-[11px] mb-5">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                    <th className="pb-2 font-bold">PO</th>
                    <th className="pb-2 font-bold">SUPPLIER</th>
                    <th className="pb-2 font-bold text-center">
                      HARGA / MT BASAH
                    </th>
                    <th className="pb-2 font-bold text-center">TM% INTAKE</th>
                    <th className="pb-2 font-bold">BERAT KERING</th>
                    <th className="pb-2 font-bold text-[#1B7A3D]">
                      HARGA EFEKTIF / MT KERING
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-3">PO-2026-042</td>
                    <td className="py-3">PT ASL</td>
                    <td className="py-3 text-center">$35,00</td>
                    <td className="py-3 text-center">17,0%</td>
                    <td className="py-3">332,0 (dari 400)</td>
                    <td className="py-3 font-bold text-[#c0392b]">$42,17</td>
                  </tr>
                  <tr>
                    <td className="py-3">PO-2026-041</td>
                    <td className="py-3">PT MAS</td>
                    <td className="py-3 text-center">$36,00</td>
                    <td className="py-3 text-center">12,0%</td>
                    <td className="py-3">440,0 (dari 500)</td>
                    <td className="py-3 font-bold text-[#1B7A3D]">$40,91</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-[10px] text-[#1B4B2C] bg-[#EBF7EE] p-3 rounded text-left leading-relaxed">
                ✓ Meski harga basah PT MAS lebih tinggi ($36 vs $35), per{" "}
                <strong>bahan kering</strong> justru lebih murah ($40,91 vs
                $42,17) karena TM lebih rendah. Bandingkan supplier & ukur
                margin pada basis kering — berat basah sebagian = air. (Harga/MT
                kering = harga basah ÷ (100–TM)/100.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
