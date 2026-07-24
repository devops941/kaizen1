'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Cpu, Cloud, Shield, Code, Brain, BarChart3, Building, Lock } from "lucide-react";

const DOMAINS = [
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: Cloud, label: "Cloud Computing" },
    { icon: Shield, label: "Cybersecurity" },
    { icon: Code, label: "Software Engineering" },
    { icon: Cpu, label: "IoT & Embedded" },
    { icon: BarChart3, label: "Data Analytics" },
    { icon: Building, label: "Business Consulting" },
    { icon: Lock, label: "ERP Solutions" },
];

export function InnovationEcosystem() {
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
                            Knowledge Ecosystem
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Building Expertise " },
                            { text: "Across Multiple Domains", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Central Kaizen hub radiating into interconnected technology domains.
                    </p>
                </div>

                {/* Ecosystem Domains Grid with Sharp Corners */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {DOMAINS.map((domain, i) => (
                        <div
                            key={i}
                            className="group p-6 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-center"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0] group-hover:text-black transition-all duration-300">
                                <domain.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm font-bold text-white group-hover:text-[#c8b4a0] transition-colors mb-1">
                                {domain.label}
                            </h4>
                            <span className="text-[10px] font-mono text-[#c8b4a0] uppercase tracking-wider block">
                                KAIZEN CORE DOMAIN
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
