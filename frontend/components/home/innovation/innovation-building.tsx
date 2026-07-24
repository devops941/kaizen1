'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Zap } from "lucide-react";

export function InnovationBuilding() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Building the Future
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8 justify-center"
                        segments={[
                            { text: "From Software Development " },
                            { text: "to Digital Innovation", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8 font-light">
                        Our mission is not simply to follow AI, Cloud, Cybersecurity, Automation, IoT, and Data
                        Intelligence trends but to help shape them — through continuous research, strategic
                        partnerships, and practical implementation.
                    </p>

                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#0f0f0f] border border-[#c8b4a0]/30 rounded-none text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-[#c8b4a0]" />
                        <span>Innovation at the core of everything we do</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
