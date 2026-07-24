'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, RefreshCw, Star, Lightbulb, Shield, CheckCircle, Lock, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CORE_VALUES = [
    {
        num: "01",
        title: "Continuous Improvement",
        desc: "Every solution can always become better through iterative refinement.",
        icon: RefreshCw,
        tag: "KAIZEN"
    },
    {
        num: "02",
        title: "Customer Success",
        desc: "Our success is measured directly by our clients' business success.",
        icon: Star,
        tag: "CLIENTS"
    },
    {
        num: "03",
        title: "Innovation",
        desc: "Constantly exploring emerging AI, cloud, and software technologies.",
        icon: Lightbulb,
        tag: "FUTURE"
    },
    {
        num: "04",
        title: "Integrity",
        desc: "Uncompromising honesty, transparency, and complete accountability.",
        icon: Shield,
        tag: "ETHICS"
    },
    {
        num: "05",
        title: "Quality Engineering",
        desc: "Never compromise on architecture, performance, or code standards.",
        icon: CheckCircle,
        tag: "QUALITY"
    },
    {
        num: "06",
        title: "Security First",
        desc: "Cybersecurity and zero-trust integrated, not added as an afterthought.",
        icon: Lock,
        tag: "SECURITY"
    },
    {
        num: "07",
        title: "Collaboration",
        desc: "We work as a seamless extension of our clients' internal teams.",
        icon: Users,
        tag: "TEAM"
    }
];

export function AboutValues() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Header Animation
            gsap.fromTo(
                ".values-header-item",
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
                ".value-card",
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#0d0f17] text-white overflow-hidden border-b border-white/10">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="values-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Our Core Values</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="values-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-4 justify-center"
                        segments={[
                            { text: "The Principles That Guide " },
                            { text: "Every Solution", isHighlighted: true }
                        ]}
                    />
                    <p className="values-header-item text-base text-white/80 max-w-2xl mx-auto font-light">
                        Seven guiding principles that shape how we build, serve, and grow with our clients.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {CORE_VALUES.map((value, i) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={i}
                                className="value-card group relative bg-[#0f111a] border border-white/[0.08] p-6 hover:border-[#c8b4a0]/50 hover:bg-[#141624] transition-all duration-500 rounded-none overflow-hidden shadow-lg cursor-pointer"
                            >
                                {/* Left Accent Line on Hover */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2 py-0.5 border border-[#c8b4a0]/20 rounded-none">
                                                {value.num}
                                            </span>
                                            <div className="w-9 h-9 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                                <Icon className="w-4 h-4 text-[#c8b4a0]" />
                                            </div>
                                        </div>

                                        <span className="text-[10px] font-mono font-semibold text-white/40 uppercase tracking-wider">
                                            {value.tag}
                                        </span>
                                    </div>

                                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#c8b4a0] transition-colors">
                                        {value.title}
                                    </h4>

                                    <p className="text-xs text-white/70 leading-relaxed font-light mb-2">
                                        {value.desc}
                                    </p>
                                </div>

                                <div className="absolute bottom-3 right-3 w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                    <ArrowRight className="w-3.5 h-3.5 text-[#c8b4a0]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
