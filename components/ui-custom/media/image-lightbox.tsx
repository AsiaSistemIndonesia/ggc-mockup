"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  src: string | null;
  fileName?: string;
  onClose: () => void;
}

export function ImageLightbox({ isOpen, src, fileName, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center bg-white/10 p-2 rounded-2xl border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header Bar */}
        <div className="w-full flex items-center justify-between px-4 py-2 text-white bg-black/50 rounded-xl mb-2 backdrop-blur-md">
          <span className="text-xs font-bold truncate max-w-[70%]">
            {fileName || "Preview Foto"}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              title="Buka gambar di tab baru"
            >
              <ExternalLink size={16} />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={fileName || "Enlarged view"}
            className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
