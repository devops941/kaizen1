'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Cpu, Shield, Zap, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Target, value: "10", label: "Structured Phases" },
  { icon: Cpu, value: "100%", label: "Process Assurance" },
  { icon: Shield, value: "Zero", label: "Delivery Surprises" },
  { icon: Zap, value: "24/7", label: "Continuous Support" },
];

export function KineticHero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".kh-eyebrow",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1, clearProps: "all" }
      );

      gsap.fromTo(
        ".kh-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", delay: 0.2, clearProps: "all" }
      );

      gsap.fromTo(
        ".kh-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3, clearProps: "all" }
      );

      gsap.fromTo(
        ".kh-stat",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.4, clearProps: "all" }
      );

      gsap.fromTo(
        ".kh-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.5, clearProps: "all" }
      );

      gsap.fromTo(
        ".kh-float",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.5)", delay: 0.6, clearProps: "all" }
      );
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      // Safety fallback to ensure no element remains hidden
      if (containerRef.current) {
        const hiddenEls = containerRef.current.querySelectorAll('.kh-eyebrow, .kh-title, .kh-subtitle, .kh-stat, .kh-cta, .kh-float');
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
    <section
      ref={containerRef}
      className="relative min-h-[85vh] overflow-hidden bg-[#080808] text-white flex items-center border-b border-white/10"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
          background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
        }}
      />

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />

      {/* Floating Icons with Sharp Corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div
          className="kh-float absolute top-[15%] left-[8%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          <Target className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="kh-float absolute top-[25%] right-[10%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
        >
          <Cpu className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="kh-float absolute bottom-[25%] left-[8%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 25}px)` }}
        >
          <Shield className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="kh-float absolute bottom-[20%] right-[10%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
        >
          <Zap className="w-6 h-6 text-[#c8b4a0]" />
        </div>
      </div>

      {/* Content */}
      <div className="kh-content container mx-auto px-6 lg:px-16 relative z-10 py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="kh-eyebrow flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-medium tracking-[0.3em] text-[#c8b4a0] uppercase">
              The KINETIC™ Delivery Framework
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          {/* Title */}
          <AnimatedTitle
            theme="dark"
            className="kh-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8 justify-center"
            segments={[
              { text: "Great Software Doesn't Happen by Chance. " },
              { text: "It Happens by Process", isHighlighted: true }
            ]}
          />

          {/* Subtitle */}
          <p className="kh-subtitle text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Kaizen Intelligent Engineering, Technology Integration & Continuous Innovation — 
            our proprietary 10-phase delivery framework for guaranteed project success.
          </p>

          {/* Stats Row with Sharp Corners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {STATS.map((stat, i) => (
              <div key={i} className="kh-stat text-center p-5 bg-[#0f0f0f] border border-white/[0.08] rounded-none shadow-lg">
                <stat.icon className="w-6 h-6 text-[#c8b4a0] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-light text-white font-mono mb-1">{stat.value}</div>
                <div className="text-[11px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="kh-cta flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton
              px="px-6"
              py="py-4"
              icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
            >
              Explore the Framework
            </AnimatedButton>
            <AnimatedButton
              px="px-6"
              py="py-4"
              className="border border-white/20 text-[13px] font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
            >
              Download Framework PDF
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
