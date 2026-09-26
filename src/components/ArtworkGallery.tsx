import React, { useState } from 'react';
import { Artwork } from '../types';
import { ArtworkCard } from './ArtworkCard';
import { Plus, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';

interface ArtworkGalleryProps {
  artworks: Artwork[];
  onOpenLightbox: (artwork: Artwork) => void;
}

export const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({
  artworks,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'paintings' | 'prints' | 'mixed-media' | 'digital'>('all');

  const filteredArtworks = activeFilter === 'all'
    ? artworks
    : artworks.filter((art) => art.category === activeFilter);

  return (
    <section id="works" className="w-full bg-[#FAF8F5] py-20 border-t border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2DDD5]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-acc text-[#777267] uppercase tracking-wider mb-2">
              <span className="w-5 h-px bg-[#111111]" />
              <span>Galería de Obras / Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-[#111111]">
              Art Archive.
            </h2>
          </div>

          <div className="text-xs font-mono-acc text-[#777267]">
            {filteredArtworks.length} obras registradas en catálogo
          </div>
        </div>

        {/* Filter Tabs & Count */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `Todas (${artworks.length})` },
              { id: 'paintings', label: 'Pinturas' },
              { id: 'mixed-media', label: 'Técnica Mixta' },
              { id: 'prints', label: 'Grabados & Prints' },
              { id: 'digital', label: 'Digital' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-mono-acc font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-[#EDE7DE] text-[#666258] hover:bg-[#E2DDD3] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono-acc text-[#777267]">
            Mostrando Imagen 1 – Imagen {filteredArtworks.length}
          </div>
        </div>

        {/* 
          ======================================================================
          GRID DE OBRAS (MEDIA-FIRST VISUAL GRID)
          ======================================================================
        */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
