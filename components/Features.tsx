import React from 'react';
import MotionViewport from './MotionViewport';
import { CardsParallax, iCardItem } from './ui/scroll-cards';

// Data for the MEC Market Overview
const cardItems: iCardItem[] = [
  {
    title: "Meios de Pagamento",
    description: "R$ 4,0 Tri (2024)",
    tag: "finance",
    src: "/images/MEC-01.jpg",
    color: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    title: "Marketing de Relacionamento",
    description: "US$ 41,4 bi (2024)",
    tag: "marketing",
    src: "/images/MEC-02.jpg",
    color: "#262626",
    textColor: "#ffffff",
  },
  {
    title: "E-commerce",
    description: "US$ 7,2 tri (2024)",
    tag: "sales",
    src: "/images/MEC-03.jpg",
    color: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    title: "Cooperativismo",
    description: "US$ 2,9 tri (2024)",
    tag: "coop",
    src: "/images/MEC-04.jpg",
    color: "#262626",
    textColor: "#ffffff",
  },
  {
    title: "Produtos Nanotecnologia",
    description: "US$ 84,1 bi (2024)",
    tag: "tech",
    src: "/images/MEC-05.jpg",
    color: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    title: "Formação Continuada",
    description: "US$ 40,2 bi (2024)",
    tag: "education",
    src: "/images/MEC-06.jpg",
    color: "#262626",
    textColor: "#ffffff",
  },
  {
    title: "SCP",
    description: "US$ 38,6 bi (2024) - Sociedade em Conta de Participação",
    tag: "business",
    src: "/images/MEC-07.jpg",
    color: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    title: "Venda Direta",
    description: "US$ 290,5 bi (2024)",
    tag: "direct-sales",
    src: "/images/MEC-08.jpg",
    color: "#262626",
    textColor: "#ffffff",
  }
];

const Features: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-black relative overflow-visible">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,222,64,0.1)_0%,transparent_70%)] -z-10" />
      <div className="absolute inset-0 opacity-[0.06] -z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-2h-2v2h2zm4 8h-2v2h2v-2zm8 4h-2v2h2v-2zm-16 0h-2v2h2v-2zm-8-8h-2v2h2v-2zm4-8h-2v2h2v-2zm0 16h-2v2h2v-2zm4-8h-2v2h2v-2zm0-16h-2v2h2v-2zm4 8h-2v2h2v-2zm0 16h-2v2h2v-2zm4-8h-2v2h2v-2zM44 40h-2v2h2v-2zm0-16h-2v2h2v-2zm-8-8h-2v2h2v-2zm8 0h-2v2h2v-2zm8 8h-2v2h2v-2zm0 16h-2v2h2v-2zm0-8h-2v2h2v-2zm0-16h-2v2h2v-2zm-8-8h-2v2h2v-2zm0 8h-2v2h2v-2zm0 16h-2v2h2v-2zM24 32v-2h-2v2h2zm4 8h-2v2h2v-2zm8 4h-2v2h2v-2zm-16 0h-2v2h2v-2zm-8-8h-2v2h2v-2zm4-8h-2v2h2v-2zm0 16h-2v2h2v-2zm4-8h-2v2h2v-2zm0-16h-2v2h2v-2zm4 8h-2v2h2v-2zm0 16h-2v2h2v-2zm4-8h-2v2h2v-2zM12 24h-2v2h2v-2zm0-16h-2v2h2v-2zm-8-8h-2v2h2v-2zm8 0h-2v2h2v-2zm8 8h-2v2h2v-2zm0 16h-2v2h2v-2zm0-8h-2v2h2v-2zm0-16h-2v2h2v-2zm-8-8h-2v2h2v-2zm0 8h-2v2h2v-2zm0 16h-2v2h2v-2zM0 32v-2h2v2H0zm0 8h2v2H0v-2zm0 8h2v2H0v-2zm0-16h2v2H0v-2zm0-8h2v2H0v-2zm0-8h2v2H0v-2zm0-8h2v2H0V0zm0 40h2v2H0v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionViewport className="text-center mb-10">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">MEC</span>
          </h2>
          <p className="mt-4 mb-6 text-xl text-brand-400 font-semibold">Mercado Econômico Cooperativo</p>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Em 2024, estes modelos de negócio movimentaram volumes expressivos na economia global, validando a robustez dos setores onde a GFI atua.
          </p>
        </MotionViewport>

        {/* Scroll Parallax Cards */}
        <div className="relative">
          <CardsParallax items={cardItems} />
        </div>
      </div>
    </section>
  );
};

export default Features;