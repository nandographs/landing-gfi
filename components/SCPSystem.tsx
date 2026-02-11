import React from 'react';
import { OnboardingChecklist } from './ui/onboarding-checklist';
import { BackgroundBeams } from './ui/background-beams';
import { TextEffect } from './ui/text-effect';

const SCPSystem: React.FC = () => {
    const checklistItems = [
        {
            id: 1,
            text: "Capital investido com propósito;",
            helperText: "O Sócio Participante realiza o investimento na GFI."
        },
        {
            id: 2,
            text: "Sistema operando todos os dias;",
            helperText: "O negócio nunca para."
        },
        {
            id: 3,
            text: "Resultados compartilhados como sócio;",
            helperText: "Os lucros são distribuídos conforme o contrato SCP."
        },
        {
            id: 4,
            text: "Estrutura jurídica definida;",
            helperText: "Modelo regulamentado pelo Código Civil Brasileiro (Art. 991 a 996)."
        }
    ];

    return (
        <section className="py-24 bg-brand-500 relative border-t border-black/5 overflow-hidden" id="modelo">
            <BackgroundBeams className="opacity-30" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 flex flex-wrap justify-center items-baseline gap-x-[0.25em]">
                        <TextEffect
                            preset="slide"
                            as="span"
                        >
                            Modelo
                        </TextEffect>
                        <TextEffect
                            preset="slide"
                            as="span"
                            className="text-white font-black"
                            delay={0.2}
                        >
                            UDL SCP
                        </TextEffect>
                    </h2>
                    <TextEffect
                        preset="slide"
                        as="p"
                        delay={0.5}
                        className="text-black/80 max-w-2xl mx-auto text-lg font-medium justify-center"
                    >
                        A Sociedade Cota de Participação é a estrutura jurídica que permite você lucrar com a operação da GFI sem burocracia.
                    </TextEffect>
                </div>

                <OnboardingChecklist
                    title="Seja um Sócio SCP GFI"
                    description="Ganhe como sócio, sem o estresse do Operacional."
                    items={checklistItems}
                    videoThumbnailUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                    videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?si=XZeX7X7X7X7X7X7X" // Placeholder video
                    className="bg-black border border-white/10 shadow-2xl text-white"
                />
            </div>
        </section>
    );
};

export default SCPSystem;
