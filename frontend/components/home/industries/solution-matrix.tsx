'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Check, Database, Monitor, Smartphone, Brain, Cloud, Server, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  { name: "Software", icon: Monitor },
  { name: "ERP", icon: Database },
  { name: "Mobile", icon: Smartphone },
  { name: "AI", icon: Brain },
  { name: "Cloud", icon: Cloud },
  { name: "Infra", icon: Server },
  { name: "Cyber", icon: Shield },
];

const INDUSTRIES = [
  { name: "Education", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Healthcare", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Manufacturing", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Retail & E-Com", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Government", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Agriculture", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Corporate", solutions: [1, 1, 1, 1, 1, 1, 1] },
  { name: "Startups", solutions: [1, 1, 1, 1, 1, 1, 1] },
];

export function SolutionMatrix() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".matrix-header-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
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
        ".matrix-row",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: tableRef.current || sectionRef.current,
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f9fa] text-zinc-950 overflow-hidden border-b border-zinc-200">
      {/* Background Light Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="matrix-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
              Industry Solution Matrix
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
          </div>

          <AnimatedTitle
            theme="light"
            className="matrix-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Comprehensive " },
              { text: "Solutions", isHighlighted: true },
              { text: " for Every Sector" }
            ]}
          />

          <p className="matrix-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            Our integrated technology ecosystem covers all your industry needs — from enterprise software
            development to cybersecurity, all under one roof.
          </p>
        </div>

        {/* Matrix Table with Sharp Corners */}
        <div ref={tableRef} className="max-w-5xl mx-auto overflow-x-auto bg-white border border-zinc-200 rounded-none shadow-sm p-4 lg:p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-[#f8f9fa]">
                <th className="text-left py-4 px-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  Industry Vertical
                </th>
                {SOLUTIONS.map((solution, i) => (
                  <th key={i} className="text-center py-4 px-3 min-w-[80px]">
                    <div className="flex flex-col items-center gap-2">
                      <solution.icon className="w-5 h-5 text-[#9e7b56]" />
                      <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider">
                        {solution.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INDUSTRIES.map((industry, i) => (
                <tr
                  key={i}
                  className="matrix-row group border-b border-zinc-100 last:border-b-0 hover:bg-[#f8f9fa] transition-colors duration-300"
                >
                  <td className="py-4 px-4 text-sm font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors">
                    {industry.name}
                  </td>
                  {industry.solutions.map((_, j) => (
                    <td key={j} className="py-4 px-3 text-center">
                      <div className="w-8 h-8 mx-auto rounded-none bg-[#9e7b56]/10 border border-[#9e7b56]/20 flex items-center justify-center group-hover:bg-[#9e7b56] group-hover:text-white transition-colors duration-300">
                        <Check className="w-4 h-4 text-[#9e7b56] group-hover:text-white stroke-[2.5]" />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 font-mono">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-none bg-[#9e7b56]/10 border border-[#9e7b56]/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-[#9e7b56]" />
            </div>
            <span>Full Integrated Solution</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-none bg-zinc-100 border border-zinc-300 flex items-center justify-center">
              <span className="text-[10px] text-zinc-400">—</span>
            </div>
            <span>Custom Modular Build</span>
          </div>
        </div>
      </div>
    </section>
  );
}
