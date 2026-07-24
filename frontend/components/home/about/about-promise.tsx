'use client';

import { useEffect, useRef } from "react";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Handshake, Trophy, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DIFFERENTIATORS = [
    {
        num: "01",
        category: "APPROACH",
        icon: Handshake,
        title: "Business-First Thinking",
        desc: "We analyze your business goals and operational workflows before writing a single line of code.",
        tag: "Phase 01 — Analysis"
    },
    {
        num: "02",
        category: "STANDARDS",
        icon: Trophy,
        title: "Technology Excellence",
        desc: "Best-in-class engineering practices, modular microservices, and cutting-edge scalable architectures.",
        tag: "Phase 02 — Execution"
    },
    {
        num: "03",
        category: "PARTNERSHIP",
        icon: Shield,
        title: "Long-Term Commitment",
        desc: "We grow alongside you — providing continuous optimization, security monitoring, and perpetual support.",
        tag: "Phase 03 — Evolution"
    }
];

export function AboutPromise() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Header Animation
            gsap.fromTo(
                ".promise-header-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        once: true,
                        toggleActions: "play none none none"
                    }
                }
            );

            // Card Grid Animation
            gsap.fromTo(
                ".promise-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: {
                        trigger: gridRef.current || sectionRef.current,
                        start: "top 90%",
                        once: true,
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />

                {/* Gradient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8b4a0]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="promise-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Our Promise</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="promise-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 justify-center"
                        segments={[
                            { text: "Beyond Technology." },
                            { text: " Building Trust.", isHighlighted: true }
                        ]}
                    />

                    <p className="promise-header-item text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
                        When organizations partner with Kaizen Infinities, they gain a dedicated innovation partner committed to their long-term success.
                    </p>
                </div>

                {/* Differentiators Grid with Sharp Corners */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {DIFFERENTIATORS.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="promise-card group relative bg-[#0f0f0f] border border-white/[0.08] p-8 cursor-pointer overflow-hidden rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-500 shadow-xl text-left"
                            >
                                {/* Left Hover Accent Bar */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div className="relative z-10">
                                    {/* Top Row: Stage Number & Icon & Tag */}
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono font-semibold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
                                                {item.num}
                                            </span>
                                            <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                                <Icon className="w-5 h-5 text-[#c8b4a0]" />
                                            </div>
                                        </div>

                                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider hidden sm:block">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <span className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.2em] block mb-2">
                                        {item.category}
                                    </span>

                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#c8b4a0] transition-colors">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-white/70 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Hover Arrow Icon */}
                                <div className="absolute bottom-5 right-5 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                    <ArrowRight className="w-4 h-4 text-[#c8b4a0]" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="promise-header-item text-center">
                    <p className="text-base text-white/80 mb-6 font-light">
                        Ready to start your digital transformation journey?
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
                        >
                            Schedule a Discovery Session
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
