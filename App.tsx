import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Features from './components/Features';
import SCPSystem from './components/SCPSystem';
import Mentor from './components/Mentor';
import IncentivesSection from './components/IncentivesSection';
import JoinSection from './components/JoinSection';
import EarningsSection from './components/EarningsSection';
import Pricing from './components/Pricing';
import SupportSection from './components/SupportSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <EarningsSection />
        <Comparison />
        <SCPSystem />
        <IncentivesSection />
        <JoinSection />
        <Mentor />
        <Pricing />
        <SupportSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;