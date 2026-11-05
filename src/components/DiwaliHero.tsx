import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Flame, MapPin } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface DiwaliHeroProps {
  onExploreClick: () => void;
  onDiyaSectionClick: () => void;
}

export const DiwaliHero: React.FC<DiwaliHeroProps> = ({
  onExploreClick,
  onDiyaSectionClick,
}) => {
  const handleHeroDiyaClick = () => {
    soundEngine.playDiyaIgniteSound();
    soundEngine.playTempleChime();
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF8EC] to-[#FFFDF7]">
      {/* Background Soft Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-30 bg-gradient-to-tr from-[#FF9D36] via-[#F5C76B] to-[#FFE082]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Cultural & Geographic Badge: Madurai Soil */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D97706]/40 bg-white shadow-sm mb-5"
        >
          <MapPin className="w-4 h-4 text-[#C73532]" />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-[#78350F]">
            தூங்கா நகரம் • The Temple City of Sleepless Lights
          </span>
          <span className="hidden sm:inline text-xs text-[#B45309] font-serif italic">
            | Madurai, Tamil Nadu
          </span>
        </motion.div>

        {/* Joint Community Presenter Pill with Real OpenmadurAI Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#F5C76B]/60 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(217,119,6,0.12)] mb-6"
        >
          <img
            src="/openmadurai-logo.png"
            alt="OpenmadurAI Community Logo"
            className="w-6 h-6 rounded object-contain"
          />

          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9D36] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C76B]"></span>
          </span>

          <span className="text-xs md:text-sm font-bold tracking-wider text-[#2A1B12] uppercase font-sans">
            OpenmadurAI <span className="text-[#D97706] font-bold">×</span> GDG Madurai
          </span>

          <span className="text-xs text-[#78350F] font-serif italic hidden md:inline">
            • Builders with Grit & Soul
          </span>
        </motion.div>

        {/* Soulful Tamil & English Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-2 mb-4"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-black font-festive text-[#991B1B] tracking-wide">
            நம்ம ஊரு • நம்ம தீபாவளி
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-festive tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#991B1B] via-[#D97706] to-[#B45309] drop-shadow-[0_4px_20px_rgba(217,119,6,0.2)]">
            FESTIVAL OF LIGHTS
          </h1>
          <div className="h-[3px] w-48 md:w-80 mx-auto mt-2 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full" />
        </motion.div>

        {/* The Human Story - Raw, Honest, Grounded */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[#5C4A3E] font-serif italic max-w-2xl mx-auto leading-relaxed mt-2"
        >
          "From late-night chai stalls near Madurai station to midnight coding marathons across local hack spaces — we don't just build software. We build hope, brotherhood, and a world-class AI future right from our hometown."
        </motion.p>

        {/* The Central Iconic Diya Card */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          onClick={handleHeroDiyaClick}
          className="relative mt-8 md:mt-10 cursor-pointer group flex flex-col items-center select-none"
          title="Click to seek blessings & play festive chime"
        >
          <div className="relative p-2.5 rounded-full border-4 border-[#F5C76B] bg-white shadow-[0_12px_45px_rgba(217,119,6,0.25)] group-hover:shadow-[0_16px_55px_rgba(245,199,107,0.45)] transition-shadow">
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-[#FFFDF7]">
              <img
                src="/assets/images/diwali-diya-hero.jpg"
                alt="Festive Illuminated Diya"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-amber-300 pointer-events-none animate-pulse" />
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-[#FFF2D6] border border-[#F5C76B]/60 text-xs font-bold text-[#B45309] uppercase tracking-widest shadow-sm">
            <span>✦ விளக்கேற்றி தொடங்குங்கள் (Tap to Bless) ✦</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onDiyaSectionClick}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] font-bold text-sm md:text-base tracking-wider uppercase shadow-[0_4px_25px_rgba(255,157,54,0.4)] hover:shadow-[0_6px_35px_rgba(245,199,107,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Flame className="w-5 h-5 text-[#991B1B] fill-[#991B1B] group-hover:animate-bounce" />
            <span>ஆயிரம்கால் தீபங்கள் (Dedicate Your Light)</span>
          </button>

          <button
            onClick={onExploreClick}
            className="px-8 py-4 rounded-full border border-[#D97706]/40 bg-white text-[#2A1B12] font-bold text-sm md:text-base tracking-wider uppercase hover:border-[#D97706] hover:bg-[#FFF7E8] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>எங்கள் கதை (The Builder's Story)</span>
          </button>
        </motion.div>

        {/* Real Soul Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 flex items-center gap-2 text-xs text-[#78350F]/85 font-sans tracking-wide"
        >
          <Heart className="w-3.5 h-3.5 text-[#C73532] fill-[#C73532]" />
          <span>மல்லிகைப் பூ மணமும், விடிய விடிய கோடிங் அடிக்கும் மதுரை பசங்களின் தீபாவளி திருநாள்.</span>
        </motion.div>
      </div>
    </section>
  );
};
