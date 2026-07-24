'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    { num: "01", category: "DISCOVERY", title: "Discovery Workshop", desc: "Understanding your vision, business goals, and operational challenges." },
    { num: "02", category: "ANALYSIS", title: "Business Analysis", desc: "Detailed process mapping, bottleneck identification, and workflow optimization." },
    { num: "03", category: "STRATEGY", title: "Technology Roadmap", desc: "Strategic technology planning, cloud selection, and system architecture." },
    { num: "04", category: "DESIGN", title: "Solution Design", desc: "High-fidelity UI/UX prototyping, microservices design, and API mapping." },
    { num: "05", category: "EXECUTION", title: "Agile Development", desc: "Iterative sprint development with continuous integration and code review." },
    { num: "06", category: "QUALITY", title: "Quality Assurance", desc: "Rigorous automated testing, performance benchmarks, and security audits." },
    { num: "07", category: "ROLLOUT", title: "Deployment & Go-Live", desc: "Seamless production rollout with zero downtime and failover protection." },
    { num: "08", category: "TRAINING", title: "Training & Support", desc: "Comprehensive user training, documentation, and operational onboarding." },
    { num: "09", category: "EVOLUTION", title: "Continuous Improvement", desc: "Regular feature enhancements, monitoring, and perpetual Kaizen support." },
];

const COMMITMENTS = [
    "Transparent & Daily Agile Communication",
    "Dedicated Project Management & PMP Standards",
    "Scalable API-First Solution Architecture",
    "On-Time & On-Budget Delivery SLA",
    "Comprehensive Technical & API Documentation",
    "Hands-On User Training & Knowledge Transfer",
    "24/7 SLA-Backed Support & Monitoring",
    "Continuous Innovation & Perpetual Optimization",
];

export function EngagementModel() {
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
                ".em-header-item",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
                0
            )
            .fromTo(
                ".em-step",
                { y: 35, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", clearProps: "all" },
                0.2
            )
            .fromTo(
                ".em-commitment-item",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: "power2.out", clearProps: "all" },
                0.4
            );
        }, sectionRef);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="em-header-item flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Client Engagement</span>
                    </div>
                    <AnimatedTitle
                        theme="dark"
                        className="em-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
                        segments={[
                            { text: "KINETIC™ " },
                            { text: "Delivery Framework", isHighlighted: true }
                        ]}
                    />
                    <p className="em-header-item text-base text-white/80 leading-relaxed font-light">
                        A proven 9-phase delivery roadmap that transforms your vision into a live enterprise product
                        through collaborative partnership.
                    </p>
                </div>

                {/* Steps Grid with Sharp Corners */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {STEPS.map((step, i) => (
                            <div
                                key={i}
                                className="em-step group relative bg-[#0f0f0f] border border-white/[0.08] p-7 cursor-pointer overflow-hidden rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-500 shadow-xl text-left"
                            >
                                {/* Left Accent Bar */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
                                                {step.num}
                                            </span>
                                            <span className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">
                                                {step.category}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8b4a0] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/70 leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                                    <ArrowRight className="w-4 h-4 text-[#c8b4a0]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Commitments */}
                <div className="border-t border-white/10 pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5">
                            <h3 className="em-header-item text-2xl md:text-3xl font-light text-white mb-4">
                                What You Can Expect
                            </h3>
                            <p className="em-header-item text-base text-white/70 leading-relaxed font-light">
                                From discovery to deployment and beyond, every engagement is built on transparency,
                                professionalism, and an uncompromised commitment to your long-term success.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {COMMITMENTS.map((item, i) => (
                                <div key={i} className="em-commitment-item flex items-center gap-3 bg-white/[0.03] border border-white/10 p-4 rounded-none hover:border-[#c8b4a0]/40 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-[#c8b4a0] flex-shrink-0" />
                                    <span className="text-xs font-mono text-white/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
