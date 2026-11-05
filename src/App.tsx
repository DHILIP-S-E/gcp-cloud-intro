import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroSequence } from './components/IntroSequence';
import { DiwaliHero } from './components/DiwaliHero';
import { InteractiveDiyaSection } from './components/InteractiveDiyaSection';
import { WishCardGenerator } from './components/WishCardGenerator';
import { CommunityMission } from './components/CommunityMission';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FireworksCanvas } from './components/FireworksCanvas';
import { FallingPetals } from './components/FallingPetals';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('diwali_theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('diwali_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#090A12] text-[#FFF1D6]'
        : 'bg-[#FFFDF7] text-[#2A1B12]'
    } font-sans selection:bg-[#F5C76B] selection:text-[#090A12] overflow-x-hidden`}>
      {/* Cinematic Intro Sequence (skipable) */}
      <AnimatePresence>
        {showIntro && (
          <IntroSequence onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Background Interactive Fireworks Canvas */}
      <FireworksCanvas
        intensity="ambient"
        interactive={true}
        className="fixed inset-0 pointer-events-none z-0 opacity-60 dark:opacity-70"
      />

      {/* Floating Marigold Flower Petals */}
      <FallingPetals
        count={24}
        className="fixed inset-0 pointer-events-none z-10 opacity-70 dark:opacity-75"
      />

      {/* Top Navbar with Theme Toggle & Audio */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onLightDiyaClick={() => scrollToSection('light-a-diya')}
      />

      {/* Main Content Sections */}
      <main className="relative z-20">
        <DiwaliHero
          onExploreClick={() => scrollToSection('mission')}
          onDiyaSectionClick={() => scrollToSection('light-a-diya')}
        />

        <InteractiveDiyaSection />

        <WishCardGenerator />

        <CommunityMission />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
