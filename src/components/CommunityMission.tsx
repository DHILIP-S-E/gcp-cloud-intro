import React from 'react';
import { motion } from 'framer-motion';
import { MeenakshiGopuramVector, GDGLogoVector, OpenmadurAIBadge } from './VectorGraphics';
import { Sparkles, Terminal, Cpu, Users, ExternalLink } from 'lucide-react';

export const CommunityMission: React.FC = () => {
  return (
    <section id="mission" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#090A12] via-[#0E1326] to-[#090A12] border-t border-[#F5C76B]/15">
      {/* Background Decorative Temple Silhouettes */}
      <div className="absolute -left-12 bottom-0 opacity-15 pointer-events-none hidden md:block">
        <MeenakshiGopuramVector size={300} />
      </div>
      <div className="absolute -right-12 bottom-0 opacity-15 pointer-events-none hidden md:block">
        <MeenakshiGopuramVector size={300} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5C76B]/30 bg-[#111629]/90 text-xs font-semibold uppercase tracking-wider text-[#F5C76B] mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Community Vision & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-festive text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBEB] via-[#F5C76B] to-[#FF9D36]">
            Heritage of Madurai Meets The Future of AI
          </h2>
          <p className="text-sm sm:text-base text-[#FFF1D6]/80 font-serif italic mt-4 max-w-2xl mx-auto leading-relaxed">
            From the thousand-pillared halls of Meenakshi Amman Temple to modern neural networks and distributed clouds — OpenmadurAI and GDG Madurai unite to empower every creator in Tamil Nadu.
          </p>
        </div>

        {/* Dual Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* OpenmadurAI Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl border border-[#38BDF8]/30 bg-[#111629]/80 backdrop-blur-md relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Cpu className="w-24 h-24 text-[#38BDF8]" />
            </div>

            <div className="mb-4">
              <OpenmadurAIBadge size={180} />
            </div>

            <h3 className="text-xl font-bold font-festive text-[#FFFBEB] mb-2 flex items-center gap-2">
              <span>OpenmadurAI</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-sans">
                AI & Open Source
              </span>
            </h3>

            <p className="text-sm text-[#FFF1D6]/80 leading-relaxed font-sans mb-6">
              Madurai's grassroots artificial intelligence collective dedicated to open weights, generative AI research, vernacular LLM applications, and nurturing deep tech talent in South Tamil Nadu.
            </p>

            <ul className="text-xs text-[#FFF1D6]/70 space-y-2 mb-6 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8]">✦</span> Vernacular AI & Tamil NLP initiatives
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8]">✦</span> Hands-on Machine Learning bootcamps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8]">✦</span> Open-source AI hackathons & paper reading clubs
              </li>
            </ul>

            <div className="pt-4 border-t border-[#38BDF8]/20 flex items-center justify-between text-xs text-[#38BDF8]">
              <span className="font-semibold">Building Madurai's AI Valley</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>

          {/* GDG Madurai Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl border border-[#EA4335]/30 bg-[#111629]/80 backdrop-blur-md relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Terminal className="w-24 h-24 text-[#EA4335]" />
            </div>

            <div className="mb-4">
              <GDGLogoVector size={110} />
            </div>

            <h3 className="text-xl font-bold font-festive text-[#FFFBEB] mb-2 flex items-center gap-2">
              <span>GDG Madurai</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EA4335]/20 text-[#EA4335] font-sans">
                Google Dev Group
              </span>
            </h3>

            <p className="text-sm text-[#FFF1D6]/80 leading-relaxed font-sans mb-6">
              Google Developer Group Madurai brings together developers, cloud engineers, Android builders, and web architects to learn, share, and solve community challenges with Google technologies.
            </p>

            <ul className="text-xs text-[#FFF1D6]/70 space-y-2 mb-6 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-[#4285F4]">✦</span> Google Cloud Platform & Gemini workshops
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#34A853]">✦</span> DevFest Madurai & Google I/O Extended
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FBBC04]">✦</span> Student developer community mentorship
              </li>
            </ul>

            <div className="pt-4 border-t border-[#EA4335]/20 flex items-center justify-between text-xs text-[#EA4335]">
              <span className="font-semibold">Empowering Madurai Developers</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* The Union Callout Banner */}
        <div className="p-8 rounded-3xl border border-[#F5C76B]/40 bg-gradient-to-r from-[#161D36] via-[#12162B] to-[#161D36] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold font-festive text-[#F5C76B] mb-3">
              One Mission: Radiance Through Knowledge
            </h4>
            <p className="text-sm text-[#FFF1D6]/85 font-serif italic leading-relaxed mb-6">
              "Just as a single diya can light hundreds of other lamps without losing its brilliance, sharing technology, skills, and kindness elevates our entire ecosystem."
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold tracking-wider uppercase text-[#FFF1D6]">
              <span className="px-4 py-2 rounded-full bg-[#090A12]/80 border border-[#F5C76B]/30">
                🚀 Upcoming DevFest 2026
              </span>
              <span className="px-4 py-2 rounded-full bg-[#090A12]/80 border border-[#F5C76B]/30">
                💡 Open Source AI Sprints
              </span>
              <span className="px-4 py-2 rounded-full bg-[#090A12]/80 border border-[#F5C76B]/30">
                🤝 5,000+ Active Members
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

