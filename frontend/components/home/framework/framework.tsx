'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
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
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".fw-header",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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

      gsap.fromTo(
        ".fw-step",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: stepsRef.current || sectionRef.current,
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f7f4] border-y border-zinc-200/80 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(#080808 1px, transparent 1px), linear-gradient(90deg, #080808 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="fw-header flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
              <span className="text-[11px] font-semibold text-[#9e7b56] uppercase tracking-[0.25em]">Our Process</span>
            </div>
            <AnimatedTitle
              theme="light"
              className="fw-header text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] max-w-xl"
              segments={[
                { text: "KINETIC™ " },
                { text: "Framework", isHighlighted: true }
              ]}
            />
          </div>
          <p className="fw-header text-base text-[#080808]/60 max-w-md leading-relaxed font-light">
            A proven 9-phase delivery roadmap that transforms your vision into a live enterprise product.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="fw-steps grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
          {STEPS.map((step, i) => (
            <div key={i} className="fw-step group relative">
              <div className="flex flex-col items-center text-center p-4 bg-white border border-zinc-200/90 shadow-xs hover:border-[#9e7b56]/50 hover:shadow-sm transition-all duration-500 cursor-default">
                <div className="w-10 h-10 mb-3 flex items-center justify-center border border-zinc-300 bg-zinc-50 rounded-full text-[11px] font-semibold text-[#080808]/70 group-hover:border-[#9e7b56] group-hover:text-[#9e7b56] group-hover:bg-[#9e7b56]/10 transition-all duration-300">
                  {step.num}
                </div>
                <span className="text-xs font-medium text-[#080808]/70 group-hover:text-[#080808] transition-colors">{step.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-200/80 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#9e7b56]" />
            <span className="text-[11px] font-semibold text-[#080808]/50 uppercase tracking-[0.15em]">KINETIC™ Delivery Framework — 9-Phase Process</span>
          </div>
        </div>
      </div>
    </section>
  );
}
