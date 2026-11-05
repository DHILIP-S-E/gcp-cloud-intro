import React, { useState } from 'react';
import { MarigoldToran, DiyaVector } from './VectorGraphics';
import { soundEngine } from '../utils/soundEngine';
import { Volume2, VolumeX, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onLightDiyaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onLightDiyaClick }) => {
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
        <div className="flex items-center justify-between px-5 py-2.5 rounded-full border border-[#F5C76B]/40 bg-[#FFFDF7]/90 dark:bg-[#090A12]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-colors">
          {/* Logo / Brand with Official OpenmadurAI Image */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Real OpenmadurAI Logo from public/openmadurai-logo.png */}
            <div className="h-9 w-9 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-[#F5C76B]/40 p-0.5">
              <img
                src="/openmadurai-logo.png"
                alt="OpenmadurAI Community"
                className="w-full h-full object-contain"
              />
            </div>

            <DiyaVector size={30} isLit={true} flameScale={1} />

            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#B45309] dark:from-[#FFFBEB] dark:to-[#F5C76B] tracking-wider">
                OpenmadurAI <span className="text-[#FF9D36]">×</span> GDG
              </span>
              <span className="text-[9px] font-sans text-[#78350F]/70 dark:text-[#FFF1D6]/60 tracking-widest uppercase hidden sm:inline">
                Diwali 2026 Celebration
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#6B4E3D] dark:text-[#FFF1D6]/80">
            <a href="#hero" className="hover:text-[#D97706] dark:hover:text-[#F5C76B] transition-colors">
              Home
            </a>
            <a href="#light-a-diya" className="hover:text-[#D97706] dark:hover:text-[#F5C76B] transition-colors">
              Light Diya
            </a>
            <a href="#wish-generator" className="hover:text-[#D97706] dark:hover:text-[#F5C76B] transition-colors">
              Wish Maker
            </a>
            <a href="#mission" className="hover:text-[#D97706] dark:hover:text-[#F5C76B] transition-colors">
              Community
            </a>
          </nav>

          {/* Right Action Controls: Theme Toggle, Audio & Quick Diya CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={onToggleTheme}
              title={theme === 'dark' ? 'Switch to Festive Light Theme' : 'Switch to Midnight Dark Theme'}
              className="p-2 rounded-full border border-[#F5C76B]/40 bg-[#FFF7E8] dark:bg-[#111629] text-[#78350F] dark:text-[#FFF1D6] hover:border-[#D97706] dark:hover:border-[#F5C76B] transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F5C76B] hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-[#D97706] hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? 'Unmute Festive Ambient Music' : 'Mute Festive Music'}
              className="p-2 rounded-full border border-[#F5C76B]/40 bg-[#FFF7E8] dark:bg-[#111629] text-[#78350F] dark:text-[#FFF1D6] hover:border-[#D97706] dark:hover:border-[#F5C76B] transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#D97706] dark:text-[#F5C76B] animate-pulse" />
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
