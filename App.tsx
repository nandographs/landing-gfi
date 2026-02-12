import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Features from './components/Features';
import GFIPaySection from './components/GFIPaySection';
import { Smartphone, CreditCard, Bitcoin, Check } from 'lucide-react';
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
  // GFI Pay features data
  const gfiPayFeatures = [
    {
      icon: <Smartphone className="h-6 w-6 text-brand-500" />,
      title: "Sistema Android",
      description: "Permite instalação de aplicativos"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-brand-500" />,
      title: "Parcelamento em até 21x",
      description: "Suporte para pagamentos em até 21 vezes"
    },
    {
      icon: <Bitcoin className="h-6 w-6 text-brand-500" />,
      title: "Aceita Criptoativos*",
      description: "Aceita pagamentos em criptoativos"
    },
    {
      icon: <Check className="h-6 w-6 text-brand-500" />,
      title: "Fácil Aprovação",
      description: "Disponível para qualquer usuário, após cadastramento e aprovação"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <GFIPaySection
          videoSrc="/images/GFI-PAY.mp4"
          videoThumbnail="/images/thumbnail.jpg"
          features={gfiPayFeatures}
        />
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