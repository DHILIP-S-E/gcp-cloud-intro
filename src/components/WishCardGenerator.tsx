import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DiyaVector, MeenakshiGopuramVector, KalashVector } from './VectorGraphics';
import { Copy, Check, Sparkles, MessageCircle } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

const FESTIVE_WISHES = [
  "May your Diwali burn bright with success, innovation, clean code, and joyful algorithms!",
  "Wishing you a Diwali loaded with sparkling ideas, boundless prosperity, and warm togetherness!",
  "May the divine glow of Diwali Diyas illuminate your journey towards greatness, health, and happiness!",
  "From Madurai to the world: Wishing you, your family, and team a grand, sparkling, and blessed Deepavali!",
];

export const WishCardGenerator: React.FC = () => {
  const [recipientName, setRecipientName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [selectedWishIndex, setSelectedWishIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const getGreetingText = () => {
    const to = recipientName.trim() ? `Dear ${recipientName.trim()}, ` : '';
    const from = senderName.trim() ? ` — With warm wishes from ${senderName.trim()}` : ' — OpenmadurAI × GDG Madurai';
    return `🪔 Happy Diwali 2026! ✨\n\n${to}${FESTIVE_WISHES[selectedWishIndex]}${from}\n\nCelebrate with us: ${window.location.href}`;
  };

  const handleCopyWish = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(getGreetingText());
      setCopied(true);
      soundEngine.playTempleChime();
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getGreetingText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="wish-generator" className="relative py-24 px-4 overflow-hidden bg-[#090A12] border-t border-[#F5C76B]/15">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5C76B]/30 bg-[#111629]/90 text-xs font-semibold uppercase tracking-wider text-[#F5C76B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Greeting Maker</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBEB] via-[#F5C76B] to-[#FF9D36]">
            Craft Your Diwali Tech Wish
          </h2>
          <p className="text-sm sm:text-base text-[#FFF1D6]/80 font-serif italic mt-3">
            Personalize an auspicious festive card adorned with Madurai heritage & Diwali vector art, then share it instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-5 p-6 rounded-3xl border border-[#F5C76B]/25 bg-[#111629]/70 backdrop-blur-md space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5C76B] mb-2">
                Recipient's Name
              </label>
              <input
                type="text"
                placeholder="e.g. Priyadharshini / Dev Team"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#F5C76B]/30 bg-[#090A12]/80 text-[#FFF1D6] placeholder-[#FFF1D6]/30 text-sm focus:outline-none focus:border-[#F5C76B] focus:ring-1 focus:ring-[#F5C76B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5C76B] mb-2">
                Your Name / Sign-off
              </label>
              <input
                type="text"
                placeholder="e.g. Karthik / OpenmadurAI Fellow"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#F5C76B]/30 bg-[#090A12]/80 text-[#FFF1D6] placeholder-[#FFF1D6]/30 text-sm focus:outline-none focus:border-[#F5C76B] focus:ring-1 focus:ring-[#F5C76B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5C76B] mb-2">
                Choose a Blessing
              </label>
              <div className="space-y-2">
                {FESTIVE_WISHES.map((wish, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedWishIndex(index);
                      soundEngine.playDiyaIgniteSound();
                    }}
                    className={`w-full text-left p-3 rounded-xl text-xs transition-all border ${
                      selectedWishIndex === index
                        ? 'border-[#F5C76B] bg-[#F5C76B]/15 text-[#FFF1D6] font-medium shadow-[0_0_15px_rgba(245,199,107,0.15)]'
                        : 'border-[#F5C76B]/15 bg-[#090A12]/50 text-[#FFF1D6]/70 hover:border-[#F5C76B]/40 hover:text-[#FFF1D6]'
                    }`}
                  >
                    "{wish}"
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleCopyWish}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#F5C76B]/40 bg-[#161D36] text-[#FFF1D6] font-bold text-xs uppercase tracking-wider hover:bg-[#F5C76B] hover:text-[#090A12] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Wish'}</span>
              </button>
            </div>
          </div>

          {/* Real-time Festive Card Preview */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="relative p-8 sm:p-10 rounded-3xl border-2 border-[#F5C76B]/40 bg-gradient-to-br from-[#12162B] via-[#0D101E] to-[#1A1226] shadow-[0_0_50px_rgba(245,199,107,0.15)] overflow-hidden"
            >
              {/* Corner Traditional Decorative Motifs */}
              <div className="absolute top-3 left-4 opacity-75">
                <MeenakshiGopuramVector size={50} />
              </div>
              <div className="absolute top-3 right-4 opacity-75">
                <KalashVector size={45} />
              </div>

              {/* Watermark Heritage Silhouette */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <MeenakshiGopuramVector size={220} />
              </div>

              {/* Content Inside Greeting Card */}
              <div className="relative z-10 flex flex-col items-center text-center pt-8 pb-4">
                <DiyaVector size={90} isLit={true} flameScale={1.1} />

                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#F5C76B] mt-4">
                  OpenmadurAI × GDG Madurai
                </span>

                <h3 className="text-2xl sm:text-3xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBEB] via-[#F5C76B] to-[#FF9D36] mt-1 mb-4">
                  Happy Deepavali 2026
                </h3>

                {recipientName.trim() && (
                  <p className="text-sm font-semibold text-[#F5C76B] font-festive mb-2">
                    Dearest {recipientName.trim()},
                  </p>
                )}

                <p className="text-sm sm:text-base text-[#FFF1D6]/90 font-serif italic max-w-md leading-relaxed my-3 bg-[#090A12]/40 p-4 rounded-2xl border border-[#F5C76B]/20">
                  "{FESTIVE_WISHES[selectedWishIndex]}"
                </p>

                <div className="mt-4 pt-3 border-t border-[#F5C76B]/20 w-full flex items-center justify-between text-xs text-[#FFF1D6]/60">
                  <span className="font-serif italic">
                    {senderName.trim() ? `With love, ${senderName.trim()}` : 'With warm wishes, Tech Community'}
                  </span>
                  <span className="text-[#F5C76B] font-semibold">Madurai • Tamil Nadu</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
