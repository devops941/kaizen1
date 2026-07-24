'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "../animated-button";
import { AnimatedTitle } from "../animated-title";

gsap.registerPlugin(ScrollTrigger);

export function SolutionsHero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            gsap.fromTo(
                ".sol-hero-eyebrow",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".sol-hero-title",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.4, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".sol-hero-text",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.6, clearProps: "transform,opacity" }
            );

            gsap.fromTo(
                ".sol-hero-cta",
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.8, clearProps: "transform,opacity" }
            );

            // Parallax on scroll
            gsap.to(".sol-hero-content", {
                y: -60,
                opacity: 0.85,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, containerRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[85vh] overflow-hidden bg-[#080808] text-white border-b border-white/10"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '100px 100px'
            }} />

            {/* Decorative Orbit Rings */}
            <div className="absolute top-20 -right-40 w-[600px] h-[600px] opacity-[0.06] pointer-events-none">
                <div className="absolute inset-0 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-16 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-32 border border-[#c8b4a0] rounded-full" />
            </div>

            <div
                className="sol-hero-content container mx-auto px-6 lg:px-16 relative z-10 min-h-[85vh] flex flex-col justify-center pt-24 pb-16"
            >
                <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <div className="sol-hero-eyebrow flex items-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium tracking-[0.3em] text-[#c8b4a0] uppercase">
                            Solutions & Enterprise Services
                        </span>
                    </div>

                    {/* Title */}
                    <AnimatedTitle
                        theme="dark"
                        className="sol-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-light leading-[1.05] tracking-tight mb-8"
                        segments={[
                            { text: "Every Industry is Different. " },
                            { text: "Every Solution", isHighlighted: true },
                            { text: " Should Be Too." }
                        ]}
                    />

                    {/* Description */}
                    <p className="sol-hero-text text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-10 font-light">
                        At Kaizen Infinities, we engineer tailored technology solutions that solve
                        industry-specific challenges while enabling organizations to innovate, automate,
                        and scale with confidence.
                    </p>

                    {/* CTAs */}
                    <div className="sol-hero-cta flex flex-wrap items-center gap-4">
                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
                        >
                            Schedule Consultation
                        </AnimatedButton>

                        <AnimatedButton
                            px="px-6"
                            py="py-4"
                            className="border border-white/20 text-[13px] font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
                        >
                            Explore Solutions
                        </AnimatedButton>
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="sol-hero-cta mt-20 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-12 lg:gap-16">
                        {[
                            { value: "200+", label: "Enterprise Solutions" },
                            { value: "12+", label: "Industries Served" },
                            { value: "99.9%", label: "Project Success Rate" },
                            { value: "24/7", label: "Support Available" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-4xl font-extralight text-white tracking-tight font-mono">{stat.value}</div>
                                <div className="text-[11px] font-mono text-[#c8b4a0] tracking-[0.15em] uppercase mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
