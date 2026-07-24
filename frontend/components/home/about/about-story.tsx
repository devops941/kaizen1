'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code2, Sparkles, Infinity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CODE_CRAFT = [
    {
        num: "01",
        title: "Code",
        category: "ENGINEERING",
        desc: "Clean, scalable, maintainable software engineering adhering to global standards and enterprise modularity.",
        icon: Code2,
        tag: "Phase 01 — Foundation",
        skills: ["Clean Architecture", "API First", "Scalable Systems"]
    },
    {
        num: "02",
        title: "Craft",
        category: "EXPERIENCE",
        desc: "Exceptional system design, intuitive user experience, and uncompromised craftsmanship across every touchpoint.",
        icon: Sparkles,
        tag: "Phase 02 — Craftsmanship",
        skills: ["System Design", "UX/UI Polish", "Quality First"]
    },
    {
        num: "03",
        title: "Continuum",
        category: "PARTNERSHIP",
        desc: "Continuous innovation, dedicated support, automated optimization, and a true long-term strategic partnership.",
        icon: Infinity,
        tag: "Phase 03 — Evolution",
        skills: ["Kaizen Support", "DevOps", "Perpetual Growth"]
    }
];

export function AboutStory() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Header Animation
            gsap.fromTo(
                ".story-header-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
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

            // Card Grid Animation
            gsap.fromTo(
                ".story-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: {
                        trigger: gridRef.current || sectionRef.current,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#0a0a0a] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Story Header */}
                <div className="max-w-4xl mb-20">
                    <div className="story-header-item flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">Our Story</span>
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="story-header-item text-4xl md:text-5xl font-light tracking-tight leading-[1.1] mb-6"
                        segments={[
                            { text: "From Continuous Improvement to " },
                            { text: "Continuous Innovation", isHighlighted: true }
                        ]}
                    />

                    <p className="story-header-item text-base md:text-lg text-white/80 leading-relaxed font-light">
                        The word <span className="text-[#c8b4a0] font-medium">Kaizen</span> has inspired successful organizations worldwide. At Kaizen Infinities, we transformed this philosophy into a technology company with a clear mission: to engineer digital solutions that continuously evolve with our clients&apos; businesses.
                    </p>
                </div>

                {/* Code · Craft · Continuum */}
                <div className="mb-8">
                    <div className="story-header-item flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                        <div className="text-[11px] font-semibold text-[#c8b4a0] uppercase tracking-[0.25em]">Code · Craft · Continuum</div>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">3-Pillar Methodology</span>
                    </div>

                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {CODE_CRAFT.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="story-card group relative bg-[#0f0f0f] border border-white/[0.08] p-8 cursor-pointer overflow-hidden rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-500 shadow-xl"
                                >
                                    {/* Left Accent Bar on Hover */}
                                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                    <div className="relative z-10">
                                        {/* Top Row: Number Badge & Tag */}
                                        <div className="flex items-center justify-between gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-mono font-semibold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
                                                    {item.num}
                                                </span>
                                                <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                                    <Icon className="w-5 h-5 text-[#c8b4a0]" />
                                                </div>
                                            </div>

                                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider hidden sm:block">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#c8b4a0] transition-colors">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                                            {item.desc}
                                        </p>

                                        {/* Skill tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, j) => (
                                                <span key={j} className="text-[10px] font-mono font-semibold text-white/60 uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 group-hover:border-[#c8b4a0]/30 transition-colors rounded-none">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hover Arrow Icon */}
                                    <div className="absolute bottom-5 right-5 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                        <ArrowRight className="w-4 h-4 text-[#c8b4a0]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
