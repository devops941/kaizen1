'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Target, Compass, Code, TestTube, Rocket, Monitor, TrendingUp, Lightbulb, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LIFECYCLE_STEPS = [
    { num: "01", icon: Target, label: "Strategy", desc: "Business Alignment" },
    { num: "02", icon: Compass, label: "Architecture", desc: "System Design" },
    { num: "03", icon: Code, label: "Development", desc: "Clean Code Engineering" },
    { num: "04", icon: TestTube, label: "Testing", desc: "QA & Security Audit" },
    { num: "05", icon: Rocket, label: "Deployment", desc: "Production Rollout" },
    { num: "06", icon: Monitor, label: "Monitoring", desc: "24/7 SIEM & Telemetry" },
    { num: "07", icon: TrendingUp, label: "Optimization", desc: "Performance Tuning" },
    { num: "08", icon: Lightbulb, label: "Innovation", desc: "Applied AI Integration" },
    { num: "09", icon: RefreshCw, label: "Continuous Kaizen", desc: "Perpetual Growth" },
];

export function TechnologyLifecycle() {
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isCenterHovered, setIsCenterHovered] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Entrance animation for headers
            gsap.fromTo(
                ".tl-header-item",
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

            // Entrance animation for step cards
            gsap.fromTo(
                ".tl-step-node",
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "back.out(1.4)",
                    clearProps: "opacity",
                    scrollTrigger: {
                        trigger: visualRef.current || sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Continuous slow GSAP rotation of the outer ring
            if (ringRef.current) {
                gsap.to(ringRef.current, {
                    rotation: 360,
                    duration: 90,
                    repeat: -1,
                    ease: "none"
                });

                // Counter-rotate the inner step nodes so cards and labels stay upright
                gsap.to(".tl-step-counter", {
                    rotation: -360,
                    duration: 90,
                    repeat: -1,
                    ease: "none"
                });
            }
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (sectionRef.current) {
                const hiddenEls = sectionRef.current.querySelectorAll('.tl-header-item, .tl-step-node');
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
        <section ref={sectionRef} className="relative py-20 lg:py-28 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <div className="tl-header-item flex items-center justify-center gap-4 mb-5">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Technology Lifecycle
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="tl-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-5 justify-center"
                        segments={[
                            { text: "Continuous " },
                            { text: "Improvement", isHighlighted: true },
                            { text: " Loop" }
                        ]}
                    />

                    <p className="tl-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        A perpetual technology enhancement cycle designed to ensure your software ecosystem evolves as your market grows.
                    </p>
                </div>

                {/* Desktop View */}
                <div ref={visualRef} className="hidden lg:block">
                    <div className="relative max-w-4xl mx-auto py-6">
                        {/* Compact Orbit Container (480px diameter, 195px radius for compact elegant fit) */}
                        <div className="relative w-[480px] h-[480px] mx-auto flex items-center justify-center">
                            
                            {/* Interactive Center Node */}
                            <div 
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 cursor-pointer ${
                                    isCenterHovered ? 'scale-110' : 'scale-100'
                                }`}
                                onMouseEnter={() => setIsCenterHovered(true)}
                                onMouseLeave={() => setIsCenterHovered(false)}
                            >
                                <div className={`w-28 h-28 rounded-full bg-[#0f0f0f] border-2 transition-all duration-500 flex items-center justify-center shadow-2xl ${
                                    isCenterHovered 
                                        ? 'border-[#c8b4a0] shadow-[0_0_40px_rgba(200,180,160,0.4)] bg-[#141414]' 
                                        : 'border-[#c8b4a0]/50 shadow-[0_0_20px_rgba(0,0,0,0.8)]'
                                }`}>
                                    <div className="text-center">
                                        <span className="text-3xl font-light text-[#c8b4a0] tracking-tight">K™</span>
                                        <div className="text-[8px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.2em] mt-0.5">
                                            Kaizen Loop
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rotating Orbit Ring Container */}
                            <div ref={ringRef} className="relative w-full h-full">
                                {/* Decorative Concentric Rings */}
                                <div className="absolute inset-0 rounded-full border border-[#c8b4a0]/20" />
                                <div className="absolute inset-10 rounded-full border border-[#c8b4a0]/10" />

                                {/* Orbiting Step Nodes (9 Nodes at 195px Radius) */}
                                {LIFECYCLE_STEPS.map((step, i) => {
                                    const angle = (i * 40) - 90;
                                    const radius = 195; // Compact radius for optimal spacing & fits on screen!
                                    const x = Math.cos(angle * Math.PI / 180) * radius;
                                    const y = Math.sin(angle * Math.PI / 180) * radius;

                                    return (
                                        /* Static Orbital Position Wrapper */
                                        <div
                                            key={i}
                                            className="absolute top-1/2 left-1/2 z-20 pointer-events-auto"
                                            style={{
                                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                                            }}
                                        >
                                            {/* Counter-rotating Wrapper so cards remain upright */}
                                            <div className="tl-step-counter">
                                                {/* Animated Step Node Card with Hover Effects */}
                                                <div 
                                                    className={`tl-step-node group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                                                        isCenterHovered ? 'scale-105' : 'hover:scale-115'
                                                    }`}
                                                >
                                                    {/* Compact Sharp 90-degree Icon Box */}
                                                    <div className="w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/40 flex items-center justify-center flex-col gap-1 group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(200,180,160,0.3)]">
                                                        <step.icon className="w-5 h-5 text-[#c8b4a0] group-hover:scale-110 transition-transform duration-300" />
                                                    </div>

                                                    {/* Compact Label Badge Underneath */}
                                                    <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-[#0f0f0f] px-2 py-0.5 border border-[#c8b4a0]/40 rounded-none shadow-md group-hover:border-[#c8b4a0] group-hover:text-[#c8b4a0] transition-colors whitespace-nowrap">
                                                            {step.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
                        {LIFECYCLE_STEPS.map((step, i) => (
                            <div
                                key={i}
                                className="tl-step-node group text-center p-4 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0] hover:bg-[#141414] transition-all duration-300 shadow-lg"
                            >
                                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                    <step.icon className="w-4 h-4 text-[#c8b4a0]" />
                                </div>
                                <span className="text-xs font-mono font-bold text-white group-hover:text-[#c8b4a0] transition-colors block">{step.label}</span>
                                <span className="text-[10px] text-white/50 block mt-0.5">{step.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
