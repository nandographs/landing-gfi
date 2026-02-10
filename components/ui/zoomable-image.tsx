"use client"

import * as React from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import { cn } from "../../lib/utils"

import { X } from "lucide-react"

// Since we are not in Next.js, we use standard img tag instead of next/image
export interface ImageZoomProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    zoomInProps?: React.ImgHTMLAttributes<HTMLImageElement>
    zoomProps?: Partial<UncontrolledProps>
    children?: React.ReactNode
    className?: string
    src?: string
    alt?: string
}

export function ImageZoom({
    zoomInProps,
    zoomProps,
    className,
    children,
    ...props
}: ImageZoomProps) {
    const src = props.src;
    return (
        <Zoom
            classDialog={cn(
                "fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            )}
            a11yNameButtonUnzoom="Close"
            zoomMargin={20}
            {...zoomProps}
            zoomImg={{
                src: src,
                className: cn(
                    "image-rendering-high-quality cursor-zoom-out object-contain",
                    zoomInProps?.className
                ),
                ...zoomInProps,
            }}
            ZoomContent={({ img, onUnzoom }) => (
                <div className="relative w-screen h-screen flex flex-col items-center justify-center p-4">
                    {img}
                    <button
                        onClick={(e) => {
                            // Convert React event to standard Event if needed, 
                            // though onUnzoom usually handles React events fine in recent versions
                            onUnzoom(e as any);
                        }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 text-white shadow-2xl cursor-pointer hover:bg-black/80 transition-all active:scale-95 animate-in fade-in slide-in-from-bottom-4 duration-700"
                    >
                        <X size={16} className="text-brand-500 md:w-[18px] md:h-[18px]" />
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">Clique para fechar</span>
                    </button>
                </div>
            )}
        >
            {children ?? (
                <img
                    className={cn(
                        "cursor-zoom-in rounded-xl transition-all hover:scale-[1.02]",
                        className
                    )}
                    {...props}
                />
            )}
        </Zoom>
    )
}
