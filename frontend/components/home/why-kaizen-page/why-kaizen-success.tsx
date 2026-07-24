'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { TrendingDown, Zap, Heart, BarChart3, Shield, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const OUTCOMES = [
    { icon: TrendingDown, text: "Reduced Operational Costs" },
    { icon: Zap, text: "Increased Team Productivity" },
    { icon: Heart, text: "Better Customer Experiences" },
    { icon: BarChart3, text: "Data-Driven Decision Making" },
    { icon: Shield, text: "Zero-Trust Enhanced Security" },
    { icon: TrendingUp, text: "Sustainable Digital Growth" },
];

export function WhyKaizenSuccess() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".wkms-header-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".wkms-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".wkms-quote",
                { scale: 0.98, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f9fa] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="wkms-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                            Success Philosophy
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="wkms-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Your Growth " },
                            { text: "Defines", isHighlighted: true },
                            { text: " Our Success" }
                        ]}
                    />
                </div>

                {/* Outcomes Grid with Sharp Corners */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 max-w-6xl mx-auto">
                    {OUTCOMES.map((item, i) => (
                        <div key={i} className="wkms-item group text-center p-5 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300">
                                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors block leading-tight">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Quote Box with Sharp Corners */}
                <div className="wkms-quote max-w-3xl mx-auto text-center">
                    <blockquote className="relative p-8 lg:p-10 bg-white border border-zinc-200 rounded-none shadow-xs text-left">
                        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#9e7b56] via-[#9e7b56]/50 to-transparent" />
                        <p className="text-xl lg:text-2xl font-light text-zinc-900 leading-relaxed mb-4 italic pl-4">
                            &ldquo;Many technology vendors disappear once a project goes live.
                            Kaizen Infinities believes deployment is only the beginning of continuous innovation.&rdquo;
                        </p>

                        <footer className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.2em] not-italic pl-4">
                            — Kaizen Partner Philosophy
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
