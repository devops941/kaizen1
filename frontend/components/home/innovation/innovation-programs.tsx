'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { GraduationCap, Users, Trophy, Award, BookOpen, Heart, FlaskConical, FileText, Building, Cpu, Globe, Handshake, TrendingUp } from "lucide-react";

const TALENT = [
    { icon: GraduationCap, text: "Graduate Training Programs" },
    { icon: Users, text: "Engineering Internships" },
    { icon: Trophy, text: "Leadership Development" },
    { icon: Award, text: "Certification Roadmaps" },
    { icon: BookOpen, text: "Cross-Functional Learning" },
    { icon: Heart, text: "Mentorship Programs" },
    { icon: FlaskConical, text: "Innovation Projects" },
    { icon: FileText, text: "Research Contributions" },
];

const PARTNERSHIPS = [
    { icon: Building, text: "Academic Institutions" },
    { icon: Cpu, text: "Technology Vendors" },
    { icon: Globe, text: "Industry Associations" },
    { icon: FileText, text: "Research Organizations" },
    { icon: Handshake, text: "Corporate Enterprises" },
    { icon: TrendingUp, text: "Government Departments" },
    { icon: Heart, text: "Innovation Hubs" },
    { icon: Users, text: "Startup Ecosystems" },
];

export function InnovationPrograms() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Talent Development */}
                <div className="mb-20">
                    {/* Centered Header */}
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                                Talent Development
                            </span>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                        </div>

                        <AnimatedTitle
                            theme="dark"
                            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                            segments={[
                                { text: "Growing the Next Generation " },
                                { text: "of Technology Leaders", isHighlighted: true }
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {TALENT.map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-3.5 p-4 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-left"
                            >
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />
                                <div className="w-9 h-9 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 flex-shrink-0 transition-all duration-300">
                                    <item.icon className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partnerships */}
                <div>
                    {/* Centered Header */}
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                                Collaboration & Partnerships
                            </span>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                        </div>

                        <AnimatedTitle
                            theme="dark"
                            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                            segments={[
                                { text: "Stronger " },
                                { text: "Together", isHighlighted: true }
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {PARTNERSHIPS.map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-3.5 p-4 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-left"
                            >
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />
                                <div className="w-9 h-9 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 flex-shrink-0 transition-all duration-300">
                                    <item.icon className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
