'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Code, Cloud, Shield, Cpu, Terminal, CheckCircle2, Server, Layers, ChevronRight, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TECH_CATEGORIES = [
    {
        id: "frontend",
        label: "01 / Frontend & Mobile",
        icon: Code,
        title: "Client-Side Engineering",
        tags: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Flutter", "PWA"],
        highlights: ["Core Web Vitals Optimized", "WCAG 2.1 Accessibility", "Server-Driven UI"]
    },
    {
        id: "backend",
        label: "02 / Backend & Microservices",
        icon: Server,
        title: "Core Business Logic",
        tags: ["Python", "FastAPI", "Node.js", "Go", "PostgreSQL", "Redis", "Kafka"],
        highlights: ["Sub-50ms API Latency", "Event-Driven Architecture", "GraphQL & REST"]
    },
    {
        id: "cloud",
        label: "03 / Multi-Cloud & DevOps",
        icon: Cloud,
        title: "Infrastructure as Code",
        tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
        highlights: ["Zero-Downtime Deployment", "Automated Auto-Scaling", "Multi-Region DR"]
    },
    {
        id: "security",
        label: "04 / CyberNex Security",
        icon: Shield,
        title: "Zero-Trust Architecture",
        tags: ["CyberNex Shield", "SOC2 Type II", "OAuth 2.0 / OIDC", "AES-256", "WAF"],
        highlights: ["Automated Pen Testing", "24/7 SIEM Telemetry", "Role-Based Access (RBAC)"]
    },
];

const QUICK_STATS = [
    { value: "50+", label: "Frameworks & Tools" },
    { value: "Multi-Cloud", label: "AWS / Azure / GCP" },
    { value: "100%", label: "Zero-Trust Security" },
    { value: "99.99%", label: "Guaranteed Uptime" },
];

