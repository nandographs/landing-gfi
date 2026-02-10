import React from 'react';
import TextMarquee from './ui/text-marquee';

const MarqueeSection: React.FC = () => {
    return (
        <section className="bg-brand-500 py-4 overflow-hidden">
            <TextMarquee
                delay={0}
                baseVelocity={-2}
                clasname="font-black tracking-[-0.05em] leading-[90%] text-black uppercase text-2xl md:text-4xl"
            >
                Investimento Seguro  •  Modelo SCP Validado  •  Lucros Escaláveis  •
            </TextMarquee>
            <TextMarquee
                delay={0}
                baseVelocity={2}
                clasname="font-black tracking-[-0.05em] leading-[90%] text-neutral-900 uppercase text-2xl md:text-4xl"
            >
                Zero Burocracia  •  Transparência Total  •  Contrato Jurídico  •
            </TextMarquee>
        </section>
    );
};

export default MarqueeSection;
