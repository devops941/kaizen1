'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    GraduationCap, HeartPulse, Factory, ShoppingCart, Building2, Landmark,
    Rocket, HandHeart, Wheat, Truck, Banknote, Globe, Check
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
    { icon: GraduationCap, label: "Education", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: true, cyber: true },
    { icon: HeartPulse, label: "Healthcare", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: false, cyber: true },
    { icon: Factory, label: "Manufacturing", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: true, cyber: true },
    { icon: ShoppingCart, label: "Retail & E-Com", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: false, cyber: true },
    { icon: Building2, label: "Banking & BFSI", software: true, erp: true, mobile: false, ai: true, cloud: true, infra: true, cyber: true },
    { icon: Landmark, label: "Government", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: true, cyber: true },
    { icon: HandHeart, label: "NGOs & Non-Profits", software: true, erp: true, mobile: true, ai: false, cloud: true, infra: false, cyber: false },
    { icon: Rocket, label: "Startups & Scaleups", software: true, erp: false, mobile: true, ai: true, cloud: true, infra: false, cyber: true },
    { icon: Wheat, label: "Agriculture", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: false, cyber: false },
    { icon: Truck, label: "Transportation", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: true, cyber: true },
    { icon: Banknote, label: "Finance", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: true, cyber: true },
    { icon: Globe, label: "Hospitality", software: true, erp: true, mobile: true, ai: true, cloud: true, infra: false, cyber: true },
];

const SOLUTION_TYPES = [
    { key: "software", label: "Software" },
    { key: "erp", label: "ERP" },
    { key: "mobile", label: "Mobile" },
    { key: "ai", label: "AI" },
    { key: "cloud", label: "Cloud" },
    { key: "infra", label: "Infra" },
    { key: "cyber", label: "Cyber Sec" },
];

function MatrixCell({ active }: { active: boolean }) {
    if (active) {
        return (
            <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-[#9e7b56] stroke-[2.5]" />
            </div>
        );
    }
    return <div className="w-2.5 h-2.5 mx-auto rounded-none bg-zinc-200 border border-zinc-300" />;
}

export function IndustryMatrix() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".im-header-item",
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
                ".im-industry",
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.04,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f9fa] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="im-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">Industry Solutions Matrix</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>
                    <AnimatedTitle
                        theme="light"
                        className="im-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Tailored for " },
                            { text: "Every Industry", isHighlighted: true }
                        ]}
                    />
                    <p className="im-header-item text-base text-zinc-600 leading-relaxed font-light">
                        Purpose-built technology solutions across 12+ verticals with comprehensive service coverage.
                    </p>
                </div>

                {/* Matrix Grid with Sharp Corners */}
                <div ref={gridRef} className="overflow-x-auto -mx-6 lg:mx-0 bg-white border border-zinc-200 rounded-none shadow-sm p-4 lg:p-6">
                    <div className="min-w-[800px] lg:min-w-0">
                        {/* Header Row */}
                        <div className="grid grid-cols-8 gap-0 border-b border-zinc-200 pb-4 mb-2 bg-[#f8f9fa] py-3 px-2">
                            <div className="col-span-1 pl-2 font-mono font-bold text-xs text-zinc-500 uppercase tracking-wider">
                                Industry Vertical
                            </div>
                            {SOLUTION_TYPES.map((type) => (
                                <div key={type.key} className="text-center">
                                    <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider">
                                        {type.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Industry Rows */}
                        {INDUSTRIES.map((industry, i) => {
                            const Icon = industry.icon;
                            return (
                                <div
                                    key={i}
                                    className="im-industry grid grid-cols-8 gap-0 border-b border-zinc-100 last:border-b-0 py-3.5 px-2 hover:bg-[#f8f9fa] transition-colors duration-300 group"
                                >
                                    <div className="col-span-1 flex items-center gap-3">
                                        <div className="w-9 h-9 flex items-center justify-center border border-zinc-200 rounded-none bg-zinc-50 group-hover:border-[#9e7b56] group-hover:bg-[#9e7b56]/10 transition-all duration-300">
                                            <Icon className="w-4 h-4 text-[#9e7b56]" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-900 group-hover:text-[#9e7b56] transition-colors">
                                            {industry.label}
                                        </span>
                                    </div>
                                    {SOLUTION_TYPES.map((type) => (
                                        <div key={type.key} className="flex items-center justify-center">
                                            <MatrixCell active={industry[type.key as keyof typeof industry] as boolean} />
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-600 font-mono">
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#9e7b56]" />
                        <span>Core Solution Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-zinc-200 border border-zinc-300" />
                        <span>Custom Modular Build</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
