'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", label: "Discovery" },
  { num: "02", label: "Analysis" },
  { num: "03", label: "Architecture" },
  { num: "04", label: "Design" },
  { num: "05", label: "Development" },
  { num: "06", label: "Testing" },
  { num: "07", label: "Deployment" },
  { num: "08", label: "Support" },
  { num: "09", label: "Innovation" },
];

export function Framework() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fw-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });

      gsap.from(".fw-step", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: ".fw-steps", start: "top 85%" }
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="fw-header flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
              <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.25em]">Our Process</span>
            </div>
            <h2 className="fw-header text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05] max-w-xl">
              KINETIC™ <span className="text-[#c8b4a0]">Framework</span>
            </h2>
          </div>
          <p className="fw-header text-base text-white/40 max-w-md leading-relaxed">
            A proven 9-phase delivery roadmap that transforms your vision into a live enterprise product.
          </p>
        </div>

        {/* Steps */}
        <div className="fw-steps grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
          {STEPS.map((step, i) => (
            <div key={i} className="fw-step group relative">
              <div className="flex flex-col items-center text-center p-4 bg-[#0f0f0f] border border-white/[0.04] hover:border-[#c8b4a0]/20 transition-all duration-500 cursor-default">
                <div className="w-10 h-10 mb-3 flex items-center justify-center border border-[#c8b4a0]/20 rounded-full text-[11px] font-light text-[#c8b4a0]/60 group-hover:border-[#c8b4a0]/40 group-hover:text-[#c8b4a0] group-hover:bg-[#c8b4a0]/5 transition-all duration-300">
                  {step.num}
                </div>
                <span className="text-xs font-light text-white/40 group-hover:text-white/70 transition-colors">{step.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#c8b4a0]/60" />
            <span className="text-[11px] font-medium text-white/30 uppercase tracking-[0.15em]">KINETIC™ Delivery Framework — 9-Phase Process</span>
          </div>
        </div>
      </div>
    </section>
  );
}
