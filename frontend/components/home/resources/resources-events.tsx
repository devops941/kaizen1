'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Video, Users, Shield, Brain, Rocket, Calendar, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
    { icon: Users, title: "Corporate Technology Workshops", desc: "Hands-on engineering workshops for enterprise leadership teams.", tag: "LIVE WORKSHOP" },
    { icon: Shield, title: "Cybersecurity Threat Awareness", desc: "SOC2 compliance & threat briefing sessions by CyberNex experts.", tag: "SECURITY SESSION" },
    { icon: Brain, title: "Applied AI Bootcamps", desc: "Intensive agentic AI workflows and LLM deployment strategy.", tag: "AI BOOTCAMP" },
    { icon: Rocket, title: "Kaizen Solution Product Demos", desc: "Live walkthroughs of custom ERP, CRM, and cloud platforms.", tag: "PRODUCT LAUNCH" },
    { icon: Video, title: "Technical Deep-Dive Webinars", desc: "Quarterly live technical webinars with senior solution architects.", tag: "WEBINAR" },
    { icon: Calendar, title: "Executive Industry Roundtables", desc: "Exclusive roundtable discussions on digital transformation.", tag: "EXECUTIVE BRIEFING" },
];

export function ResourcesEvents() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".re-header-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".re-card",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: gridRef.current || sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (sectionRef.current) {
                const hiddenEls = sectionRef.current.querySelectorAll('.re-header-item, .re-card');
                hiddenEls.forEach(el => {
                    (el as HTMLElement).style.opacity = '1';
                });
            }
        }, 300);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="re-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Learn & Connect
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="re-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Webinars & " },
                            { text: "Live Events", isHighlighted: true }
                        ]}
                    />

                    <p className="re-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Join interactive technical webinars, security awareness briefings, and executive workshops hosted by Kaizen specialists.
                    </p>
                </div>

                {/* Events Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
                    {EVENTS.map((event, i) => {
                        const Icon = event.icon;
                        return (
                            <div
                                key={i}
                                className="re-card group relative p-6 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-xl text-left overflow-hidden flex flex-col justify-between"
                            >
                                {/* Left Accent Line */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-[#c8b4a0]" />
                                        </div>
                                        <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-0.5 border border-[#c8b4a0]/20 rounded-none">
                                            {event.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-white group-hover:text-[#c8b4a0] transition-colors mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                                        {event.desc}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#c8b4a0] group-hover:text-white transition-colors">
                                    <span>Register / RSVP</span>
                                    <ArrowRight className="w-4 h-4 text-[#c8b4a0] group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
