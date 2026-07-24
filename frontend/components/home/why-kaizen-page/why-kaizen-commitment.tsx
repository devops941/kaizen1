'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Check, MessageSquare, FileText, Blocks, Clock, BookOpen, Users, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const COMMITMENTS = [
    { icon: MessageSquare, text: "Transparent & Daily Communication", tag: "AGILE" },
    { icon: FileText, text: "Professional Project Management", tag: "PMP" },
    { icon: Blocks, text: "Scalable Solution Architecture", tag: "API-FIRST" },
    { icon: Clock, text: "Timely Delivery & SLA Guarantees", tag: "TIMELINE" },
    { icon: BookOpen, text: "Comprehensive Documentation", tag: "KNOWLEDGE" },
    { icon: Users, text: "User Training & Knowledge Transfer", tag: "ONBOARDING" },
    { icon: Sparkles, text: "Long-Term Dedicated Support", tag: "SUPPORT" },
    { icon: Check, text: "Continuous Innovation & Kaizen", tag: "EVOLUTION" },
];

export function WhyKaizenCommitment() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".wkmc-header-item",
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
                ".wkmc-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.06,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="wkmc-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                            Our Service Commitment
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="wkmc-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "What You Can " },
                            { text: "Expect", isHighlighted: true },
                            { text: " From Every Engagement" }
                        ]}
                    />
                </div>

                {/* Commitments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {COMMITMENTS.map((item, i) => (
                        <div key={i} className="wkmc-item group relative p-6 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 text-left cursor-pointer overflow-hidden">
                            {/* Left Hover Accent Line */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300">
                                    <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider">
                                    {item.tag}
                                </span>
                            </div>

                            <span className="text-sm font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors leading-snug block">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
