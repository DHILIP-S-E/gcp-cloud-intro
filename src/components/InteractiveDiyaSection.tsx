import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiyaVector } from './VectorGraphics';
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

      // Golden and red confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#F5C76B', '#FF9D36', '#C73532', '#FFF1D6', '#4285F4'],
      });
    } else {
      // Gentle flick if already lit
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
    <section id="light-a-diya" className="relative py-24 px-4 overflow-hidden border-t border-[#F5C76B]/15 bg-gradient-to-b from-[#090A12] via-[#0D101E] to-[#090A12]">
      {/* Background Decorative Vector Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20 bg-gradient-to-r from-[#FF9D36] to-[#C73532]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5C76B]/30 bg-[#111629]/90 text-xs font-semibold uppercase tracking-wider text-[#F5C76B] mb-4">
          <Flame className="w-3.5 h-3.5 text-[#FF9D36]" />
          <span>Interactive Community Ritual</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBEB] via-[#F5C76B] to-[#FF9D36] mb-4">
          Light Your Sacred Diya
        </h2>

        <p className="text-base sm:text-lg text-[#FFF1D6]/80 max-w-2xl font-serif italic mb-8">
          Tap the earthen diya to dispel darkness and usher in wisdom, warmth, and innovation across our tech community.
        </p>

        {/* Community Counter Banner */}
        <div className="px-6 py-3 rounded-2xl border border-[#F5C76B]/25 bg-[#111629]/80 backdrop-blur-md mb-10 flex items-center gap-3 shadow-[0_0_20px_rgba(245,199,107,0.1)]">
          <span className="text-sm text-[#FFF1D6]/70 uppercase tracking-wider font-sans">
            Diyas Lit Worldwide:
          </span>
          <span className="text-2xl sm:text-3xl font-black font-festive text-[#F5C76B] tracking-widest drop-shadow-[0_0_12px_rgba(245,199,107,0.6)]">
            {diyasLitCount.toLocaleString()}
          </span>
          <Sparkles className="w-4 h-4 text-[#F5C76B] animate-spin" />
        </div>

        {/* Central Interactive Diya Box */}
        <div className="relative group my-4">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLightDiya}
            className="cursor-pointer relative flex flex-col items-center p-8 rounded-3xl border border-[#F5C76B]/30 bg-[#111629]/60 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all hover:border-[#F5C76B] hover:shadow-[0_0_50px_rgba(245,199,107,0.3)]"
          >
            {/* The Diya Vector Graphic */}
            <DiyaVector
              isLit={isLit}
              size={220}
              flameScale={isLit ? 1.25 : 1}
              glowColor="#FF9D36"
            />

            <div className="mt-6">
              <span className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all shadow-md ${
                isLit
                  ? 'bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                  : 'bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] shadow-[0_0_25px_rgba(255,157,54,0.5)] group-hover:scale-105'
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
              className="mt-8 p-6 rounded-2xl border border-[#F5C76B]/30 bg-[#161D36]/80 max-w-xl text-center shadow-lg"
            >
              <h4 className="text-lg font-bold font-festive text-[#F5C76B] mb-1">
                ✨ Deepavali Vazhthukkal! May Your Life Sparkle!
              </h4>
              <p className="text-sm text-[#FFF1D6]/85 font-serif italic mb-4">
                Thank you for lighting a flame of togetherness. Share this radiant joy with fellow creators and developers!
              </p>
              <button
                onClick={handleShareBlessing}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F5C76B]/40 bg-[#111629] text-xs font-semibold uppercase tracking-wider text-[#FFF1D6] hover:bg-[#F5C76B] hover:text-[#090A12] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? 'Blessing Link Copied!' : 'Share Festival Blessing'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
