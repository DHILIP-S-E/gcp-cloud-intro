import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Users, Heart, Coffee, Code2 } from 'lucide-react';

export const CommunityMission: React.FC = () => {
  return (
    <section id="mission" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#FFFDF7] border-t border-[#F5C76B]/30">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D97706]/40 bg-[#FFF2D6] text-xs font-bold uppercase tracking-wider text-[#B45309] mb-3 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>எங்கள் கதை • The Builder's Manifesto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] via-[#D97706] to-[#B45309]">
            Why We Build in Madurai
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E] font-serif italic mt-4 max-w-2xl mx-auto leading-relaxed">
            "They told us we had to leave our families and move to Bengaluru or Silicon Valley to build the future. We decided to stay, write code, and light the fire right here on Madurai soil."
          </p>
        </div>

        {/* Feature Madurai Gopuram 2D Graphic Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl border border-[#F5C76B]/50 bg-white shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#F5C76B] shadow-md flex-shrink-0">
            <img
              src="/assets/images/gopuram-diwali.jpg"
              alt="Madurai Meenakshi Amman Gopuram 2D Graphic Asset"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2D6] text-[11px] font-bold text-[#B45309] uppercase tracking-wider">
              <span>🏛️ Vilakkuthoon & Meenakshi Amman Heritage</span>
            </div>
            <h3 className="text-2xl font-bold font-festive text-[#991B1B]">
              Madurai: The City of Sleepless Grit (தூங்கா நகரம்)
            </h3>
            <p className="text-sm text-[#5C4A3E] font-serif leading-relaxed">
              For 2,500 years, Madurai was the capital of Tamil Sangam poetry, craft, and fearless trade. Today, that exact same relentless energy fuels our hackathon rooms, open-source AI repos, and cloud deployments.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#78350F] pt-1">
              <span className="flex items-center gap-1.5"><Coffee className="w-3.5 h-3.5 text-[#D97706]" /> 2 AM Filter Coffee & Debugging</span>
              <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-[#C73532]" /> 100% Grassroots Community</span>
              <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-[#0284C7]" /> Zero Corporate Gatekeeping</span>
            </div>
          </div>
        </div>

        {/* Dual Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* OpenmadurAI Card with Official Logo */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl border border-[#0284C7]/30 bg-white backdrop-blur-md relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity">
              <Cpu className="w-24 h-24 text-[#0284C7]" />
            </div>

            {/* Official OpenmadurAI Logo */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-16 w-16 rounded-2xl overflow-hidden bg-white p-2 shadow border border-[#F5C76B]/50 flex items-center justify-center">
                <img
                  src="/openmadurai-logo.png"
                  alt="OpenmadurAI Community Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-festive text-[#2A1B12]">
                  OpenmadurAI
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0284C7]/15 text-[#0369A1] font-sans font-bold">
                  AI for the People • தமிழ் AI
                </span>
              </div>
            </div>

            <p className="text-sm text-[#5C4A3E] leading-relaxed font-sans mb-6">
              Madurai's homegrown artificial intelligence brotherhood. We believe AI shouldn't just be proprietary tools for elite metros — we democratize open weights, vernacular Tamil language models, and train young minds across Tier-2 towns.
            </p>

            <ul className="text-xs text-[#5C4A3E] space-y-2 mb-6 font-mono font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#0284C7]">✦</span> Open Weights & Vernacular Tamil LLM research
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0284C7]">✦</span> Free AI workshops for college students across Madurai
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0284C7]">✦</span> Grassroots hackathons with real village-level impact
              </li>
            </ul>

            <div className="pt-4 border-t border-[#0284C7]/20 flex items-center justify-between text-xs text-[#0369A1]">
              <span className="font-bold">Building South Tamil Nadu's AI Frontier</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>

          {/* GDG Madurai Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl border border-[#EA4335]/30 bg-white backdrop-blur-md relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity">
              <Terminal className="w-24 h-24 text-[#EA4335]" />
            </div>

            <div className="mb-5 flex items-center gap-3">
              <div className="h-16 w-20 rounded-2xl overflow-hidden bg-white p-2 shadow border border-[#EA4335]/30 flex items-center justify-center">
                <img
                  src="/assets/vectors/gdg-logo.svg"
                  alt="GDG Madurai Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-festive text-[#2A1B12]">
                  GDG Madurai
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EA4335]/15 text-[#C5221F] font-sans font-bold">
                  Google Developer Community
                </span>
              </div>
            </div>

            <p className="text-sm text-[#5C4A3E] leading-relaxed font-sans mb-6">
              Google Developer Group Madurai bridges local students and self-taught engineers directly with Google Cloud Platform, Gemini, and modern distributed systems. No degree gatekeeping — only code, passion, and mentorship.
            </p>

            <ul className="text-xs text-[#5C4A3E] space-y-2 mb-6 font-mono font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#4285F4]">✦</span> GCP Cloud & Gemini AI hands-on bootcamps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#34A853]">✦</span> DevFest Madurai & Google I/O Extended
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FBBC04]">✦</span> Peer-to-peer developer interview preparation
              </li>
            </ul>

            <div className="pt-4 border-t border-[#EA4335]/20 flex items-center justify-between text-xs text-[#C5221F]">
              <span className="font-bold">Bridging Madurai to Global Tech</span>
              <Terminal className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* The Brotherly Union Banner */}
        <div className="p-8 rounded-3xl border-2 border-[#D97706]/40 bg-gradient-to-r from-[#FFF2D6] via-[#FFF9EE] to-[#FFF2D6] text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold font-festive text-[#991B1B] mb-3">
              ஒற்றுமையே பலம் • Together We Rise
            </h4>
            <p className="text-sm text-[#5C4A3E] font-serif italic leading-relaxed mb-6">
              "ஒரு தீபத்திலிருந்து பல தீபங்களை ஏற்றுவது போல — அறிவையும், அன்பையும், தொழில்நுட்பத்தையும் நாம் பகிர்ந்து கொள்ளும்போது, மதுரை மண்ணின் ஒவ்வொரு இளைஞனும் சாதனையாளன் ஆகிறான்."
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold tracking-wider uppercase text-[#2A1B12]">
              <span className="px-4 py-2 rounded-full bg-white border border-[#D97706]/30 shadow-sm">
                🔥 5,000+ Madurai Developers
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-[#D97706]/30 shadow-sm">
                💡 100% Free & Open Source
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-[#D97706]/30 shadow-sm">
                🚀 DevFest 2026 Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
