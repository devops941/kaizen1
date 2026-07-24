'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Handshake, Target, TrendingUp, Shield, Calendar, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
    {
        num: "01",
        tag: "PARTNER_KPI",
        icon: Handshake,
        value: "150+",
        label: "Long-term Strategic Partners",
        sub: "Across global markets"
    },
    {
        num: "02",
        tag: "SLA_PROMISE",
        icon: Target,
        value: "98%",
        label: "Project Success Rate",
        sub: "On-time & in-scope"
    },
    {
        num: "03",
        tag: "ROI_IMPACT",
        icon: TrendingUp,
        value: "40%",
        label: "Avg Cost Optimization",
        sub: "Operational efficiency"
    },
    {
        num: "04",
        tag: "ZERO_TRUST",
        icon: Shield,
        value: "Zero",
        label: "Security Breaches",
        sub: "CyberNex standard"
    },
];

export function WhyKaizenHero() {
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
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            gsap.fromTo(
                ".wkh-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".wkh-title",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.3, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".wkh-desc",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".wkh-cta-group",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.6, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".wkh-hud-card",
                { scale: 0.95, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.4, clearProps: "transform,opacity" }
            );
        }, containerRef);

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
            ref={containerRef}
            className="relative min-h-[90vh] overflow-hidden bg-[#080808] text-white flex items-center border-b border-white/10 py-24 lg:py-32"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            {/* Ambient Gold Glow Orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.035] pointer-events-none transition-transform duration-700 ease-out"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
                    background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] opacity-[0.025] pointer-events-none transition-transform duration-700 ease-out"
                style={{
                    transform: `translate(50%, 50%) translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
                    background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                }}
            />

            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/25 to-transparent" />

            {/* Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Hero Narrative */}
                    <div className="lg:col-span-7 text-left">
                        {/* Eyebrow */}
                        <div className="wkh-eyebrow flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-none bg-[#c8b4a0] animate-pulse" />
                            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c8b4a0] uppercase">
                                // Why Choose Kaizen Infinities
                            </span>
                            <div className="w-12 h-px bg-gradient-to-r from-[#c8b4a0]/40 to-transparent" />
                        </div>

                        {/* Animated Main Headline */}
                        <AnimatedTitle
                            theme="dark"
                            className="wkh-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.04] tracking-tight mb-8"
                            segments={[
                                { text: "More Than a Technology Vendor. " },
                                { text: "Your Digital Partner", isHighlighted: true }
                            ]}
                        />

                        {/* Narrative Paragraph */}
                        <p className="wkh-desc text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-10 font-light">
                            Technology is easy to purchase. The right strategic partner is much harder to find.
                            We don&apos;t just deliver one-off projects — we build lasting partnerships that drive
                            continuous business transformation, enterprise scalability, and long-term ROI.
                        </p>

                        {/* Action Buttons */}
                        <div className="wkh-cta-group flex flex-wrap items-center gap-4 mb-10">
                            <AnimatedButton
                                px="px-7"
                                py="py-4.5"
                                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-mono font-bold tracking-[0.1em]"
                            >
                                Explore Our Approach
                            </AnimatedButton>
                            
                            <AnimatedButton
                                px="px-7"
                                py="py-4.5"
                                icon={<Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="border border-white/20 text-[13px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
                            >
                                Schedule Strategy Call
                            </AnimatedButton>
                        </div>

                        {/* Micro Trust Bullet Points */}
                        <div className="wkh-cta-group flex flex-wrap items-center gap-6 text-xs font-mono text-white/60 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                                <span>Zero Vendor Lock-In</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                                <span>Agile Co-Creation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
                                <span>Perpetual Kaizen Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Partnership HUD Card Matrix */}
                    <div className="lg:col-span-5">
                        <div className="wkh-hud-card relative bg-[#0f0f0f] border border-white/10 p-6 lg:p-8 rounded-none shadow-2xl overflow-hidden">
                            {/* Subtle Ambient HUD Lighting */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8b4a0]/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c8b4a0]/5 rounded-full blur-3xl pointer-events-none" />

                            {/* HUD Header Bar */}
                            <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-[#c8b4a0] rounded-none animate-pulse" />
                                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                        Executive Partnership Matrix
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20">
                                    VERIFIED SLA
                                </span>
                            </div>

                            {/* 2x2 Metric Grid */}
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {METRICS.map((metric, i) => {
                                    const Icon = metric.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group relative p-5 bg-[#080808] border border-white/[0.08] hover:border-[#c8b4a0]/50 hover:bg-[#121212] transition-all duration-300 text-left rounded-none"
                                        >
                                            {/* Left Hover Line */}
                                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-[10px] font-mono font-bold text-[#c8b4a0]/70">
                                                    {metric.num}
                                                </span>
                                                <div className="w-8 h-8 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                                    <Icon className="w-4 h-4 text-[#c8b4a0]" />
                                                </div>
                                            </div>

                                            <div className="text-2xl lg:text-3xl font-light font-mono text-white mb-1 group-hover:text-[#c8b4a0] transition-colors">
                                                {metric.value}
                                            </div>

                                            <div className="text-xs font-bold text-white/90 mb-0.5 leading-tight">
                                                {metric.label}
                                            </div>

                                            <div className="text-[10px] font-mono text-white/50">
                                                {metric.sub}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* HUD Bottom Note */}
                            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                                <span>KAIZEN INFINITIES SLA GUARANTEE</span>
                                <span className="text-[#c8b4a0] font-bold">100% TRANSPARENT</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
