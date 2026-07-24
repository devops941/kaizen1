'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import {
    MessageCircle, Search, Lightbulb, FileText, Palette,
    Code, TestTube, Rocket, GraduationCap, Wrench, TrendingUp, ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    { num: "01", category: "DISCOVERY", icon: MessageCircle, label: "Discovery Workshop", desc: "Understanding your vision, business goals, and operational challenges." },
    { num: "02", category: "ASSESSMENT", icon: Search, label: "Business Assessment", desc: "Deep-dive process mapping, bottleneck identification, and opportunity matrix." },
    { num: "03", category: "STRATEGY", icon: Lightbulb, label: "Technology Roadmap", desc: "Strategic technology planning, cloud selection, and system architecture." },
    { num: "04", category: "PROPOSAL", icon: FileText, label: "Solution Proposal", desc: "Scope definition, milestone mapping, and transparent ROI calculation." },
    { num: "05", category: "DESIGN", icon: Palette, label: "UI/UX Design", desc: "High-fidelity user interface prototyping, system ergonomics, and brand design." },
    { num: "06", category: "ENGINEERING", icon: Code, label: "Agile Development", desc: "Iterative sprint development with continuous integration and clean code reviews." },
    { num: "07", category: "QUALITY", icon: TestTube, label: "Quality Assurance", desc: "Automated test suites, security penetration testing, and load stress testing." },
    { num: "08", category: "ROLLOUT", icon: Rocket, label: "Deployment & Go-Live", desc: "Zero-downtime production deployment with failover protection and monitoring." },
    { num: "09", category: "TRAINING", icon: GraduationCap, label: "User Training", desc: "Interactive team training sessions, user manuals, and API documentation." },
    { num: "10", category: "SUPPORT", icon: Wrench, label: "Go-Live Support", desc: "Dedicated on-site & remote SLA support team monitoring initial operations." },
    { num: "11", category: "EVOLUTION", icon: TrendingUp, label: "Continuous Improvement", desc: "Regular feature upgrades, security patches, and perpetual Kaizen optimization." },
];

export function WhyKaizenEngagement() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".wkeng-header-item",
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
                ".wkeng-step",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <div className="wkeng-header-item flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Client Journey & Engagement
                        </span>
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="wkeng-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
                        segments={[
                            { text: "Your Journey " },
                            { text: "With Kaizen", isHighlighted: true }
                        ]}
                    />

                    <p className="wkeng-header-item text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-light">
                        From first conversation to ongoing partnership — every step is engineered for your long-term success.
                    </p>
                </div>

                {/* 11-Step Journey Grid with Sharp Corners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STEPS.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={i}
                                className="wkeng-step group relative bg-[#0f0f0f] border border-white/[0.08] p-7 rounded-none cursor-pointer overflow-hidden hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-500 shadow-xl text-left"
                            >
                                {/* Left Accent Bar */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
                                                {step.num}
                                            </span>
                                            <span className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">
                                                {step.category}
                                            </span>
                                        </div>

                                        <div className="w-9 h-9 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                            <Icon className="w-4 h-4 text-[#c8b4a0]" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8b4a0] transition-colors">
                                        {step.label}
                                    </h3>

                                    <p className="text-sm text-white/70 leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                                    <ArrowRight className="w-4 h-4 text-[#c8b4a0]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
