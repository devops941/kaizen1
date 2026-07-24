'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutVision() {
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
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    once: true,
                    toggleActions: "play none none none",
                }
            });

            tl.fromTo(
                ".vision-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                0
            )
            .fromTo(
                ".vision-title",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                0.1
            )
            .fromTo(
                ".vision-text",
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", clearProps: "all" },
                0.2
            )
            .fromTo(
                ".vision-visual",
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
                0.3
            );
        }, sectionRef);

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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8b4a0]/5 rounded-full blur-[150px]"
                    style={{ transform: `translate(-50%, -50%) translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="vision-eyebrow flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Our Vision</span>
                        </div>

                        <AnimatedTitle
                            theme="dark"
                            className="vision-title text-4xl md:text-5xl font-light tracking-tight leading-[1.1] mb-6 text-white"
                            segments={[
                                { text: "Engineering Smarter Organizations for a " },
                                { text: "Connected Future", isHighlighted: true }
                            ]}
                        />

                        <p className="vision-text text-base md:text-lg text-white/80 leading-relaxed font-light">
                            To become one of India&apos;s most trusted technology partners, empowering organizations through intelligent software, secure digital infrastructure, and continuous innovation.
                        </p>
                    </div>

                    {/* Right Visual */}
                    <div
                        className="vision-visual relative hidden lg:flex items-center justify-center"
                        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
                    >
                        <div className="relative w-80 h-80">
                            {/* Concentric circles */}
                            <div className="absolute inset-0 border border-[#c8b4a0]/20 rounded-full animate-[spin_40s_linear_infinite]" />
                            <div className="absolute inset-8 border border-[#c8b4a0]/15 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                            <div className="absolute inset-16 border border-[#c8b4a0]/10 rounded-full animate-[spin_20s_linear_infinite]" />

                            {/* Center */}
                            <div className="absolute inset-24 flex items-center justify-center">
                                <div className="w-full h-full bg-gradient-to-br from-[#c8b4a0]/20 to-transparent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(200,180,160,0.15)] border border-[#c8b4a0]/30">
                                    <Eye className="w-12 h-12 text-[#c8b4a0]" />
                                </div>
                            </div>

                            {/* Vision keywords with sharp corners */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-[#0f0f0f] border border-[#c8b4a0]/30 rounded-none shadow-lg">
                                <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider">Innovation</span>
                            </div>
                            <div className="absolute bottom-12 right-0 px-3.5 py-1.5 bg-[#0f0f0f] border border-[#c8b4a0]/30 rounded-none shadow-lg">
                                <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider">Growth</span>
                            </div>
                            <div className="absolute top-1/2 -right-4 px-3.5 py-1.5 bg-[#0f0f0f] border border-[#c8b4a0]/30 rounded-none shadow-lg">
                                <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider">Security</span>
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-[#0f0f0f] border border-[#c8b4a0]/30 rounded-none shadow-lg">
                                <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider">Scale</span>
                            </div>
                            <div className="absolute top-1/2 -left-4 px-3.5 py-1.5 bg-[#0f0f0f] border border-[#c8b4a0]/30 rounded-none shadow-lg">
                                <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider">Trust</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
