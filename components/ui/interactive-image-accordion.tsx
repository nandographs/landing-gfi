import React from 'react';
import { Carousel } from './carousel';

// --- Data for the products carousel ---
const productSlides = [
    {
        title: 'Nutrição',
        button: 'Produtos de nutrição',
        src: '/images/PRODUCTS-GFI-1.jpg',
    },
    {
        title: 'Água',
        button: 'Água de qualidade',
        src: '/images/PRODUCTS-GFI-2.jpg',
    },
    {
        title: 'Terapêutica',
        button: 'Produtos terapêuticos',
        src: '/images/PRODUCTS-GFI-3.jpg',
    },
    {
        title: 'Perfumes',
        button: 'Fragrâncias exclusivas',
        src: '/images/PRODUCTS-GFI-4.jpg',
    },
    {
        title: 'Limpeza',
        button: 'Produtos de limpeza',
        src: '/images/PRODUCTS-GFI-5.jpg',
    },
    {
        title: 'Cosméticos',
        button: 'Cosméticos premium',
        src: '/images/PRODUCTS-GFI-6.jpg',
    },
];

export function LandingAccordionItem() {
    return (
        <div className="bg-black py-24 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-12">
                    {/* Text Content */}
                    <div className="w-full text-center">
                        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            A Base do <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">
                                Ecossistema
                            </span>
                        </h2>
                        <p className="mt-4 text-xl text-brand-400 font-semibold">Onde tudo começa a se mover.</p>
                        <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            Os produtos formam a base que sustenta todo o ecossistema. São diferentes linhas que atendem necessidades reais do dia a dia, como nutrição, terapêutica, água, perfumaria, limpeza e cuidados pessoais. Essa diversidade cria movimento constante, fortalece o sistema e mantém a operação ativa em diferentes frentes, todos os dias.
                        </p>
                    </div>

                    {/* Carousel */}
                    <Carousel slides={productSlides} />
                </div>
            </div>
        </div>
    );
}
