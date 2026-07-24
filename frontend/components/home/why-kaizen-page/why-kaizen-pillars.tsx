'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ChevronDown, Target, Code, Sparkles, Shield, RefreshCw, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
    {
        num: "01",
        icon: Target,
        title: "Strategic Business Consulting",
        desc: "Analyze existing workflows, operational bottlenecks, process friction, growth opportunities, technology readiness, and future scalability.",
        outcome: "Solutions aligned with long-term business strategy."
    },
    {
        num: "02",
        icon: Code,
        title: "Engineering Excellence",
        desc: "Standards: Modular Architecture, Secure Development, Clean Code, API-First, Cloud-Ready, High Availability, and Performance Optimization.",
        outcome: "Reliable, enterprise systems that scale smoothly."
    },
    {
        num: "03",
        icon: Sparkles,
        title: "Innovation Through Emerging Tech",
        desc: "Applied AI, Machine Learning, Cloud Computing, IoT, Business Intelligence, RPA, Data Analytics, and Enterprise Mobility.",
        outcome: "Future-ready digital organizations."
    },
    {
        num: "04",
        icon: Shield,
        title: "Security by Design (CyberNex)",
        desc: "Focus: Secure Coding, Data Protection, RBAC, MFA, Backup & DR, Compliance, Infrastructure Hardening, and SOC Audits.",
        outcome: "Resilient zero-trust digital ecosystems."
    },
    {
        num: "05",
        icon: RefreshCw,
        title: "Continuous Improvement (Kaizen)",
        desc: "Services: Performance Monitoring, Feature Enhancements, System Optimization, Security Updates, User Training, and Tech Roadmaps.",
        outcome: "Perpetual business value and optimization."
    },
    {
        num: "06",
        icon: Users,
        title: "Dedicated Client Partnership",
        desc: "Our teams work closely with key stakeholders, maintaining complete transparency, accountability, and daily agile communication.",
        outcome: "True strategic growth partnership."
    },
];

interface PillarCardProps {
    pillar: typeof PILLARS[0];
    isOpen: boolean;
    onClick: () => void;
}

function PillarCard({ pillar, isOpen, onClick }: PillarCardProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const Icon = pillar.icon;

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.fromTo(contentRef.current,
                    { height: 0, opacity: 0 },
                    { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
                );
            } else {
                gsap.to(contentRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.in"
                });
            }
        }
    }, [isOpen]);

    return (
        <div
            className={`wkh-pillar group relative border border-white/[0.08] transition-all duration-500 cursor-pointer rounded-none overflow-hidden ${isOpen ? 'border-[#c8b4a0]/50 bg-[#141414]' : 'bg-[#0f0f0f] hover:border-[#c8b4a0]/30 hover:bg-[#121212]'
                }`}
            onClick={onClick}
        >
            {/* Left Hover Accent Bar */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

            {/* Header */}
            <div className="flex items-center gap-4 p-6 lg:p-7">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
                        {pillar.num}
                    </span>
                    <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#c8b4a0]" />
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
                        {pillar.title}
                    </h3>
                    <p className="text-xs text-white/70 font-light line-clamp-1 mt-0.5">{pillar.outcome}</p>
                </div>

                <ChevronDown className={`w-5 h-5 text-white/50 group-hover:text-[#c8b4a0] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Expandable Content */}
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <div className="px-6 lg:px-7 pb-6 border-t border-white/10 pt-4 bg-[#0a0a0a]">
                    <p className="text-sm text-white/80 leading-relaxed font-light mb-4">{pillar.desc}</p>
                    <div className="flex items-center gap-2 p-3 bg-[#c8b4a0]/10 border border-[#c8b4a0]/20 rounded-none">
                        <span className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">Outcome:</span>
                        <span className="text-xs font-mono text-white/90">{pillar.outcome}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function WhyKaizenPillars() {
    const sectionRef = useRef<HTMLElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".wkpl-header-item",
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
                ".wkh-pillar",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
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
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="wkpl-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Our Excellence
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="wkpl-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Our Six " },
                            { text: "Pillars", isHighlighted: true },
                            { text: " of Excellence" }
                        ]}
                    />

                    <p className="wkpl-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        The foundation of every successful partnership — six core principles that guide
                        how we work, deliver, and grow together.
                    </p>
                </div>

                {/* Pillars Grid with items-start to prevent adjacent card stretching */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
                    {PILLARS.map((pillar, index) => (
                        <PillarCard
                            key={index}
                            pillar={pillar}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
