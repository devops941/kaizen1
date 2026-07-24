'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Target, Palette, Gauge, Shield, Wrench, Coins, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHILOSOPHY_ITEMS = [
    { icon: Target, text: "Business Goal Alignment" },
    { icon: Palette, text: "Intuitive User Experience" },
    { icon: Gauge, text: "Enterprise Scalability" },
    { icon: Shield, text: "Zero-Trust Security" },
    { icon: Wrench, text: "Long-Term Maintainability" },
    { icon: Coins, text: "Optimized ROI & Budget" },
    { icon: Rocket, text: "Future Expansion Readiness" },
];

export function TechnologyPhilosophy() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".tp-header-item",
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
                ".tp-item",
                { y: 25, opacity: 0 },
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
                const hiddenEls = sectionRef.current.querySelectorAll('.tp-header-item, .tp-item');
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="tp-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                            Our Technology Philosophy
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
                    </div>

                    <AnimatedTitle
                        theme="light"
                        className="tp-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Choose the Right Technology, " },
                            { text: "Not the Most Popular", isHighlighted: true },
                            { text: " One" }
                        ]}
                    />

                    <p className="tp-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
                        We don&apos;t follow hype cycles. We select proven, enterprise-grade technology stacks 
                        engineered specifically for your business requirements.
                    </p>
                </div>

                {/* Philosophy Items Grid */}
                <div ref={gridRef} className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {PHILOSOPHY_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="tp-item group relative flex items-center gap-3 px-6 py-4 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Left Hover Accent Line */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                            <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300">
                                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </div>
                            <span className="text-sm font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
