import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MotionViewport from './MotionViewport';
import { ImageZoom } from './ui/zoomable-image';

const EARNINGS_DATA = [
    {
        title: "Venda Direta",
        description: "Ganhe através da margem de lucro na venda de produtos exclusivos da GFI.",
        image: "/images/GANHOS01.jpg",
    },
    {
        title: "Bônus de Indicação",
        description: "Receba comissões imediatas por novos membros que você trouxer para a rede.",
        image: "/images/GANHOS02.jpg",
    },
    {
        title: "Bônus de Equipe",
        description: "Participe do volume de vendas gerado por toda a sua organização.",
        image: "/images/GANHOS03.jpg",
    },
    {
        title: "Participação nos Lucros (SCP)",
        description: "Como sócio cotista, participe dos resultados globais da operação GFI.",
        image: "/images/GANHOS04.jpg",
    },
    {
        title: "Premiações e Viagens",
        description: "Alcance metas e seja recompensado com experiências inesquecíveis.",
        image: "/images/GANHOS05.jpg",
    }
];

const EarningsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % EARNINGS_DATA.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + EARNINGS_DATA.length) % EARNINGS_DATA.length);
    };

    return (
        <section id="formas-de-ganho" className="py-24 bg-neutral-900/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionViewport className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        5 <span className="font-light">Formas de</span> <span className="text-brand-500">Ganho</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg lg:text-xl">
                        A GFI oferece um ecossistema completo para você rentabilizar seu capital e seu esforço de forma inteligente.
                    </p>
                </MotionViewport>

                <div className="relative group max-w-5xl mx-auto">
                    {/* Carousel Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] border border-white/10 bg-neutral-900/50 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <ImageZoom
                                    src={EARNINGS_DATA[currentIndex].image}
                                    alt={EARNINGS_DATA[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-brand-500 hover:text-black hover:border-brand-500 transition-all pointer-events-auto shadow-2xl"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-brand-500 hover:text-black hover:border-brand-500 transition-all pointer-events-auto shadow-2xl"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {EARNINGS_DATA.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? "w-8 bg-brand-500"
                                        : "bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Hint text */}
                    <p className="text-center mt-6 text-[10px] uppercase tracking-widest text-neutral-500 font-bold animate-pulse">
                        Clique na imagem para ampliar e ver detalhes
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EarningsSection;
