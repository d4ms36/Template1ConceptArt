export interface RotatingWord {
  id: string;
  word: string;
  highlightColor: string;
  accentBg: string;
  description: string;
}

export interface Artwork {
  id: string;
  imageSlot: number; // Número de identificación del espacio: 1, 2, 3...
  title: string;
  category: 'paintings' | 'prints' | 'mixed-media' | 'digital';
  categoryLabel: string;
  year: string;
  medium: string;
  dimensions: string;
  status: 'Available' | 'Sold' | 'Studio Collection';
  imageUrl?: string;
  visualTheme: {
    bgGradient: string;
    accentColor: string;
    paletteTag: string;
    textureStyle: 'abstract-geo' | 'fluid-wash' | 'minimal-mono' | 'vibrant-color' | 'organic-earth';
  };
  description: string;
}
