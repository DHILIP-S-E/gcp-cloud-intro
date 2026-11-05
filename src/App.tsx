import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DiwaliHero } from './components/DiwaliHero';
import { TracksSection } from './components/TracksSection';
import { InteractiveDiyaSection } from './components/InteractiveDiyaSection';
import { WishCardGenerator } from './components/WishCardGenerator';
import { CommunityMission } from './components/CommunityMission';
import { VenueFaqSection } from './components/VenueFaqSection';
import { Footer } from './components/Footer';
import { FallingPetals } from './components/FallingPetals';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('devfest-theme') as 'light' | 'dark') || 'light';
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
    localStorage.setItem('devfest-theme', theme);
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
    } font-sans selection:bg-[#4285F4] selection:text-white overflow-x-hidden`}>
      {/* Floating Gentle Petals / Particle Ambience */}
      <FallingPetals
        count={20}
        className="fixed inset-0 pointer-events-none z-10 opacity-60"
      />

      {/* DevFest Modern Header with Google 4-Color Capsule Brand */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onLightDiyaClick={() => scrollToSection('light-a-diya')}
      />

      {/* Main Content */}
      <main className="relative z-20">
        <DiwaliHero
          onExploreClick={() => scrollToSection('about')}
          onDiyaSectionClick={() => scrollToSection('light-a-diya')}
        />

        <div id="about">
          <CommunityMission />
        </div>

        <TracksSection />

        <InteractiveDiyaSection />

        <WishCardGenerator />

        <VenueFaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
