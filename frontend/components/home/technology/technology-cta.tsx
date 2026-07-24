'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, MessageSquare, Code, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function TechnologyCTA() {
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".tt-cta-content",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
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
            className="relative py-15 lg:py-30 overflow-hidden bg-[#080808] text-white"
            onMouseMove={handleMouseMove}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }} />

                {/* Animated Gradient Orb */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04]"
                    style={{
                        transform: `translate(-50%, -50%) translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
                        background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                    }}
                />

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />
            </div>

            {/* Floating Decorative Elements with Sharp Corners */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
                <div
                    className="tt-cta-float absolute top-[15%] left-[12%] w-16 h-16 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
                    style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
                >
                    <Code className="w-7 h-7 text-[#c8b4a0]" />
                </div>
                <div
                    className="tt-cta-float absolute top-[25%] right-[15%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
                    style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
                >
                    <Rocket className="w-6 h-6 text-[#c8b4a0]" />
                </div>
                <div
                    className="tt-cta-float absolute bottom-[20%] left-[15%] w-12 h-12 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
                    style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 20}px)` }}
                >
                    <MessageSquare className="w-5 h-5 text-[#c8b4a0]" />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="tt-cta-content flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium tracking-[0.3em] text-[#c8b4a0] uppercase">
                            Get Started
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <h2 className="tt-cta-content text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8">
                        <span className="block text-white">Future-Ready</span>
                        <span className="block text-[#c8b4a0]">Technology Ecosystem</span>
                        <span className="block text-white/80">Begins Here</span>
                    </h2>

                    <p className="tt-cta-content text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                        Ready to build with cutting-edge technology? Let&apos;s discuss how our technology
                        expertise can transform your business.
                    </p>

                    <div className="tt-cta-content flex flex-wrap items-center justify-center gap-4 mb-16">
                        <AnimatedButton
                            px="px-8"
                            py="py-5"
                            icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[14px] font-mono font-bold tracking-[0.1em]"
                        >
                            Explore Our Technologies
                        </AnimatedButton>

                        <AnimatedButton
                            px="px-8"
                            py="py-5"
                            icon={<MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="border border-white/20 text-[14px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
                        >
                            Talk to Engineering Team
                        </AnimatedButton>
                    </div>

                    <div className="tt-cta-content flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/60">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]" />
                            <span>50+ Production Technologies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]" />
                            <span>Multi-Cloud Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]" />
                            <span>Enterprise Security Standard</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
