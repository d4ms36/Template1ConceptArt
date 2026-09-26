import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Pause, Play, Sparkles } from 'lucide-react';
import { ROTATING_WORDS, ROTATION_INTERVAL_MS } from '../data/agencyData';

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsTransitioning(false);
      }, 250);
    }, ROTATION_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleSelectWord = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const currentWordObj = ROTATING_WORDS[currentIndex];

  const handleScrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-between items-center px-6 md:px-12 pt-28 pb-10 overflow-hidden bg-[#FAF8F5]">
      {/* Background subtle brutalist grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Studio Indicator */}
      <div className="w-full flex justify-between items-center max-w-5xl mx-auto pt-2 text-xs font-mono-acc text-[#888378]">
        <span>SOLO ARTIST STUDIO · ORIGINAL WORKS</span>
        <span>AVAILABLE FOR COMMISSIONS</span>
      </div>

      {/* Central Visual & Typographic Hero */}
      <div className="w-full max-w-4xl mx-auto my-auto text-center flex flex-col items-center justify-center">
        {/* Main Dynamic Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tight text-[#111111] leading-[1.05] select-none">
          <span className="block mb-2">We Are</span>

          <span className="relative inline-block">
            <span
              style={{ color: currentWordObj.highlightColor }}
              className={`inline-block transition-all duration-300 ease-out transform ${
                isTransitioning
                  ? 'opacity-0 -translate-y-4 scale-95 blur-xs'
                  : 'opacity-100 translate-y-0 scale-100 blur-none'
              }`}
            >
              {currentWordObj.word}.
            </span>
          </span>
        </h1>

        {/* Short artist statement */}
        <p className="mt-6 max-w-xl text-base sm:text-lg text-[#55524B] font-normal leading-relaxed text-balance">
          Original paintings, mixed media, and limited fine art editions.
          Every piece is handcrafted with raw pigment, texture, and deep intention.
        </p>

        {/* Word Switcher Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {ROTATING_WORDS.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectWord(idx)}
                className={`px-3 py-1 text-xs font-mono-acc font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#EDE7DE] text-[#666258] hover:bg-[#E2DDD3] hover:text-[#111111]'
                }`}
              >
                {item.word}
              </button>
            );
          })}

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-full text-[#777267] hover:text-[#111111] transition-colors cursor-pointer"
            title={isPaused ? 'Reanudar rotación' : 'Pausar'}
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="w-full flex flex-col items-center justify-center pt-4">
        <button
          onClick={handleScrollToWorks}
          className="group flex flex-col items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#777267] hover:text-[#111111] transition-colors cursor-pointer"
          aria-label="Scroll To Explore"
        >
          <span>Scroll To Explore Works</span>
          <div className="w-7 h-7 rounded-full border border-[#D5CEC2] group-hover:border-[#111111] flex items-center justify-center transition-colors animate-scroll-bounce">
            <ArrowDown size={13} />
          </div>
        </button>
      </div>
    </section>
  );
};
