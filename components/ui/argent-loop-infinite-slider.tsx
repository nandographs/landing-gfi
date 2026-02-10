"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface TierData {
    title: string;
    image: string;
    category: string;
    price?: string;
    description: string;
}

interface ArgentLoopInfiniteSliderProps {
    data: TierData[];
    className?: string;
}

const CONFIG = {
    SCROLL_SPEED: 1.2,
    LERP_FACTOR: 0.1,
    BUFFER_SIZE: 5,
    MAX_VELOCITY: 500,
    SNAP_DURATION: 500,
};

// Utility functions
const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

export function ArgentLoopInfiniteSlider({ data, className }: ArgentLoopInfiniteSliderProps) {
    const [visibleRange, setVisibleRange] = React.useState({
        min: -CONFIG.BUFFER_SIZE,
        max: CONFIG.BUFFER_SIZE,
    });

    const getProjectData = (index: number) => {
        const i =
            ((Math.abs(index) % data.length) + data.length) %
            data.length;
        return data[i];
    };

    const getProjectNumber = (index: number) => {
        return (
            ((Math.abs(index) % data.length) + data.length) %
            data.length +
            1
        )
            .toString()
            .padStart(2, "0");
    };

    // Refs for state that changes frequently (animation loop)
    const state = React.useRef({
        currentY: 0,
        targetY: 0,
        isDragging: false,
        isSnapping: false,
        snapStart: { time: 0, y: 0, target: 0 },
        lastScrollTime: Date.now(),
        dragStart: { y: 0, scrollY: 0 },
        projectHeight: 0,
        minimapHeight: 0, // Will be set dynamically
    });

    const minimapWrapperRef = React.useRef<HTMLDivElement>(null);

    // Refs to store DOM elements
    const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
    const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
    const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
    const requestRef = React.useRef<number>();

    const updateParallax = (
        img: HTMLImageElement | null,
        scroll: number,
        index: number,
        height: number
    ) => {
        if (!img || height === 0) return;

        if (!img.dataset.parallaxCurrent) {
            img.dataset.parallaxCurrent = "0";
        }

        let current = parseFloat(img.dataset.parallaxCurrent);
        const target = (-scroll - index * height) * 0.2;
        current = lerp(current, target, 0.1);

        if (Math.abs(current - target) > 0.01) {
            img.style.transform = `translateY(${current}px) scale(1.15)`;
            img.dataset.parallaxCurrent = current.toString();
        }
    };

    const updateSnap = () => {
        const s = state.current;
        const progress = Math.min(
            (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
            1
        );
        const eased = 1 - Math.pow(1 - progress, 3);
        s.targetY =
            s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
        if (progress >= 1) s.isSnapping = false;
    };

    const snapToProject = () => {
        const s = state.current;
        if (s.projectHeight === 0) return;
        const current = Math.round(-s.targetY / s.projectHeight);
        const target = -current * s.projectHeight;
        s.isSnapping = true;
        s.snapStart = {
            time: Date.now(),
            y: s.targetY,
            target: target,
        };
    };

    const updatePositions = () => {
        const s = state.current;
        if (s.projectHeight === 0 || s.minimapHeight === 0) return;
        const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

        projectsRef.current.forEach((el, index) => {
            const y = index * s.projectHeight + s.currentY;
            el.style.transform = `translateY(${y}px)`;
            const img = el.querySelector("img");
            updateParallax(img, s.currentY, index, s.projectHeight);
        });

        minimapRef.current.forEach((el, index) => {
            const y = index * s.minimapHeight + minimapY;
            el.style.transform = `translateY(${y}px)`;
            const img = el.querySelector("img");
            if (img) {
                updateParallax(img, minimapY, index, s.minimapHeight);
            }
        });

        infoRef.current.forEach((el, index) => {
            const y = index * s.minimapHeight + minimapY;
            el.style.transform = `translateY(${y}px)`;
        });
    };

    const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

    const animationLoop = () => {
        const s = state.current;
        if (s.projectHeight === 0) {
            requestRef.current = requestAnimationFrame(animationLoop);
            return;
        }

        const now = Date.now();

        if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
            const snapPoint =
                -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
            if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
        }

        if (s.isSnapping) updateSnap();
        if (!s.isDragging) {
            s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
        }

        updatePositions();

        const currentIndex = Math.round(-s.targetY / s.projectHeight);
        const min = currentIndex - CONFIG.BUFFER_SIZE;
        const max = currentIndex + CONFIG.BUFFER_SIZE;

        if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
            renderedRange.current = { min, max };
            setVisibleRange({ min, max });
        }

        requestRef.current = requestAnimationFrame(animationLoop);
    };

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const parentContainer = document.getElementById("fazer-parte");
        if (parentContainer) {
            state.current.projectHeight = parentContainer.offsetHeight;
        } else {
            state.current.projectHeight = window.innerHeight;
        }

        const onWheel = (e: WheelEvent) => {
            const s = state.current;
            s.isSnapping = false;
            s.lastScrollTime = Date.now();
            const delta = Math.max(
                Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
                -CONFIG.MAX_VELOCITY
            );
            s.targetY -= delta;
        };

        const onTouchStart = (e: TouchEvent) => {
            const s = state.current;
            s.isDragging = true;
            s.isSnapping = false;
            s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
            s.lastScrollTime = Date.now();
        }

        const onTouchMove = (e: TouchEvent) => {
            const s = state.current;
            if (!s.isDragging) return;
            s.targetY =
                s.dragStart.scrollY +
                (e.touches[0].clientY - s.dragStart.y) * 1.5;
            s.lastScrollTime = Date.now();
        }

        const onTouchEnd = () => {
            state.current.isDragging = false;
        }

        const onResize = () => {
            state.current.projectHeight = containerRef.current?.offsetHeight || window.innerHeight;
            state.current.minimapHeight = minimapWrapperRef.current?.offsetHeight || 400;
        }

        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", onWheel, { passive: false });
        }

        window.addEventListener("touchstart", onTouchStart);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("touchend", onTouchEnd);
        window.addEventListener("resize", onResize);

        onResize();

        requestRef.current = requestAnimationFrame(animationLoop);

        return () => {
            if (container) container.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("resize", onResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const indices = [];
    for (let i = visibleRange.min; i <= visibleRange.max; i++) {
        indices.push(i);
    }

    return (
        <div
            ref={containerRef}
            className={cn("parallax-container relative w-full h-[700px] lg:h-screen overflow-hidden bg-black", className)}
        >
            <ul className="project-list absolute inset-0 w-full h-full list-none p-0 m-0">
                {indices.map((i) => {
                    const data = getProjectData(i);
                    return (
                        <div
                            key={i}
                            className="project absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none"
                            ref={(el) => {
                                if (el) projectsRef.current.set(i, el);
                                else projectsRef.current.delete(i);
                            }}
                        >
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-[120%] object-cover opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                        </div>
                    );
                })}
            </ul>

            <div className="minimap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[600px] lg:max-w-[1000px] h-[400px] lg:h-[550px] z-20 pointer-events-none select-none">
                <div
                    ref={minimapWrapperRef}
                    className="minimap-wrapper relative w-full h-full flex gap-8 lg:gap-16 items-center bg-neutral-900/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]"
                >
                    <div className="minimap-img-preview relative w-32 lg:w-72 h-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-white/10 shrink-0">
                        {indices.map((i) => {
                            const data = getProjectData(i);
                            return (
                                <div
                                    key={i}
                                    className="minimap-img-item absolute inset-0 w-full h-full overflow-hidden"
                                    ref={(el) => {
                                        if (el) minimapRef.current.set(i, el);
                                        else minimapRef.current.delete(i);
                                    }}
                                >
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="minimap-info-list relative flex-1 h-full overflow-hidden">
                        {indices.map((i) => {
                            const data = getProjectData(i);
                            const num = getProjectNumber(i);
                            return (
                                <div
                                    key={i}
                                    className="minimap-item-info absolute inset-0 w-full h-full flex flex-col justify-center gap-4 lg:gap-6"
                                    ref={(el) => {
                                        if (el) infoRef.current.set(i, el);
                                        else infoRef.current.delete(i);
                                    }}
                                >
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs lg:text-sm font-black text-brand-500 tracking-[0.4em] font-mono">{num}</p>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] lg:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">{data.category}</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-4xl font-black text-white leading-[1.2] uppercase tracking-tighter">
                                        {data.title}
                                    </h3>
                                    {data.price && (
                                        <div className="inline-block px-3 py-1.5 bg-brand-500/20 border border-brand-500/30 rounded-lg w-fit shadow-[0_0_15px_rgba(91,222,64,0.1)]">
                                            <p className="text-brand-400 font-bold text-sm lg:text-base tracking-wide">{data.price}</p>
                                        </div>
                                    )}
                                    <p className="text-sm lg:text-lg text-neutral-300 leading-relaxed font-medium max-w-lg">
                                        {data.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
