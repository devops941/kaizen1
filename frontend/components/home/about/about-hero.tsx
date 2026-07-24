'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutHero() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
        setMousePos({ x, y });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-hero-eyebrow", { opacity: 0, x: -30, duration: 1, ease: "power3.out", delay: 0.2 });
            gsap.from(".about-hero-title", { y: 60, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.4 });
            gsap.from(".about-hero-sub", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.6 });
            gsap.from(".about-hero-cta", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.8 });
            gsap.from(".about-hero-visual", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[85vh] overflow-hidden bg-[#080808] flex items-center"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8b4a0]/5 rounded-full blur-[160px] pointer-events-none" />

            {/* Abstract Elements */}
            <div
                className="absolute top-20 -right-32 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
                style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
            >
                <div className="absolute inset-0 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-16 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-32 border border-[#c8b4a0] rounded-full" />
            </div>

            <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
                style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}>
                <div className="absolute inset-0 border border-[#c8b4a0] rounded-full" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <div className="about-hero-eyebrow inline-flex items-center gap-4 mb-6">
                            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                            <span className="text-[11px] font-mono tracking-[0.3em] text-[#c8b4a0]/70 uppercase">
                                About Kaizen Infinities
                            </span>
                        </div>

                        <AnimatedTitle
                            className="about-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.05] tracking-tight mb-6"
                            segments={[
                                { text: "Transforming Businesses " },
                                { text: "Through Innovation,", isHighlighted: true, className: "block" },
                                { text: "Engineering & Continuous Improvement", className: "block text-white/90" }
                            ]}
                        />

                        <p className="about-hero-sub text-base md:text-lg text-white/40 leading-relaxed max-w-xl mb-8 font-light">
                            Engineering technology that empowers organizations to innovate, automate, and grow — today and for the future.
                        </p>

                        <div className="about-hero-cta flex flex-wrap gap-4">
                            <AnimatedButton
                                px="px-6"
                                py="py-4"
                                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
                            >
                                Schedule a Consultation
                            </AnimatedButton>
                            <AnimatedButton
                                px="px-6"
                                py="py-4"
                                className="border border-white/[0.1] text-[13px] font-medium tracking-[0.1em] text-white/50 hover:text-white/70 transition-all duration-300"
                            >
                                Explore Our Solutions
                            </AnimatedButton>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <div
                            className="about-hero-visual relative w-full aspect-square"
                            style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
                        >
                            {/* Central Core */}
                            <div className="absolute inset-12 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#c8b4a0]/15 to-transparent border border-[#c8b4a0]/20 flex items-center justify-center shadow-[0_0_50px_rgba(200,180,160,0.1)]">
                                    <span className="text-4xl font-light text-[#c8b4a0]">Kaizen</span>
                                </div>
                            </div>

                            {/* Orbital Rings */}
                            <div className="absolute inset-0 border border-[#c8b4a0]/[0.06] rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-6 border border-[#c8b4a0]/[0.05] rounded-full animate-[spin_45s_linear_infinite_reverse]" />
                            <div className="absolute inset-12 border border-[#c8b4a0]/[0.04] rounded-full animate-[spin_30s_linear_infinite]" />

                            {/* Domain Labels */}
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0f0f0f] border border-[#c8b4a0]/10 rounded-lg">
                                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">AI & Analytics</span>
                            </div>
                            <div className="absolute bottom-12 right-8 px-4 py-2 bg-[#0f0f0f] border border-[#c8b4a0]/10 rounded-lg">
                                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Cloud</span>
                            </div>
                            <div className="absolute top-1/2 -right-4 px-4 py-2 bg-[#0f0f0f] border border-[#c8b4a0]/10 rounded-lg">
                                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">CyberNex</span>
                            </div>
                            <div className="absolute bottom-24 left-8 px-4 py-2 bg-[#0f0f0f] border border-[#c8b4a0]/10 rounded-lg">
                                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">ERP</span>
                            </div>

                            {/* SVG Connections */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                                <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                                <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                                <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />
        </section>
    );
}
