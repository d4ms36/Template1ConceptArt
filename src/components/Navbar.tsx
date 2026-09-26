import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Plus, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  brandName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = 'ELENA ROCHE · ART STUDIO',
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Obras & Galería', href: '#works' },
    { label: 'Manifiesto', href: '#manifesto' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E2DDD5] py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo (Artist Name) */}
          <a
            href="#"
            className="text-lg md:text-xl font-heading font-black tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
          >
            {brandName}
          </a>

          {/* Action Zone: Clean Menu Trigger Button (Coulee Creative Style) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span>{menuOpen ? 'Close' : 'Menu'}</span>
              <span className="w-3.5 h-3.5 flex items-center justify-center">
                {menuOpen ? <X size={14} /> : <Menu size={14} />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111] text-[#FAF8F5] transition-all duration-500 flex flex-col justify-between p-8 md:p-16 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            {brandName}
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white flex items-center gap-2 cursor-pointer"
          >
            <span>Close (ESC)</span>
            <X size={16} />
          </button>
        </div>

        <nav className="my-auto py-8 flex flex-col space-y-4 md:space-y-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-neutral-300 hover:text-white transition-all transform hover:translate-x-3"
            >
              <span className="flex items-center gap-4">
                <span className="text-xs md:text-sm font-mono-acc text-neutral-600 font-normal">
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
              </span>
              <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <span className="text-white block font-medium">Studio Inquiries</span>
            <a href="mailto:studio@artistportfolio.com" className="hover:text-white">
              studio@artistportfolio.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <span>·</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
