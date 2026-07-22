'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap, HeartPulse, Factory, ShoppingCart, Building2, Landmark,
  Rocket, HandHeart, Wheat, Truck, Banknote, Globe
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Building2, label: "Banking" },
  { icon: Landmark, label: "Government" },
  { icon: HandHeart, label: "NGOs" },
  { icon: Rocket, label: "Startups" },
  { icon: Wheat, label: "Agriculture" },
  { icon: Truck, label: "Transportation" },
  { icon: Banknote, label: "Finance" },
  { icon: Globe, label: "Hospitality" },
];

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ind-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });

      gsap.from(".ind-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ind-header flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.25em]">Industries</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>
          <AnimatedTitle
            className="ind-header text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
            segments={[
              { text: "Industries We " },
              { text: "Transform", isHighlighted: true }
            ]}
          />
          <p className="ind-header text-base text-white/40 max-w-xl mx-auto leading-relaxed">
            Purpose-built technology for 12+ verticals. Every industry has unique challenges — we engineer unique solutions.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="ind-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div key={i} className="ind-item group relative bg-[#0f0f0f] border border-white/[0.04] p-6 cursor-pointer overflow-hidden hover:border-[#c8b4a0]/20 transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#c8b4a0]/5 to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#c8b4a0]/20 rounded-lg group-hover:border-[#c8b4a0]/40 group-hover:bg-[#c8b4a0]/5 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#c8b4a0]/50 group-hover:text-[#c8b4a0] transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-white/40 group-hover:text-white/70 uppercase tracking-wider transition-colors">
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
