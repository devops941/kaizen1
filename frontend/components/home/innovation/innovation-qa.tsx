'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { TestTube, Gauge, MousePointer, Shield, CheckCircle, RefreshCw, Cog, UserCheck } from "lucide-react";

const QA_ITEMS = [
    { icon: TestTube, text: "Functional Testing" },
    { icon: Gauge, text: "Performance Testing" },
    { icon: MousePointer, text: "Usability Testing" },
    { icon: Shield, text: "Security Testing" },
    { icon: CheckCircle, text: "Compatibility Testing" },
    { icon: RefreshCw, text: "Regression Testing" },
    { icon: Cog, text: "Automation Testing" },
    { icon: UserCheck, text: "User Acceptance Testing" },
];

export function InnovationQA() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
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
                            Quality Assurance
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Excellence Is Measured, " },
                            { text: "Not Assumed", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        End-to-end automated testing, performance stress tests, and security vulnerability scans before production rollout.
                    </p>
                </div>

                {/* Grid Expanded Full-Width with Sharp Corners */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {QA_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="group text-center p-5 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300"
                        >
                            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0] group-hover:text-black transition-all duration-300">
                                <item.icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-mono font-bold text-white group-hover:text-[#c8b4a0] transition-colors block leading-tight">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
