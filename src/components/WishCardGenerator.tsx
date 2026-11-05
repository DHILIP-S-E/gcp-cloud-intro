import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles, MessageCircle } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

const FESTIVE_WISHES = [
  "மதுரை மல்லிகைப் பூ மணமும், தீபத்தின் மங்கள ஒளியும் உங்கள் இல்லத்திலும் இதயத்திலும் எப்போதும் நிறையட்டும். இனிய தீபாவளி நல்வாழ்த்துகள்! 🪔",
  "May your code compile on the first try, your models converge with grace, and your dreams light up this Diwali! Happy Deepavali from Madurai! ✨",
  "அன்பும், அறிவும், விடாமுயற்சியும் உங்கள் வாழ்வில் என்றும் நிலைத்து பெருகட்டும். Happy Deepavali 2026!",
  "From the sleepless streets of Madurai to wherever you are: Wishing you and your loved ones an illuminating, peaceful, and prosperous Diwali! 🪔",
];

export const WishCardGenerator: React.FC = () => {
  const [recipientName, setRecipientName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [selectedWishIndex, setSelectedWishIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const getGreetingText = () => {
    const to = recipientName.trim() ? `அன்புள்ள ${recipientName.trim()}, ` : '';
    const from = senderName.trim() ? ` — அன்புடன் ${senderName.trim()}` : ' — OpenmadurAI × GDG Madurai';
    return `🪔 இனிய தீபாவளி நல்வாழ்த்துகள் 2026! ✨\n\n${to}${FESTIVE_WISHES[selectedWishIndex]}${from}\n\nநம்ம ஊரு தீபாவளி கொண்டாட்டம்: ${window.location.href}`;
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
    <section id="wish-generator" className="relative py-24 px-4 overflow-hidden bg-[#FFFDF7] border-t border-[#F5C76B]/30">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D97706]/40 bg-[#FFF2D6] text-xs font-bold uppercase tracking-wider text-[#B45309] mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>நல்வாழ்த்து அட்டை • Send a Personal Diwali Wish</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] via-[#D97706] to-[#B45309]">
            Share Heartfelt Festival Wishes
          </h2>
          <p className="text-sm sm:text-base text-[#6B4E3D] font-serif italic mt-3">
            Personalize a festive card adorned with Madurai heritage & the warm glow of Diwali, then share it directly with your loved ones and dev peers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-5 p-6 rounded-3xl border border-[#D97706]/35 bg-white shadow-xl space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B45309] mb-2">
                Recipient's Name (பெயர்)
              </label>
              <input
                type="text"
                placeholder="e.g. Mentor / Dev Peer / Our Team"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D97706]/35 bg-[#FFFDF7] text-[#2A1B12] placeholder-[#2A1B12]/40 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B45309] mb-2">
                Your Name / Sign-off (உங்கள் பெயர்)
              </label>
              <input
                type="text"
                placeholder="e.g. Community Builder / Fellow Engineer"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D97706]/35 bg-[#FFFDF7] text-[#2A1B12] placeholder-[#2A1B12]/40 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B45309] mb-2">
                Choose a Heartfelt Blessing
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
                        ? 'border-[#D97706] bg-[#FFF2D6] text-[#78350F] font-bold shadow-sm'
                        : 'border-[#D97706]/20 bg-[#FFFDF7] text-[#5C4A3E] hover:border-[#D97706]/40'
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
                <span>WhatsApp-ல் பகிர்</span>
              </button>
              <button
                onClick={handleCopyWish}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#D97706]/40 bg-[#FFF7E8] text-[#78350F] font-bold text-xs uppercase tracking-wider hover:bg-[#D97706] hover:text-white hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Wish'}</span>
              </button>
            </div>
          </div>

          {/* Real-time Festive Card Preview */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="relative p-8 sm:p-10 rounded-3xl border-2 border-[#D97706]/40 bg-gradient-to-br from-[#FFF9EE] via-[#FFFDF7] to-[#FFF3DC] shadow-[0_12px_45px_rgba(217,119,6,0.18)] overflow-hidden"
            >
              {/* Madurai Temple Gopuram 2D Image Accent on Card */}
              <div className="absolute top-4 left-5 h-16 w-16 rounded-xl overflow-hidden border border-[#F5C76B]/40 shadow-sm opacity-90">
                <img
                  src="/assets/images/gopuram-diwali.jpg"
                  alt="Madurai Meenakshi Gopuram"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Watermark */}
              <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none w-48 h-48 overflow-hidden">
                <img
                  src="/assets/images/gopuram-diwali.jpg"
                  alt="Watermark"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              {/* Content Inside Greeting Card */}
              <div className="relative z-10 flex flex-col items-center text-center pt-8 pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-xl overflow-hidden bg-white p-1 shadow border border-[#F5C76B]/50">
                    <img
                      src="/openmadurai-logo.png"
                      alt="OpenmadurAI Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-14 w-14 rounded-full overflow-hidden shadow-md border-2 border-[#F5C76B]">
                    <img
                      src="/assets/images/diwali-diya-hero.jpg"
                      alt="Diya Graphic Asset"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B45309]">
                  OpenmadurAI × GDG Madurai
                </span>

                <h3 className="text-2xl sm:text-3xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] via-[#D97706] to-[#B45309] mt-1 mb-3">
                  இனிய தீபாவளி நல்வாழ்த்துகள் 2026
                </h3>

                {recipientName.trim() && (
                  <p className="text-sm font-bold text-[#B45309] font-festive mb-2">
                    அன்புள்ள {recipientName.trim()},
                  </p>
                )}

                <p className="text-sm sm:text-base text-[#2A1B12] font-serif italic max-w-md leading-relaxed my-3 bg-white/85 p-4 rounded-2xl border border-[#D97706]/20 shadow-sm">
                  "{FESTIVE_WISHES[selectedWishIndex]}"
                </p>

                <div className="mt-4 pt-3 border-t border-[#D97706]/20 w-full flex items-center justify-between text-xs text-[#78350F]/80">
                  <span className="font-serif italic font-semibold">
                    {senderName.trim() ? `அன்புடன், ${senderName.trim()}` : 'With warm wishes, Tech Community'}
                  </span>
                  <span className="text-[#B45309] font-bold">மதுரை • தமிழ்நாடு</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
