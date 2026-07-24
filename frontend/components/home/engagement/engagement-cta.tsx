'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedButton } from "@/components/home/animated-button";
import { Calendar, MessageSquare, Rocket, CheckCircle2 } from "lucide-react";

export function EngagementCTA() {
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
            className="relative py-20 lg:py-36 overflow-hidden bg-[#080808] text-white border-b border-white/10"
            onMouseMove={handleMouseMove}
        >
            {/* Background Engineering Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            {/* Glowing Accent Orb */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
                    background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                }}
            />

            {/* Sharp Floating Badges */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[10%] left-[12%] w-16 h-16 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
                >
                    <Rocket className="w-6 h-6 text-[#c8b4a0]" />
                </div>
                <div
                    className="absolute top-[20%] right-[15%] w-16 h-16 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * -25}px)` }}
                >
                    <Calendar className="w-6 h-6 text-[#c8b4a0]" />
                </div>
                <div
                    className="absolute bottom-[15%] left-[18%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-xl"
                    style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * 15}px)` }}
                >
                    <MessageSquare className="w-5 h-5 text-[#c8b4a0]" />
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#c8b4a0] uppercase">
                            // GET STARTED WITH KAIZEN
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-8">
                        <span className="block text-white">Ready to Start Your</span>
                        <span className="block text-[#c8b4a0]">Digital Transformation</span>
                        <span className="block text-white/90">Journey?</span>
                    </h2>

                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                        Let&apos;s discuss how our engagement model can help you achieve your goals
                        with clarity, collaboration, and measurable progress.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                        <AnimatedButton
                            px="px-8"
                            py="py-5"
                            icon={<Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[14px] font-medium tracking-[0.1em]"
                        >
                            Book a Discovery Workshop
                        </AnimatedButton>

                        <AnimatedButton
                            px="px-8"
                            py="py-5"
                            icon={<MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="border border-white/20 text-[14px] font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none bg-white/5"
                        >
                            Request a Project Consultation
                        </AnimatedButton>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/80">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                            <span>Free Initial Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                            <span>No Obligation Scope</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                            <span>Transparent Milestone Process</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
