'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutWhoWeAre() {
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
                ".wwar-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                0
            )
                .fromTo(
                    ".wwar-title",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
                    0.1
                )
                .fromTo(
                    ".wwar-text",
                    { y: 25, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out", clearProps: "all" },
                    0.2
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
                <div className="max-w-4xl mx-auto text-center">
                    <div className="wwar-eyebrow flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">Who We Are</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="wwar-title text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 justify-center"
                        segments={[
                            { text: "Engineering the " },
                            { text: "Future", isHighlighted: true },
                            { text: " of Business" }
                        ]}
                    />

                    <div className="space-y-6">
                        <p className="wwar-text text-base md:text-lg text-zinc-600 leading-relaxed font-light">
                            At Kaizen Infinities, technology should do more than solve today&apos;s challenges — it should prepare organizations for tomorrow&apos;s opportunities. Founded on the Japanese philosophy of <span className="text-[#9e7b56] font-medium">Kaizen</span> (Continuous Improvement).
                        </p>
                        <p className="wwar-text text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto font-light">
                            We specialize in enterprise-grade software, digital transformation, cloud, infrastructure engineering, AI-powered automation, cybersecurity, and professional technology training. Kaizen Infinities becomes your long-term technology partner — not just another software vendor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
