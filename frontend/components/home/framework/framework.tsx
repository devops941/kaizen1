'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", label: "Discovery", desc: "Deep business workshops & gap analysis" },
  { num: "02", label: "Business Analysis", desc: "Functional spec & solution architecture" },
  { num: "03", label: "Architecture", desc: "Cloud-native, scalable system design" },
  { num: "04", label: "UI/UX Design", desc: "Wireframes, prototypes & design systems" },
  { num: "05", label: "Development", desc: "Modular, API-first secure engineering" },
  { num: "06", label: "Testing", desc: "QA, security audits & performance tests" },
  { num: "07", label: "Deployment", desc: "Zero-downtime production go-live" },
  { num: "08", label: "Support", desc: "24/7 monitoring & issue resolution" },
  { num: "09", label: "Continuous Innovation", desc: "Evolving with your business goals" },
];

export function Framework() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fw-step", {
        opacity: 0,
        x: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".fw-track", start: "top 80%", toggleActions: "play none none none" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-4">Our Process</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.05] uppercase max-w-xl">
              Our Development <span className="text-zinc-500">Framework</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
            A beautiful, proven roadmap that turns your vision into a live enterprise product — step by step.
          </p>
        </div>

        {/* Horizontal scrollable steps track */}
        <div ref={scrollRef} className="fw-track overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-0 min-w-max">
            {STEPS.map((step, i) => (
              <div key={i} className="fw-step group relative flex flex-col items-start">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute top-[22px] left-[52px] w-full h-px bg-zinc-800 group-hover:bg-emerald-900 transition-colors z-0" />
                )}

                <div className="relative z-10 flex flex-col items-start pr-8 w-[200px]">
                  {/* Number dot */}
                  <div className="w-11 h-11 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center mb-5 flex-shrink-0">
                    <span className="text-xs font-black text-zinc-500 group-hover:text-emerald-400 transition-colors">{step.num}</span>
                  </div>

                  {/* Content */}
                  <div className="bg-zinc-900/60 border border-zinc-800 group-hover:border-zinc-600 rounded-xl p-4 w-[176px] transition-all duration-300">
                    <h4 className="font-black text-white text-sm tracking-tight mb-1.5">{step.label}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">KINETIC™ Delivery Framework — 9-Phase Process</span>
        </div>
      </div>
    </section>
  );
}
