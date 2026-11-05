import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/soundEngine';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Share2, Check } from 'lucide-react';

export const InteractiveDiyaSection: React.FC = () => {
  const [isLit, setIsLit] = useState<boolean>(false);
  const [diyasLitCount, setDiyasLitCount] = useState<number>(2480);
  const [hasUserLit, setHasUserLit] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('diwali_community_diyas_count');
    if (saved) {
      setDiyasLitCount(parseInt(saved, 10));
    }
    const userLit = localStorage.getItem('diwali_user_has_lit');
    if (userLit === 'true') {
      setIsLit(true);
      setHasUserLit(true);
    }
  }, []);

  const handleLightDiya = () => {
    if (!isLit) {
      setIsLit(true);
      setHasUserLit(true);
      const newCount = diyasLitCount + 1;
      setDiyasLitCount(newCount);
      localStorage.setItem('diwali_community_diyas_count', newCount.toString());
      localStorage.setItem('diwali_user_has_lit', 'true');

      // Audio feedback
      soundEngine.playDiyaIgniteSound();
      soundEngine.playTempleChime();
      soundEngine.playFireworkBurstSound();

      // Confetti burst
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.65 },
        colors: ['#F5C76B', '#FF9D36', '#C73532', '#FFF1D6', '#4285F4'],
      });
    } else {
      soundEngine.playTempleChime();
    }
  };

  const handleShareBlessing = () => {
    const text = `🪔 I just lit an auspicious Diwali Diya at OpenmadurAI × GDG Madurai celebration! Join the festival of lights: ${window.location.href}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="light-a-diya" className="relative py-24 px-4 overflow-hidden border-t border-[#F5C76B]/30 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8EC] to-[#FFFDF7]">
      {/* Background Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20 bg-gradient-to-r from-[#FF9D36] to-[#C73532]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D97706]/40 bg-[#FFF2D6] text-xs font-bold uppercase tracking-wider text-[#B45309] mb-4 shadow-sm">
          <Flame className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Interactive Community Ritual</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] via-[#D97706] to-[#B45309] mb-4">
          Light Your Sacred Diya
        </h2>

        <p className="text-base sm:text-lg text-[#6B4E3D] max-w-2xl font-serif italic mb-8">
          Tap the earthen diya to dispel darkness and usher in wisdom, warmth, and innovation across our tech community.
        </p>

        {/* Community Counter Banner */}
        <div className="px-6 py-3 rounded-2xl border border-[#D97706]/35 bg-white/95 backdrop-blur-md mb-10 flex items-center gap-3 shadow-[0_4px_20px_rgba(217,119,6,0.1)]">
          <span className="text-sm text-[#78350F] uppercase tracking-wider font-sans font-semibold">
            Diyas Lit Worldwide:
          </span>
          <span className="text-2xl sm:text-3xl font-black font-festive text-[#D97706] tracking-widest">
            {diyasLitCount.toLocaleString()}
          </span>
          <Sparkles className="w-4 h-4 text-[#D97706] animate-spin" />
        </div>

        {/* Central Interactive 2D Graphic Diya Image */}
        <div className="relative group my-4 select-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLightDiya}
            className="cursor-pointer relative flex flex-col items-center p-8 rounded-3xl border-2 border-[#D97706]/30 bg-white shadow-[0_12px_45px_rgba(217,119,6,0.15)] hover:border-[#D97706] hover:shadow-[0_16px_55px_rgba(245,199,107,0.35)] transition-all"
          >
            {/* The 2D Graphic Diya Image */}
            <div className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden p-2 transition-all duration-700 ${
              isLit ? 'border-4 border-[#F5C76B] shadow-[0_0_35px_rgba(245,199,107,0.8)]' : 'border-2 border-stone-300 opacity-80 filter grayscale-[40%]'
            }`}>
              <img
                src="/assets/images/diwali-diya-hero.jpg"
                alt="Interactive Diwali Diya 2D Asset"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="mt-6">
              <span className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all shadow-md ${
                isLit
                  ? 'bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white shadow-[0_4px_20px_rgba(22,163,74,0.3)]'
                  : 'bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] shadow-[0_4px_25px_rgba(255,157,54,0.4)] group-hover:scale-105'
              }`}>
                <Flame className="w-4 h-4 fill-current" />
                {isLit ? 'Your Diya is Glowing With Grace' : 'Tap to Light Your Diya'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Blessing Message on Light */}
        <AnimatePresence>
          {hasUserLit && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 p-6 rounded-2xl border border-[#D97706]/40 bg-white max-w-xl text-center shadow-lg"
            >
              <h4 className="text-lg font-bold font-festive text-[#B45309] mb-1">
                ✨ Deepavali Vazhthukkal! May Your Life Sparkle!
              </h4>
              <p className="text-sm text-[#5C4A3E] font-serif italic mb-4">
                Thank you for lighting a flame of togetherness. Share this radiant joy with fellow creators and developers!
              </p>
              <button
                onClick={handleShareBlessing}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D97706]/40 bg-[#FFF7E8] text-xs font-bold uppercase tracking-wider text-[#78350F] hover:bg-[#D97706] hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? 'Blessing Link Copied!' : 'Share Festival Blessing'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
