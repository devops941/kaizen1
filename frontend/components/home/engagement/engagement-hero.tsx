'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, MessageCircle, Users, Target, ShieldCheck, CheckCircle2, Clock, Activity, FileCode } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { icon: Users, value: "100%", label: "Governance Transparency" },
    { icon: Target, value: "9-Step", label: "Structured Delivery" },
    { icon: ShieldCheck, value: "Zero", label: "Unplanned Surprises" },
    { icon: MessageCircle, value: "24/7", label: "Dedicated SLA Support" },
];

export function EngagementHero() {
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

    useEffect(() => {
        // Simple GSAP enhancement without hiding content (opacity remains 1)
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;
            gsap.fromTo(
                ".eh-hud-box",
                { y: 20 },
                {
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-20 lg:py-32 bg-[#080808] text-white overflow-hidden border-b border-white/10"
            onMouseMove={handleMouseMove}
        >
            {/* Background Engineering Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
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

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    {/* Eyebrow Tag */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Client Engagement Model & Governance
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    {/* Main Title */}
                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Every Successful Project Begins With " },
                            { text: "Clarity & Governance", isHighlighted: true }
                        ]}
                    />

                    {/* Description */}
                    <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                        Our client engagement model is engineered around transparency, structured milestone reviews, 
                        and complete operational accountability — eliminating ambiguity at every phase of transformation.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
                        >
                            Start Your Journey
                        </AnimatedButton>
                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            className="border border-white/20 text-[13px] font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none bg-white/5"
                        >
                            View 9-Step Process
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

                {/* Live Engagement Console HUD */}
                <div className="eh-hud-box max-w-4xl mx-auto bg-[#0f0f0f] border border-[#c8b4a0]/30 p-6 md:p-8 rounded-none shadow-2xl overflow-hidden text-left">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 bg-[#c8b4a0] rounded-none animate-pulse" />
                            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                                ENGAGEMENT GOVERNANCE HUD
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20">
                            REAL-TIME SLA ACTIVE
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-none flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-[#c8b4a0]" />
                                <div>
                                    <div className="text-xs font-bold text-white">Sprint Communication</div>
                                    <div className="text-[11px] font-mono text-white/70">Weekly Reviews & Daily Demos</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                        </div>

                        <div className="p-4 bg-white/5 border border-white/10 rounded-none flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Activity className="w-4 h-4 text-[#c8b4a0]" />
                                <div>
                                    <div className="text-xs font-bold text-white">Milestone Audits</div>
                                    <div className="text-[11px] font-mono text-white/70">Sign-Off Required Per Step</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                        </div>

                        <div className="p-4 bg-white/5 border border-white/10 rounded-none flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FileCode className="w-4 h-4 text-[#c8b4a0]" />
                                <div>
                                    <div className="text-xs font-bold text-white">Complete IP Transfer</div>
                                    <div className="text-[11px] font-mono text-white/70">Full Ownership & Docs</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
