'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { MessageSquare, Users, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GOVERNANCE_ITEMS = [
  { icon: MessageSquare, text: "Transparent Communication" },
  { icon: Users, text: "Agile Co-Creation" },
  { icon: AlertTriangle, text: "Proactive Risk Management" },
  { icon: CheckCircle, text: "Quality Gate Assurance" },
  { icon: RefreshCw, text: "Continuous Improvement" },
];

export function KineticGovernance() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".kg-header-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
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
        ".kg-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: itemsRef.current || sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (sectionRef.current) {
        const hiddenEls = sectionRef.current.querySelectorAll('.kg-header-item, .kg-item');
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="kg-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
              Project Governance
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="kg-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Governance " },
              { text: "Throughout", isHighlighted: true },
              { text: " the Lifecycle" }
            ]}
          />

          <p className="kg-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Quality assurance and governance principles applied consistently across all KINETIC™ phases 
            for predictable, reliable delivery.
          </p>
        </div>

        {/* Governance Items */}
        <div ref={itemsRef} className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {GOVERNANCE_ITEMS.map((item, i) => (
              <div 
                key={i} 
                className="kg-item group relative flex items-center gap-3 px-6 py-4 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-lg cursor-pointer overflow-hidden"
              >
                {/* Left Hover Accent Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                <div className="w-9 h-9 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                  <item.icon className="w-4 h-4 text-[#c8b4a0]" />
                </div>
                <span className="text-sm font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Central Visual Element */}
          <div className="kg-header-item flex justify-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border border-[#c8b4a0]/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#c8b4a0]/20 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#0f0f0f] border border-[#c8b4a0]/40 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-light text-[#c8b4a0]">K™</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
