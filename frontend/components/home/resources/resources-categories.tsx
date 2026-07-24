'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { RefreshCw, Monitor, Brain, Cloud, Shield, Rocket, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
    {
        icon: RefreshCw,
        title: "Digital Transformation",
        items: ["Digital Strategy Roadmaps", "Business Process Automation", "Operational Optimization", "Enterprise Change Management"]
    },
    {
        icon: Monitor,
        title: "Enterprise Software",
        items: ["ERP Implementation Best Practices", "CRM Strategy & Integration", "Custom HRMS Architecture", "Workflow Automation Systems"]
    },
    {
        icon: Brain,
        title: "Artificial Intelligence",
        items: ["Generative AI in Enterprise", "Autonomous AI Agents", "Business Intelligence Models", "Machine Learning Automation"]
    },
    {
        icon: Cloud,
        title: "Cloud Computing",
        items: ["Zero-Downtime Cloud Migration", "Hybrid Cloud Architecture", "Cloud Cost & Infra Optimization", "Multi-Cloud Governance"]
    },
    {
        icon: Shield,
        title: "Cybersecurity & Defense",
        items: ["Ethical Hacking & Pen Testing", "24/7 SOC Threat Operations", "Digital Forensics & Incident Response", "Threat Intelligence Briefings"],
        badge: "CyberNex COE"
    },
    {
        icon: Rocket,
        title: "Emerging Technologies",
        items: ["IoT & Industrial Automation", "Digital Twins & Edge Computing", "Blockchain & Distributed Systems", "AR/VR Enterprise Solutions"]
    },
];

export function ResourcesCategories() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".rc-header-item",
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
                ".rc-card",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: gridRef.current || sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (sectionRef.current) {
                const hiddenEls = sectionRef.current.querySelectorAll('.rc-header-item, .rc-card');
                hiddenEls.forEach(el => {
                    (el as HTMLElement).style.opacity = '1';
                });
            }
        }, 300);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Light Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="rc-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                            Explore Knowledge Topics
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="rc-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Curated " },
                            { text: "Knowledge", isHighlighted: true },
                            { text: " Categories" }
                        ]}
                    />

                    <p className="rc-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Deep-dive resource topics covering digital strategy, AI, enterprise software, cloud infrastructure, and cybersecurity.
                    </p>
                </div>

                {/* Categories Grid with Sharp Corners */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
                    {CATEGORIES.map((cat, i) => {
                        const Icon = cat.icon;
                        return (
                            <div 
                                key={i} 
                                className="rc-card group relative p-6 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 text-left overflow-hidden flex flex-col justify-between"
                            >
                                {/* Left Hover Line */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-5">
                                        <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                                        </div>
                                        {cat.badge && (
                                            <span className="px-2.5 py-1 text-[10px] font-mono font-bold text-[#0099cc] bg-[#0099cc]/10 border border-[#0099cc]/20 rounded-none uppercase">
                                                {cat.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors mb-4">
                                        {cat.title}
                                    </h3>

                                    <ul className="space-y-2 mb-6">
                                        {cat.items.map((item, j) => (
                                            <li key={j} className="text-xs font-mono text-zinc-700 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#9e7b56]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-600">
                                    <span className="group-hover:text-[#9e7b56] font-bold transition-colors">Explore Articles</span>
                                    <ArrowRight className="w-4 h-4 text-[#9e7b56] group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
