import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Flame } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface DiwaliHeroProps {
  onExploreClick: () => void;
  onDiyaSectionClick: () => void;
}

export const DiwaliHero: React.FC<DiwaliHeroProps> = ({
  onExploreClick,
  onDiyaSectionClick,
}) => {
  const headingText = "HAPPY DIWALI";

  const handleHeroDiyaClick = () => {
    soundEngine.playDiyaIgniteSound();
    soundEngine.playTempleChime();
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF8EC] to-[#FFFDF7]">
      {/* Background Radial Festive Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-35 bg-gradient-to-tr from-[#FF9D36] via-[#F5C76B] to-[#FFE082]" />

      {/* Rotating 2D Game Asset Rangoli Mandala in the center background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-25">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] rounded-full overflow-hidden"
        >
          <img
            src="/assets/images/rangoli-mandala.jpg"
            alt="Diwali Rangoli Mandala 2D Graphic Asset"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Joint Presenter Pill Badge with Real OpenmadurAI Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#F5C76B]/60 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(217,119,6,0.15)] mb-6"
        >
          {/* Logo thumbnail */}
          <img
            src="/openmadurai-logo.png"
            alt="OpenmadurAI Community Logo"
            className="w-6 h-6 rounded object-contain"
          />

          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9D36] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C76B]"></span>
          </span>

          <span className="text-xs md:text-sm font-bold tracking-widest text-[#2A1B12] uppercase">
            OpenmadurAI <span className="text-[#D97706] font-bold">×</span> GDG Madurai
          </span>

          <span className="text-xs text-[#78350F] font-serif italic hidden sm:inline">
            • A Grand Union of AI & Tech Communities
          </span>
        </motion.div>

        {/* Grand Festive Main Heading with character stagger */}
        <div className="relative mb-3">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-festive tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#991B1B] via-[#D97706] to-[#B45309] drop-shadow-[0_4px_25px_rgba(217,119,6,0.25)] flex flex-wrap justify-center gap-x-3 md:gap-x-6"
            aria-label={headingText}
          >
            {headingText.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 40, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + (wordIndex * 6 + charIndex) * 0.05,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block hover:scale-110 transition-transform duration-200"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Golden Sub-header ornament */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="h-[3px] w-48 md:w-80 mx-auto mt-2 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full"
          />
        </div>

        {/* Supporting Festive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-base sm:text-xl md:text-2xl text-[#6B4E3D] font-serif italic max-w-3xl mx-auto leading-relaxed mt-4"
        >
          "May the light of Diwali illuminate every heart with happiness, peace, prosperity and endless possibilities."
        </motion.p>

        {/* Central 2D Game Asset Illuminated Diya Image Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          onClick={handleHeroDiyaClick}
          className="relative mt-8 md:mt-10 cursor-pointer group flex flex-col items-center select-none"
          title="Click to seek blessings & play festive chime"
        >
          {/* Circular 2D Graphic Image Frame */}
          <div className="relative p-2.5 rounded-full border-4 border-[#F5C76B] bg-white shadow-[0_12px_45px_rgba(217,119,6,0.3)] group-hover:shadow-[0_16px_60px_rgba(245,199,107,0.5)] transition-shadow">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-[#FFFDF7]">
              <img
                src="/assets/images/diwali-diya-hero.jpg"
                alt="Festive Illuminated Diya 2D Graphic Asset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 rounded-full border border-amber-300 pointer-events-none animate-pulse" />
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-[#FFF2D6] border border-[#F5C76B]/60 text-xs font-bold text-[#B45309] uppercase tracking-widest shadow-sm">
            <span>✦ Tap Diya to Bless ✦</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onDiyaSectionClick}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] font-bold text-sm md:text-base tracking-wider uppercase shadow-[0_4px_25px_rgba(255,157,54,0.4)] hover:shadow-[0_6px_35px_rgba(245,199,107,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Flame className="w-5 h-5 text-[#991B1B] fill-[#991B1B] group-hover:animate-bounce" />
            <span>Light an Auspicious Diya</span>
          </button>

          <button
            onClick={onExploreClick}
            className="px-8 py-4 rounded-full border border-[#D97706]/40 bg-white/90 text-[#2A1B12] font-semibold text-sm md:text-base tracking-wider uppercase hover:border-[#D97706] hover:bg-[#FFF7E8] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Explore Celebration</span>
          </button>
        </motion.div>

        {/* Festive Quote Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex items-center gap-2 text-xs text-[#78350F]/80 font-sans tracking-wide"
        >
          <Heart className="w-3.5 h-3.5 text-[#C73532] fill-[#C73532]" />
          <span>Celebrating the victory of light over darkness & knowledge over ignorance</span>
        </motion.div>
      </div>
    </section>
  );
};
