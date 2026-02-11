import React from 'react';
import { TierCard } from './ui/tier-card';
import { TierData } from './ui/argent-loop-infinite-slider';
import { motion } from 'framer-motion';
import MotionViewport from './MotionViewport';

const JOIN_TIERS: TierData[] = [
    {
        title: "Cadastro Gratuito",
        image: "/images/CADASTROGRATUITO.jpg",
        category: "Entrada",
        description: "Inicie agora sem custos. Permite comprar os produtos da GFI com 20% de desconto exclusivo para membros cadastrados.",
    },
    {
        title: "DDI - Distribuidor Direto Independente",
        image: "/images/DDI.jpg",
        category: "Negócio",
        price: "$30 / Adesão",
        description: "Direito a ser revendedor com até 30% de desconto, acesso ao seu ecommerce personalizado e direito a indicar novos membros recebendo bonificações por isso.",
    },
    {
        title: "UDL Afiliado (Sócio SCP)",
        image: "/images/UDLAFILIADO.jpg",
        category: "Sócio",
        price: "Consulte Cotas (SCP)",
        description: "O nível máximo de parceria. Participe dos lucros através das cotas SCP com até 40% de desconto nos produtos e ganhos recorrentes sobre a operação.",
    }
];

const JoinSection: React.FC = () => {
    return (
        <section id="fazer-parte" className="bg-black py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <MotionViewport className="text-center">
                    <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Como fazer <span className="text-brand-500">parte?</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Escolha o nível que melhor se adapta aos seus objetivos. Desde um simples cadastro para consumo até a sociedade estratégica com participação nos lucros.
                    </p>
                </MotionViewport>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {JOIN_TIERS.map((tier, index) => (
                    <TierCard
                        key={index}
                        data={tier}
                        number={(index + 1).toString().padStart(2, "0")}
                        index={index}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a
                        href="https://app.portalgfi.com/auth/register?sponsorAccountNo=0550000062596"
                        className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-black text-xl hover:scale-105 transition-transform"
                    >
                        Quero iniciar agora
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default JoinSection;
