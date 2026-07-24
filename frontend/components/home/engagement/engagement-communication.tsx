'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Calendar, CheckCircle, BarChart3, Lightbulb } from "lucide-react";

const COMMUNICATION = [
    {
        icon: Calendar,
        title: "Weekly Cadence",
        tag: "SPRINT GOVERNANCE",
        items: ["Sprint Progress Updates", "Daily Live Demo Sessions", "Weekly Status Reports"]
    },
    {
        icon: BarChart3,
        title: "Monthly Cadence",
        tag: "STEERING COMMITTEE",
        items: ["Steering Committee Reviews", "KPI & SLA Tracking Reports", "Proactive Risk Assessments"]
    },
    {
        icon: Lightbulb,
        title: "Quarterly Cadence",
        tag: "STRATEGIC ROADMAP",
        items: ["Executive Technology Reviews", "Feature Enhancement Planning", "Continuous Innovation Roadmap"]
    },
];

export function EngagementCommunication() {
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
                            Communication Framework
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Transparency is Built Into " },
                            { text: "Every Engagement", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Clear communication cadences keep all stakeholders aligned from weekly engineering sprints to quarterly technology roadmaps.
                    </p>
                </div>

                {/* Communication Cards Grid Expanded Full-Width */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {COMMUNICATION.map((comm, i) => (
                        <div key={i} className="group p-8 bg-[#0f0f0f] border border-white/10 rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative text-left">
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none uppercase tracking-wider">
                                    {comm.tag}
                                </span>

                                <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                    <comm.icon className="w-5 h-5 text-[#c8b4a0]" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#c8b4a0] transition-colors">
                                {comm.title}
                            </h3>

                            <ul className="space-y-3">
                                {comm.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2.5 text-xs text-white/80 font-light">
                                        <CheckCircle className="w-4 h-4 text-[#c8b4a0] flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
