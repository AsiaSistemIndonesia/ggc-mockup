"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Camera,
  FileUp,
  Settings,
  Lock,
  Scale,
  Trash2,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  RefreshCw,
  Eye,
} from "lucide-react";
import { useConnectivity } from "@/hooks/use-connectivity";
import { InboundService, InboundReceiptData } from "@/lib/inbound/inbound-service";
import { InboundAttachment } from "@/lib/media/media-types";
import { createAttachmentFromBlob, formatFileSize } from "@/lib/media/file-handler";
import { CameraModal } from "@/components/ui-custom/camera/camera-modal";
import { InboundDetailModal } from "@/components/ui-custom/inbound/inbound-detail-modal";

export default function InboundPage() {
  const { isOnline } = useConnectivity();

  // Records list & sync states
  const [records, setRecords] = useState<InboundReceiptData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [selectedRecordForDetail, setSelectedRecordForDetail] =
    useState<InboundReceiptData | null>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "warning" | "error";
    message: string;
  } | null>(null);

  // Form input state
  const [truckId, setTruckId] = useState("BM 9012 CD");
  const [grossWeight, setGrossWeight] = useState("15.234");
  const [tareWeight, setTareWeight] = useState("5.120");
  const [supplier, setSupplier] = useState("PT Andalan Sukses Lestari (ASL)");
  const [doNumber, setDoNumber] = useState("DO-2026-001");
  const [sjNumber, setSjNumber] = useState("SJ-DO-2026-001");
  const [netAsal, setNetAsal] = useState("10.250");
  const [totalMoisture, setTotalMoisture] = useState("17.2");
  const [destinationStack, setDestinationStack] = useState("A1");
  const [kondisiVisual, setKondisiVisual] = useState("Good");
  const [sampleRef, setSampleRef] = useState("LAB-2026-0615-03");
  const [unloadStart, setUnloadStart] = useState("08:25");
  const [unloadEnd, setUnloadEnd] = useState("08:52");
  const [picPenerima, setPicPenerima] = useState("operator.mmj");
  const [catatan, setCatatan] = useState("-");

  // Attachments state
  const [attachments, setAttachments] = useState<InboundAttachment[]>([]);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);

  // Refs for hidden inputs
  const mobileCameraInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Calculated values
  const grossNum = parseFloat(grossWeight) || 0;
  const tareNum = parseFloat(tareWeight) || 0;
  const netNum = Math.max(0, grossNum - tareNum);
  const netAsalNum = parseFloat(netAsal) || 0;
  const selisihNum = netAsalNum - netNum;
  const tmNum = parseFloat(totalMoisture) || 0;
  const dryWeightNum = netNum * ((100 - tmNum) / 100);

  // Load records
  const loadRecords = useCallback(async () => {
    setLoading(true);
    try {
      const data = await InboundService.getAllRecords(isOnline);
      setRecords(data);
    } catch (err) {
      console.error("[InboundPage] Error loading records:", err);
    } finally {
      setLoading(false);
    }
  }, [isOnline]);

  useEffect(() => {
    loadRecords();
  }, [loadRecords, isOnline]);

  // Handle mobile camera file selection
  const handleMobileCameraCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const att = await createAttachmentFromBlob(file, "scan", "temp", file.name);
      setAttachments((prev) => [...prev, att]);
      e.target.value = "";
    }
  };

  // Handle native file selection (Desktop & Mobile file upload)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newAtts: InboundAttachment[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isPdf = file.type === "application/pdf" || file.name.endsWith(".pdf");
        const att = await createAttachmentFromBlob(
          file,
          isPdf ? "pdf" : "photo",
          "temp",
          file.name,
        );
        newAtts.push(att);
      }
      setAttachments((prev) => [...prev, ...newAtts]);
      e.target.value = "";
    }
  };

  // Handle Desktop camera capture confirm
  const handleDesktopCameraCapture = async (blob: Blob) => {
    const att = await createAttachmentFromBlob(
      blob,
      "scan",
      "temp",
      `surat_jalan_scan_${Date.now()}.jpg`,
    );
    setAttachments((prev) => [...prev, att]);
  };

  // Remove attachment
  const handleRemoveAttachment = (localId: string) => {
    setAttachments((prev) => prev.filter((a) => a.localId !== localId));
  };

  // Form submission handler
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (submitting) return;

    if (attachments.length === 0) {
      setNotification({
        type: "error",
        message: "🔴 Scan Surat Jalan PKS WAJIB dilampirkan sebelum submit receipt (HR-2).",
      });
      return;
    }

    setSubmitting(true);
    setNotification(null);

    try {
      const payload = {
        timestamp: new Date().toISOString(),
        truckId,
        grossWeight: grossNum,
        tareWeight: tareNum,
        netWeight: parseFloat(netNum.toFixed(3)),
        supplier,
        doNumber,
        sjNumber,
        netAsal: netAsalNum,
        selisihMuat: parseFloat(selisihNum.toFixed(3)),
        totalMoisture: tmNum,
        beratKering: parseFloat(dryWeightNum.toFixed(3)),
        destinationStack,
        kondisiVisual,
        sampleRef,
        unloadStart,
        unloadEnd,
        picPenerima,
        catatan,
      };

      const result = await InboundService.createInbound(payload, attachments, isOnline);

      if (result.success) {
        if (result.syncStatus === "synced") {
          setNotification({
            type: "success",
            message: `✓ Inbound Receipt (${result.serverId}) tersimpan ke server!`,
          });
        } else {
          setNotification({
            type: "warning",
            message: `⏳ Inbound Receipt tersimpan LOKAL (${result.localId}). Data akan disinkronkan otomatis saat online.`,
          });
        }

        // Reset attachments
        setAttachments([]);
        await loadRecords();
      } else {
        setNotification({
          type: "error",
          message: "Gagal menyimpan Inbound Receipt.",
        });
      }
    } catch (err) {
      console.error("[InboundPage] Submit error:", err);
      setNotification({
        type: "error",
        message: "Terjadi kesalahan saat memproses data Inbound.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hidden File Inputs */}
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={mobileCameraInputRef}
        onChange={handleMobileCameraCapture}
        className="hidden"
      />
      <input
        type="file"
        accept="image/*,.pdf,application/pdf"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
        multiple
      />

      {/* Desktop Camera Capture Modal */}
      <CameraModal
        isOpen={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
        onCapture={handleDesktopCameraCapture}
      />

      {/* Connectivity & Notification Banner */}
      {notification && (
        <div
          className={`mb-4 p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold ${
            notification.type === "success"
              ? "bg-[#EBF7EE] border-[#C5E1CE] text-[#1B4B2C]"
              : notification.type === "warning"
                ? "bg-[#FFF6E5] border-[#FCE3BE] text-[#8A5A1F]"
                : "bg-[#FDE8E8] border-[#F87171]/40 text-[#991B1B]"
          }`}
        >
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="text-gray-400 hover:text-gray-600 font-normal cursor-pointer ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MOBILE PWA INBOUND VIEW                                   */}
      {/* ========================================================= */}
      <div className="block lg:hidden -m-4 sm:-m-6 bg-white min-h-screen">
        <div className="p-4 space-y-3">
          {/* DateTime & Truck ID Input */}
          <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] font-bold text-[#173A5E] text-center flex items-center justify-between">
            <span>15/06/2026 08:14</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0]">{truckId}</span>
          </div>

          {/* Baca Timbangan Button */}
          <button
            type="button"
            className="w-full bg-[#1B7A3D] text-white font-bold text-[14px] py-3 rounded-[12px] hover:bg-[#166A34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Scale size={18} />
            <span>Baca Timbangan</span>
          </button>

          {/* Gross & Net Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[12px] text-[#64748B] font-medium">
              Gross{" "}
              <span className="text-[#173A5E] font-bold text-[13px] ml-1">
                {grossWeight}
              </span>
            </div>
            <div className="bg-[#F1F8F4] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B7A3D] font-bold">
              Net{" "}
              <span className="text-[#1B7A3D] font-extrabold text-[14px] ml-1">
                {netNum.toFixed(3)}
              </span>
            </div>
          </div>

          {/* Supplier Select */}
          <div className="relative">
            <select
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium appearance-none outline-none cursor-pointer pr-8"
            >
              <option value="PT Andalan Sukses Lestari (ASL)">Supplier: PT Andalan Sukses Lestari (ASL)</option>
              <option value="PT Sawit Makmur Jaya">Supplier: PT Sawit Makmur Jaya</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[10px] pointer-events-none">▼</span>
          </div>

          {/* DO Select */}
          <div className="relative">
            <select
              value={doNumber}
              onChange={(e) => setDoNumber(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium appearance-none outline-none cursor-pointer pr-8"
            >
              <option value="DO-2026-001">DO-2026-001 (sisa 214,6 MT)</option>
              <option value="DO-2026-002">DO-2026-002 (sisa 500,0 MT)</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[10px] pointer-events-none">▼</span>
          </div>

          {/* SJ / DO-M Info */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[12px] text-[#173A5E] font-medium">
            No. SJ / DO-M: <span className="font-bold">{sjNumber}</span> •
            Net Asal <span className="font-bold">{netAsal}</span>
          </div>

          {/* Scan Surat Jalan Action Buttons (Mobile) */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => mobileCameraInputRef.current?.click()}
              className="w-full bg-[#D94343] text-white font-bold text-[13px] py-3 rounded-[12px] hover:bg-[#C0392B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Camera size={16} />
              <span>Scan Surat Jalan PKS (Kamera HP)</span>
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-white border border-[#C5E1CE] text-[#1B7A3D] font-bold text-[13px] py-2.5 rounded-[12px] hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileUp size={16} />
              <span>Upload PDF / Dokumen</span>
            </button>
          </div>

          {/* Mobile Attachment List */}
          {attachments.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                Lampiran Dokumen ({attachments.length}):
              </span>
              {attachments.map((att) => (
                <div
                  key={att.localId}
                  className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-2.5 flex items-center justify-between gap-2 text-[12px]"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    {att.type === "pdf" ? (
                      <FileText size={18} className="text-[#1B7A3D] shrink-0" />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={att.previewUrl}
                        alt="Preview"
                        className="w-8 h-8 rounded object-cover shrink-0 border border-[#C5E1CE]"
                      />
                    )}
                    <div className="truncate">
                      <span className="font-bold text-[#173A5E] block truncate">{att.fileName}</span>
                      <span className="text-[10px] text-[#64748B]">{formatFileSize(att.size)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveAttachment(att.localId)}
                    className="text-red-500 p-1 hover:bg-red-50 rounded cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Scan Banner Status */}
          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[12px] p-3 text-[12px] text-[#1B4B2C] font-medium flex items-center gap-1.5">
            <span>✓ Scan DO-M • selisih {selisihNum.toFixed(3)} MT</span>
          </div>

          {/* Baca Sensor TM% Button */}
          <button
            type="button"
            className="w-full bg-white border-2 border-[#1B7A3D] text-[#1B7A3D] font-bold text-[13px] py-2.5 rounded-[12px] hover:bg-[#F4F9F5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Settings size={16} />
            <span>Baca Sensor TM% ({totalMoisture}%)</span>
          </button>

          {/* TM Alert Banner */}
          <div className="bg-[#FDE8E8] border border-[#F87171]/40 rounded-[12px] p-3 text-[12px] text-[#991B1B] font-medium flex items-center gap-1.5">
            <span className="text-[#DC2626]">🔴</span>
            <span>TM% 17,2% — sample lab wajib</span>
          </div>

          {/* Dry Matter Card */}
          <div className="bg-[#F1F8F4] border border-[#C5E1CE] rounded-[12px] p-3 text-[13px] text-[#1B7A3D] font-bold text-center">
            Berat Kering {dryWeightNum.toFixed(3)} MT{" "}
            <span className="font-normal text-[12px] text-[#2D6A4F]">
              (Net × {((100 - tmNum)).toFixed(1)}%)
            </span>
          </div>

          {/* Stack & Condition Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="relative">
              <select
                value={destinationStack}
                onChange={(e) => setDestinationStack(e.target.value)}
                className="w-full bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium appearance-none outline-none cursor-pointer pr-7"
              >
                <option value="A1">Stack A1</option>
                <option value="A2">Stack A2</option>
                <option value="B1">Stack B1</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[10px] pointer-events-none">▼</span>
            </div>
            <div className="relative">
              <select
                value={kondisiVisual}
                onChange={(e) => setKondisiVisual(e.target.value)}
                className="w-full bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-[13px] text-[#173A5E] font-medium appearance-none outline-none cursor-pointer pr-7"
              >
                <option value="Good">Kondisi: Good</option>
                <option value="Fair">Kondisi: Fair</option>
                <option value="Moist">Kondisi: Moist</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[10px] pointer-events-none">▼</span>
            </div>
          </div>

          {/* Submit Button (Mobile) */}
          <div className="pt-2 pb-4">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-[#1B7A3D] text-white font-bold text-[15px] py-3.5 rounded-[12px] hover:bg-[#166A34] transition-colors cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitting && <RefreshCw size={16} className="animate-spin" />}
              <span>{submitting ? "Memproses..." : "Submit Receipt"}</span>
            </button>
          </div>

          {/* Mobile Recent Inbound Records List */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#173A5E] mb-2">Riwayat Inbound Receipt</h3>
            <div className="space-y-2">
              {records.map((rec) => (
                <div
                  key={rec.localId}
                  className="bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-xs flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-[#173A5E] block">{rec.id || rec.localId}</span>
                    <span className="text-gray-500 text-[10px]">{rec.truckId} • {rec.supplier}</span>
                    <span className="text-[#1B7A3D] font-bold block mt-0.5">{rec.netWeight} MT</span>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    {rec.syncStatus === "synced" ? (
                      <span className="px-2 py-0.5 bg-[#EBF7EE] text-[#1B7A3D] rounded-md font-bold text-[10px] flex items-center gap-1">
                        <CheckCircle2 size={12} /> Synced
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-[#FFF6E5] text-[#8A5A1F] rounded-md font-bold text-[10px] flex items-center gap-1">
                        <Clock size={12} /> Pending Sync
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedRecordForDetail(rec)}
                      className="px-2.5 py-1 bg-[#E2E8F0]/70 hover:bg-[#E2E8F0] text-[#173A5E] font-bold text-[10px] rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye size={12} /> Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP VIEW                                              */}
      {/* ========================================================= */}
      <div className="hidden lg:block space-y-4">
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
                  <select
                    value={truckId}
                    onChange={(e) => setTruckId(e.target.value)}
                    className="w-full text-[12px] font-bold bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer"
                  >
                    <option value="BM 9012 CD">BM 9012 CD</option>
                    <option value="BK 8123 AB">BK 8123 AB</option>
                    <option value="BA 7044 EF">BA 7044 EF</option>
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
                    value={grossWeight}
                    onChange={(e) => setGrossWeight(e.target.value)}
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
                    value={tareWeight}
                    onChange={(e) => setTareWeight(e.target.value)}
                    className="w-full text-[12px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Net (auto)
                  </label>
                  <input
                    type="text"
                    value={`${netNum.toFixed(3)} MT`}
                    readOnly
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
                  <select
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer"
                  >
                    <option value="PT Andalan Sukses Lestari (ASL)">PT Andalan Sukses Lestari (ASL)</option>
                    <option value="PT Sawit Makmur Jaya">PT Sawit Makmur Jaya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                    Delivery Order (DO)
                  </label>
                  <select
                    value={doNumber}
                    onChange={(e) => setDoNumber(e.target.value)}
                    className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer"
                  >
                    <option value="DO-2026-001">DO-2026-001 — sisa 214,6 MT</option>
                    <option value="DO-2026-002">DO-2026-002 — sisa 500,0 MT</option>
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
                      value={`${totalMoisture} %`}
                      onChange={(e) => setTotalMoisture(e.target.value.replace(/[^0-9.]/g, ""))}
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
              <input
                type="text"
                value={sjNumber}
                onChange={(e) => setSjNumber(e.target.value)}
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Net Asal (NET ASAL — slip/DO Mill)
              </label>
              <input
                type="text"
                value={netAsal}
                onChange={(e) => setNetAsal(e.target.value)}
                className="w-full text-[12px] font-medium bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Selisih Muat = Net Asal - Net Timbang STF
              </label>
              <input
                type="text"
                value={`${selisihNum > 0 ? "+" : ""}${selisihNum.toFixed(3)} MT`}
                readOnly
                className="w-full text-[12px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#64748B] mb-1">
              Scan Surat Jalan (foto / PDF DO-M) — WAJIB
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-3">
              <div className="border-2 border-dashed border-[#1B7A3D]/40 bg-[#F4F9F5] rounded-[10px] p-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-white border border-[#C5E1CE] rounded-[8px] shrink-0 text-[#1B7A3D]">
                    <FileUp size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-bold text-[#173A5E] truncate">
                      {attachments.length > 0
                        ? `${attachments.length} file terlampir`
                        : "Belum ada file terlampir"}
                    </div>
                    <div className="text-[10px] text-[#64748B]">
                      PILIH KAMERA atau FILE (PDF/Gambar)
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setIsCameraModalOpen(true)}
                        className="flex items-center gap-1.5 text-[10px] font-bold bg-[#1B7A3D] text-white px-3 py-1.5 rounded-[6px] hover:bg-[#166A34] transition-colors cursor-pointer"
                      >
                        <Camera size={12} /> Scan / Ambil Foto
                      </button>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-1.5 text-[10px] font-bold border border-[#C5E1CE] text-[#1B7A3D] px-3 py-1.5 rounded-[6px] bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <FileUp size={12} /> Pilih File (Desktop/HP)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Attachments List */}
                {attachments.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[#C5E1CE] space-y-2">
                    {attachments.map((att) => (
                      <div
                        key={att.localId}
                        className="bg-white border border-[#C5E1CE] rounded-[8px] p-2 flex items-center justify-between gap-2 text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {att.type === "pdf" ? (
                            <FileText size={16} className="text-[#1B7A3D] shrink-0" />
                          ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={att.previewUrl}
                              alt="Thumbnail"
                              className="w-7 h-7 rounded object-cover border border-gray-200 shrink-0"
                            />
                          )}
                          <div className="truncate">
                            <span className="font-bold text-[#173A5E] block truncate text-[11px]">
                              {att.fileName}
                            </span>
                            <span className="text-[9px] text-gray-500">
                              {formatFileSize(att.size)} • Hash: {att.hash?.slice(0, 8)}...
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveAttachment(att.localId)}
                          className="text-red-500 hover:bg-red-50 p-1 rounded cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[9px] font-bold text-[#64748B] mb-1">
                  Hash sha256 (anti-tukar / anti-dupe HR-3)
                </label>
                <div className="text-[11px] font-mono text-[#173A5E] bg-[#F1F5F9] border border-[#E2E8F0] p-2.5 rounded-[8px] font-bold text-center truncate">
                  {attachments[0]?.hash ? attachments[0].hash.slice(0, 16) + "..." : "a3f9c1...7b2e"}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EBF7EE] border border-[#C5E1CE] rounded-[8px] p-2.5 text-[11px] text-[#1B4B2C] font-medium leading-normal mt-3">
            ✓ Scan DO-M terlampir & hash tersimpan • Selisih {selisihNum.toFixed(3)} MT
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
                value={`${netNum.toFixed(3)} MT`}
                readOnly
                className="w-full text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                TM% (Total Moisture)
              </label>
              <input
                type="text"
                value={`${totalMoisture} %`}
                readOnly
                className="w-full text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Berat Kering = Net × (100–TM)/100
              </label>
              <input
                type="text"
                value={`${dryWeightNum.toFixed(3)} MT`}
                readOnly
                className="w-full text-[13px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-2 text-[#1B7A3D] outline-none"
              />
            </div>
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
                value={sampleRef}
                onChange={(e) => setSampleRef(e.target.value)}
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Destination Stack
              </label>
              <select
                value={destinationStack}
                onChange={(e) => setDestinationStack(e.target.value)}
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Kondisi Visual
              </label>
              <select
                value={kondisiVisual}
                onChange={(e) => setKondisiVisual(e.target.value)}
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none cursor-pointer"
              >
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Moist">Moist</option>
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
                value={unloadStart}
                onChange={(e) => setUnloadStart(e.target.value)}
                className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#64748B] mb-1">
                Unload End
              </label>
              <input
                type="text"
                value={unloadEnd}
                onChange={(e) => setUnloadEnd(e.target.value)}
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
                  <strong className="text-[#173A5E]">{picPenerima}</strong>{" "}
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
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full text-[12px] font-medium bg-white border border-[#E2E8F0] rounded-[8px] p-2 text-[#173A5E] outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-3 text-[13px] font-bold text-white bg-[#136A35] hover:bg-[#0F552A] rounded-[8px] transition-colors cursor-pointer shadow-sm disabled:opacity-50 flex items-center gap-2"
            >
              {submitting && <RefreshCw size={16} className="animate-spin" />}
              <span>{submitting ? "Memproses..." : "Submit Receipt → Queue-In A1"}</span>
            </button>
          </div>
        </div>

        {/* Desktop History & Sync Status Table */}
        <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#173A5E] text-[14px] font-bold m-0">
              Daftar Inbound Receipt & Status Sync
            </h2>
            <button
              onClick={loadRecords}
              className="text-[11px] font-bold text-[#1B7A3D] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw size={12} /> Refresh Data
            </button>
          </div>

          {loading ? (
            <div className="text-center py-6 text-xs text-gray-500">Memuat data...</div>
          ) : records.length === 0 ? (
            <div className="text-center py-6 text-xs text-gray-500">Belum ada data inbound receipt.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B] text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Receipt ID / Local ID</th>
                    <th className="py-2.5 px-3">Truk ID</th>
                    <th className="py-2.5 px-3">Supplier</th>
                    <th className="py-2.5 px-3">Gross / Tare / Net</th>
                    <th className="py-2.5 px-3">TM%</th>
                    <th className="py-2.5 px-3">Berat Kering</th>
                    <th className="py-2.5 px-3">Status Sync</th>
                    <th className="py-2.5 px-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {records.map((rec) => (
                    <tr key={rec.localId} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-3 px-3 font-bold text-[#173A5E]">
                        {rec.id || rec.localId}
                        {rec.id && rec.localId && rec.id !== rec.localId && (
                          <span className="block text-[9px] text-gray-400 font-mono font-normal">
                            Ref: {rec.localId}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-[#173A5E] font-medium">{rec.truckId}</td>
                      <td className="py-3 px-3 text-[#173A5E]">{rec.supplier}</td>
                      <td className="py-3 px-3 text-[#173A5E]">
                        <span className="font-bold text-[#1B7A3D]">{rec.netWeight} MT</span>
                        <span className="block text-[10px] text-gray-500">
                          {rec.grossWeight} / {rec.tareWeight}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#173A5E] font-medium">{rec.totalMoisture}%</td>
                      <td className="py-3 px-3 text-[#173A5E] font-bold">{rec.beratKering} MT</td>
                      <td className="py-3 px-3">
                        {rec.syncStatus === "synced" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF7EE] text-[#1B7A3D] text-[10px] font-bold border border-[#C5E1CE]">
                            <CheckCircle2 size={12} /> Synced
                          </span>
                        ) : rec.syncStatus === "pending" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF6E5] text-[#8A5A1F] text-[10px] font-bold border border-[#FCE3BE]">
                            <Clock size={12} /> Pending Sync
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FDE8E8] text-[#991B1B] text-[10px] font-bold border border-[#F87171]/40">
                            <AlertCircle size={12} /> Sync Failed
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedRecordForDetail(rec)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#EAF2FC] hover:bg-[#D4E4FA] text-[#173A5E] font-bold text-[11px] rounded-lg transition-colors cursor-pointer border border-[#C5D9F0]"
                        >
                          <Eye size={13} /> Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* Inbound Detail Modal */}
      <InboundDetailModal
        isOpen={!!selectedRecordForDetail}
        record={selectedRecordForDetail}
        onClose={() => setSelectedRecordForDetail(null)}
      />
    </>
  );
}
