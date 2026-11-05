import React, { useState } from 'react';
import { MarigoldToran, DiyaVector } from './VectorGraphics';
import { soundEngine } from '../utils/soundEngine';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface NavbarProps {
  onLightDiyaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLightDiyaClick }) => {
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.getIsMuted());

  const handleToggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEngine.playTempleChime();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 select-none">
      {/* Traditional Marigold Toran Garland along the top border */}
      <MarigoldToran className="drop-shadow-md" />

      {/* Glassmorphic Navbar Container */}
      <div className="max-w-6xl mx-auto px-4 py-2 mt-1">
        <div className="flex items-center justify-between px-5 py-2.5 rounded-full border border-[#F5C76B]/30 bg-[#090A12]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <DiyaVector size={34} isLit={true} flameScale={1} />
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBEB] to-[#F5C76B] tracking-wider">
                OpenmadurAI <span className="text-[#FF9D36]">×</span> GDG
              </span>
              <span className="text-[9px] font-sans text-[#FFF1D6]/60 tracking-widest uppercase hidden sm:inline">
                Diwali 2026 Celebration
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#FFF1D6]/80">
            <a href="#hero" className="hover:text-[#F5C76B] transition-colors">
              Home
            </a>
            <a href="#light-a-diya" className="hover:text-[#F5C76B] transition-colors">
              Light a Diya
            </a>
            <a href="#wish-generator" className="hover:text-[#F5C76B] transition-colors">
              Wish Maker
            </a>
            <a href="#mission" className="hover:text-[#F5C76B] transition-colors">
              Community Mission
            </a>
          </nav>

          {/* Right Action Controls: Audio & Quick Diya CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? 'Unmute Festive Ambient Music' : 'Mute Festive Music'}
              className="p-2 rounded-full border border-[#F5C76B]/30 bg-[#111629] text-[#FFF1D6] hover:border-[#F5C76B] hover:text-[#F5C76B] transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#F5C76B] animate-pulse" />
              )}
            </button>

            {/* Light Diya Quick Button */}
            <button
              onClick={onLightDiyaClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF9D36] to-[#F5C76B] text-[#090A12] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,157,54,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Light Diya</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

