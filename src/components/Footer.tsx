import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-4 bg-[#FFF6E5] border-t border-[#F5C76B]/30 text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Generated Diya Mini Graphic */}
        <div className="h-14 w-14 rounded-full overflow-hidden shadow-sm border border-[#F5C76B] mb-4">
          <img
            src="/assets/images/diwali-diya-hero.jpg"
            alt="Diwali Diya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tamil Greeting */}
        <h3 className="text-xl sm:text-2xl font-bold font-festive text-[#991B1B] mb-2 tracking-wide">
          இனிய தீபாவளி நல்வாழ்த்துகள் 🪔
        </h3>

        <p className="text-xs sm:text-sm text-[#6B4E3D] font-serif italic max-w-xl mx-auto mb-6">
          "தீபத்தின் ஒளி போல உங்கள் வாழ்விலும் அன்பும் அறிவும் அமைதியும் பெருகட்டும்."
          <br />
          (May love, wisdom, and peace flourish in your life just like the light of a sacred lamp.)
        </p>

        {/* Community Credit with OpenmadurAI Logo */}
        <div className="flex items-center gap-2.5 text-xs text-[#5C4A3E] font-sans mb-6">
          <span>Presented with</span>
          <Heart className="w-3.5 h-3.5 text-[#C73532] fill-[#C73532]" />
          <span>by</span>
          <div className="h-7 w-7 rounded overflow-hidden bg-white p-0.5 shadow-sm inline-flex items-center justify-center border border-[#F5C76B]/40">
            <img src="/openmadurai-logo.png" alt="OpenmadurAI" className="w-full h-full object-contain" />
          </div>
          <strong className="text-[#2A1B12]">OpenmadurAI</strong>
          <span>&</span>
          <strong className="text-[#B45309]">GDG Madurai</strong>
        </div>

        {/* Decorative Divider */}
        <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent mb-6 rounded-full" />

        <div className="flex items-center gap-4 text-[11px] text-[#78350F]/80 font-medium">
          <span>Madurai, Tamil Nadu</span>
          <span>•</span>
          <span>Diwali 2026 Celebration Hub</span>
          <span>•</span>
          <span>2D Graphic Asset Edition</span>
        </div>
      </div>
    </footer>
  );
};
