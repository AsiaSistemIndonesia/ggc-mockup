"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, RefreshCw, Check, X, AlertCircle } from "lucide-react";

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (blob: Blob) => void;
}

export function CameraModal({ isOpen, onClose, onCapture }: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [capturedUrl, setCapturedUrl] = useState<string | null>(null);
  const [capturedBlob, setCapturedBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const startCamera = async () => {
    setError(null);
    setIsInitializing(true);
    setCapturedUrl(null);
    setCapturedBlob(null);

    try {
      stopStream();
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });

      streamRef.current = mediaStream;
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err: unknown) {
      console.error("[CameraModal] Error accessing camera:", err);
      setError("Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.");
    } finally {
      setIsInitializing(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopStream();
    }

    return () => {
      stopStream();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTakeSnapshot = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setCapturedBlob(blob);
            setCapturedUrl(url);
            stopStream();
          }
        },
        "image/jpeg",
        0.85,
      );
    }
  };

  const handleRetake = () => {
    if (capturedUrl) {
      URL.revokeObjectURL(capturedUrl);
    }
    startCamera();
  };

  const handleConfirm = () => {
    if (capturedBlob) {
      onCapture(capturedBlob);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#1B7A3D]" />
            <h3 className="text-base font-bold text-[#173A5E]">Scan / Ambil Foto Surat Jalan</h3>
          </div>
          <button
            onClick={() => {
              stopStream();
              onClose();
            }}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black flex items-center justify-center">
          {error ? (
            <div className="px-6 text-center text-red-400 text-sm flex flex-col items-center gap-2">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <span>{error}</span>
            </div>
          ) : capturedUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={capturedUrl} alt="Captured Preview" className="h-full w-full object-contain" />
          ) : (
            <>
              {isInitializing && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs gap-2 bg-black/60 z-10">
                  <RefreshCw className="w-5 h-5 animate-spin text-[#1B7A3D]" />
                  <span>Membuka kamera...</span>
                </div>
              )}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="h-full w-full object-cover"
              />
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-5 flex items-center justify-end gap-3">
          {capturedUrl ? (
            <>
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Foto Ulang</span>
              </button>
              <button
                onClick={handleConfirm}
                className="flex items-center gap-2 rounded-xl bg-[#1B7A3D] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#166A34] transition-colors cursor-pointer shadow-sm"
              >
                <Check className="w-4 h-4" />
                <span>Gunakan Foto</span>
              </button>
            </>
          ) : (
            <button
              disabled={!!error || isInitializing}
              onClick={handleTakeSnapshot}
              className="flex items-center gap-2 rounded-xl bg-[#1B7A3D] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#166A34] transition-colors cursor-pointer shadow-sm disabled:opacity-50"
            >
              <Camera className="w-4 h-4" />
              <span>Ambil Foto</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
