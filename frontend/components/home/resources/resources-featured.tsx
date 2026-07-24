'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Calendar, Clock, Monitor, Brain, Shield, Cloud } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
    {
        icon: Monitor,
        title: "10 Critical Indicators Your Business Has Outgrown Legacy ERP Software",
        category: "ENTERPRISE SOFTWARE",
        readTime: "8 min read",
        date: "Dec 15, 2025"
    },
    {
        icon: Brain,
        title: "AI in Enterprise Education: Designing Next-Generation Learning Systems",
        category: "ARTIFICIAL INTELLIGENCE",
        readTime: "12 min read",
        date: "Dec 10, 2025"
    },
    {
        icon: Shield,
        title: "The Executive Cybersecurity Readiness Checklist for Mid-Market Enterprises",
        category: "CYBERSECURITY",
        readTime: "6 min read",
        date: "Dec 05, 2025"
    },
    {
        icon: Shield,
        title: "Building Zero-Trust Enterprise Applications: Security Architecture Blueprint",
        category: "CYBERSECURITY",
        readTime: "10 min read",
        date: "Nov 28, 2025"
    },
    {
        icon: Cloud,
        title: "Zero-Downtime Multi-Cloud Migration Strategy for Mission-Critical Apps",
        category: "CLOUD COMPUTING",
        readTime: "9 min read",
        date: "Nov 20, 2025"
    },
    {
        icon: Monitor,
        title: "Digital Transformation Roadmap for Industry 4.0 Smart Manufacturers",
        category: "DIGITAL TRANSFORMATION",
        readTime: "15 min read",
        date: "Nov 15, 2025"
    },
];

export function ResourcesFeatured() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".rf-header-item",
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
                ".rf-card",
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
                const hiddenEls = sectionRef.current.querySelectorAll('.rf-header-item, .rf-card');
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="rf-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Latest Industry Insights
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="rf-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Featured " },
                            { text: "Articles & Insights", isHighlighted: true }
                        ]}
                    />

                    <p className="rf-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Technical whitepapers, architecture playbooks, and strategic operational guides written by Kaizen engineers.
                    </p>
                </div>

                {/* Articles Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
                    {ARTICLES.map((article, i) => {
                        const Icon = article.icon;
                        return (
                            <article key={i} className="rf-card group relative cursor-pointer">
                                <div className="h-full p-6 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
                                    {/* Left Accent Line */}
                                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                    <div>
                                        {/* Icon Header Box */}
                                        <div className="h-36 mb-5 bg-[#080808] border border-white/[0.06] rounded-none flex items-center justify-center group-hover:border-[#c8b4a0]/30 transition-colors">
                                            <Icon className="w-10 h-10 text-[#c8b4a0] transition-transform group-hover:scale-110" />
                                        </div>

                                        {/* Category Badge */}
                                        <div className="mb-3">
                                            <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-0.5 border border-[#c8b4a0]/20 rounded-none uppercase">
                                                {article.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-bold text-white group-hover:text-[#c8b4a0] transition-colors mb-4 leading-snug">
                                            {article.title}
                                        </h3>
                                    </div>

                                    {/* Meta & CTA */}
                                    <div>
                                        <div className="flex items-center justify-between text-xs font-mono text-white/60 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-[#c8b4a0]" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5 text-[#c8b4a0]" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between text-xs font-mono font-bold text-[#c8b4a0] group-hover:text-white transition-colors">
                                            <span>Read Full Article</span>
                                            <ArrowRight className="w-4 h-4 text-[#c8b4a0] group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
