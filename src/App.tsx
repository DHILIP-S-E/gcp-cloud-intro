import React, { useState } from 'react';
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090A12] text-[#FFF1D6] font-sans selection:bg-[#F5C76B] selection:text-[#090A12] overflow-x-hidden">
      {/* Cinematic Intro Sequence (Plays on first load, skipable) */}
      <AnimatePresence>
        {showIntro && (
          <IntroSequence onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Background Interactive Fireworks Canvas (Skyward ambient celebrations) */}
      <FireworksCanvas
        intensity="ambient"
        interactive={true}
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Floating Marigold Flower Petals in the ambient breeze */}
      <FallingPetals
        count={28}
        className="fixed inset-0 pointer-events-none z-10 opacity-75"
      />

      {/* Top Navbar */}
      <Navbar onLightDiyaClick={() => scrollToSection('light-a-diya')} />

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

