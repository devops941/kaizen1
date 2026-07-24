'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, Shield, Monitor, Lock, Eye } from "lucide-react";

export function InnovationCyberNex() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5,
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 lg:py-36 overflow-hidden bg-[#050510] text-white border-b border-[#00d4ff]/20"
            onMouseMove={handleMouseMove}
        >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
            }} />

            {/* Glowing Accent Orbs */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.06] pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
                    background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)'
                }}
            />

            {/* Sharp Floating Badges */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[15%] left-[10%] w-16 h-16 rounded-none bg-[#090b16] border border-[#00d4ff]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
                >
                    <Shield className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <div
                    className="absolute top-[25%] right-[12%] w-14 h-14 rounded-none bg-[#090b16] border border-[#00d4ff]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * -25}px)` }}
                >
                    <Monitor className="w-6 h-6 text-[#00d4ff]" />
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#00d4ff]" />
                        <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#00d4ff] uppercase">
                            // CENTER OF EXCELLENCE
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#00d4ff]" />
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-8">
                        <span className="block text-white">CyberNex</span>
                        <span className="block text-[#00d4ff]">Our Flagship Center</span>
                        <span className="block text-white/90">of Excellence</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                        CyberNex combines hands-on learning, enterprise infrastructure, cyber ranges,
                        SOC simulations, Digital Forensics, Cloud Security, and Red Team / Blue Team
                        exercises in one integrated ecosystem.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                        {[
                            { icon: Shield, text: "Cyber Ranges" },
                            { icon: Monitor, text: "SOC Simulations" },
                            { icon: Lock, text: "Digital Forensics" },
                            { icon: Eye, text: "Red/Blue Team" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-[#090b16] border border-[#00d4ff]/30 rounded-none text-center">
                                <item.icon className="w-5 h-5 text-[#00d4ff] mx-auto mb-2" />
                                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <AnimatedButton
                        px="px-8"
                        py="py-5"
                        icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        className="bg-[#00d4ff] text-[#050510] rounded-none text-[14px] font-bold tracking-[0.1em]"
                    >
                        Learn More About CyberNex
                    </AnimatedButton>
                </div>
            </div>
        </section>
    );
}
