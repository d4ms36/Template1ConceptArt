import React from 'react';
import { FistBumpInteractive } from './FistBumpInteractive';
import { ArrowUpRight } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="w-full bg-[#FAF8F5] pt-16 pb-0 border-t border-[#E2DDD5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center md:text-left">
        {/* Section kicker */}
        <div className="flex items-center justify-center md:justify-start gap-3 text-xs font-mono-acc text-[#777267] uppercase tracking-wider mb-4">
          <span className="w-6 h-px bg-[#111111]" />
          <span>The Artist Manifesto</span>
        </div>

        {/* Big Punchy Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-[#111111] leading-[1.1] max-w-3xl text-balance">
          Art, Paint & Works That Actually Speak.
        </h2>

        {/* Concise Artist Statement (much more compact and human) */}
        <p className="mt-6 text-base sm:text-lg text-[#4A4740] leading-relaxed max-w-2xl">
          I create art for people who want to feel something authentic in their daily spaces.
          No pretentious art jargon—just rich pigments, physical tactile layers, and pieces born from honest observation.
        </p>

        {/* Interactive Fist Bump / Media Container */}
        <div className="mt-6 mb-12">
          <FistBumpInteractive />
        </div>
      </div>

      {/* Ribbon Banner */}
      <div className="w-full bg-[#111111] text-[#FAF8F5] py-6 border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm font-heading font-semibold text-neutral-200">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#34D399]" />
            <span>Taking over the world, one canvas at a time.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono-acc text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Instagram</span>
              <ArrowUpRight size={12} />
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Twitter</span>
              <ArrowUpRight size={12} />
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Facebook</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
