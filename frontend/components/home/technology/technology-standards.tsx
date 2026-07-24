'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Code, Blocks, FileText, Shield, TestTube, BookOpen, GitBranch, Gauge, Rocket, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STANDARDS = [
    { icon: Code, text: "Clean Code Architecture" },
    { icon: Blocks, text: "Modular Development" },
    { icon: FileText, text: "API-First Specification" },
    { icon: Shield, text: "Secure Coding (OWASP Top 10)" },
    { icon: TestTube, text: "Automated Unit & Integration Testing" },
    { icon: BookOpen, text: "Comprehensive Technical Docs" },
    { icon: GitBranch, text: "Strict Git Flow Version Control" },
    { icon: Gauge, text: "High Performance & Latency Tuning" },
    { icon: Rocket, text: "Horizontal & Vertical Scalability" },
    { icon: RefreshCw, text: "Continuous Kaizen Improvement" },
];

export function TechnologyStandards() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".ts2-header-item",
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
                ".ts2-item",
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
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
                const hiddenEls = sectionRef.current.querySelectorAll('.ts2-header-item, .ts2-item');
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
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="ts2-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                            Engineering Standards
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="ts2-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Enterprise " },
                            { text: "Engineering", isHighlighted: true },
                            { text: " Principles" }
                        ]}
                    />

                    <p className="ts2-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Ten strict engineering principles applied across all development teams for reliable software delivery.
                    </p>
                </div>

                {/* Standards Grid with Sharp Corners */}
                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {STANDARDS.map((item, i) => (
                        <div
                            key={i}
                            className="ts2-item group relative p-5 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between overflow-hidden cursor-pointer"
                        >
                            {/* Left Accent Line */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                            <div>
                                <div className="w-11 h-11 mx-auto mb-4 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300">
                                    <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                </div>
                                <span className="text-xs font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors leading-snug block">
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
