'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Brain, Cloud, Shield, Wifi, Cog, Rocket, ArrowRight } from "lucide-react";

const LABS = [
    {
        icon: Brain,
        title: "Artificial Intelligence",
        items: ["Generative AI, ML, Predictive Analytics", "NLP, AI Agents"],
        highlight: false
    },
    {
        icon: Cloud,
        title: "Cloud Engineering",
        items: ["Hybrid Cloud, Cloud Automation", "IaC, Multi-Cloud, Cloud Security"],
        highlight: false
    },
    {
        icon: Shield,
        title: "Cybersecurity Research",
        items: ["Threat Intelligence, Attack Simulation", "Digital Forensics, Zero Trust"],
        badge: "CyberNex",
        highlight: false
    },
    {
        icon: Wifi,
        title: "Internet of Things (IoT)",
        items: ["Industrial IoT, Smart Campus", "Smart Agriculture, Environmental Monitoring"],
        highlight: false
    },
    {
        icon: Cog,
        title: "Automation & Robotics",
        items: ["Workflow Automation, RPA", "Industrial Automation, Autonomous Monitoring"],
        highlight: false
    },
    {
        icon: Rocket,
        title: "Future Technologies",
        items: ["Digital Twin, Blockchain", "AR/VR, Edge Computing, Quantum Readiness"],
        highlight: false
    },
];

export function InnovationLabs() {
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
                            K-Labs Domains
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-4 justify-center"
                        segments={[
                            { text: "Kaizen Innovation Labs — " },
                            { text: "Where Ideas Become Reality", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Futuristic laboratory with interconnected research domains.
                    </p>
                </div>

                {/* Cards Grid Expanded Full-Width with Sharp Corners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {LABS.map((lab, i) => (
                        <div
                            key={i}
                            className={`group p-6 bg-[#0f0f0f] border transition-all duration-300 rounded-none relative text-left ${
                                lab.badge === 'CyberNex'
                                    ? 'border-[#00d4ff]/40 hover:border-[#00d4ff] bg-[#00d4ff]/[0.02]'
                                    : 'border-white/10 hover:border-[#c8b4a0]/50 hover:bg-[#141414]'
                            }`}
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <div
                                    className={`w-12 h-12 flex items-center justify-center border rounded-none transition-all duration-300 ${
                                        lab.badge === 'CyberNex'
                                            ? 'border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff]'
                                            : 'border-[#c8b4a0]/30 bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20'
                                    }`}
                                >
                                    <lab.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-lg font-bold transition-colors ${
                                        lab.badge === 'CyberNex' ? 'text-[#00d4ff]' : 'text-white group-hover:text-[#c8b4a0]'
                                    }`}>
                                        {lab.title}
                                    </h3>
                                    {lab.badge && (
                                        <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 rounded-none uppercase">
                                            {lab.badge}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-2 mb-6">
                                {lab.items.map((item, j) => (
                                    <li key={j} className="text-xs text-white/80 font-light flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-none ${
                                            lab.badge === 'CyberNex' ? 'bg-[#00d4ff]' : 'bg-[#c8b4a0]'
                                        }`} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={`pt-4 border-t ${
                                lab.badge === 'CyberNex' ? 'border-[#00d4ff]/20' : 'border-white/10'
                            }`}>
                                <button className={`flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                                    lab.badge === 'CyberNex' ? 'text-[#00d4ff]' : 'text-[#c8b4a0]'
                                }`}>
                                    <span>Explore Domain</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