export function TechnologyHero() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [activeCategory, setActiveCategory] = useState(0);

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
                ".th-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1, clearProps: "all" }
            );

            gsap.fromTo(
                ".th-title",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2, clearProps: "all" }
            );

            gsap.fromTo(
                ".th-subtitle",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4, clearProps: "all" }
            );

            gsap.fromTo(
                ".th-cta-group",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.5, clearProps: "all" }
            );

            gsap.fromTo(
                ".th-matrix-hud",
                { scale: 0.96, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.3, clearProps: "all" }
            );
        }, containerRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (containerRef.current) {
                const hiddenEls = containerRef.current.querySelectorAll('.th-eyebrow, .th-title, .th-subtitle, .th-cta-group, .th-matrix-hud');
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

    const activeTech = TECH_CATEGORIES[activeCategory];
    const ActiveIcon = activeTech.icon;

    return (
        <section
            ref={containerRef}
            className="relative min-h-[92vh] overflow-hidden bg-[#080808] text-white flex items-center border-b border-white/10 py-20 lg:py-32"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            {/* Ambient Gold Orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-[650px] h-[650px] opacity-[0.04] pointer-events-none transition-transform duration-700 ease-out"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePos.x * -45}px, ${mousePos.y * -45}px)`,
                    background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
                }}
            />

            {/* Top Border Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/30 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Hero Narrative */}
                    <div className="lg:col-span-7 text-left">
                        {/* Eyebrow */}
                        <div className="th-eyebrow flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-none bg-[#c8b4a0] animate-pulse" />
                            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c8b4a0] uppercase">
                                // KAIZEN TECHNOLOGY & ARCHITECTURE ECOSYSTEM
                            </span>
                            <div className="w-12 h-px bg-gradient-to-r from-[#c8b4a0]/40 to-transparent" />
                        </div>

                        {/* Animated Main Title */}
                        <AnimatedTitle
                            theme="dark"
                            className="th-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.04] tracking-tight mb-8"
                            segments={[
                                { text: "Technology Built for " },
                                { text: "Performance", isHighlighted: true },
                                { text: ", Security & Scale" }
                            ]}
                        />

                        {/* Subtitle */}
                        <p className="th-subtitle text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-10 font-light">
                            We leverage enterprise-grade technologies, cloud-native architectures, CyberNex zero-trust security, 
                            and modern engineering standards to craft future-proof digital ecosystems.
                        </p>

                        {/* CTAs */}
                        <div className="th-cta-group flex flex-wrap items-center gap-4 mb-12">
                            <AnimatedButton
                                px="px-7"
                                py="py-4.5"
                                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-mono font-bold tracking-[0.1em]"
                            >
                                Explore Technology Ecosystem
                            </AnimatedButton>
                            
                            <AnimatedButton
                                px="px-7"
                                py="py-4.5"
                                icon={<Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className="border border-white/20 text-[13px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
                            >
                                Schedule Tech Review
                            </AnimatedButton>
                        </div>

                        {/* Quick Metrics Bar */}
                        <div className="th-cta-group grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                            {QUICK_STATS.map((stat, i) => (
                                <div key={i} className="p-3 bg-[#0f0f0f] border border-white/[0.08] rounded-none">
                                    <div className="text-lg font-mono font-bold text-[#c8b4a0]">{stat.value}</div>
                                    <div className="text-[10px] font-mono text-white/60 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Interactive Multi-Layer Tech Stack Matrix */}
                    <div className="lg:col-span-5">
                        <div className="th-matrix-hud relative bg-[#0f0f0f] border border-white/10 p-6 lg:p-7 rounded-none shadow-2xl overflow-hidden">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8b4a0]/10 rounded-full blur-3xl pointer-events-none" />

                            {/* Header */}
                            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <Layers className="w-4 h-4 text-[#c8b4a0]" />
                                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                        Architecture Matrix
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20">
                                    INTERACTIVE SPEC
                                </span>
                            </div>

                            {/* Category Selector Tabs */}
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {TECH_CATEGORIES.map((cat, idx) => {
                                    const Icon = cat.icon;
                                    const isActive = activeCategory === idx;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(idx)}
                                            className={`group relative p-3 text-left border transition-all duration-300 rounded-none ${
                                                isActive
                                                    ? 'bg-[#181818] border-[#c8b4a0] text-white shadow-md'
                                                    : 'bg-[#080808] border-white/[0.08] text-white/60 hover:border-white/20 hover:text-white'
                                            }`}
                                        >
                                            {/* Accent Line for Active */}
                                            {isActive && (
                                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#c8b4a0]" />
                                            )}
                                            
                                            <div className="flex items-center justify-between mb-1">
                                                <Icon className={`w-4 h-4 ${isActive ? 'text-[#c8b4a0]' : 'text-white/40'}`} />
                                                <span className={`text-[9px] font-mono ${isActive ? 'text-[#c8b4a0]' : 'text-white/30'}`}>
                                                    0{idx + 1}
                                                </span>
                                            </div>

                                            <div className="text-xs font-mono font-bold leading-tight truncate">
                                                {cat.title}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Active Category Specs Display */}
                            <div className="bg-[#080808] border border-white/10 p-5 rounded-none space-y-4">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 flex items-center justify-center border border-[#c8b4a0]/30 bg-[#c8b4a0]/10 rounded-none text-[#c8b4a0]">
                                            <ActiveIcon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{activeTech.title}</div>
                                            <div className="text-[10px] font-mono text-[#c8b4a0]">{activeTech.label}</div>
                                        </div>
                                    </div>
                                    <Zap className="w-4 h-4 text-[#c8b4a0] animate-pulse" />
                                </div>

                                {/* Tech Tags */}
                                <div>
                                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2">Production Stack</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeTech.tags.map((tag, tIdx) => (
                                            <span 
                                                key={tIdx}
                                                className="text-[11px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 border border-[#c8b4a0]/20 px-2 py-0.5 rounded-none"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Capability Highlights */}
                                <div>
                                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2">Engineering Standard</div>
                                    <div className="space-y-1.5">
                                        {activeTech.highlights.map((item, hIdx) => (
                                            <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-white/80">
                                                <ChevronRight className="w-3 h-3 text-[#c8b4a0] flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* HUD Footer */}
                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                                <span>SYSTEM STATUS</span>
                                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-none bg-emerald-400 animate-pulse" />
                                    OPERATIONAL
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
