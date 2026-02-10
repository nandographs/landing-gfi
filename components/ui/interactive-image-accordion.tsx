import React, { useState } from 'react';

// --- Data for the image accordion for GFI Context ---
const accordionItems = [
    {
        id: 1,
        title: 'Nutrição',
        imageUrl: '/images/PRODUCTS-GFI-1.jpg',
    },
    {
        id: 2,
        title: 'Água',
        imageUrl: '/images/PRODUCTS-GFI-2.jpg',
    },
    {
        id: 3,
        title: 'Terapêutica',
        imageUrl: '/images/PRODUCTS-GFI-3.jpg',
    },
    {
        id: 4,
        title: 'Perfumes',
        imageUrl: '/images/PRODUCTS-GFI-4.jpg',
    },
    {
        id: 5,
        title: 'Limpeza',
        imageUrl: '/images/PRODUCTS-GFI-5.jpg',
    },
    {
        id: 6,
        title: 'Cosméticos',
        imageUrl: '/images/PRODUCTS-GFI-6.jpg',
    },
];

interface AccordionItemProps {
    item: typeof accordionItems[0];
    isActive: boolean;
    onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
    return (
        <div
            className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-white/10
        ${isActive ? 'w-[400px] shadow-[0_0_30px_rgba(91,222,64,0.2)]' : 'w-[60px] opacity-60 hover:opacity-100'}
      `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
            />
            {/* Dark overlay for better text readability */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-black/40' : 'bg-black/70'}`}></div>

            {/* Caption Text */}
            <span
                className={`
          absolute text-white text-lg font-bold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isActive
                        ? 'bottom-8 left-8 rotate-0' // Active state: horizontal, bottom-left
                        : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
                    }
        `}
            >
                {item.title}
            </span>

            {/* Active Indicator Bar */}
            {isActive && (
                <div className="absolute bottom-6 left-8 w-12 h-1 bg-brand-500 rounded-full animate-pulse shadow-[0_0_10px_#5bde40]"></div>
            )}
        </div>
    );
};


// --- Main Section Component ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(0); // Start with first one active

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-black py-24 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            A Base do <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">
                                Ecossistema
                            </span>
                        </h2>
                        <p className="mt-4 text-xl text-brand-400 font-semibold">Onde tudo começa a se mover.</p>
                        <p className="mt-6 text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Os produtos formam a base que sustenta todo o ecossistema. São diferentes linhas que atendem necessidades reais do dia a dia, como nutrição, terapêutica, água, perfumaria, limpeza e cuidados pessoais. Essa diversidade cria movimento constante, fortalece o sistema e mantém a operação ativa em diferentes frentes, todos os dias.
                        </p>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-row items-center justify-center gap-4 p-4 min-h-[500px]">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
