'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SNAPSHOT_DATA = [
    { label: "Company Name", value: "Kaizen Infinities Private Limited" },
    { label: "Headquarters", value: "Madurai, Tamil Nadu, India" },
    { label: "Industry", value: "Information Technology & Digital Transformation" },
    { label: "Core Expertise", value: "Enterprise Software, ERP, Cloud, AI, Infrastructure, Cybersecurity" },
    { label: "Flagship Division", value: "CyberNex – Cyber Security Experience Center" },
    { label: "Business Model", value: "B2B, B2G, Educational Institutions, Enterprises" },
    { label: "Delivery Model", value: "Consulting · Design · Development · Deployment · Support" }
];

export function AboutSnapshot() {
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
                ".snapshot-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                0
            )
            .fromTo(
                ".snapshot-title",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                0.1
            )
            .fromTo(
                ".snapshot-item",
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out", clearProps: "all" },
                0.2
            );
        }, sectionRef);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f9fa] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="snapshot-eyebrow flex items-center justify-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">Company Snapshot</span>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                        </div>

                        <AnimatedTitle
                            theme="light"
                            className="snapshot-title text-4xl md:text-5xl font-light tracking-tight leading-[1.1] justify-center"
                            segments={[
                                { text: "At a " },
                                { text: "Glance", isHighlighted: true }
                            ]}
                        />
                    </div>

                    <div className="snapshot-grid bg-white border border-zinc-200 rounded-none overflow-hidden shadow-sm">
                        {SNAPSHOT_DATA.map((item, i) => (
                            <div
                                key={i}
                                className="snapshot-item group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 border-b border-zinc-100 last:border-b-0 hover:bg-[#f8f9fa] transition-colors duration-300"
                            >
                                <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.15em] sm:w-44 sm:flex-shrink-0">
                                    {item.label}
                                </span>
                                <span className="text-sm text-zinc-800 group-hover:text-zinc-950 transition-colors font-light">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
