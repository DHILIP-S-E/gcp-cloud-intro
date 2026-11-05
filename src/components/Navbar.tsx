import React, { useState } from 'react';
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
      {/* DevFest 4-Color Google Accent Ribbon along top */}
      <div className="w-full h-1.5 flex">
        <div className="w-1/4 h-full bg-[#4285F4]" />
        <div className="w-1/4 h-full bg-[#EA4335]" />
        <div className="w-1/4 h-full bg-[#FBBC04]" />
        <div className="w-1/4 h-full bg-[#34A853]" />
      </div>

      {/* Main Glassmorphism Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 mt-1">
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-stone-200/80 dark:border-stone-800 bg-white/90 dark:bg-[#090A12]/90 backdrop-blur-xl shadow-lg transition-colors">
          {/* Brand with Google 4-Color Capsule Mark & OpenmadurAI Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Google 4-Color Capsule Mark */}
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-6 rounded-full bg-[#4285F4] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2.5 h-6 rounded-full bg-[#EA4335] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2.5 h-6 rounded-full bg-[#FBBC04] animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="w-2.5 h-6 rounded-full bg-[#34A853] animate-bounce" style={{ animationDelay: '450ms' }} />
            </div>

            {/* Official OpenmadurAI Logo thumbnail */}
            <div className="h-8 w-8 rounded-lg overflow-hidden bg-white shadow-sm border border-stone-200 p-0.5 hidden sm:block">
              <img
                src="/openmadurai-logo.png"
                alt="OpenmadurAI Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-extrabold font-sans text-stone-900 dark:text-white tracking-tight">
                  GDG Madurai
                </span>
                <span className="text-xs text-[#EA4335] font-black">×</span>
                <span className="text-sm font-bold text-[#4285F4]">
                  OpenmadurAI
                </span>
              </div>
              <span className="text-[10px] font-sans text-stone-500 dark:text-stone-400 tracking-widest uppercase font-semibold">
                D E V F E S T  2 0 2 6
              </span>
            </div>
          </a>

          {/* Center Navigation Links like DevFest Madurai */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-300">
            <a href="#hero" className="hover:text-[#4285F4] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#EA4335] transition-colors">
              About
            </a>
            <a href="#tracks" className="hover:text-[#FBBC04] transition-colors">
              Tracks
            </a>
            <a href="#light-a-diya" className="hover:text-[#34A853] transition-colors">
              Wall of Lights
            </a>
            <a href="#wish-generator" className="hover:text-[#4285F4] transition-colors">
              Wish Pass
            </a>
            <a href="#venue-faq" className="hover:text-[#EA4335] transition-colors">
              Venue & FAQ
            </a>
          </nav>

          {/* Right Action Controls: Day/Night Theme Switch, Audio, & Diya CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle (Day / Night switch like dev-fest-madurai-source) */}
            <button
              onClick={onToggleTheme}
              title={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:scale-105 transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FBBC04] hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-[#4285F4] hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? 'Unmute Ambient Sound' : 'Mute Sound'}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:scale-105 transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-stone-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#34A853] animate-pulse" />
              )}
            </button>

            {/* Light Diya Button */}
            <button
              onClick={onLightDiyaClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
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
