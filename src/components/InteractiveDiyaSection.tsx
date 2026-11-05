import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/soundEngine';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, MapPin, Share2, Check } from 'lucide-react';

interface CommunityLight {
  id: string;
  name: string;
  collegeOrRole: string;
  resolution: string;
  timestamp: string;
  flameColor?: string;
}

const INITIAL_COMMUNITY_LIGHTS: CommunityLight[] = [
  {
    id: 'seed-1',
    name: 'Dhilip S.E.',
    collegeOrRole: 'GDG Madurai & OpenmadurAI',
    resolution: 'Empower 1,000+ engineers from South Tamil Nadu to build world-class AI on Cloud.',
    timestamp: 'Just now',
    flameColor: '#FF9D36',
  },
  {
    id: 'seed-2',
    name: 'Anitha Sundaram',
    collegeOrRole: 'KLN College of Engineering',
    resolution: 'First engineer in my family. Dedicating this year to crack my remote GCP Cloud Architect role.',
    timestamp: '10 mins ago',
    flameColor: '#F5C76B',
  },
  {
    id: 'seed-3',
    name: 'Selva Kumar',
    collegeOrRole: 'TCE Madurai Alum',
    resolution: 'Ship our open-source vernacular Tamil medical chatbot to help rural clinics.',
    timestamp: '25 mins ago',
    flameColor: '#FF9D36',
  },
  {
    id: 'seed-4',
    name: 'Priya & Kaviya',
    collegeOrRole: 'Thiagarajar School of Management',
    resolution: 'Build an AI product that helps Madurai jasmine and cotton weavers find fair global prices.',
    timestamp: '1 hour ago',
    flameColor: '#F5C76B',
  },
  {
    id: 'seed-5',
    name: 'Vigneshwaran',
    collegeOrRole: 'Self-Taught Python Builder',
    resolution: 'Prove that you don’t need a fancy metro pin code to build models that serve millions.',
    timestamp: '2 hours ago',
    flameColor: '#FF9D36',
  },
];

export const InteractiveDiyaSection: React.FC = () => {
  const [lights, setLights] = useState<CommunityLight[]>(INITIAL_COMMUNITY_LIGHTS);
  const [userName, setUserName] = useState<string>('');
  const [userRole, setUserRole] = useState<string>('');
  const [userDream, setUserDream] = useState<string>('');
  const [hasDedicated, setHasDedicated] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('madurai_community_lights_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLights(parsed);
        }
      } catch {
        // use initial
      }
    }
  }, []);

  const handleDedicateLight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userDream.trim()) return;

    const newLight: CommunityLight = {
      id: `light-${Date.now()}`,
      name: userName.trim(),
      collegeOrRole: userRole.trim() || 'Madurai Builder',
      resolution: userDream.trim(),
      timestamp: 'Just now',
      flameColor: '#FF9D36',
    };

    const updated = [newLight, ...lights];
    setLights(updated);
    localStorage.setItem('madurai_community_lights_v2', JSON.stringify(updated));
    setHasDedicated(true);

    // Audio & Confetti Celebration
    soundEngine.playDiyaIgniteSound();
    soundEngine.playTempleChime();
    soundEngine.playFireworkBurstSound();

    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F5C76B', '#FF9D36', '#C73532', '#FFF1D6', '#22C55E'],
    });

    // Reset inputs
    setUserName('');
    setUserRole('');
    setUserDream('');
  };

  const handleShareWall = () => {
    const text = `🪔 I just lit my Diya on the Madurai Wall of 1,000 Lights with OpenmadurAI × GDG Madurai! Dedicate yours here: ${window.location.href}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="light-a-diya" className="relative py-24 px-4 overflow-hidden border-t border-[#F5C76B]/30 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8EC] to-[#FFFDF7]">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D97706]/40 bg-[#FFF2D6] text-xs font-bold uppercase tracking-wider text-[#B45309] mb-4 shadow-sm">
            <Flame className="w-4 h-4 text-[#D97706]" />
            <span>ஆயிரம்கால் தீபங்கள் • Living Wall of Hope</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] via-[#D97706] to-[#B45309] mb-4">
            Dedicate Your Light & Dream
          </h2>

          <p className="text-base sm:text-lg text-[#5C4A3E] font-serif italic max-w-2xl mx-auto leading-relaxed">
            Every diya lit here carries an actual human dream. What are you building for yourself, your family, or Madurai this Diwali?
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#78350F]">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>{lights.length} Lights Burning Bright Across Our Community</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Dedication Form */}
          <div className="lg:col-span-5 p-7 rounded-3xl border-2 border-[#D97706]/35 bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#F5C76B]/30">
              <div className="h-12 w-12 rounded-full overflow-hidden border border-[#F5C76B] shadow-sm">
                <img
                  src="/assets/images/diwali-diya-hero.jpg"
                  alt="Diwali Diya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-festive text-[#991B1B]">
                  உங்கள் தீபம் ஏற்றுங்கள்
                </h3>
                <p className="text-xs text-[#78350F] font-sans">
                  Leave your footprint on the community wall
                </p>
              </div>
            </div>

            <form onSubmit={handleDedicateLight} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#78350F] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dhilip / Anitha / Karthik"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D97706]/35 bg-[#FFFDF7] text-[#2A1B12] placeholder-[#2A1B12]/40 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#78350F] mb-1.5">
                  College / Role / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. TCE Madurai / KLN / Self-Taught Dev"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D97706]/35 bg-[#FFFDF7] text-[#2A1B12] placeholder-[#2A1B12]/40 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#78350F] mb-1.5">
                  Your 2026 Dream or Resolution *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Build my first open source AI project, get certified in GCP Cloud, land my dream role..."
                  value={userDream}
                  onChange={(e) => setUserDream(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D97706]/35 bg-[#FFFDF7] text-[#2A1B12] placeholder-[#2A1B12]/40 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF9D36] via-[#F5C76B] to-[#F47B20] text-[#090A12] font-black text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(255,157,54,0.4)] hover:shadow-[0_6px_30px_rgba(245,199,107,0.7)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-[#991B1B] fill-[#991B1B]" />
                <span>ஏற்றுங்கள் தீபம் (Light My Diya)</span>
              </button>
            </form>

            <AnimatePresence>
              {hasDedicated && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-[#FFF2D6] border border-[#F5C76B] text-center"
                >
                  <p className="text-xs font-bold text-[#991B1B]">
                    ✨ உங்கள் தீபம் ஏற்றப்பட்டது! May your dream come true!
                  </p>
                  <button
                    onClick={handleShareWall}
                    className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#78350F] hover:text-[#991B1B] underline cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied!' : 'Share Your Diya with Friends'}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Living Wall of 1,000 Lights Cards */}
          <div className="lg:col-span-7 space-y-4 max-h-[580px] overflow-y-auto pr-2">
            <AnimatePresence>
              {lights.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-2xl border border-[#F5C76B]/50 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Burning Diya Thumbnail */}
                      <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#F5C76B] shadow-sm flex-shrink-0 animate-pulse">
                        <img
                          src="/assets/images/diwali-diya-hero.jpg"
                          alt="Burning Diya"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-festive text-[#2A1B12]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#78350F] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#D97706]" />
                          <span>{item.collegeOrRole}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-sans font-medium text-[#78350F]/60">
                      {item.timestamp}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#5C4A3E] font-serif italic bg-[#FFFDF7] p-3 rounded-xl border border-[#F5C76B]/25">
                    "{item.resolution}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
