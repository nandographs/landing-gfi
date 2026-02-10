import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MotionViewport from './MotionViewport';
import { ImageZoom } from './ui/zoomable-image';

const GRAD_IMAGES = [
    "/images/GRAD01.jpg",
    "/images/GRAD02.jpg",
    "/images/GRAD03.jpg",
    "/images/GRAD04.jpg",
    "/images/GRAD05.jpg",
    "/images/GRAD06.jpg",
    "/images/GRAD07.jpg",
    "/images/GRAD08.jpg",
];

const IncentivesSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % GRAD_IMAGES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + GRAD_IMAGES.length) % GRAD_IMAGES.length);
    };

    return (
        <section id="incentivos" className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionViewport className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Incentivos <span className="font-light">de</span> <span className="text-brand-500">Rede</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg lg:text-xl">
                        Conquiste graduações e seja recompensado com prêmios exclusivos através do nosso plano de carreira meritocrático.
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
                                    src={GRAD_IMAGES[currentIndex]}
                                    alt={`Premiação ${currentIndex + 1}`}
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
                            {GRAD_IMAGES.map((_, index) => (
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
                        Clique na imagem para ampliar e ver detalhes do prêmio
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IncentivesSection;
