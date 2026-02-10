"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Define the type for a single checklist item
interface ChecklistItem {
    id: number | string;
    text: string;
    helperText?: string;
    helperLink?: {
        href: string;
        text: string;
    };
}

// Define the props for the main component
export interface OnboardingChecklistProps {
    title: string;
    description: string;
    items: ChecklistItem[];
    videoThumbnailUrl: string;
    videoUrl: string;
    className?: string;
}

/**
 * A responsive and animated onboarding checklist component.
 * @param title - The main heading for the checklist.
 * @param description - A short description displayed below the title.
 * @param items - An array of checklist items to display.
 * @param videoThumbnailUrl - The URL for the video thumbnail image.
 * @param videoUrl - The URL for the video to be played in a modal.
 * @param className - Optional additional class names for the container.
 */
export const OnboardingChecklist = ({
    title,
    description,
    items,
    videoThumbnailUrl,
    videoUrl,
    className,
}: OnboardingChecklistProps) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={cn(
                "w-full max-w-5xl mx-auto border border-white/10 rounded-3xl shadow-sm p-8 overflow-hidden bg-neutral-900/50 backdrop-blur-sm text-white",
                className
            )}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Title and Checklist */}
                <div className="flex flex-col text-left">
                    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                    <p className="mt-2 opacity-70">{description}</p>
                    <ul className="mt-8 grid grid-cols-1 gap-y-4">
                        {items.map((item) => (
                            <motion.li key={item.id} variants={itemVariants} className="flex flex-col">
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-6 w-6 text-brand-500 flex-shrink-0 mr-3" />
                                    <span className="text-base font-medium">{item.text}</span>
                                </div>
                                {item.helperText && item.helperLink && (
                                    <div className="ml-9 mt-1 text-sm opacity-60">
                                        {item.helperText}{" "}
                                        <a
                                            href={item.helperLink.href}
                                            className="text-brand-500 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm font-semibold"
                                        >
                                            {item.helperLink.text}
                                        </a>
                                    </div>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Video Thumbnail */}
                <motion.div
                    variants={itemVariants} // Re-using item variant for a nice slide-in effect
                    className="relative group rounded-2xl overflow-hidden cursor-pointer w-full aspect-video border border-white/10 shadow-2xl"
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="w-full h-full relative">
                                <img
                                    src={videoThumbnailUrl}
                                    alt="Video guide thumbnail"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full bg-brand-500/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-brand-500/50">
                                        <PlayCircle className="h-10 w-10 text-brand-500 fill-brand-500/20" />
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 border-0 bg-black/90 backdrop-blur-xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    src={videoUrl}
                                    title="Onboarding Video Guide"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-lg"
                                ></iframe>
                            </div>
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </div>
        </motion.div>
    );
};
