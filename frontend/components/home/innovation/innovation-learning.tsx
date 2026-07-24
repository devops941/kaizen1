'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { GraduationCap, Award, Users, Wrench, FlaskConical, MessageCircle, Globe, Code } from "lucide-react";

const LEARNING_ITEMS = [
    { icon: Award, text: "Technical Certifications" },
    { icon: MessageCircle, text: "Knowledge Sharing Sessions" },
    { icon: Users, text: "Internal Workshops" },
    { icon: Wrench, text: "Innovation Challenges" },
    { icon: FlaskConical, text: "Research Projects" },
    { icon: GraduationCap, text: "Technical Communities" },
    { icon: Globe, text: "Industry Conferences" },
    { icon: Code, text: "Hackathons" },
];

export function InnovationLearning() {
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
                            Continuous Learning
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Learning " },
                            { text: "Never Ends", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Cultivating internal talent through continuous certifications, engineering hackathons, and research publication.
                    </p>
                </div>

                {/* Grid Expanded Full-Width with Sharp Corners */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {LEARNING_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-4 p-5 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-left"
                        >
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />
                            <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 flex-shrink-0 transition-all duration-300">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-white group-hover:text-[#c8b4a0] transition-colors leading-tight">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
