import React, { useEffect } from 'react';
import { Artwork } from '../types';
import { X, Sparkles, Check, Mail, Image as ImageIcon } from 'lucide-react';

interface ArtworkLightboxModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onInquire: (artwork: Artwork) => void;
}

export const ArtworkLightboxModal: React.FC<ArtworkLightboxModalProps> = ({
  artwork,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] text-[#111111] border border-[#E2DDD5] shadow-2xl p-6 sm:p-8"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono-acc text-[#777267]">
            <span className="font-semibold text-[#111111]">{artwork.categoryLabel}</span>
            <span>·</span>
            <span>{artwork.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#D5CEC2] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main Artwork Preview Area (Large view) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#EFEAE2] border border-[#E2DDD5] flex items-center justify-center mb-6">
          {artwork.imageUrl ? (
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-[#55524B]">
              <div className="w-14 h-14 rounded-2xl bg-[#E4DDD3] flex items-center justify-center mb-3 text-[#111111]">
                <ImageIcon size={26} strokeWidth={1.5} />
              </div>
              <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#111111] tracking-tight">
                Imagen {artwork.imageSlot}
              </span>
              <p className="text-xs font-mono-acc text-[#777267] mt-1 max-w-sm">
                {artwork.title} · {artwork.medium} ({artwork.dimensions})
              </p>
              <div className="mt-4 px-3 py-1 rounded-full border border-[#D5CEC2] text-[11px] font-mono-acc text-[#888378]">
                Espacio de exhibición fotográfica
              </div>
            </div>
          )}
        </div>

        {/* Information & Inquire Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] mb-2">
              {artwork.title}
            </h2>
            <p className="text-sm text-[#4A4740] leading-relaxed">
              {artwork.description}
            </p>
          </div>

          <div className="bg-[#EFEAE2] p-5 rounded-2xl border border-[#E2DDD5] flex flex-col justify-between">
            <div className="space-y-2 text-xs font-mono-acc">
              <div>
                <span className="text-[#777267] block">Técnica:</span>
                <span className="font-semibold text-[#111111]">{artwork.medium}</span>
              </div>
              <div>
                <span className="text-[#777267] block">Dimensiones:</span>
                <span className="font-semibold text-[#111111]">{artwork.dimensions}</span>
              </div>
              <div>
                <span className="text-[#777267] block">Disponibilidad:</span>
                <span
                  className={`font-semibold ${
                    artwork.status === 'Available' ? 'text-[#1E7B5E]' : 'text-[#777267]'
                  }`}
                >
                  {artwork.status === 'Available'
                    ? '✓ Disponible para adquisición'
                    : artwork.status === 'Sold'
                    ? 'Colección Privada (Vendido)'
                    : 'Archivo del Estudio'}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onInquire(artwork);
                onClose();
              }}
              className="mt-4 w-full py-2.5 bg-[#111111] text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={13} />
              <span>Consultar por esta Obra</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
