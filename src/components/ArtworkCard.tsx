import React, { useState } from 'react';
import { Artwork } from '../types';
import { Image as ImageIcon, ArrowUpRight } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  onOpenLightbox: (artwork: Artwork) => void;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  onOpenLightbox,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  // Renderiza la imagen real si existe; en caso contrario, un placeholder limpio "Imagen X"
  const renderMedia = () => {
    if (artwork.imageUrl && !imageError) {
      return (
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      );
    }

    // Placeholder elegante, sutil y no exagerado para identificar claramente el espacio de la imagen
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-[#EFEAE2] text-[#666258] transition-transform duration-500 ease-out group-hover:scale-102">
        {/* Marcador sutil de encuadre en las cuatro esquinas */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C4BCB0]" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C4BCB0]" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#C4BCB0]" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C4BCB0]" />

        {/* Icono discreto y número de imagen claramente identificado */}
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-xl bg-[#E4DDD3] flex items-center justify-center mb-2.5 text-[#55524B]">
            <ImageIcon size={20} strokeWidth={1.5} />
          </div>
          <span className="text-sm font-mono-acc font-semibold text-[#111111] tracking-wide">
            Imagen {artwork.imageSlot}
          </span>
          <span className="text-[11px] font-mono-acc text-[#888378] mt-0.5">
            {artwork.dimensions} · {artwork.categoryLabel}
          </span>
        </div>

        {/* Indicador sutil de hover al pasar el ratón */}
        <div className="absolute bottom-3 text-[10px] font-mono-acc text-[#99948A] opacity-0 group-hover:opacity-100 transition-opacity">
          Click para ampliar
        </div>
      </div>
    );
  };

  return (
    <article
      onClick={() => onOpenLightbox(artwork)}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#E2DDD5] overflow-hidden shadow-xs hover:border-[#111111]/40 transition-all duration-300 cursor-pointer"
    >
      {/* 
        ========================================================================
        ÁREA DE LA IMAGEN (IDENTIFICADOR LIMPIO: Imagen 1, Imagen 2, etc.)
        ========================================================================
      */}
      <div className="relative w-full aspect-[4/3] bg-[#EFEAE2] overflow-hidden border-b border-[#E8E3DA]">
        {renderMedia()}

        {/* Estado sutil de la obra (Disponible / Vendido) */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-acc uppercase tracking-wider backdrop-blur-md ${
              artwork.status === 'Available'
                ? 'bg-[#1E7B5E]/90 text-white'
                : artwork.status === 'Sold'
                ? 'bg-neutral-800/80 text-neutral-300'
                : 'bg-[#D97706]/90 text-white'
            }`}
          >
            {artwork.status === 'Available' ? 'Disponible' : artwork.status === 'Sold' ? 'Vendido' : 'Estudio'}
          </span>
        </div>

        {/* Botón flotante al hover */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
          <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-md">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        DETALLES DE LA OBRA (SIN BOTONES ADICIONALES)
        ========================================================================
      */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-xs font-mono-acc text-[#777267] mb-1">
            <span>{artwork.categoryLabel}</span>
            <span>{artwork.year}</span>
          </div>

          <h3 className="text-xl font-heading font-extrabold text-[#111111] tracking-tight group-hover:text-neutral-700 transition-colors">
            {artwork.title}
          </h3>

          <p className="mt-1 text-xs text-[#55524B] line-clamp-2">
            {artwork.description}
          </p>
        </div>

        {/* Ficha técnica limpia al pie de la tarjeta */}
        <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-between text-xs text-[#777267]">
          <span className="font-mono-acc text-[11px] truncate">
            {artwork.medium}
          </span>
          <span className="font-mono-acc text-[11px] text-[#111111] font-medium">
            {artwork.dimensions}
          </span>
        </div>
      </div>
    </article>
  );
};
