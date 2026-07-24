'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, Lightbulb, FlaskConical, Rocket, Shield, CheckCircle2, Cpu } from "lucide-react";

const STATS = [
    { icon: Lightbulb, value: "K-Labs", label: "Innovation Hub" },
    { icon: FlaskConical, value: "6+", label: "Research Domains" },
    { icon: Cpu, value: "AI & IoT", label: "Applied Engineering" },
    { icon: Shield, value: "CyberNex", label: "Security Research" },
];

export function InnovationHero() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5,
        });
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-20 lg:py-32 bg-[#080808] text-white overflow-hidden border-b border-white/10"
            onMouseMove={handleMouseMove}
        >
            {/* Background Engineering Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            {/* Glowing Accent Orbs */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-[0.04] pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
                    background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                }}
            />

            {/* Sharp Floating Badges */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[12%] left-[10%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
                >
                    <Lightbulb className="w-6 h-6 text-[#c8b4a0]" />
                </div>
                <div
                    className="absolute top-[20%] right-[12%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#00d4ff]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
                >
                    <FlaskConical className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div
                    className="absolute bottom-[25%] left-[8%] w-12 h-12 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 25}px)` }}
                >
                    <Rocket className="w-5 h-5 text-[#c8b4a0]" />
                </div>
                <div
                    className="absolute bottom-[18%] right-[10%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#00d4ff]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
                >
                    <Shield className="w-6 h-6 text-[#00d4ff]" />
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Eyebrow Tag */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.25em]">
                            // INNOVATION, RESEARCH & EXCELLENCE
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    {/* Main Title */}
                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Innovation Never Stops. " },
                            { text: "Neither Do We.", isHighlighted: true }
                        ]}
                    />

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                        At Kaizen Infinities, innovation is not a department — it is an organizational mindset. 
                        We combine applied research, emerging tech labs, and continuous engineering to shape future-ready digital enterprises.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
                        >
                            Explore Innovation Labs
                        </AnimatedButton>
                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            className="border border-white/20 text-[13px] font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none bg-white/5"
                        >
                            Visit K-Labs Research
                        </AnimatedButton>
                    </div>

                    {/* 4 Stat Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {STATS.map((stat, i) => (
                            <div key={i} className="p-4 bg-[#0f0f0f] border border-white/10 rounded-none text-center hover:border-[#c8b4a0]/40 transition-colors">
                                <stat.icon className="w-5 h-5 text-[#c8b4a0] mx-auto mb-2" />
                                <div className="text-xl md:text-2xl font-light text-white font-mono mb-0.5">{stat.value}</div>
                                <div className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
