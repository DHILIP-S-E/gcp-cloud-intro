import React from 'react';
import { motion } from 'framer-motion';
import { DiyaVector, RangoliVector } from './VectorGraphics';
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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-30 dark:opacity-35 bg-gradient-to-tr from-[#C73532] via-[#FF9D36] to-[#F5C76B]" />

      {/* Floating Rotating Rangoli in the center background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <RangoliVector size={580} spinDuration={90} className="opacity-20 dark:opacity-35" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Joint Presenter Pill Badge with Real OpenmadurAI Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#F5C76B]/40 bg-[#FFF7E8]/90 dark:bg-[#111629]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(217,119,6,0.15)] dark:shadow-[0_0_20px_rgba(245,199,107,0.15)] mb-6"
        >
          {/* Logo thumbnail */}
          <img
            src="/openmadurai-logo.png"
            alt="OpenmadurAI Community Logo"
            className="w-5 h-5 rounded object-contain"
          />

          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9D36] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C76B]"></span>
          </span>

          <span className="text-xs md:text-sm font-semibold tracking-widest text-[#2A1B12] dark:text-[#FFF1D6] uppercase">
            OpenmadurAI <span className="text-[#D97706] dark:text-[#F5C76B] font-bold">×</span> GDG Madurai
          </span>

          <span className="text-xs text-[#78350F] dark:text-[#F5C76B]/80 font-serif italic hidden sm:inline">
            • A Grand Union of AI & Tech Communities
          </span>
        </motion.div>

        {/* Grand Festive Main Heading with character stagger */}
        <div className="relative mb-3">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-festive tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#B45309] via-[#D97706] to-[#C73532] dark:from-[#FFFBEB] dark:via-[#F5C76B] dark:to-[#FF9D36] drop-shadow-[0_4px_25px_rgba(217,119,6,0.3)] dark:drop-shadow-[0_4px_30px_rgba(245,199,107,0.5)] flex flex-wrap justify-center gap-x-3 md:gap-x-6"
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
            className="h-[2px] w-48 md:w-80 mx-auto mt-2 bg-gradient-to-r from-transparent via-[#D97706] dark:via-[#F5C76B] to-transparent"
          />
        </div>

        {/* Supporting Festive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-base sm:text-xl md:text-2xl text-[#6B4E3D] dark:text-[#FFF1D6]/90 font-serif italic max-w-3xl mx-auto leading-relaxed mt-4 drop-shadow-sm"
        >
          "May the light of Diwali illuminate every heart with happiness, peace, prosperity and endless possibilities."
        </motion.p>

        {/* Central Realistic Large Diya with Surrounding Companion Diyas */}
        <div className="relative mt-8 md:mt-12 flex items-center justify-center w-full">
          {/* Left Companion Diya 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hidden sm:block absolute left-4 md:left-16 bottom-2 cursor-pointer transform hover:scale-110 transition-transform"
            onClick={handleHeroDiyaClick}
            title="Click to seek blessings"
          >
            <DiyaVector size={95} isLit={true} flameScale={0.9} glowColor="#FF9D36" />
          </motion.div>

          {/* Left Inner Companion Diya 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden md:block absolute left-36 bottom-8 cursor-pointer transform hover:scale-110 transition-transform"
            onClick={handleHeroDiyaClick}
          >
            <DiyaVector size={70} isLit={true} flameScale={0.8} glowColor="#F5C76B" />
          </motion.div>

          {/* Central Grand Hero Diya */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            onClick={handleHeroDiyaClick}
            className="cursor-pointer relative z-20 group"
            title="Click the Sacred Diya to ignite positive energy"
          >
            <DiyaVector size={210} isLit={true} flameScale={1.25} glowColor="#FF9D36" showRays={true} />
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[11px] font-sans uppercase tracking-widest text-[#B45309] dark:text-[#F5C76B] font-bold mt-2 group-hover:text-[#D97706] dark:group-hover:text-white transition-colors"
            >
              ✦ Tap Diya to Bless ✦
            </motion.div>
          </motion.div>

          {/* Right Inner Companion Diya 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden md:block absolute right-36 bottom-8 cursor-pointer transform hover:scale-110 transition-transform"
            onClick={handleHeroDiyaClick}
          >
            <DiyaVector size={70} isLit={true} flameScale={0.8} glowColor="#F5C76B" />
          </motion.div>

          {/* Right Companion Diya 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hidden sm:block absolute right-4 md:right-16 bottom-2 cursor-pointer transform hover:scale-110 transition-transform"
            onClick={handleHeroDiyaClick}
            title="Click to seek blessings"
          >
            <DiyaVector size={95} isLit={true} flameScale={0.9} glowColor="#F47B20" />
          </motion.div>
        </div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onDiyaSectionClick}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] font-bold text-sm md:text-base tracking-wider uppercase shadow-[0_4px_25px_rgba(255,157,54,0.4)] hover:shadow-[0_4px_35px_rgba(245,199,107,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Flame className="w-5 h-5 text-[#C73532] fill-[#C73532] group-hover:animate-bounce" />
            <span>Light an Auspicious Diya</span>
          </button>

          <button
            onClick={onExploreClick}
            className="px-8 py-4 rounded-full border border-[#D97706]/40 dark:border-[#F5C76B]/40 bg-[#FFF7E8]/90 dark:bg-[#111629]/80 backdrop-blur-md text-[#2A1B12] dark:text-[#FFF1D6] font-semibold text-sm md:text-base tracking-wider uppercase hover:border-[#D97706] dark:hover:border-[#F5C76B] hover:bg-[#FFF2D6] dark:hover:bg-[#111629] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D97706] dark:text-[#F5C76B]" />
            <span>Explore Celebration</span>
          </button>
        </motion.div>

        {/* Festive Quote Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 flex items-center gap-2 text-xs text-[#78350F]/80 dark:text-[#FFF1D6]/60 font-sans tracking-wide"
        >
          <Heart className="w-3.5 h-3.5 text-[#C73532] fill-[#C73532]" />
          <span>Celebrating the victory of light over darkness & knowledge over ignorance</span>
        </motion.div>
      </div>
    </section>
  );
};
