'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, BookOpen, FileText, Video, Mail, Search, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOPIC_PREVIEWS = [
    {
        id: "ai",
        label: "AI & Automation",
        title: "Generative AI & Agentic Workflows in Enterprise Software",
        type: "WHITEPAPER",
        readTime: "12 min read",
        author: "Kaizen Labs"
    },
    {
        id: "cyber",
        label: "Cybersecurity",
        title: "Zero-Trust Architecture & SOC2 Readiness Blueprint",
        type: "SECURITY GUIDE",
        readTime: "8 min read",
        author: "CyberNex COE"
    },
    {
        id: "cloud",
        label: "Cloud Architecture",
        title: "Zero-Downtime Multi-Cloud Migration Strategy",
        type: "PLAYBOOK",
        readTime: "10 min read",
        author: "Cloud Practice"
    },
    {
        id: "erp",
        label: "Digital ERP",
        title: "10 Signs Your Organization Has Outgrown Legacy Software",
        type: "CHECKLIST",
        readTime: "6 min read",
        author: "Enterprise Team"
    },
];

const STATS = [
    { icon: BookOpen, value: "50+", label: "Articles & Insights" },
    { icon: FileText, value: "10+", label: "Architecture Specs" },
    { icon: Video, value: "20+", label: "Recorded Webinars" },
    { icon: Mail, value: "5K+", label: "Active Subscribers" },
];

export function ResourcesHero() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

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
                ".rsh-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1, clearProps: "all" }
            );

            gsap.fromTo(
                ".rsh-title",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2, clearProps: "all" }
            );

            gsap.fromTo(
                ".rsh-subtitle",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4, clearProps: "all" }
            );

            gsap.fromTo(
                ".rsh-cta-group",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.5, clearProps: "all" }
            );

            gsap.fromTo(
                ".rsh-hud-card",
                { scale: 0.96, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.3, clearProps: "all" }
            );
        }, containerRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (containerRef.current) {
                const hiddenEls = containerRef.current.querySelectorAll('.rsh-eyebrow, .rsh-title, .rsh-subtitle, .rsh-cta-group, .rsh-hud-card');
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

    const activePreview = TOPIC_PREVIEWS[activeTopicIndex];

    return (
        <section
            ref={containerRef}
            className="relative min-h-[88vh] overflow-hidden bg-[#080808] text-white flex items-center border-b border-white/10 py-20 lg:py-32"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            {/* Ambient Gold Orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.035] pointer-events-none transition-transform duration-700 ease-out"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
                    background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                }}
            />

            {/* Top Border Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/25 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Hero Narrative */}
                    <div className="lg:col-span-7 text-left">
                        {/* Eyebrow */}
                        <div className="rsh-eyebrow flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-none bg-[#c8b4a0] animate-pulse" />
                            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c8b4a0] uppercase">
                                // KAIZEN KNOWLEDGE HUB & INSIGHTS
                            </span>
                            <div className="w-12 h-px bg-gradient-to-r from-[#c8b4a0]/40 to-transparent" />
                        </div>

                        {/* Animated Main Title */}
                        <AnimatedTitle
                            theme="dark"
                            className="rsh-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.04] tracking-tight mb-8"
                            segments={[
                                { text: "Stay Ahead in a " },
                                { text: "Rapidly Changing", isHighlighted: true },
                                { text: " Digital World" }
                            ]}
                        />

                        {/* Subtitle Narrative */}
                        <p className="rsh-subtitle text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-10 font-light">
                            Technology evolves every day. We help organizations stay informed through expert insights,
                            practical architecture blueprints, industry trends, and downloadable technology guides.
                        </p>

                        {/* CTAs */}
                        <div className="rsh-cta-group flex flex-wrap items-center gap-4 mb-12">
                            <AnimatedButton
                                px="px-7"
                                py="py-4.5"
                                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-mono font-bold tracking-[0.1em]"
                            >
                                Explore All Insights
                            </AnimatedButton>
                            
                            <AnimatedButton
                                px="px-7"
                                py="py-4.5"
                                icon={<FileText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="border border-white/20 text-[13px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
                            >
                                Download Free Guides
                            </AnimatedButton>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="rsh-cta-group grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                            {STATS.map((stat, i) => (
                                <div key={i} className="p-3 bg-[#0f0f0f] border border-white/[0.08] rounded-none">
                                    <div className="text-lg font-mono font-bold text-[#c8b4a0]">{stat.value}</div>
                                    <div className="text-[10px] font-mono text-white/60 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Knowledge Matrix & Interactive Search Preview */}
                    <div className="lg:col-span-5">
                        <div className="rsh-hud-card relative bg-[#0f0f0f] border border-white/10 p-6 lg:p-7 rounded-none shadow-2xl overflow-hidden">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8b4a0]/10 rounded-full blur-3xl pointer-events-none" />

                            {/* HUD Header Bar */}
                            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-4 h-4 text-[#c8b4a0]" />
                                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                        Knowledge Index
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20">
                                    CURATED CONTENT
                                </span>
                            </div>

                            {/* Topic Filter Pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {TOPIC_PREVIEWS.map((topic, idx) => (
                                    <button
                                        key={topic.id}
                                        onClick={() => setActiveTopicIndex(idx)}
                                        className={`px-3 py-1.5 text-xs font-mono font-bold transition-all rounded-none ${
                                            activeTopicIndex === idx
                                                ? 'bg-[#c8b4a0] text-[#080808] shadow-md'
                                                : 'bg-[#080808] text-white/60 hover:text-white border border-white/10'
                                        }`}
                                    >
                                        {topic.label}
                                    </button>
                                ))}
                            </div>

                            {/* Active Topic Featured Preview */}
                            <div className="bg-[#080808] border border-white/10 p-5 rounded-none space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20">
                                        {activePreview.type}
                                    </span>
                                    <span className="text-[10px] font-mono text-white/50">{activePreview.readTime}</span>
                                </div>

                                <h3 className="text-base font-bold text-white leading-snug">
                                    {activePreview.title}
                                </h3>

                                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/60">
                                    <span>Author: {activePreview.author}</span>
                                    <div className="flex items-center gap-1 text-[#c8b4a0] group cursor-pointer">
                                        <span>Read Now</span>
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </div>

                            {/* HUD Bottom Search Trigger */}
                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                                <div className="flex items-center gap-2">
                                    <Search className="w-4 h-4 text-[#c8b4a0]" />
                                    <span>Search 50+ Kaizen whitepapers...</span>
                                </div>
                                <span className="text-[#c8b4a0] font-bold">PDF / DOCS</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
