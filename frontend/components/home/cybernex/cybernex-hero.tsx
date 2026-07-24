'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Shield, Zap, Eye, Lock, Terminal, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Shield, value: "500+", label: "Security Tests Passed" },
  { icon: Zap, value: "24/7", label: "SOC Operations" },
  { icon: Eye, value: "Zero", label: "Breaches Recorded" },
  { icon: Lock, value: "100%", label: "SOC2 & ISO Compliance" },
];

export function CybernexHero() {
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
        ".cnh-eyebrow",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, clearProps: "all" }
      );

      gsap.fromTo(
        ".cnh-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.3, clearProps: "all" }
      );

      gsap.fromTo(
        ".cnh-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5, clearProps: "all" }
      );

      gsap.fromTo(
        ".cnh-stat",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.6, clearProps: "all" }
      );

      gsap.fromTo(
        ".cnh-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.7, clearProps: "all" }
      );
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (containerRef.current) {
        const hiddenEls = containerRef.current.querySelectorAll('.cnh-eyebrow, .cnh-title, .cnh-subtitle, .cnh-stat, .cnh-cta');
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
      className="relative min-h-[85vh] overflow-hidden bg-[#030712] text-white flex items-center border-b border-[#00d4ff]/20 py-24 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#00d4ff 1px, transparent 1px), 
          linear-gradient(90deg, #00d4ff 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />

      {/* Cyber Neon Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.05] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
          background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)'
        }}
      />

      {/* Top Border Cyan Neon Bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />

      <div className="cnh-content container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="cnh-eyebrow flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#00d4ff]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#00d4ff] uppercase">
              // CyberNex Security Center of Excellence
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>

          {/* Title */}
          <AnimatedTitle
            theme="dark"
            className="cnh-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8 justify-center"
            segments={[
              { text: "CyberNex — Our Flagship " },
              { text: "Center of Excellence", isHighlighted: true }
            ]}
          />

          {/* Subtitle */}
          <p className="cnh-subtitle text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            CyberNex combines hands-on learning, enterprise infrastructure, cyber ranges, SOC simulations, 
            Digital Forensics, Cloud Security, and Red Team / Blue Team exercises in one integrated security ecosystem.
          </p>

          {/* Stats Row with Cyber Cyan Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {STATS.map((stat, i) => (
              <div key={i} className="cnh-stat text-center p-5 bg-[#0b1329] border border-[#00d4ff]/20 rounded-none shadow-xl">
                <stat.icon className="w-6 h-6 text-[#00d4ff] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-light text-white font-mono mb-1">{stat.value}</div>
                <div className="text-[11px] font-mono font-bold text-[#00d4ff] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cnh-cta flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton
              px="px-7"
              py="py-4.5"
              icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#00d4ff] text-[#030712] rounded-none text-[13px] font-mono font-bold tracking-[0.1em]"
            >
              Explore CyberNex
            </AnimatedButton>

            <AnimatedButton
              px="px-7"
              py="py-4.5"
              icon={<Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="border border-[#00d4ff]/40 text-[13px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300 rounded-none"
            >
              Contact Security Team
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
