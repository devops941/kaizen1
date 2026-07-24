'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { MessageCircle, Lightbulb, Rocket, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SUCCESS_STEPS = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Discovery Workshop",
    desc: "Understanding your vision, operational bottlenecks, and strategic goals."
  },
  {
    num: "02",
    icon: Target,
    title: "Business Assessment",
    desc: "Deep-dive process mapping, regulatory audit, and opportunity matrix."
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Technology Roadmap",
    desc: "Creating a phased implementation architecture aligned with your growth."
  },
  {
    num: "04",
    icon: Rocket,
    title: "Agile Rollout",
    desc: "Building and deploying enterprise solutions with perpetual Kaizen support."
  },
];

export function SuccessSection() {
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
        ".success-header-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
        0
      )
      .fromTo(
        ".success-step",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out", clearProps: "all" },
        0.2
      )
      .fromTo(
        ".success-quote",
        { scale: 0.98, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all" },
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
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="success-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
              Our Process Framework
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="success-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Success Begins " },
              { text: "With Understanding", isHighlighted: true }
            ]}
          />

          <p className="success-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Every successful digital transformation starts with listening. Before recommending 
            technology, we invest time in understanding your organization.
          </p>
        </div>

        {/* Success Process Steps with Sharp Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SUCCESS_STEPS.map((step, i) => (
            <div
              key={i}
              className="success-step group relative bg-[#0f0f0f] border border-white/[0.08] p-7 rounded-none cursor-pointer overflow-hidden hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-500 shadow-xl text-left"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                    <step.icon className="w-5 h-5 text-[#c8b4a0]" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8b4a0] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Box */}
        <div className="success-quote max-w-3xl mx-auto text-center">
          <blockquote className="relative p-8 lg:p-10 bg-[#0f0f0f] border border-white/10 rounded-none shadow-xl text-left">
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#c8b4a0] via-[#c8b4a0]/50 to-transparent" />
            <p className="text-xl lg:text-2xl font-light text-white/90 leading-relaxed mb-4 italic pl-4">
              &ldquo;We don&apos;t sell software. We engineer business transformation.&rdquo;
            </p>
            <footer className="text-[11px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.2em] not-italic pl-4">
              — Kaizen Infinities Philosophy
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
