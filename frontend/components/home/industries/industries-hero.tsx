'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ArrowRight, Globe, Cpu, Database, Shield, Terminal, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function IndustriesHero() {
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
        ".ind-hero-eyebrow",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, clearProps: "transform,opacity" }
      );

      gsap.fromTo(
        ".ind-hero-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.3, clearProps: "transform,opacity" }
      );

      gsap.fromTo(
        ".ind-hero-desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5, clearProps: "transform,opacity" }
      );

      gsap.fromTo(
        ".ind-hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.6, clearProps: "transform,opacity" }
      );
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (containerRef.current) {
        const hiddenEls = containerRef.current.querySelectorAll('.ind-hero-eyebrow, .ind-hero-title, .ind-hero-desc, .ind-hero-cta');
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
      className="relative min-h-[85vh] overflow-hidden bg-[#080808] text-white flex items-center border-b border-white/10 py-20 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.035] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
          background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
        }}
      />

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/25 to-transparent" />

      {/* Floating Industry Icons with Sharp Corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div
          className="ind-hero-icon absolute top-[15%] left-[8%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          <Globe className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="ind-hero-icon absolute top-[25%] right-[10%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
        >
          <Cpu className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="ind-hero-icon absolute bottom-[25%] left-[8%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 25}px)` }}
        >
          <Database className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="ind-hero-icon absolute bottom-[20%] right-[10%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
        >
          <Shield className="w-6 h-6 text-[#c8b4a0]" />
        </div>
      </div>

      {/* Content */}
      <div className="ind-hero-content container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="ind-hero-eyebrow flex items-center justify-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-none bg-[#c8b4a0] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c8b4a0] uppercase">
              // INDUSTRIES & DOMAIN EXCELLENCE
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          {/* Title */}
          <AnimatedTitle
            theme="dark"
            className="ind-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8 justify-center"
            segments={[
              { text: "Purpose-Built Solutions for " },
              { text: "Every Industry Domain", isHighlighted: true }
            ]}
          />

          {/* Description */}
          <p className="ind-hero-desc text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            At Kaizen Infinities, we engineer tailored technology solutions that solve 
            industry-specific operational challenges while enabling enterprise organizations to innovate, automate, 
            and scale with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="ind-hero-cta flex flex-wrap items-center justify-center gap-4 mb-10">
            <AnimatedButton
              px="px-7"
              py="py-4.5"
              icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-mono font-bold tracking-[0.1em]"
            >
              Explore Industry Solutions
            </AnimatedButton>

            <AnimatedButton
              px="px-7"
              py="py-4.5"
              icon={<Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="border border-white/20 text-[13px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
            >
              Book Technical Consultation
            </AnimatedButton>
          </div>

          {/* Micro Trust Bullets */}
          <div className="ind-hero-cta flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/60 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
              <span>12+ Domain Verticals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
              <span>Industry Regulatory Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
              <span>Custom ERP & Cloud Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
