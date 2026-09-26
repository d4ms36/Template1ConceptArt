import { RotatingWord, Artwork } from '../types';

/**
 * ============================================================================
 * GUÍA DE PERSONALIZACIÓN PARA EL ARTISTA
 * ============================================================================
 * 
 * 1. PALABRAS ROTATIVAS DEL HERO:
 *    - Cambia o añade palabras en `ROTATING_WORDS` para describir tu arte y vibra.
 * 
 * 2. TUS OBRAS DE ARTE (IMÁGENES Y DETALLES):
 *    - Modifica o añade obras en el array `INITIAL_ARTWORKS`.
 *    - Puedes agregar una URL de imagen real en el campo `imageUrl: "https://..."`
 *      o usar el botón "Añadir Obra / Cambiar Foto" directamente en la web.
 * ============================================================================
 */

export const ROTATION_INTERVAL_MS = 2800;

export const ROTATING_WORDS: RotatingWord[] = [
  {
    id: 'creative',
    word: 'Creative',
    highlightColor: '#2563EB',
    accentBg: 'rgba(37, 99, 235, 0.08)',
    description: 'Transforming ideas into tactile, visual emotions.',
  },
  {
    id: 'fierce',
    word: 'Fierce',
    highlightColor: '#D9381E',
    accentBg: 'rgba(217, 56, 30, 0.08)',
    description: 'Unapologetic brushstrokes and vivid contrasts.',
  },
  {
    id: 'lively',
    word: 'Lively',
    highlightColor: '#D97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    description: 'Rhythm, motion, and organic vibrancy on canvas.',
  },
  {
    id: 'friendly',
    word: 'Friendly',
    highlightColor: '#1E7B5E',
    accentBg: 'rgba(30, 123, 94, 0.08)',
    description: 'Accessible art meant to connect and spark curiosity.',
  },
  {
    id: 'stoked',
    word: 'Stoked',
    highlightColor: '#E11D48',
    accentBg: 'rgba(225, 29, 72, 0.08)',
    description: 'Passionate exploration of form, texture, and light.',
  },
];

/**
 * GALERÍA DE OBRAS DE ARTE
 * ¡Aquí tienes 6 espacios listos para tus imágenes y obras!
 */
export const INITIAL_ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    imageSlot: 1,
    title: 'Echoes of Solitude',
    category: 'paintings',
    categoryLabel: 'Pintura al Óleo',
    year: '2025',
    medium: 'Óleo y pigmento sobre lino crudo',
    dimensions: '120 × 90 cm',
    status: 'Available',
    imageUrl: '',
    visualTheme: {
      bgGradient: 'from-[#1E293B] via-[#0F172A] to-[#020617]',
      accentColor: '#38BDF8',
      paletteTag: 'Cobalt & Midnight',
      textureStyle: 'fluid-wash',
    },
    description: 'Una exploración de la quietud nocturna a través de capas densas de azul cobalto y veladuras etéreas de blanco titanio.',
  },
  {
    id: 'art-2',
    imageSlot: 2,
    title: 'Chromatic Pulse No. 04',
    category: 'paintings',
    categoryLabel: 'Acrílico & Espátula',
    year: '2025',
    medium: 'Acrílico pesado sobre lienzo',
    dimensions: '100 × 100 cm',
    status: 'Available',
    imageUrl: '',
    visualTheme: {
      bgGradient: 'from-[#431407] via-[#290E05] to-[#140602]',
      accentColor: '#F97316',
      paletteTag: 'Terracota & Fuego',
      textureStyle: 'vibrant-color',
    },
    description: 'Textura matérica agresiva creada con espátula, capturando la energía cinética del amanecer sobre el desierto.',
  },
  {
    id: 'art-3',
    imageSlot: 3,
    title: 'Terra Incognita',
    category: 'mixed-media',
    categoryLabel: 'Técnica Mixta',
    year: '2024',
    medium: 'Arena volcánica, carbón y grafito sobre madera',
    dimensions: '140 × 80 cm',
    status: 'Sold',
    imageUrl: '',
    visualTheme: {
      bgGradient: 'from-[#262626] via-[#171717] to-[#0A0A0A]',
      accentColor: '#E5E5E5',
      paletteTag: 'Carbón & Ceniza',
      textureStyle: 'organic-earth',
    },
    description: 'Composición mineral que reflexiona sobre la erosión del paisaje y el paso del tiempo.',
  },
  {
    id: 'art-4',
    imageSlot: 4,
    title: 'Subtle Radiance',
    category: 'prints',
    categoryLabel: 'Grabado / Print',
    year: '2025',
    medium: 'Serigrafía artesanal en papel algodón Hahnemühle (Edición de 25)',
    dimensions: '70 × 50 cm',
    status: 'Available',
    imageUrl: '',
    visualTheme: {
      bgGradient: 'from-[#14532D] via-[#0D381E] to-[#052211]',
      accentColor: '#4ADE80',
      paletteTag: 'Esmeralda & Musgo',
      textureStyle: 'minimal-mono',
    },
    description: 'Formas geométricas reduccionistas estampadas a mano con tinta dorada mate y verde bosque profundo.',
  },
  {
    id: 'art-5',
    imageSlot: 5,
    title: 'Labyrinth of Thought',
    category: 'digital',
    categoryLabel: 'Arte Digital & Giclée',
    year: '2024',
    medium: 'Impresión digital giclée sobre papel baritado fine art',
    dimensions: '80 × 60 cm',
    status: 'Studio Collection',
    imageUrl: '',
    visualTheme: {
      bgGradient: 'from-[#3B0764] via-[#24033E] to-[#120120]',
      accentColor: '#C084FC',
      paletteTag: 'Violeta & Amatista',
      textureStyle: 'abstract-geo',
    },
    description: 'Geometría algorítmica orgánica generada por código y refinada con pinceladas digitales.',
  },
  {
    id: 'art-6',
    imageSlot: 6,
    title: 'Equinox in Red',
    category: 'paintings',
    categoryLabel: 'Pintura al Óleo',
    year: '2024',
    medium: 'Óleo sobre tela de cáñamo',
    dimensions: '150 × 120 cm',
    status: 'Available',
    imageUrl: '',
    visualTheme: {
      bgGradient: 'from-[#7F1D1D] via-[#4C0505] to-[#250202]',
      accentColor: '#F87171',
      paletteTag: 'Rojo Carmesí',
      textureStyle: 'vibrant-color',
    },
    description: 'Un estudio de tensión cromática dominado por carmín de alizarina y contrastes en negro de marfil.',
  },
];
