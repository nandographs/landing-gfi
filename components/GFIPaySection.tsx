import * as React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Check, Smartphone, CreditCard, Bitcoin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the type for a feature item
export interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// Define the props for the main component
export interface GFIPayProps {
    /** The title of the section */
    title?: string;
    /** The subtitle of the section */
    subtitle?: string;
    /** The source URL for the video. */
    videoSrc: string;
    /** The source URL for the video thumbnail. */
    videoThumbnail: string;
    /** An array of feature items to be displayed. */
    features: FeatureItem[];
    /** A callback function to be invoked when the video should play. */
    onPlayVideo?: () => void;
    /** Additional CSS class names for the component container. */
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
};

export const GFIPaySection = React.forwardRef<HTMLElement, GFIPayProps>(
    (
        {
            title = "GFI Pay",
            subtitle = "A maquininha de pagamentos mais completa e inovadora do mercado",
            videoSrc,
            videoThumbnail,
            features,
            onPlayVideo,
            className,
        },
        ref
    ) => {
        const videoRef = React.useRef<HTMLVideoElement>(null);
        const [isPlaying, setIsPlaying] = React.useState(false);

        React.useEffect(() => {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const handleIntersection = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isPlaying) {
                        videoElement.play().catch((error) => {
                            console.log('Autoplay prevented:', error);
                        });
                        setIsPlaying(true);
                    } else if (!entry.isIntersecting && isPlaying) {
                        videoElement.pause();
                        setIsPlaying(false);
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5,
            });

            observer.observe(videoElement);

            return () => {
                observer.disconnect();
            };
        }, [isPlaying]);

        return (
            <motion.section
                ref={ref}
                className={cn(
                    "py-24 bg-neutral-900/50 relative overflow-hidden border-y border-white/5",
                    className
                )}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(91,222,64,0.1)_0%,transparent_50%)] -z-10" />
                <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-2h-2v2h2zm4 8h-2v2h2v-2zm8 4h-2v2h2v-2zm-16 0h-2v2h2v-2zm-8-8h-2v2h2v-2zm4-8h-2v2h2v-2zm0 16h-2v2h2v-2zm4-8h-2v2h2v-2zm0-16h-2v2h2v-2zm4 8h-2v2h2v-2zm0 16h-2v2h2v-2zm4-8h-2v2h2v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <h2 className="text-8xl lg:text-[10rem] font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600 font-black">
                                GFI
                            </span>
                            <span className="text-white font-light" style={{ fontFamily: "'Playball', cursive" }}>
                                pay
                            </span>
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-lg lg:text-xl">
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Video - Simple and Direct */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <video
                            ref={videoRef}
                            className="w-full rounded-2xl"
                            loop
                            muted
                            playsInline
                            autoPlay
                        >
                            <source src="/images/GFI-PAY.mp4" type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>

                    {/* Features Grid - 2 per row */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto"
                        variants={itemVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-3 p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-brand-500/30 hover:bg-neutral-900/80 transition-all group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-brand-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* CTA Footer */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <p className="text-sm text-neutral-500 italic">
                            * Sujeito a termos e condições
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        );
    }
);

GFIPaySection.displayName = "GFIPaySection";

// Default export for easier importing
export default GFIPaySection;
