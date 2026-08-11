"use client";

import { RadioTower, MapPin, Play, Check, Tv, Lock } from "lucide-react";

export default function CartrackPage() {
  return (
    <>
      {/* Mobile PWA Cartrack View */}
      <div className="block lg:hidden space-y-3">
        {/* Status Chip Header */}
        <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[13px] font-semibold text-[#1B4B2C] flex items-center gap-2">
          <RadioTower size={16} className="text-[#1B7A3D]" />
          <span>Cartrack ID — 12/14 online</span>
        </div>

        {/* 3 KPI Cards Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              TRANSIT
            </div>
            <div className="text-[18px] font-extrabold text-[#173A5E]">4</div>
          </div>
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              IDLING
            </div>
            <div className="text-[18px] font-extrabold text-[#173A5E]">1</div>
          </div>
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-center">
            <div className="text-[9px] font-bold text-[#64748B] uppercase mb-0.5">
              GEOFENCE
            </div>
            <div className="text-[18px] font-extrabold text-[#173A5E]">9</div>
          </div>
        </div>

        {/* Live Track List Section */}
        <div className="space-y-2 pt-1">
          <h2 className="text-[13px] font-bold text-[#173A5E] m-0">
            Live Track
          </h2>

          {/* Unit 1 */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            BM 9012 → Mamuju • ETA 2j
          </div>

          {/* Unit 2 (Geofence IN) */}
          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[13px] text-[#1B4B2C] font-semibold">
            BM 7781 • Geofence IN → Inbound draft
          </div>

          {/* Unit 3 (Idling) */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#C0392B] font-medium">
            BM 4523 • Idling 14m
          </div>
        </div>

        {/* Telematics Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Fuel 46%
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium">
            Driver 82
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1 pb-4">
          <button className="w-full bg-[#1B7A3D] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#166A34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md">
            <Tv size={18} />
            <span>Live Stream / Footage</span>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block space-y-4">
        {/* Sync Top Banner */}
        <div className="flex items-center justify-between bg-[#EBF7EE] border border-[#C5E1CE] rounded-[10px] p-3 text-[#1B4B2C] text-[11px] font-semibold">
          <div className="flex items-center gap-2">
            <RadioTower size={14} className="text-[#1B7A3D]" />
            <span>
              Terhubung <strong className="font-bold">Cartrack ID</strong> (PT
              GGN) — sinkron terakhir 15/06 14:20 WIB • 14 unit terpantau.
            </span>
            <span className="text-[#64748B] font-normal">
              Sumber: API/portal Cartrack → ETA &amp; geofence memicu Inbound
              otomatis.
            </span>
          </div>
        </div>

        {/* Top 4 KPI Cards Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              ARMADA ONLINE
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              12 / 14
            </div>
            <div className="text-[10px] text-[#64748B]">2 offline / parkir</div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              DALAM PERJALANAN
            </div>
            <div className="text-[28px] font-extrabold text-[#1B7A3D] mb-1">
              4
            </div>
            <div className="text-[10px] text-[#64748B]">2 menuju Mamuju</div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              IDLING &gt; 10 MNT
            </div>
            <div className="text-[28px] font-extrabold text-[#C0392B] mb-1">
              1
            </div>
            <div className="text-[10px] text-[#C0392B] font-bold">
              BM 7781 — 14 mnt
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-4">
            <div className="text-[10px] font-bold text-[#64748B] mb-2 uppercase">
              GEOFENCE EVENT (HARI INI)
            </div>
            <div className="text-[28px] font-extrabold text-[#173A5E] mb-1">
              9
            </div>
            <div className="text-[10px] text-[#64748B]">5 masuk stockpile</div>
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Live Track Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#173A5E] text-[15px] font-bold m-0">
                  Live Track &amp; ETA ke Stockpile
                </h2>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-[10px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white rounded-full px-3 py-1 hover:bg-[#F4F9F5] transition-colors cursor-pointer">
                    <MapPin size={12} /> Find Nearest Driver
                  </button>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white rounded-full px-3 py-1 hover:bg-[#F4F9F5] transition-colors cursor-pointer">
                    <Play size={12} /> Trip Replay
                  </button>
                </div>
              </div>

              {/* Live Track Table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">UNIT</th>
                      <th className="pb-2 font-bold">LOKASI / SPEED</th>
                      <th className="pb-2 font-bold">ETA</th>
                      <th className="pb-2 font-bold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">
                        BM 9012 CD
                      </td>
                      <td className="py-2.5">Mill MAS → Mamuju • 52 km/j</td>
                      <td className="py-2.5 font-medium">~2 j 05 m</td>
                      <td className="py-2.5">
                        <span className="bg-[#EAF2FC] text-[#2872A6] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Transit
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">
                        BM 7781 AB
                      </td>
                      <td className="py-2.5">Stockpile Mamuju (gerbang)</td>
                      <td className="py-2.5 font-medium">tiba</td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Geofence IN
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-bold text-[#173A5E]">
                        BM 4523 CD
                      </td>
                      <td className="py-2.5">Mill ASL • 0 km/j</td>
                      <td className="py-2.5">—</td>
                      <td className="py-2.5">
                        <span className="bg-[#FFF0D5] text-[#B47711] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Idling 14m
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#173A5E]">
                        BM 6610 EF
                      </td>
                      <td className="py-2.5">Tol Mamuju • 61 km/j</td>
                      <td className="py-2.5 font-medium">~46 m</td>
                      <td className="py-2.5">
                        <span className="bg-[#EAF2FC] text-[#2872A6] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Transit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Green Geofence Banner */}
              <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-3 text-[11px] text-[#1B4B2C] leading-relaxed">
                ✓ <strong className="font-bold">BM 7781</strong> masuk geofence
                Stockpile →{" "}
                <strong className="font-bold">
                  draft Inbound Receipt otomatis dibuat
                </strong>{" "}
                (tinggal timbang).
              </div>
            </div>

            {/* Kamera AI Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Kamera AI Multivision (5-channel) &amp; Footage
              </h2>

              {/* 6 Camera Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CH1 Depan
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CH2 Kabin
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CH3 Muatan
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CH4 Kiri
                </div>
                <div className="bg-[#111827] rounded-[8px] p-4 text-center text-white text-[11px] font-medium flex items-center justify-center min-h-[100px]">
                  CH5 Belakang
                </div>
                <div className="bg-[#0F5132] rounded-[8px] p-4 text-center text-white text-[11px] font-bold flex items-center justify-center gap-1 min-h-[54px]">
                  <span>• AI Drowsiness</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-4">
                <button className="flex items-center justify-center gap-1.5 bg-[#1B7A3D] text-white text-[11px] font-bold py-2 px-4 rounded-[8px] hover:bg-[#166A34] transition-colors cursor-pointer">
                  <Tv size={14} /> Live Stream
                </button>
                <button className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#1B7A3D] border border-[#1B7A3D] bg-white rounded-[8px] py-2 px-4 hover:bg-[#F4F9F5] transition-colors cursor-pointer">
                  ⬇ Request Footage
                </button>
              </div>

              {/* Warning Banner */}
              <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-3 text-[11px] text-[#91712A] leading-relaxed">
                ⚠️ AI deteksi: fatigue ringan BM 6610 (10:42) — masuk Alert
                Center. Footage dapat dilampirkan ke Inbound/Outbound sebagai
                bukti.
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Driver Behaviour Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Driver Behaviour, Fuel &amp; Immobilizer
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Skor Driver (BM 9012)
                  </label>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-[12px] font-bold text-[#173A5E]">
                    <span className="text-[#1B7A3D] font-extrabold">
                      82 / 100
                    </span>{" "}
                    — Baik
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Harsh brake / accel (7h)
                  </label>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2.5 text-[12px] font-bold text-[#173A5E]">
                    3 / 1
                  </div>
                </div>
              </div>

              {/* Fuel Monitoring */}
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                  Fuel Monitoring (analog)
                </label>
                <div className="h-3 rounded-full bg-[#E2E8F0] overflow-hidden mb-1.5">
                  <div className="h-full bg-[#D97706] w-[46%] rounded-full"></div>
                </div>
                <p className="text-[10px] text-[#64748B] m-0">
                  Tangki 46% • drop 38 L sejak 09:00 — cek potensi penyedotan
                  (alert).
                </p>
              </div>

              {/* Immobilizer & Reminder */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Start Prevent (Immobilizer)
                  </label>
                  <select className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer">
                    <option>Aktif untuk: BM 4523</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Reminder
                  </label>
                  <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2 text-[11px] font-bold text-[#1B7A3D]">
                    Service BM 9012 — 5 hari lagi
                  </div>
                </div>
              </div>

              {/* Pink Alert Banner */}
              <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[8px] p-3 text-[11px] text-[#991B1B] leading-relaxed">
                <span className="text-[#DC2626]">🔴</span> Immobilizer hanya
                oleh supervisor + PIN; semua aksi tercatat ke audit trail.
              </div>
            </div>

            {/* Geofence & Alert Center Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
              <h2 className="text-[#173A5E] text-[15px] font-bold m-0 mb-4">
                Geofence &amp; POI + Alert Center
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                      <th className="pb-2 font-bold">POI / GEOFENCE</th>
                      <th className="pb-2 font-bold">TIPE</th>
                      <th className="pb-2 font-bold">EVENT HARI INI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Stockpile Mamuju
                      </td>
                      <td className="py-2.5">
                        <span className="bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Trigger Inbound
                        </span>
                      </td>
                      <td className="py-2.5">5 masuk / 2 keluar</td>
                    </tr>
                    <tr className="border-b border-[#EDF1F4]">
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Mill ASL
                      </td>
                      <td className="py-2.5">
                        <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          POI muat
                        </span>
                      </td>
                      <td className="py-2.5">3 keluar</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-[#173A5E]">
                        Mill MAS
                      </td>
                      <td className="py-2.5">
                        <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          POI muat
                        </span>
                      </td>
                      <td className="py-2.5">2 keluar</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-[#173A5E] text-[14px] font-bold m-0 mb-3">
                Alert Center
              </h3>

              <div className="space-y-2">
                <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[8px] p-2.5 text-[11px] text-[#991B1B] font-medium flex items-center gap-1.5">
                  <span className="text-[#DC2626]">🔴</span>
                  <span>Idling BM 4523 14 mnt di Mill ASL.</span>
                </div>
                <div className="bg-[#FFF8E6] border border-[#FBE5B5] rounded-[8px] p-2.5 text-[11px] text-[#91712A] font-medium flex items-center gap-1.5">
                  <span>⚠️ Fuel drop 38 L BM 9012 — verifikasi.</span>
                </div>
                <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2.5 text-[11px] text-[#1B4B2C] font-medium flex items-center gap-1.5">
                  <span>✓ Geofence IN Mamuju → Inbound draft (BM 7781).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
