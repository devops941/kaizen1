'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { MessageCircle, FileText, Palette, Code, TestTube, Shield, Rocket, GraduationCap, TrendingUp, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", icon: MessageCircle, label: "Discover" },
  { num: "02", icon: FileText, label: "Define" },
  { num: "03", icon: Palette, label: "Design" },
  { num: "04", icon: Code, label: "Engineer" },
  { num: "05", icon: TestTube, label: "Validate" },
  { num: "06", icon: Shield, label: "Secure" },
  { num: "07", icon: Rocket, label: "Deploy" },
  { num: "08", icon: GraduationCap, label: "Enable" },
  { num: "09", icon: TrendingUp, label: "Optimize" },
  { num: "10", icon: Lightbulb, label: "Innovate" },
];

export function KineticVisual() {
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
        ".kv-header-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
        0
      )
      .fromTo(
        ".kv-step",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", clearProps: "all" },
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
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="kv-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
              Visual Framework
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
          </div>

          <AnimatedTitle
            theme="light"
            className="kv-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Full 10-Phase " },
              { text: "Lifecycle", isHighlighted: true },
              { text: " Map" }
            ]}
          />
        </div>

        {/* Steps Grid with Sharp Corners */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 max-w-6xl mx-auto">
          {STEPS.map((step, i) => (
            <div key={i} className="kv-step group relative bg-white border border-zinc-200 p-4 rounded-none shadow-2xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between">
              {/* Number Badge */}
              <div className="mb-3">
                <span className="text-xs font-mono font-bold text-[#9e7b56] px-2 py-0.5 bg-[#9e7b56]/10 border border-[#9e7b56]/20 rounded-none">
                  {step.num}
                </span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300">
                <step.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </div>

              {/* Label */}
              <span className="text-[11px] font-mono font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors uppercase tracking-wider">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="kv-header-item mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-zinc-200 rounded-none shadow-2xs">
            <div className="w-2 h-2 rounded-none bg-[#9e7b56] animate-pulse" />
            <span className="text-xs font-mono text-zinc-700">Every phase contains clear quality gates, documentation, and stakeholder verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}
