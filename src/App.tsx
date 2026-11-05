import React from 'react';
import { DiwaliHero } from './components/DiwaliHero';
import { InteractiveDiyaSection } from './components/InteractiveDiyaSection';
import { WishCardGenerator } from './components/WishCardGenerator';
import { CommunityMission } from './components/CommunityMission';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FallingPetals } from './components/FallingPetals';

export const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF7] text-[#2A1B12] font-sans selection:bg-[#F5C76B] selection:text-[#090A12] overflow-x-hidden">
      {/* Floating Marigold Flower Petals in the Festive Breeze */}
      <FallingPetals
        count={24}
        className="fixed inset-0 pointer-events-none z-10 opacity-70"
      />

      {/* Top Navbar */}
      <Navbar onLightDiyaClick={() => scrollToSection('light-a-diya')} />

      {/* Main Content Sections with 2D Graphic Image Assets */}
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
