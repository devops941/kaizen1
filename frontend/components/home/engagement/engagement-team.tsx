'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Users, FileText, Compass, Palette, Code, TestTube, ClipboardList, Headphones } from "lucide-react";

const TEAM_MEMBERS = [
    { icon: Users, role: "Engagement Manager", responsibility: "Overall relationship & project governance" },
    { icon: FileText, role: "Business Analyst", responsibility: "Requirements & process mapping" },
    { icon: Compass, role: "Solution Architect", responsibility: "Technical architecture" },
    { icon: Palette, role: "UI/UX Designer", responsibility: "User experience & interface design" },
    { icon: Code, role: "Development Team", responsibility: "Engineering & implementation" },
    { icon: TestTube, role: "QA Engineer", responsibility: "Quality assurance & test coverage" },
    { icon: ClipboardList, role: "Project Manager", responsibility: "Planning, delivery & sprint coordination" },
    { icon: Headphones, role: "Support Team", responsibility: "Post-implementation support & SLAs" },
];

export function EngagementTeam() {
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
                            Project Governance
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Every Project Gets a " },
                            { text: "Structured Team", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Cross-functional domain specialists assigned to ensure single-point accountability and seamless engineering delivery.
                    </p>
                </div>

                {/* Team Governance Table Expanded Full-Width */}
                <div className="max-w-6xl mx-auto bg-[#0f0f0f] border border-white/10 rounded-none overflow-hidden shadow-xl">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 gap-0 border-b border-white/10 bg-white/5">
                        <div className="col-span-5 md:col-span-4 p-4 text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">ROLE</div>
                        <div className="col-span-7 md:col-span-8 p-4 border-l border-white/10 text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">RESPONSIBILITY & GOVERNANCE</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-white/5">
                        {TEAM_MEMBERS.map((member, i) => (
                            <div key={i} className="group grid grid-cols-12 gap-0 hover:bg-white/[0.04] transition-colors duration-300 relative">
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />
                                <div className="col-span-5 md:col-span-4 p-4 flex items-center gap-3">
                                    <div className="w-8 h-8 border border-[#c8b4a0]/30 bg-white/5 text-[#c8b4a0] rounded-none flex items-center justify-center flex-shrink-0 group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                        <member.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold text-white group-hover:text-[#c8b4a0] transition-colors">{member.role}</span>
                                </div>
                                <div className="col-span-7 md:col-span-8 p-4 border-l border-white/10 flex items-center text-xs text-white/80 font-light">
                                    {member.responsibility}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
