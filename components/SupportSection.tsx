import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Youtube, Globe } from 'lucide-react';
import MotionViewport from './MotionViewport';

const SOCIAL_LINKS = [
    {
        name: "WhatsApp",
        icon: <MessageCircle size={28} />,
        label: "Fale Comigo",
        href: "https://wa.me/554699008945",
        color: "hover:bg-green-500",
    },
    {
        name: "Instagram",
        icon: <Instagram size={28} />,
        label: "Siga nossas novidades",
        href: "https://www.instagram.com/portalgfi/",
        color: "hover:bg-pink-600",
    },
    {
        name: "YouTube",
        icon: <Youtube size={28} />,
        label: "Assista nossas lives",
        href: "https://www.youtube.com/@GrupoFirstInternational",
        color: "hover:bg-red-600",
    },
    {
        name: "Site Oficial",
        icon: <Globe size={28} />,
        label: "Acesse nosso portal",
        href: "https://portalgfi.com.br/",
        color: "hover:bg-brand-500",
    }
];

const SupportSection: React.FC = () => {
    return (
        <section id="suporte" className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-neutral-900/40 backdrop-blur-3xl border border-white/5 p-12 lg:p-20 rounded-[3rem] lg:rounded-[4rem] shadow-2xl">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Ainda tem <span className="text-brand-500">Dúvidas?</span>
                        </h2>
                        <p className="text-neutral-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                            Nossa equipe está pronta para te ajudar a entender melhor como você pode começar a lucrar ainda hoje com o ecossistema GFI.
                        </p>
                    </motion.div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className={`flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl transition-all ${social.color} hover:text-white group overflow-hidden group`}
                                >
                                    <div className="text-brand-500 group-hover:text-white transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-0.5">{social.name}</p>
                                        <p className="text-[10px] text-neutral-400 group-hover:text-white/80 transition-colors uppercase font-bold tracking-widest">{social.label}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
