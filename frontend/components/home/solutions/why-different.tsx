'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const COMPARISONS = [
    { traditional: "Sells pre-packaged software", kaizen: "Solves core business & engineering challenges" },
    { traditional: "Generic off-the-shelf products", kaizen: "Tailored enterprise solutions built to spec" },
    { traditional: "Transactional project delivery", kaizen: "Long-term technology continuum partnership" },
    { traditional: "Limited reactive maintenance", kaizen: "Continuous kaizen improvement & optimization" },
    { traditional: "Technology-first mindset", kaizen: "Business-first consulting & process mapping" },
    { traditional: "Isolated fragmented software", kaizen: "Unified connected digital ecosystem" },
    { traditional: "Siloed security added later", kaizen: "Built-in CyberNex zero-trust security" },
];

export function WhyDifferent() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".wd-header-item",
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

            gsap.fromTo(
                ".wd-row",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.06,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="wd-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Why Our Solutions</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>
                    <AnimatedTitle
                        theme="dark"
                        className="wd-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Built Around " },
                            { text: "Outcomes,", isHighlighted: true },
                            { text: " Not Just Deliverables" }
                        ]}
                    />
                </div>

                {/* Comparison Table */}
                <div ref={gridRef} className="wd-table max-w-4xl mx-auto bg-[#0f0f0f] border border-white/10 rounded-none overflow-hidden shadow-xl flex flex-col">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 gap-0 border-b border-white/10">
                        <div className="col-span-5 p-4 lg:p-6 bg-white/5">
                            <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em]">Traditional IT Vendor</h3>
                        </div>
                        <div className="col-span-7 p-4 lg:p-6 bg-[#c8b4a0]/10 border-l border-white/10">
                            <h3 className="text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.2em]">Kaizen Infinities</h3>
                        </div>
                    </div>

                    {/* Body Rows */}
                    {COMPARISONS.map((row, i) => (
                        <div key={i} className="wd-row group grid grid-cols-12 gap-0 border-b border-white/5 last:border-b-0 hover:bg-white/[0.04] transition-colors duration-300 relative">
                            {/* Left Accent Bar */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                            <div className="col-span-5 p-4 lg:p-6 flex items-center">
                                <p className="text-sm text-white/50 font-light">{row.traditional}</p>
                            </div>
                            <div className="col-span-7 p-4 lg:p-6 border-l border-white/10 flex items-center gap-3">
                                <Check className="w-4 h-4 text-[#c8b4a0] flex-shrink-0" />
                                <p className="text-sm text-white/90 font-medium">{row.kaizen}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-12 text-center max-w-2xl mx-auto">
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                        Instead of selling predefined software packages, we begin by understanding your vision,
                        analyzing your business processes, and designing solutions that align with your long-term goals.
                    </p>
                </div>
            </div>
        </section>
    );
}
