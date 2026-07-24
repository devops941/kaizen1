'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutPurpose() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    once: true,
                    toggleActions: "play none none none",
                }
            });

            tl.fromTo(
                ".purpose-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                0
            )
                .fromTo(
                    ".purpose-title",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                    0.1
                )
                .fromTo(
                    ".purpose-text",
                    { y: 25, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", clearProps: "all" },
                    0.2
                )
                .fromTo(
                    ".purpose-quote",
                    { scale: 0.98, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                    0.3
                );
        }, sectionRef);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f9f9fb] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="purpose-eyebrow flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">Our Purpose</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="purpose-title text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 justify-center"
                        segments={[
                            { text: "Why We " },
                            { text: "Exist", isHighlighted: true }
                        ]}
                    />

                    <p className="purpose-text text-base md:text-lg text-zinc-600 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
                        Technology should simplify complexity — not create it. Our purpose is to bridge fragmented systems, manual workflows, cybersecurity threats, and evolving expectations by creating unified digital ecosystems.
                    </p>

                    <div className="purpose-quote relative bg-white border border-zinc-200 p-8 md:p-10 rounded-none shadow-sm text-left">
                        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#9e7b56] via-[#9e7b56]/50 to-transparent" />
                        <blockquote className="pl-4">
                            <p className="text-xl md:text-2xl font-light text-zinc-900 italic leading-relaxed mb-4">
                                &ldquo;We don&apos;t simply deliver software. We transform the way organizations operate.&rdquo;
                            </p>
                            <cite className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.2em] not-italic">
                                — Kaizen Infinities
                            </cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
