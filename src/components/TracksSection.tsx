import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Smartphone, Users, Sparkles, ArrowRight } from 'lucide-react';

const TRACKS = [
  {
    id: 'ai-ml',
    title: 'Generative AI & Tamil NLP',
    partner: 'OpenmadurAI Initiative',
    description: 'Deep dive into multimodal Gemini models, open weights, vernacular Tamil tokenizers, and domain-adapted AI applications for real-world impact.',
    icon: Cpu,
    color: '#4285F4',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    topics: ['Gemini 1.5 Pro & Flash', 'Vernacular Tamil LLMs', 'RAG & Vector Search', 'Model Fine-tuning'],
  },
  {
    id: 'cloud',
    title: 'Google Cloud & Distributed Systems',
    partner: 'GDG Madurai Cloud Circle',
    description: 'Master serverless microservices on Cloud Run, BigQuery data analytics, Kubernetes scaling, and modern cloud security architectures.',
    icon: Cloud,
    color: '#EA4335',
    badgeBg: 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
    topics: ['Google Cloud Run', 'BigQuery & Data Lake', 'GKE Kubernetes', 'CI/CD with Cloud Build'],
  },
  {
    id: 'mobile-web',
    title: 'Android, Flutter & Modern Web',
    partner: 'Cross-Platform Collective',
    description: 'Architecting performant, beautiful user experiences across mobile and web using Jetpack Compose, Flutter, React, and progressive web tech.',
    icon: Smartphone,
    color: '#FBBC04',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    topics: ['Jetpack Compose', 'Flutter 3.x Multiplatform', 'React & Vite PWA', 'Firebase Backend'],
  },
  {
    id: 'open-source',
    title: 'Open Source & Dev Ecosystem',
    partner: 'Grassroots Community',
    description: 'Fostering Madurai’s next generation of open-source maintainers, hackathon contenders, and technical innovators without metro gatekeeping.',
    icon: Users,
    color: '#34A853',
    badgeBg: 'bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
    topics: ['Open Source Tooling', 'Hackathon Playbooks', 'Career Roadmaps', 'Community Mentorship'],
  },
];

export const TracksSection: React.FC = () => {
  return (
    <section id="tracks" className="relative py-24 px-4 bg-stone-50/50 dark:bg-[#06070C] border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4285F4]" />
            <span>DevFest Madurai 2026 Focus Areas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-festive text-stone-900 dark:text-white mb-4">
            Four Flagship Technology Tracks
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 font-serif italic max-w-2xl mx-auto leading-relaxed">
            Curated by GDG Madurai & OpenmadurAI to bridge Tamil Nadu's developer talent with global technology standards.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track, idx) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#111629] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: track.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${track.badgeBg}`}>
                      {track.partner}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#4285F4] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1.5 pt-4 border-t border-stone-100 dark:border-stone-800/80 mb-5">
                    {track.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-stone-500 dark:text-stone-400">
                        <span style={{ color: track.color }}>✦</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#light-a-diya"
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
                    style={{ color: track.color }}
                  >
                    <span>Participate in Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
