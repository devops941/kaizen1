'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Globe, Smartphone, Brain, Cloud, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DOMAINS = [
    { icon: Brain, label: "AI & Analytics", tag: "DOMAIN 01" },
    { icon: Cloud, label: "Cloud Engineering", tag: "DOMAIN 02" },
    { icon: Database, label: "Software Engineering", tag: "DOMAIN 03" },
    { icon: Smartphone, label: "Mobile Apps", tag: "DOMAIN 04" },
    { icon: ShieldCheck, label: "CyberNex Division", tag: "DOMAIN 05" },
    { icon: Globe, label: "Digital Transformation", tag: "DOMAIN 06" }
];

export function AboutEcosystem() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5,
        });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Header Animation
            gsap.fromTo(
                ".eco-header-item",
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
                ".eco-domain-card",
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
        <section
            ref={sectionRef}
            className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10"
            onMouseMove={handleMouseMove}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />

                {/* Glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c8b4a0]/5 rounded-full blur-[200px]"
                    style={{ transform: `translate(-50%, -50%) translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="eco-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Our Business Ecosystem</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="eco-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 justify-center"
                        segments={[
                            { text: "One Partner. " },
                            { text: "Unlimited Possibilities.", isHighlighted: true }
                        ]}
                    />

                    <p className="eco-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Six surrounding service domains radiate from the Kaizen Infinities core, creating an integrated ecosystem that powers your digital transformation.
                    </p>
                </div>

                {/* Ecosystem Visual */}
                <div
                    className="relative max-w-3xl mx-auto"
                    style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
                >
                    {/* Central Core */}
                    <div className="relative w-40 h-40 mx-auto mb-12">
                        <div className="absolute inset-0 border-2 border-[#c8b4a0]/40 rounded-full animate-[spin_30s_linear_infinite]" />
                        <div className="absolute inset-4 border border-[#c8b4a0]/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-[#0f0f0f] border border-[#c8b4a0]/40 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(200,180,160,0.2)]">
                                <div className="text-center">
                                    <span className="text-3xl font-light text-[#c8b4a0]">K</span>
                                    <div className="text-[9px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mt-0.5">Core</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Domain Nodes Grid with Sharp Corners */}
                    <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                        {DOMAINS.map((domain, i) => {
                            const Icon = domain.icon;
                            return (
                                <div
                                    key={i}
                                    className="eco-domain-card group relative bg-[#0f0f0f] border border-white/[0.08] p-6 text-center hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 rounded-none shadow-lg cursor-pointer overflow-hidden"
                                >
                                    {/* Left Accent Bar on Hover */}
                                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                    <div className="relative z-10">
                                        <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-[#c8b4a0]" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-white group-hover:text-[#c8b4a0] uppercase tracking-wider transition-colors block">
                                            {domain.label}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Connection Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: -1 }}>
                        <line x1="50%" y1="30%" x2="20%" y2="15%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                        <line x1="50%" y1="30%" x2="80%" y2="15%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                        <line x1="50%" y1="30%" x2="5%" y2="50%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                        <line x1="50%" y1="30%" x2="95%" y2="50%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                        <line x1="50%" y1="30%" x2="20%" y2="85%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                        <line x1="50%" y1="30%" x2="80%" y2="85%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
