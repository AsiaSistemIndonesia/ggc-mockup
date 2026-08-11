"use client";

import { Plus } from "lucide-react";

export default function AdminPage() {
  return (
    <>
      {/* Mobile PWA Admin View */}
      <div className="block lg:hidden space-y-3">
        {/* User & Role Section */}
        <div className="space-y-2">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0 mb-3">
            User &amp; Role
          </h2>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Danang — supervisor
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            operator.mmj — operator
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Randi — finance
          </div>
        </div>

        {/* Alert Rules Section */}
        <div className="space-y-2 pt-1">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0 mb-3">
            Alert Rules
          </h2>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>Inbound TM% &gt;16%</span>
            <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              ON
            </span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium flex justify-between items-center">
            <span>Dead freight &gt;20%</span>
            <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              ON
            </span>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[12px] p-3 text-[12px] text-[#91712A] font-medium flex items-center gap-1.5  ">
          <span>⚠️ Filter sensor 485/500 jam</span>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Row 1: User & Role + Konfigurasi Alert */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left Card: Manajemen User & Role */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
                  Manajemen User &amp; Role
                </h2>
                <button className="flex items-center gap-1 bg-[#136A35] text-white text-[11px] font-bold px-3 py-1.5 rounded-[8px] hover:bg-[#0F552A] transition-colors cursor-pointer shadow-sm">
                  <Plus size={14} /> + User
                </button>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">NAMA</th>
                      <th className="pb-2 font-bold">ROLE</th>
                      <th className="pb-2 font-bold">SITE</th>
                      <th className="pb-2 font-bold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">
                        Danang
                      </td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          supervisor
                        </span>
                      </td>
                      <td className="py-2.5 text-[#64748B]">Mamuju</td>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        <span className="text-[#1B7A3D] font-bold">•</span>{" "}
                        aktif
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">
                        operator.mmj
                      </td>
                      <td className="py-2.5">
                        <span className="bg-[#EAF2FC] text-[#2872A6] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          operator
                        </span>
                      </td>
                      <td className="py-2.5 text-[#64748B]">Mamuju</td>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        <span className="text-[#1B7A3D] font-bold">•</span>{" "}
                        aktif
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">Randi</td>
                      <td className="py-2.5">
                        <span className="bg-[#FFF0D5] text-[#B47711] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          finance
                        </span>
                      </td>
                      <td className="py-2.5 text-[#64748B]">HO</td>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        <span className="text-[#1B7A3D] font-bold">•</span>{" "}
                        aktif
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">Frans</td>
                      <td className="py-2.5">
                        <span className="bg-[#EAF2FC] text-[#2872A6] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          operator
                        </span>
                      </td>
                      <td className="py-2.5 text-[#64748B]">Teluk Bayur</td>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        <span className="text-[#1B7A3D] font-bold">•</span>{" "}
                        aktif
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#173A5E]">Tara</td>
                      <td className="py-2.5">
                        <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          viewer
                        </span>
                      </td>
                      <td className="py-2.5 text-[#64748B]">HO</td>
                      <td className="py-2.5 font-medium text-[#94A3B8]">
                        ○ nonaktif
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Right Card: Konfigurasi Alert */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Konfigurasi Alert (Rules Engine)
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">RULE</th>
                      <th className="pb-2 font-bold">THRESHOLD</th>
                      <th className="pb-2 font-bold">PENERIMA</th>
                      <th className="pb-2 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Inbound TM%
                      </td>
                      <td className="py-2.5 text-[#64748B]">&gt; 16%</td>
                      <td className="py-2.5">Tara, Danang</td>
                      <td className="py-2.5 text-right">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ON
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Aging Stock TM%
                      </td>
                      <td className="py-2.5 text-[#64748B]">&gt; 18%</td>
                      <td className="py-2.5">Danang</td>
                      <td className="py-2.5 text-right">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ON
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Low stockpile
                      </td>
                      <td className="py-2.5 text-[#64748B]">&lt; 200 MT</td>
                      <td className="py-2.5">Danang, Ridho</td>
                      <td className="py-2.5 text-right">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ON
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Dead freight
                      </td>
                      <td className="py-2.5 text-[#64748B]">&gt; 20%</td>
                      <td className="py-2.5">Danang, Randi</td>
                      <td className="py-2.5 text-right">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          ON
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Scale offline
                      </td>
                      <td className="py-2.5 text-[#64748B]">&gt; 4 jam</td>
                      <td className="py-2.5">IT, Randi</td>
                      <td className="py-2.5 text-right">
                        <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          OFF
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Master Site/Supplier + Kalibrasi */}
        <div className="grid grid-cols-2 gap-4">
          {/* Bottom Left Card: Master Site & Supplier */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 space-y-4">
            <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
              Master: Site / Stockpile &amp; Supplier
            </h2>

            {/* Site Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                    <th className="pb-2 font-bold">KODE</th>
                    <th className="pb-2 font-bold">STOCKPILE</th>
                    <th className="pb-2 font-bold">WILAYAH</th>
                    <th className="pb-2 font-bold">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-2 font-bold text-[#173A5E]">MMJ</td>
                    <td className="py-2 font-medium">Mamuju</td>
                    <td className="py-2 text-[#64748B]">Sulawesi</td>
                    <td className="py-2">
                      <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        aktif • 2025
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#EDF1F4]">
                    <td className="py-2 font-bold text-[#173A5E]">MRD</td>
                    <td className="py-2 font-medium">Marunda</td>
                    <td className="py-2 text-[#64748B]">Jakarta</td>
                    <td className="py-2">
                      <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        aktif • 2026
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-[#173A5E]">TBY</td>
                    <td className="py-2 font-medium">Teluk Bayur</td>
                    <td className="py-2 text-[#64748B]">Padang</td>
                    <td className="py-2">
                      <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        aktif • 2026
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Supplier Master Sub-Section */}
            <div className="pt-2 space-y-2">
              <h3 className="text-[#173A5E] text-[13px] font-bold m-0">
                Supplier Master
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">KODE</th>
                      <th className="pb-2 font-bold">NAMA</th>
                      <th className="pb-2 font-bold">PO AKTIF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2 font-bold text-[#173A5E]">ASL</td>
                      <td className="py-2 font-medium">
                        PT Andalan Sukses Lestari
                      </td>
                      <td className="py-2 font-bold">2</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-[#173A5E]">MAS</td>
                      <td className="py-2 font-medium">PT Mitra Agro Sawit</td>
                      <td className="py-2 font-bold">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Right Card: Kalibrasi Timbangan & Sensor */}
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Kalibrasi Timbangan &amp; Sensor
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">DEVICE</th>
                      <th className="pb-2 font-bold">LAST CALIB</th>
                      <th className="pb-2 font-bold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Scale TB-01 (Modbus)
                      </td>
                      <td className="py-2.5">02/06/2026</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          OK
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Moisture RS-485
                      </td>
                      <td className="py-2.5 font-medium">485 / 500 jam</td>
                      <td className="py-2.5">
                        <span className="bg-[#FFF0D5] text-[#B47711] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Due soon
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Warning Banner */}
            <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
              ⚠️ Filter sensor moisture mendekati 500 jam — jadwalkan
              penggantian (SOP Tara).
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
