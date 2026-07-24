'use client';

import { useEffect, useRef } from "react";
import { AnimatedButton } from "../animated-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function SolutionsCta() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".scta-content",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        once: true,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }} />

                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c8b4a0]/5 blur-[150px] rounded-full" />

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow */}
                    <div className="scta-content flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.3em]">
                            Get Started
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    {/* Title */}
                    <h2 className="scta-content text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
                        Ready to Transform Your
                        <span className="text-[#c8b4a0]"> Business?</span>
                    </h2>

                    {/* Description */}
                    <p className="scta-content text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                        Schedule a free consultation with our team to discuss your technology challenges
                        and discover how Kaizen Infinities can accelerate your digital transformation journey.
                    </p>

                    {/* CTA Buttons */}
                    <div className="scta-content flex flex-wrap items-center justify-center gap-4 mb-16">
                        <AnimatedButton
                            px="px-8"
                            py="py-5"
                            icon={<Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="bg-[#c8b4a0] text-[#080808] rounded-none text-[14px] font-medium tracking-[0.1em]"
                        >
                            Schedule Free Consultation
                        </AnimatedButton>

                        <AnimatedButton
                            px="px-8"
                            py="py-5"
                            icon={<MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="border border-white/20 text-[14px] font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
                        >
                            Request Assessment
                        </AnimatedButton>
                    </div>

                    {/* Trust Indicators */}
                    <div className="scta-content flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/60">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]" />
                            <span>No Obligation Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]" />
                            <span>Response within 24 Hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]" />
                            <span>Industry Expert Engineering Team</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom */}
                <div className="mt-20 flex items-center justify-center gap-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]/30" />
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">Kaizen Infinities</span>
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]/30" />
                </div>
            </div>
        </section>
    );
}
