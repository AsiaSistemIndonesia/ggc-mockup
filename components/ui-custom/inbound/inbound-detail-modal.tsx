"use client";

import { useEffect, useState } from "react";
import {
  X,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Eye,
  Scale,
  Truck,
  Building2,
  FileUp,
  Layers,
  Calendar,
  Lock,
} from "lucide-react";
import { InboundReceiptData } from "@/lib/inbound/inbound-service";
import { InboundAttachment } from "@/lib/media/media-types";
import { resolveInboundAttachments } from "@/lib/media/attachment-resolver";
import { formatFileSize } from "@/lib/media/file-handler";
import { ImageLightbox } from "@/components/ui-custom/media/image-lightbox";

import { useConnectivity } from "@/hooks/use-connectivity";

interface InboundDetailModalProps {
  isOpen: boolean;
  record: InboundReceiptData | null;
  onClose: () => void;
}

export function InboundDetailModal({ isOpen, record, onClose }: InboundDetailModalProps) {
  const { isOnline } = useConnectivity();
  const [attachments, setAttachments] = useState<InboundAttachment[]>([]);
  const [loadingMedia, setLoadingMedia] = useState<boolean>(true);
  const [mediaError, setMediaError] = useState<string | null>(null);

  // Lightbox state
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    src: string;
    fileName: string;
  } | null>(null);

  useEffect(() => {
    const fetchAttachments = async () => {
      if (!record) return;
      setLoadingMedia(true);
      setMediaError(null);

      try {
        const atts = await resolveInboundAttachments(record, isOnline);
        setAttachments(atts);
      } catch (err) {
        console.error("[InboundDetailModal] Error resolving attachments:", err);
        setMediaError("Media tidak dapat dimuat.");
      } finally {
        setLoadingMedia(false);
      }
    };

    if (isOpen && record) {
      fetchAttachments();
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, record]);

  if (!isOpen || !record) return null;

  // Format date helper
  const formattedDate = record.timestamp
    ? new Date(record.timestamp).toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : record.createdAt || "-";

  const handlePreviewPdf = (att: InboundAttachment) => {
    if (att.previewUrl) {
      window.open(att.previewUrl, "_blank");
    } else if (att.blob) {
      const url = URL.createObjectURL(att.blob);
      window.open(url, "_blank");
    } else {
      alert("File PDF tidak dapat dibuka.");
    }
  };

  return (
    <>
      {/* Lightbox for enlarging images */}
      <ImageLightbox
        isOpen={!!activeLightboxImage}
        src={activeLightboxImage?.src || null}
        fileName={activeLightboxImage?.fileName}
        onClose={() => setActiveLightboxImage(null)}
      />

      {/* Main Modal Overlay */}
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E2E8F0] my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#0B4A2B] text-white shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold leading-tight">
                  Detail Inbound Receipt
                </h2>
                <span className="text-xs bg-[#136A35] text-[#A3D8B0] px-2 py-0.5 rounded font-mono font-bold">
                  {record.id || record.localId}
                </span>
              </div>
              <p className="text-[11px] text-[#86C29E] mt-0.5">
                Tanggal: {formattedDate} • Truck: {record.truckId || "-"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body - Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs">
            {/* Section 1: Sync Status & Header IDs */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#64748B] font-bold">Receipt ID:</span>
                  <span className="font-extrabold text-[#173A5E] font-mono">
                    {record.id || "-"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64748B] font-bold">Local ID:</span>
                  <span className="font-mono text-[#173A5E]">{record.localId || "-"}</span>
                </div>
              </div>

              <div>
                {record.syncStatus === "synced" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF7EE] text-[#1B7A3D] font-bold border border-[#C5E1CE]">
                    <CheckCircle2 size={14} /> Terkirim (Synced)
                  </span>
                ) : record.syncStatus === "pending" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF6E5] text-[#8A5A1F] font-bold border border-[#FCE3BE]">
                    <Clock size={14} /> Menunggu Sync (Lokal)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDE8E8] text-[#991B1B] font-bold border border-[#F87171]/40">
                    <AlertCircle size={14} /> Gagal Sync
                  </span>
                )}
              </div>
            </div>

            {/* Grid Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Section 2: Data Truk & Timbangan */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#173A5E] font-bold border-b border-gray-100 pb-2">
                  <Truck size={16} className="text-[#1B7A3D]" />
                  <span>Data Truk & Timbangan</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Truck ID</span>
                    <span className="font-bold text-[#173A5E]">{record.truckId || "-"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Jam Tiba</span>
                    <span className="font-medium text-[#173A5E]">{formattedDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Gross (Bruto)</span>
                    <span className="font-bold text-[#173A5E]">{record.grossWeight ?? "-"} MT</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Tare</span>
                    <span className="font-bold text-[#173A5E]">{record.tareWeight ?? "-"} MT</span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-dashed border-gray-200 flex justify-between items-center">
                    <span className="text-[11px] text-[#1B7A3D] font-bold">Net (auto):</span>
                    <span className="text-sm font-extrabold text-[#1B7A3D]">
                      {record.netWeight ?? "-"} MT
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Supplier & Dokumen */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#173A5E] font-bold border-b border-gray-100 pb-2">
                  <Building2 size={16} className="text-[#1B7A3D]" />
                  <span>Supplier & Dokumen</span>
                </div>
                <div className="space-y-2 text-[12px]">
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Supplier / Mill</span>
                    <span className="font-bold text-[#173A5E]">{record.supplier || "-"}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-[#64748B] font-bold block">No. DO</span>
                      <span className="font-medium text-[#173A5E]">{record.doNumber || "-"}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] font-bold block">No. SJ / DO-M</span>
                      <span className="font-medium text-[#173A5E]">{record.sjNumber || "-"}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] font-bold block">Net Asal</span>
                      <span className="font-medium text-[#173A5E]">{record.netAsal ?? "-"} MT</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] font-bold block">Selisih Muat</span>
                      <span className="font-bold text-[#173A5E]">
                        {record.selisihMuat != null
                          ? `${record.selisihMuat > 0 ? "+" : ""}${record.selisihMuat} MT`
                          : "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Section: Mutu & Unloading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Section 4: Mutu & Berat Kering */}
              <div className="bg-[#F1F8F4] border border-[#C5E1CE] rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-[#1B7A3D] font-bold border-b border-[#C5E1CE] pb-2">
                  <Scale size={16} />
                  <span>Mutu & Basis Berat Kering (Dry Matter)</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[12px]">
                  <div>
                    <span className="text-[10px] text-[#2D6A4F] font-bold block">TM% (Moisture)</span>
                    <span className="font-bold text-[#173A5E]">{record.totalMoisture ?? "-"}%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#2D6A4F] font-bold block">Sample Ref#</span>
                    <span className="font-medium text-[#173A5E]">{record.sampleRef || "-"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#2D6A4F] font-bold block">Berat Kering</span>
                    <span className="font-extrabold text-[#1B7A3D]">
                      {record.beratKering ?? "-"} MT
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 5: Unloading & Stockpile */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#173A5E] font-bold border-b border-gray-100 pb-2">
                  <Layers size={16} className="text-[#1B7A3D]" />
                  <span>Unloading & Stockpile</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Stack Tujuan</span>
                    <span className="font-bold text-[#173A5E]">{record.destinationStack || "-"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Kondisi Visual</span>
                    <span className="font-medium text-[#173A5E]">{record.kondisiVisual || "-"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">Unload Start / End</span>
                    <span className="font-medium text-[#173A5E]">
                      {record.unloadStart || "-"} - {record.unloadEnd || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#64748B] font-bold block">PIC Penerima</span>
                    <span className="font-bold text-[#173A5E] flex items-center gap-1">
                      <Lock size={12} className="text-[#D97706]" />
                      {record.picPenerima || "-"}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] text-[#64748B] font-bold block">Catatan</span>
                    <span className="font-medium text-[#173A5E]">{record.catatan || "-"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Lampiran Dokumen (Attachments) */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center gap-2 text-[#173A5E] font-bold">
                  <FileUp size={16} className="text-[#1B7A3D]" />
                  <span>Lampiran Dokumen & Foto</span>
                </div>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-bold">
                  {attachments.length} Dokumen
                </span>
              </div>

              {loadingMedia ? (
                <div className="py-6 text-center text-xs text-gray-500">
                  Memuat detail inbound &amp; lampiran...
                </div>
              ) : mediaError ? (
                <div className="py-4 text-center text-xs text-red-500 font-medium">
                  {mediaError}
                </div>
              ) : attachments.length === 0 ? (
                <div className="py-6 text-center text-xs text-gray-400 font-medium bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  No attachments available.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                  {attachments.map((att) => {
                    const isPdf = att.type === "pdf" || att.fileName.endsWith(".pdf");

                    if (isPdf) {
                      return (
                        <div
                          key={att.localId}
                          className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 flex flex-col justify-between space-y-2 hover:border-[#1B7A3D] transition-colors"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                              <FileText size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-bold text-[#173A5E] text-[11px] block truncate">
                                {att.fileName}
                              </span>
                              <span className="text-[9px] text-[#64748B]">
                                PDF • {formatFileSize(att.size)}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePreviewPdf(att)}
                            className="w-full mt-1 bg-white border border-[#C5E1CE] text-[#1B7A3D] hover:bg-[#EBF7EE] font-bold text-[10px] py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Eye size={12} />
                            <span>Preview PDF</span>
                          </button>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={att.localId}
                        onClick={() => {
                          if (att.previewUrl) {
                            setActiveLightboxImage({
                              src: att.previewUrl,
                              fileName: att.fileName,
                            });
                          }
                        }}
                        className="group relative bg-black rounded-xl overflow-hidden aspect-video cursor-pointer border border-[#E2E8F0] shadow-xs"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={att.previewUrl || "/assets/img/placeholder.jpg"}
                          alt={att.fileName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-2 text-white">
                          <span className="font-bold text-[10px] truncate">{att.fileName}</span>
                          <span className="text-[8px] text-white/70">
                            {formatFileSize(att.size)} • Klik untuk perbesar
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-5 py-3.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-[#173A5E] bg-white border border-[#E2E8F0] hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
