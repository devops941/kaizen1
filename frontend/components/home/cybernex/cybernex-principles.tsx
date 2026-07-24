'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Sparkles, Code, Shield, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  { icon: Sparkles, title: "Innovate", desc: "Continuously explore emerging cyber threat vectors and zero-day defense mechanics." },
  { icon: Code, title: "Engineer", desc: "Build resilient, cloud-native, enterprise-grade security architectures." },
  { icon: Shield, title: "Secure", desc: "Integrate zero-trust cybersecurity protocols into every operational layer." },
  { icon: RefreshCw, title: "Improve", desc: "Apply perpetual Kaizen methodology to threat intelligence and response readiness." },
];

export function CybernexPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cp-header-item",
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
        ".cp-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
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
        const hiddenEls = sectionRef.current.querySelectorAll('.cp-header-item, .cp-card');
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#060b18] text-white overflow-hidden border-b border-white/10">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="cp-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#00d4ff]" />
            <span className="text-[11px] font-mono font-medium text-[#00d4ff] uppercase tracking-[0.25em]">
              Our Commitment
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="cp-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Four Enduring " },
              { text: "Principles", isHighlighted: true }
            ]}
          />
        </div>

        {/* Principles Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start">
          {PRINCIPLES.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <div 
                key={i} 
                className="cp-card group relative p-7 bg-[#0b1329] border border-[#00d4ff]/20 rounded-none hover:border-[#00d4ff] hover:bg-[#0f1938] transition-all duration-500 shadow-xl text-left overflow-hidden cursor-pointer"
              >
                {/* Left Cyber Blue Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#00d4ff] transition-colors duration-300" />

                <div className="w-12 h-12 mb-5 flex items-center justify-center border border-[#00d4ff]/30 rounded-none bg-white/5 text-[#00d4ff] group-hover:border-[#00d4ff] group-hover:bg-[#00d4ff]/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {principle.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
