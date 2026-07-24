'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Check } from "lucide-react";

const STANDARDS = [
    "Secure Software Development Lifecycle (SSDLC)",
    "Agile Development Practices",
    "DevSecOps Principles",
    "API-First Architecture",
    "Cloud-Native Engineering",
    "Modular Development",
    "Version Control & Governance",
    "Continuous Integration (CI)",
    "Continuous Deployment (CD)",
    "Automated Testing & QA",
];

export function InnovationStandards() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Centered Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Engineering Standards
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Excellence " },
                            { text: "by Design", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Strict architectural principles enforced across every digital solution we deliver.
                    </p>
                </div>

                {/* Grid Expanded Full-Width with Sharp Corners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {STANDARDS.map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-3 p-4 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-left"
                        >
                            <div className="w-8 h-8 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 flex-shrink-0 transition-all duration-300">
                                <Check className="w-4 h-4 text-[#c8b4a0]" />
                            </div>
                            <span className="text-xs font-bold text-white group-hover:text-[#c8b4a0] transition-colors leading-relaxed">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
