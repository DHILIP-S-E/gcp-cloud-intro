import React, { useState } from 'react';
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
      {/* Decorative Marigold Border */}
      <div className="w-full h-2 bg-gradient-to-r from-[#C73532] via-[#FF9D36] to-[#F5C76B] shadow-sm" />

      {/* Glassmorphic Light Theme Navbar Container */}
      <div className="max-w-6xl mx-auto px-4 py-2 mt-1">
        <div className="flex items-center justify-between px-5 py-2.5 rounded-full border border-[#F5C76B]/50 bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(217,119,6,0.12)]">
          {/* Logo / Brand with Official OpenmadurAI Image */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Real OpenmadurAI Logo from public/openmadurai-logo.png */}
            <div className="h-9 w-9 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-[#F5C76B]/50 p-0.5">
              <img
                src="/openmadurai-logo.png"
                alt="OpenmadurAI Community"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Generated Diya Mini Graphic */}
            <div className="h-8 w-8 rounded-full overflow-hidden shadow-sm border border-[#F5C76B]/40">
              <img
                src="/assets/images/diwali-diya-hero.jpg"
                alt="Diwali Diya"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#B45309] to-[#D97706] tracking-wider">
                OpenmadurAI <span className="text-[#FF9D36]">×</span> GDG
              </span>
              <span className="text-[9px] font-sans text-[#78350F]/80 tracking-widest uppercase hidden sm:inline font-semibold">
                Diwali 2026 Celebration
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#6B4E3D]">
            <a href="#hero" className="hover:text-[#D97706] transition-colors">
              Home
            </a>
            <a href="#light-a-diya" className="hover:text-[#D97706] transition-colors">
              Light Diya
            </a>
            <a href="#wish-generator" className="hover:text-[#D97706] transition-colors">
              Wish Maker
            </a>
            <a href="#mission" className="hover:text-[#D97706] transition-colors">
              Community
            </a>
          </nav>

          {/* Right Action Controls: Audio & Quick Diya CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? 'Unmute Festive Ambient Music' : 'Mute Festive Music'}
              className="p-2 rounded-full border border-[#F5C76B]/50 bg-[#FFF7E8] text-[#78350F] hover:border-[#D97706] transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#D97706] animate-pulse" />
              )}
            </button>

            {/* Light Diya Quick Button */}
            <button
              onClick={onLightDiyaClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF9D36] to-[#F5C76B] text-[#090A12] text-xs font-bold uppercase tracking-wider shadow-[0_4px_15px_rgba(255,157,54,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
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
