import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiyaVector } from './VectorGraphics';
import { soundEngine } from '../utils/soundEngine';
import { Sparkles, ArrowRight, Volume2 } from 'lucide-react';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  // Steps: 0: Dark, 1: Tiny particles, 2: Center Glow, 3: Diya appears, 4: Wick Ignites, 5: Light spreads, 6: Petals & Title
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),   // Tiny golden particles
      setTimeout(() => setStep(2), 1600),  // Warm golden light
      setTimeout(() => setStep(3), 2600),  // Diya visible in silhouette
      setTimeout(() => {
        setStep(4);                        // Wick ignites
        soundEngine.playDiyaIgniteSound();
      }, 3800),
      setTimeout(() => setStep(5), 4800),  // Light spreads
      setTimeout(() => setStep(6), 5800),  // Festive title & marigold petals
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStartExperience = () => {
    soundEngine.startAmbient();
    soundEngine.playTempleChime();
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090A12] overflow-hidden select-none"
    >
      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        onClick={handleStartExperience}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F5C76B]/40 bg-[#111629]/70 backdrop-blur-md text-[#FFF1D6] text-xs font-semibold tracking-widest uppercase hover:border-[#F5C76B] hover:shadow-[0_0_20px_rgba(245,199,107,0.3)] transition-all cursor-pointer"
      >
        <span>Skip Cinematic Intro</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#F5C76B]" />
      </motion.button>

      {/* Background Stardust Particles (Step >= 1) */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            {Array.from({ length: 45 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: [0, 1.2, 0.8],
                  opacity: [0, 0.9, 0.4],
                  y: [null, '-=30px'],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 1.5,
                  ease: 'easeInOut',
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#F5C76B] shadow-[0_0_8px_#F5C76B]"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Warm Golden Light Expansion (Step >= 2) */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
              scale: step >= 5 ? 3.5 : 1.2,
              opacity: step >= 5 ? 0.85 : 0.45,
            }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute w-[450px] h-[450px] rounded-full pointer-events-none blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FF9D36 0%, #F5C76B 30%, #C73532 60%, transparent 80%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Central Diya (Step >= 3) */}
      <div className="relative z-20 flex flex-col items-center">
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative"
            >
              <DiyaVector
                size={220}
                isLit={step >= 4}
                flameScale={step >= 4 ? 1.2 : 0}
                showRays={step >= 5}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Festive Title Reveal (Step >= 6) */}
        <AnimatePresence>
          {step >= 6 && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
              className="mt-8 text-center px-4 max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0.35em' }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="text-xs md:text-sm font-bold uppercase text-[#F5C76B] mb-3 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FF9D36] animate-pulse" />
                <span>Deepavali Subhakankshalu • தீபாவளி நல்வாழ்த்துகள்</span>
                <Sparkles className="w-4 h-4 text-[#FF9D36] animate-pulse" />
              </motion.div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D6] via-[#F5C76B] to-[#FF9D36] tracking-wider drop-shadow-[0_4px_25px_rgba(245,199,107,0.4)]">
                THE FESTIVAL OF LIGHTS
              </h1>

              <p className="mt-4 text-base md:text-xl text-[#FFF1D6]/85 font-serif italic max-w-lg mx-auto">
                "A celebration of happiness, hope and togetherness."
              </p>

              {/* Joint Badge Presentation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 flex items-center justify-center gap-3 text-xs tracking-wider text-[#F5C76B]/90 font-medium"
              >
                <span className="px-3 py-1 rounded-full bg-[#111629] border border-[#F5C76B]/30">OpenmadurAI</span>
                <span className="text-[#FF9D36] font-bold">×</span>
                <span className="px-3 py-1 rounded-full bg-[#111629] border border-[#4285F4]/40">GDG Madurai</span>
              </motion.div>

              {/* Enter Button */}
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(245, 199, 107, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartExperience}
                className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,157,54,0.4)] transition-all cursor-pointer"
              >
                <span>Enter The Celebration</span>
                <Volume2 className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer subtle indicator */}
      <div className="absolute bottom-6 text-[11px] text-[#FFF1D6]/40 tracking-widest font-sans uppercase">
        Jointly Presented by OpenmadurAI & GDG Madurai
      </div>
    </motion.div>
  );
};
