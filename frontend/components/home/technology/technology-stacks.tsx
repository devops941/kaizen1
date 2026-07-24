'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Code, Database, Smartphone, Cloud, GitBranch, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TECH_STACKS = [
    {
        icon: Code,
        title: "Frontend Engineering",
        subtitle: "Beautiful Experiences & High-Performance Web Interfaces",
        tags: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        caps: ["Responsive Web Apps", "Progressive Web Apps (PWA)", "Web Accessibility (WCAG)", "Core Web Vitals SEO"]
    },
    {
        icon: Database,
        title: "Backend & Microservices",
        subtitle: "Reliable Systems Behind Enterprise Operations",
        tags: ["Python", "FastAPI", "Django", "Node.js", "Laravel", "ASP.NET Core", "Java Spring", "PostgreSQL", "MongoDB", "Redis"],
        caps: ["REST & GraphQL APIs", "Microservices Architecture", "OAuth2 & JWT Auth", "Event-Driven Queues"]
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        subtitle: "Enterprise Mobility Across iOS & Android Platforms",
        tags: ["Flutter", "React Native", "Swift", "Kotlin", "Android SDK"],
        caps: ["Biometric Authentication", "Offline-First Sync", "Push Notifications", "NFC & QR Payment Integration"]
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure & DevOps",
        subtitle: "Flexible, Cloud-Native, Always Available Infrastructure",
        tags: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
        caps: ["Zero-Downtime CI/CD", "Infrastructure as Code", "Auto-Scaling Clusters", "Disaster Recovery"]
    },
];

export function TechnologyStacks() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".ts-header-item",
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
                ".ts-card",
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
                const hiddenEls = sectionRef.current.querySelectorAll('.ts-header-item, .ts-card');
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f9fa] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="ts-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                            Technology Stack Ecosystem
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="ts-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Our " },
                            { text: "Technology", isHighlighted: true },
                            { text: " Ecosystem" }
                        ]}
                    />

                    <p className="ts-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Modern frameworks, cloud platforms, and engineering practices used to craft robust software.
                    </p>
                </div>

                {/* Stacks Grid with Sharp Corners */}
                <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
                    {TECH_STACKS.map((stack, i) => (
                        <div key={i} className="ts-card group relative p-6 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 text-left overflow-hidden">
                            {/* Left Hover Line */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300 flex-shrink-0">
                                    <stack.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors">
                                        {stack.title}
                                    </h3>
                                    <p className="text-xs text-zinc-600 font-light leading-relaxed">{stack.subtitle}</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {stack.tags.map((tag, j) => (
                                    <span
                                        key={j}
                                        className="px-2.5 py-1 text-[11px] font-mono font-bold text-[#9e7b56] bg-[#9e7b56]/10 border border-[#9e7b56]/20 rounded-none"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Capabilities List */}
                            <div className="space-y-2 border-t border-zinc-100 pt-4">
                                {stack.caps.map((cap, k) => (
                                    <div key={k} className="flex items-center gap-2 text-xs font-mono text-zinc-800">
                                        <Check className="w-3.5 h-3.5 text-[#9e7b56] flex-shrink-0 stroke-[2.5]" />
                                        <span>{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
