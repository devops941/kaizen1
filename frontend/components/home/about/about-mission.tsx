'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Zap, Layers, ShieldCheck, Sparkles, Target, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MISSIONS = [
    {
        id: "01",
        category: "Software Engineering",
        title: "Real-World Business Impact",
        desc: "Engineering innovative software that solves complex business challenges, streamlines operations, and drives profitability.",
        icon: Code2,
        tag: "Engineering"
    },
    {
        id: "02",
        category: "Digital Transformation",
        title: "Cloud, AI & Automation",
        desc: "Accelerating enterprise transformation through intelligent workflow automation, modern cloud architectures, and applied AI.",
        icon: Zap,
        tag: "Automation"
    },
    {
        id: "03",
        category: "Infrastructure & Scale",
        title: "Reliable Ecosystems",
        desc: "Building secure, resilient, and highly available digital ecosystems designed to scale seamlessly as your business grows.",
        icon: Layers,
        tag: "Infrastructure"
    },
    {
        id: "04",
        category: "CyberNex Division",
        title: "Cyber Security Excellence",
        desc: "Delivering enterprise-grade cybersecurity education, hands-on cyber range experiences, and SOC resilience through CyberNex.",
        icon: ShieldCheck,
        tag: "CyberNex"
    },
    {
        id: "05",
        category: "Innovation Leadership",
        title: "Confident Tech Adoption",
        desc: "Enabling enterprises and educational institutions to adopt emerging technologies with confidence, clarity, and trust.",
        icon: Sparkles,
        tag: "Innovation"
    },
    {
        id: "06",
        category: "Continuum Partnership",
        title: "Quality & Trust First",
        desc: "Forging long-term strategic partnerships built on uncompromised quality, transparency, and continuous kaizen optimization.",
        icon: Target,
        tag: "Partnership"
    }
];

export function AboutMission() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Header Animation
            gsap.fromTo(
                ".mission-header-item",
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
                ".mission-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-13 lg:mb-13 max-w-4xl mx-auto">
                    <div className="mission-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">Our Mission & Commitments</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="mission-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08] mb-6 justify-center"
                        segments={[
                            { text: "Driven by Purpose. " },
                            { text: "Guided by Excellence.", isHighlighted: true }
                        ]}
                    />

                    <p className="mission-header-item text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Six core pillars defining how we engineer digital transformation, protect critical assets, and build continuous partnerships with our clients.
                    </p>
                </div>

                {/* 6 Grid Mission Cards with Sharp Corners */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MISSIONS.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="mission-card group relative bg-white border border-zinc-200 p-8 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                            >
                                {/* Left Accent Line on Hover */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                                <div>
                                    {/* Top Row: Number Badge & Icon */}
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-bold text-[#9e7b56] px-2.5 py-1 bg-[#9e7b56]/10 border border-[#9e7b56]/20 rounded-none">
                                                {item.id}
                                            </span>
                                            <span className="text-[10px] font-mono font-semibold text-zinc-600 uppercase tracking-wider">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white group-hover:border-[#9e7b56] transition-all duration-300">
                                            <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                        </div>
                                    </div>

                                    {/* Category Label */}
                                    <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.15em] block mb-2">
                                        {item.category}
                                    </span>

                                    {/* Mission Title */}
                                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#9e7b56] transition-colors leading-snug">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-zinc-600 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bottom Accent Row */}
                                <div className="pt-1 mt-1 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600 group-hover:text-[#9e7b56] font-medium transition-colors">
                                    <span>Strategic Commitment</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
