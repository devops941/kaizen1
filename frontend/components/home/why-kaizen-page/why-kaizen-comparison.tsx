'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { X, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const COMPARISONS = [
    { traditional: "Delivers pre-packaged software", kaizen: "Delivers business transformation & strategy" },
    { traditional: "One-time transactional engagement", kaizen: "Long-term strategic technology partnership" },
    { traditional: "Generic off-the-shelf products", kaizen: "Customized enterprise solutions built to spec" },
    { traditional: "Limited reactive maintenance", kaizen: "Continuous kaizen innovation & optimization" },
    { traditional: "Technology-focused mindset", kaizen: "Business outcome & process-focused" },
    { traditional: "Separate vendors for different needs", kaizen: "One integrated technology ecosystem partner" },
    { traditional: "Limited scalability & rigid code", kaizen: "Future-ready API-first architecture" },
    { traditional: "Security considered as an afterthought", kaizen: "Security by design (CyberNex zero-trust)" },
];

export function WhyKaizenComparison() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    once: true,
                    toggleActions: "play none none none",
                }
            });

            tl.fromTo(
                ".wkpc-header-item",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
                0
            )
                .fromTo(
                    ".wkpc-row",
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", clearProps: "all" },
                    0.2
                );
        }, sectionRef);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="wkpc-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Comparison Matrix
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="wkpc-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Traditional Vendor vs " },
                            { text: "Kaizen Infinities", isHighlighted: true }
                        ]}
                    />
                </div>

                {/* Comparison Table with Sharp Corners */}
                <div className="max-w-4xl mx-auto bg-[#0f0f0f] border border-white/10 rounded-none overflow-hidden shadow-xl">
                    {/* Table Header */}
                    <div className="grid grid-cols-2 gap-0 border-b border-white/10">
                        <div className="p-4 lg:p-5 bg-white/5 text-center">
                            <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em]">Traditional IT Vendor</span>
                        </div>
                        <div className="p-4 lg:p-5 bg-[#c8b4a0]/10 border-l border-white/10 text-center">
                            <span className="text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.2em]">Kaizen Infinities</span>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-white/5">
                        {COMPARISONS.map((row, i) => (
                            <div key={i} className="wkpc-row group grid grid-cols-2 gap-0 hover:bg-white/[0.04] transition-colors duration-300 relative">
                                {/* Left Accent Bar */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                {/* Traditional */}
                                <div className="p-4 lg:p-5 flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-none bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <X className="w-3.5 h-3.5 text-red-400" />
                                    </div>
                                    <span className="text-sm text-white/60 font-light">{row.traditional}</span>
                                </div>

                                {/* Kaizen */}
                                <div className="p-4 lg:p-5 border-l border-white/10 bg-[#c8b4a0]/[0.02] flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-none bg-[#c8b4a0]/20 border border-[#c8b4a0]/40 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-[#c8b4a0]" />
                                    </div>
                                    <span className="text-sm text-white/95 font-medium">{row.kaizen}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
