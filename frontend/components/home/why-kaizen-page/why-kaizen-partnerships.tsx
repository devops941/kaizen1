'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Handshake, Eye, Lightbulb, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyKaizenPartnerships() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    once: true,
                    toggleActions: "play none none none",
                }
            });

            tl.fromTo(
                ".wkp-header-item",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
                0
            )
                .fromTo(
                    ".wkp-content-item",
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", clearProps: "all" },
                    0.2
                )
                .fromTo(
                    ".wkp-visual",
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
                    0.3
                );
        }, sectionRef);

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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7">
                        {/* Eyebrow */}
                        <div className="wkp-header-item flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                                Why Organizations Trust Us
                            </span>
                        </div>

                        <AnimatedTitle
                            theme="light"
                            className="wkp-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
                            segments={[
                                { text: "We Build " },
                                { text: "Partnerships", isHighlighted: true },
                                { text: ", Not Just Projects" }
                            ]}
                        />

                        <div className="space-y-6">
                            <p className="wkp-content-item text-base text-zinc-600 leading-relaxed font-light">
                                Instead of selling predefined software packages, we begin by understanding your vision,
                                analyzing your business processes, and designing solutions that align with your long-term goals.
                            </p>

                            <p className="wkp-content-item text-base text-zinc-600 leading-relaxed font-light">
                                Before we write a single line of code, our consultants immerse themselves in your
                                organization&apos;s workflows, identify bottlenecks, and uncover automation opportunities.
                            </p>

                            <div className="wkp-content-item grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { icon: Eye, text: "Deep Understanding" },
                                    { icon: Lightbulb, text: "Innovation Focus" },
                                    { icon: Rocket, text: "Long-term Vision" },
                                    { icon: Handshake, text: "Partnership Model" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-none shadow-2xs hover:border-[#9e7b56] transition-colors">
                                        <item.icon className="w-5 h-5 text-[#9e7b56] flex-shrink-0" />
                                        <span className="text-xs font-mono font-semibold text-zinc-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
                        <div className="wkp-visual relative w-80 h-80">
                            {/* Central Circle */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-36 h-36 rounded-full bg-zinc-50 border border-zinc-800 flex items-center justify-center shadow-md">
                                    <div className="text-center">
                                        <span className="text-4xl font-light text-[#9e7b56]">K</span>
                                        <div className="text-[9px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider mt-0.5">Kaizen</div>
                                    </div>
                                </div>
                            </div>

                            {/* Rings */}
                            <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_40s_linear_infinite]" />
                            <div className="absolute inset-8 border border-zinc-800 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                            <div className="absolute inset-16 border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
