import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-14 px-4 bg-stone-50 dark:bg-[#06070C] border-t border-stone-200 dark:border-stone-800 text-center overflow-hidden transition-colors">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Diya Graphic Icon */}
        <div className="h-14 w-14 rounded-full overflow-hidden shadow-md border-2 border-[#FBBC04] mb-4">
          <img
            src="/assets/images/diwali-diya-hero.jpg"
            alt="Diwali Diya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Title */}
        <h3 className="text-xl sm:text-2xl font-black font-festive text-stone-900 dark:text-white mb-2">
          GDG Madurai <span className="text-[#EA4335]">×</span> OpenmadurAI
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif italic max-w-xl mx-auto mb-6">
          "Where Heritage Meets Innovation • மதுரை மண்ணின் தொழில்நுட்ப கொண்டாட்டம்"
        </p>

        {/* Community Credit with OpenmadurAI Logo */}
        <div className="flex items-center gap-2.5 text-xs text-stone-600 dark:text-stone-300 font-sans mb-6">
          <span>Presented with</span>
          <Heart className="w-3.5 h-3.5 text-[#EA4335] fill-[#EA4335]" />
          <span>by</span>
          <div className="h-7 w-7 rounded overflow-hidden bg-white p-0.5 shadow-sm inline-flex items-center justify-center border border-stone-200">
            <img src="/openmadurai-logo.png" alt="OpenmadurAI" className="w-full h-full object-contain" />
          </div>
          <strong className="text-stone-900 dark:text-white">OpenmadurAI</strong>
          <span>&</span>
          <strong className="text-[#4285F4]">GDG Madurai</strong>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-stone-500 dark:text-stone-400 mb-8 uppercase tracking-wider">
          <a href="#hero" className="hover:text-[#4285F4] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#EA4335] transition-colors">About</a>
          <a href="#tracks" className="hover:text-[#FBBC04] transition-colors">Tracks</a>
          <a href="#light-a-diya" className="hover:text-[#34A853] transition-colors">Wall of Lights</a>
          <a href="#venue-faq" className="hover:text-[#4285F4] transition-colors">Venue & FAQ</a>
        </div>

        {/* Google 4-Color Bottom Capsule Accent */}
        <div className="flex items-center gap-1.5 mb-6">
          <span className="w-6 h-1.5 rounded-full bg-[#4285F4]" />
          <span className="w-6 h-1.5 rounded-full bg-[#EA4335]" />
          <span className="w-6 h-1.5 rounded-full bg-[#FBBC04]" />
          <span className="w-6 h-1.5 rounded-full bg-[#34A853]" />
        </div>

        <div className="text-[11px] text-stone-400 dark:text-stone-500 font-medium">
          © 2026 GDG Madurai & OpenmadurAI • Built for Cloud Run
        </div>
      </div>
    </footer>
  );
};
