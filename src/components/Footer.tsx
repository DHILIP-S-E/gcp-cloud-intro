import React from 'react';
import { KalashVector } from './VectorGraphics';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-4 bg-[#06070C] border-t border-[#F5C76B]/15 text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Sacred Kalash Vector Graphic */}
        <div className="mb-4">
          <KalashVector size={65} />
        </div>

        {/* Tamil Greeting */}
        <h3 className="text-xl sm:text-2xl font-bold font-festive text-[#F5C76B] mb-2 tracking-wide">
          இனிய தீபாவளி நல்வாழ்த்துகள் 🪔
        </h3>

        <p className="text-xs sm:text-sm text-[#FFF1D6]/70 font-serif italic max-w-xl mx-auto mb-6">
          "தீபத்தின் ஒளி போல உங்கள் வாழ்விலும் அன்பும் அறிவும் அமைதியும் பெருகட்டும்."
          <br />
          (May love, wisdom, and peace flourish in your life just like the light of a sacred lamp.)
        </p>

        {/* Community Credit */}
        <div className="flex items-center gap-2 text-xs text-[#FFF1D6]/80 font-sans mb-6">
          <span>Presented with</span>
          <Heart className="w-3.5 h-3.5 text-[#C73532] fill-[#C73532]" />
          <span>by</span>
          <strong className="text-[#FFFBEB]">OpenmadurAI</strong>
          <span>&</span>
          <strong className="text-[#F5C76B]">GDG Madurai</strong>
        </div>

        {/* Decorative Divider */}
        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#F5C76B]/40 to-transparent mb-6" />

        <div className="flex items-center gap-4 text-[11px] text-[#FFF1D6]/50">
          <span>Madurai, Tamil Nadu</span>
          <span>•</span>
          <span>Diwali 2026 Celebration Hub</span>
          <span>•</span>
          <span>Vector Art Edition</span>
        </div>
      </div>
    </footer>
  );
};
