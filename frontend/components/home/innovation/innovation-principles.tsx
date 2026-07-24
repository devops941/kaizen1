'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Lightbulb, Wrench, Shield, TrendingUp } from "lucide-react";

const PRINCIPLES = [
    {
        icon: Lightbulb,
        title: "Innovate",
        desc: "Continuously explore emerging technologies."
    },
    {
        icon: Wrench,
        title: "Engineer",
        desc: "Build robust, scalable, enterprise-grade solutions."
    },
    {
        icon: Shield,
        title: "Secure",
        desc: "Integrate cybersecurity into everything we create."
    },
    {
        icon: TrendingUp,
        title: "Improve",
        desc: "Apply the Kaizen philosophy of continuous improvement."
    },
];

export function InnovationPrinciples() {
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
                            Our Commitment
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Four Enduring " },
                            { text: "Principles", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Guiding principles that govern every research initiative and software delivery.
                    </p>
                </div>

                {/* Cards Grid Expanded Full-Width with Sharp Corners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {PRINCIPLES.map((principle, i) => (
                        <div
                            key={i}
                            className="group p-8 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-left"
                        >
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />
                            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0] group-hover:text-black transition-all duration-300">
                                <principle.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c8b4a0] transition-colors">
                                {principle.title}
                            </h3>

                            <p className="text-xs text-white/80 font-light leading-relaxed">
                                {principle.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
