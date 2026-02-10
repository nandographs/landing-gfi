
import { FC } from "react";

// Types
export interface iCardItem {
    title: string;
    description: string;
    tag: string;
    src: string;
    link?: string;
    color: string;
    textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
    i: number;
    src: string;
}

import { useRef } from "react";
import { useInView } from "framer-motion";
import { TextEffect } from "./text-effect";

// Components
const Card: FC<iCardProps> = ({
    title,
    description,
    color,
    textColor,
    src,
}) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <div className="min-h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
            <div
                ref={cardRef}
                className="relative flex flex-col h-[400px] w-full max-w-[700px] py-12 px-10 md:px-12
        md:h-[500px] items-center justify-center mx-auto 
        shadow-2xl pr-3 pl-3 pt-3 pb-4 rounded-3xl overflow-hidden border border-white/10"
                style={{ backgroundColor: color }}
            >
                <span className="font-bold relative text-4xl md:text-6xl mt-5 text-center z-10 leading-tight">
                    <span
                        className="relative font-black tracking-tight"
                        style={{ color: textColor }}
                    >
                        <TextEffect
                            as="span"
                            per="word"
                            preset="slide"
                            className="inline-block"
                            trigger={isInView}
                        >
                            {title.split(" ").slice(0, -1).join(" ")}
                        </TextEffect>
                        {" "}
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">
                            {title.split(" ").slice(-1)[0]}
                        </span>
                    </span>
                </span>
                <div
                    className="text-lg md:text-2xl font-medium text-center mb-0 z-50 mt-4 tracking-wide max-w-lg"
                    style={{ lineHeight: 1.4, color: textColor }}
                >
                    {description}
                </div>
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700 ease-out"
                        src={src}
                        alt={title}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            </div>
        </div>
    );
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
    items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
    return (
        <div className="w-full">
            {items.map((project, i) => {
                return <Card key={`p_${i}`} {...project} i={i} />;
            })}
        </div>
    );
};
