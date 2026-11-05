import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: 'What is DevFest Madurai 2026 × Diwali Celebration?',
    a: 'DevFest Madurai is an annual community-led developer festival organized by GDG Madurai in partnership with OpenmadurAI. This edition brings together Diwali celebration of lights with cutting-edge workshops on Gemini AI, Google Cloud, and Open Source.',
  },
  {
    q: 'Who can attend and participate?',
    a: 'Everyone! Whether you are a college student, an experienced engineer, a startup founder, or an aspiring developer from South Tamil Nadu, all sessions and community activities are 100% free and open to all.',
  },
  {
    q: 'What is the "Living Wall of 1,000 Lights"?',
    a: 'It is our interactive digital tribute where community members dedicate a sacred Diya with their authentic tech aspirations, resolutions, and dreams for 2026. Each Diya illuminates our live community wall.',
  },
  {
    q: 'How do OpenmadurAI and GDG Madurai collaborate?',
    a: 'OpenmadurAI champions grassroots vernacular AI research and Tamil language models, while GDG Madurai connects engineers with Google Cloud, Android, and global developer programs. Together, we elevate Madurai as a high-tech center.',
  },
];

export const VenueFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="venue-faq" className="relative py-24 px-4 bg-white dark:bg-[#090A12] border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Venue Information Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-[#111629] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>The Gathering Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-festive text-stone-900 dark:text-white">
                DevFest Madurai 2026 • Venue
              </h2>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                Nestled in the historic city of temples, jasmine, and sleepless builders. Join hundreds of passionate creators in the heart of Madurai, Tamil Nadu.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
                <div className="flex items-center gap-2 bg-white dark:bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700">
                  <Calendar className="w-4 h-4 text-[#EA4335]" />
                  <span>Diwali Festive Edition • 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700">
                  <Clock className="w-4 h-4 text-[#FBBC04]" />
                  <span>Full-Day Hands-on Sprints</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700">
                  <ShieldCheck className="w-4 h-4 text-[#34A853]" />
                  <span>Free & Open Registration</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-stone-200 dark:border-stone-700 shadow-lg relative">
              <img
                src="/assets/images/gopuram-diwali.jpg"
                alt="Madurai Meenakshi Gopuram Venue Graphic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-bold tracking-wide">
                  📍 Madurai • Where Heritage Meets Innovation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#4285F4]" />
              <span>Questions & Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-festive text-stone-900 dark:text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#111629] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 dark:text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-[#4285F4]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed border-t border-stone-100 dark:border-stone-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
