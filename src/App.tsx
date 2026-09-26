/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Artwork } from './types';
import { INITIAL_ARTWORKS } from './data/agencyData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { ArtworkGallery } from './components/ArtworkGallery';
import { StudioContact } from './components/StudioContact';
import { Footer } from './components/Footer';
import { ArtworkLightboxModal } from './components/ArtworkLightboxModal';

export default function App() {
  const [artworks] = useState<Artwork[]>(INITIAL_ARTWORKS);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [inquiredTitle, setInquiredTitle] = useState<string>('');

  const handleInquireArtwork = (art: Artwork) => {
    setInquiredTitle(art.title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111111] selection:bg-[#111111] selection:text-[#FAF8F5]">
      {/* 
        1. NAVEGACIÓN STICKY & MINIMALISTA
        - Logotipo a la izquierda
        - Botón Menu a la derecha (sin botones adicionales)
      */}
      <Navbar brandName="STUDIO ARTIST" />

      <main className="flex-1 w-full">
        {/* 
          2. HERO SECTION COMPACTO CON PALABRAS ROTATIVAS
        */}
        <HeroSection />

        {/* 
          3. EL MANIFIESTO DEL ARTISTA & CHOQUE DE PUÑOS (FIST BUMP)
          - Con referencia sutil al espacio de imagen / GIF del manifiesto
        */}
        <ManifestoSection />

        {/* 
          4. GALERÍA DE OBRAS (MEDIA-FIRST)
          - Identificadas claramente como "Imagen 1", "Imagen 2", etc.
          - Sin botones adicionales molestos de "aquí irá una imagen"
        */}
        <ArtworkGallery
          artworks={artworks}
          onOpenLightbox={(art) => setSelectedArtwork(art)}
        />

        {/* 
          5. CONTACTO CON EL ESTUDIO (CONCISO Y DIRECTO)
        */}
        <StudioContact inquiredArtworkTitle={inquiredTitle} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL LIGHTBOX PARA VISUALIZAR OBRAS EN GRANDE */}
      <ArtworkLightboxModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onInquire={handleInquireArtwork}
      />
    </div>
  );
}
