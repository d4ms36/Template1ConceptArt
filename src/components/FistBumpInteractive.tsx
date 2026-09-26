import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface FistBumpProps {
  onBump?: () => void;
  customImageUrl?: string;
}

export const FistBumpInteractive: React.FC<FistBumpProps> = ({
  onBump,
  customImageUrl,
}) => {
  const [bumpCount, setBumpCount] = useState<number>(142);
  const [isBumping, setIsBumping] = useState<boolean>(false);
  const [showSparkles, setShowSparkles] = useState<boolean>(false);

  const triggerBump = () => {
    if (isBumping) return;
    setIsBumping(true);
    setShowSparkles(true);
    setBumpCount((prev) => prev + 1);
    if (onBump) onBump();

    setTimeout(() => {
      setIsBumping(false);
    }, 450);

    setTimeout(() => {
      setShowSparkles(false);
    }, 900);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8 overflow-hidden rounded-2xl border border-[#E2DDD5] bg-[#F4EFEA] p-6 md:p-8 text-center shadow-xs">
      {/* Top subtle identification bar (Clear reference, elegant and not exaggerated) */}
      <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 mb-6 text-xs text-[#777268]">
        <div className="flex items-center gap-2">
          <ImageIcon size={14} className="text-[#111111]" />
          <span className="font-mono-acc text-[11px] font-semibold text-[#111111] uppercase tracking-wider">
            Imagen Manifiesto · GIF Interactivo
          </span>
        </div>
        <span className="font-mono-acc text-[11px] text-[#888378]">
          Inspiración Coulee Creative
        </span>
      </div>

      {/* Main Display Container */}
      <div
        onClick={triggerBump}
        className="relative group cursor-pointer select-none mx-auto py-8 px-4 rounded-xl bg-gradient-to-b from-[#FAF8F5] to-[#EFEAE2] border border-[#E2DDD5] flex flex-col items-center justify-center min-h-[250px] md:min-h-[280px] transition-all hover:border-[#C4BCB0]"
      >
        {customImageUrl ? (
          <div className="relative w-full max-w-md h-60 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={customImageUrl}
              alt="Manifiesto visual"
              referrerPolicy="no-referrer"
              className={`max-h-full max-w-full object-contain transition-transform duration-300 ${
                isBumping ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ) : (
          /* Animated Fist Bump Vector */
          <div className="relative w-full max-w-md h-44 flex items-center justify-center">
            {/* Spark Energy Burst Center */}
            <div
              className={`absolute z-20 flex items-center justify-center transition-all duration-300 ${
                showSparkles ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
              }`}
            >
              <div className="relative">
                <span className="absolute -inset-4 bg-[#FFD700]/30 rounded-full blur-md animate-ping" />
                <div className="flex items-center gap-1 bg-[#111111] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  <Sparkles size={14} className="text-[#FFD700] fill-current" />
                  <span>BUMP!</span>
                </div>
              </div>
            </div>

            {/* Left Fist */}
            <div
              className={`transition-all duration-300 ease-out transform ${
                isBumping ? 'translate-x-8 rotate-6 scale-105' : 'translate-x-0 rotate-0'
              }`}
            >
              <svg width="105" height="85" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                <rect x="0" y="32" width="45" height="36" rx="6" fill="#1C1B1A" />
                <rect x="36" y="24" width="46" height="52" rx="14" fill="#2E2C29" />
                <rect x="76" y="28" width="16" height="12" rx="4" fill="#3D3A36" />
                <rect x="78" y="42" width="16" height="12" rx="4" fill="#3D3A36" />
                <rect x="76" y="56" width="16" height="12" rx="4" fill="#3D3A36" />
                <path d="M48 24C48 18 56 16 66 18C74 20 78 26 78 32H54C48 32 48 28 48 24Z" fill="#3D3A36" />
                <rect x="10" y="30" width="8" height="40" rx="3" fill="#D97706" />
              </svg>
            </div>

            {/* Impact Flash */}
            <div
              className={`w-6 h-6 rounded-full bg-[#111111] transition-all duration-200 ${
                isBumping ? 'opacity-30 scale-150' : 'opacity-0 scale-50'
              }`}
            />

            {/* Right Fist */}
            <div
              className={`transition-all duration-300 ease-out transform ${
                isBumping ? '-translate-x-8 -rotate-6 scale-105' : 'translate-x-0 rotate-0'
              }`}
            >
              <svg width="105" height="85" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                <rect x="75" y="32" width="45" height="36" rx="6" fill="#E8DED2" />
                <rect x="38" y="24" width="46" height="52" rx="14" fill="#D8CAB8" />
                <rect x="28" y="28" width="16" height="12" rx="4" fill="#C7B6A0" />
                <rect x="26" y="42" width="16" height="12" rx="4" fill="#C7B6A0" />
                <rect x="28" y="56" width="16" height="12" rx="4" fill="#C7B6A0" />
                <path d="M72 24C72 18 64 16 54 18C46 20 42 26 42 32H66C72 32 72 28 72 24Z" fill="#C7B6A0" />
                <rect x="102" y="30" width="6" height="40" rx="3" fill="#111111" />
              </svg>
            </div>
          </div>
        )}

        {/* Action Prompt */}
        <div className="mt-3 flex flex-col items-center gap-1.5">
          <div className="px-4 py-1.5 bg-[#111111] text-[#FAF8F5] text-xs font-semibold tracking-wide uppercase rounded-full flex items-center gap-2 shadow-xs">
            <span>👊 Click Para Choque de Puños</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-mono">
              {bumpCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
