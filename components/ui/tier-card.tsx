import * as React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export interface TierData {
    title: string;
    image: string;
    category: string;
    price?: string;
    description: string;
}

interface TierCardProps {
    data: TierData;
    number: string;
    index: number;
}

export const TierCard: React.FC<TierCardProps> = ({ data, number, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full max-w-[1000px] mx-auto mb-12"
        >
            <div className="relative w-full h-auto min-h-[400px] lg:h-[550px] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-neutral-900/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] group">
                {/* Image Preview */}
                <div className="relative w-full lg:w-72 h-64 lg:h-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-white/10 shrink-0">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info List */}
                <div className="relative flex-1 h-full flex flex-col justify-center gap-4 lg:gap-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xs lg:text-sm font-bold text-brand-500 tracking-[0.4em] font-mono">{number}</p>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] lg:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">{data.category}</span>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight">
                        {data.title}
                    </h3>
                    {data.price && (
                        <div className="inline-block px-3 py-1.5 bg-brand-500/20 border border-brand-500/30 rounded-lg w-fit shadow-[0_0_15px_rgba(91,222,64,0.1)]">
                            <p className="text-brand-400 font-bold text-sm lg:text-base tracking-wide">{data.price}</p>
                        </div>
                    )}
                    <p className="text-sm lg:text-lg text-neutral-300 leading-relaxed font-medium">
                        {data.description}
                    </p>
                    <div className="mt-4">
                        <a
                            href="https://app.portalgfi.com/auth/register?sponsorAccountNo=0550000062596"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 bg-brand-500 text-black rounded-full font-bold text-sm hover:bg-brand-400 transition-all hover:scale-105"
                        >
                            Quero este Nível
                        </a>
                    </div>
                </div>

                {/* Decorative background glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
        </motion.div>
    );
};
