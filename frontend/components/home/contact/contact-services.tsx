'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Monitor, Database, Smartphone, Brain, Cloud, Server, GraduationCap, Shield, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BUSINESS_ITEMS = [
  { icon: Monitor, text: "Enterprise Software Engineering" },
  { icon: Database, text: "Custom ERP & Business Suites" },
  { icon: Smartphone, text: "Mobile Apps & PWA Platforms" },
  { icon: Brain, text: "AI & Autonomous Agent Systems" },
  { icon: Cloud, text: "Multi-Cloud Migration & Services" },
  { icon: Server, text: "DevSecOps & Infrastructure" },
  { icon: GraduationCap, text: "Corporate Training & Upskilling" },
  { icon: Shield, text: "CyberNex Cybersecurity COE" },
];

const WHY_KAIZEN = [
  { text: "Business-First Strategic Advisory" },
  { text: "Enterprise-Grade High-Scale Code" },
  { text: "CyberNex Zero-Trust Security COE" },
  { text: "End-to-End Turnkey Delivery" },
  { text: "Long-Term Technical Partnership" },
];

export function ContactServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const promiseGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cs-header-item",
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
        ".cs-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
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
        const hiddenEls = sectionRef.current.querySelectorAll('.cs-header-item, .cs-item');
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section 1: Service Capabilities Grid */}
        <div className="mb-20">
          <div className="cs-header-item flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.25em]">
              Capability Portfolio
            </span>
          </div>

          <AnimatedTitle
            theme="dark"
            className="cs-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
            segments={[
              { text: "Looking for " },
              { text: "Enterprise Solutions", isHighlighted: true },
              { text: "?" }
            ]}
          />

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl items-start">
            {BUSINESS_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i}
                  className="cs-item group relative p-5 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-xl flex items-center gap-4 overflow-hidden"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c8b4a0]" />
                  </div>
                  <span className="text-xs font-bold text-white/90 group-hover:text-[#c8b4a0] transition-colors leading-tight">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Why Contact Kaizen */}
        <div>
          <div className="cs-header-item flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-bold text-[#c8b4a0] uppercase tracking-[0.25em]">
              The Kaizen Partnership Assurance
            </span>
          </div>

          <AnimatedTitle
            theme="dark"
            className="cs-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
            segments={[
              { text: "Why Work With " },
              { text: "Kaizen Infinities", isHighlighted: true },
              { text: "?" }
            ]}
          />

          <div ref={promiseGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl items-start">
            {WHY_KAIZEN.map((item, i) => (
              <div 
                key={i}
                className="cs-item group text-center p-6 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                <div className="w-11 h-11 mx-auto mb-4 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                  <Check className="w-5 h-5 text-[#c8b4a0]" />
                </div>
                <span className="text-xs font-bold text-white/90 group-hover:text-[#c8b4a0] transition-colors leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
