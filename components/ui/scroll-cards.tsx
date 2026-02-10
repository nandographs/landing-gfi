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

// Components
const Card: FC<iCardProps> = ({
    title,
    description,
    color,
    textColor,
    i,
    src,
}) => {
    return (
        <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
            <div
                className="relative flex flex-col h-[300px] w-full max-w-[700px] py-12 px-10 md:px-12
				md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-2xl rounded-3xl overflow-hidden border border-white/10"
                style={{ backgroundColor: color }}
            >
                <span className="font-bold relative text-4xl md:text-6xl mt-5 text-center z-10">
                    <span
                        className="relative font-black tracking-tight"
                        style={{ color: textColor }}
                    >
                        {title}
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
                        className="w-full h-full object-cover opacity-60"
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
