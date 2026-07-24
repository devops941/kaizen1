'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap, HeartPulse, Factory, ShoppingCart, Building2, Landmark,
  Rocket, HandHeart, Wheat, Truck, Banknote, Globe, ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
  { icon: GraduationCap, label: "Education & EdTech", tag: "01" },
  { icon: HeartPulse, label: "Healthcare & Life Sciences", tag: "02" },
  { icon: Factory, label: "Smart Manufacturing", tag: "03" },
  { icon: ShoppingCart, label: "Retail & E-Commerce", tag: "04" },
  { icon: Building2, label: "Banking & Financial Services", tag: "05" },
  { icon: Landmark, label: "Government & Public Sector", tag: "06" },
  { icon: HandHeart, label: "NGOs & Non-Profits", tag: "07" },
  { icon: Rocket, label: "High-Growth Startups", tag: "08" },
  { icon: Wheat, label: "AgriTech & Supply Chain", tag: "09" },
  { icon: Truck, label: "Logistics & Transport", tag: "10" },
  { icon: Banknote, label: "FinTech & Payments", tag: "11" },
  { icon: Globe, label: "Hospitality & Tourism", tag: "12" },
];

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".ind-header",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
        ".ind-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
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
        const hiddenEls = sectionRef.current.querySelectorAll('.ind-header, .ind-item');
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
    <section ref={sectionRef} className="relative py-16 lg:py-32 bg-[#080808] text-white overflow-hidden border-b border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Left-Aligned Executive Header */}
        <div className="mb-16 max-w-4xl">
          <div className="ind-header flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-none bg-[#c8b4a0] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c8b4a0] uppercase">
              // INDUSTRIES & VERTICAL DOMAINS
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-[#c8b4a0]/40 to-transparent" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="ind-header text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
            segments={[
              { text: "Industries We " },
              { text: "Empower & Transform", isHighlighted: true }
            ]}
          />

          <p className="ind-header text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-light">
            Purpose-built technology across 12+ major industry verticals. Every sector brings unique regulatory, operational, and architectural challenges — we engineer tailored enterprise solutions.
          </p>
        </div>

        {/* 12 Industry Grid with Sharp Corners & High Contrast */}
        <div ref={gridRef} className="ind-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div 
                key={i} 
                className="ind-item group relative bg-[#0f0f0f] border border-white/[0.08] p-5 cursor-pointer overflow-hidden rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#c8b4a0]/60 group-hover:text-[#c8b4a0] transition-colors">
                    {industry.tag}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c8b4a0] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="relative z-10 flex flex-col items-start text-left gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#c8b4a0]" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-[#c8b4a0] transition-colors leading-snug">
                    {industry.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
