'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { MessageCircle, FileSearch, Map, Palette, Code, TestTube, Rocket, GraduationCap, Wrench, Lightbulb } from "lucide-react";

const TIMELINE_STEPS = [
    { num: "01", icon: MessageCircle, label: "Discovery" },
    { num: "02", icon: FileSearch, label: "Analysis" },
    { num: "03", icon: Map, label: "Roadmap" },
    { num: "04", icon: Palette, label: "Design" },
    { num: "05", icon: Code, label: "Development" },
    { num: "06", icon: TestTube, label: "Testing" },
    { num: "07", icon: Rocket, label: "Deployment" },
    { num: "08", icon: GraduationCap, label: "Training" },
    { num: "09", icon: Wrench, label: "Support" },
    { num: "10", icon: Lightbulb, label: "Innovation" },
];

export function EngagementTimeline() {
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
                            Process Roadmap
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Client Engagement " },
                            { text: "Timeline", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        A structured 10-milestone lifecycle designed for rapid deployment, clear governance, and continuous innovation.
                    </p>
                </div>

                {/* Horizontal Roadmap Grid Expanded Full-Width */}
                <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 max-w-6xl mx-auto">
                    {TIMELINE_STEPS.map((step, i) => (
                        <div key={i} className="group text-center p-4 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0] hover:bg-[#141414] transition-all duration-300 relative">
                            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-[#c8b4a0]/30 bg-white/5 text-[#c8b4a0] rounded-none group-hover:bg-[#c8b4a0] group-hover:text-black transition-all duration-300">
                                <step.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2 py-0.5 border border-[#c8b4a0]/20 rounded-none block mb-1.5 mx-auto w-max">
                                {step.num}
                            </span>
                            <span className="text-xs font-bold text-white group-hover:text-[#c8b4a0] transition-colors block uppercase tracking-wider">
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
