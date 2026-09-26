import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0D0D0D] text-neutral-400 py-16 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800">
          <div>
            <span className="text-xl font-heading font-black tracking-tight text-white block">
              COULEE CREATIVE
            </span>
            <span className="text-xs font-mono-acc text-neutral-500 mt-1 block">
              Crafting websites, apps & marketing that actually work.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono-acc">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#manifesto" className="hover:text-white transition-colors">
              Manifesto
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-acc text-neutral-600">
          <p>© {new Date().getFullYear()} Coulee Creative Showcase Template. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
