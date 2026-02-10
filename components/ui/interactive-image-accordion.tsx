import React from 'react';
import { ImageAutoSlider, SlideItem } from './image-auto-slider';

// --- Data for the products carousel ---
const productItems: SlideItem[] = [
    {
        title: 'Nutrição',
        description: 'Produtos de nutrição',
        image: '/images/PRODUCTS-GFI-1.jpg',
    },
    {
        title: 'Água',
        description: 'Água de qualidade',
        image: '/images/PRODUCTS-GFI-2.jpg',
    },
    {
        title: 'Terapêutica',
        description: 'Produtos terapêuticos',
        image: '/images/PRODUCTS-GFI-3.jpg',
    },
    {
        title: 'Perfumes',
        description: 'Fragrâncias exclusivas',
        image: '/images/PRODUCTS-GFI-4.jpg',
    },
    {
        title: 'Limpeza',
        description: 'Produtos de limpeza',
        image: '/images/PRODUCTS-GFI-5.jpg',
    },
    {
        title: 'Cosméticos',
        description: 'Cosméticos premium',
        image: '/images/PRODUCTS-GFI-6.jpg',
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
                    <ImageAutoSlider items={productItems} />
                </div>
            </div>
        </div>
    );
}
