'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Blocks, Shield, FlaskConical, GraduationCap, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ECOSYSTEM = [
  { icon: Blocks, title: "Kaizen Digital Solutions", desc: "Enterprise Software · ERP · AI · Cloud · Mobile Apps" },
  { icon: Shield, title: "CyberNex", desc: "Cyber Security Experience Center of Excellence" },
  { icon: FlaskConical, title: "Kaizen Innovation Labs", desc: "Applied AI · IoT Telemetry · DevSecOps Research" },
  { icon: GraduationCap, title: "Kaizen Academy", desc: "Corporate Upskilling · Cyber Ranges · Certification" },
  { icon: Briefcase, title: "Kaizen Consulting", desc: "Digital Strategy · Security Transformation · Advisory" },
];

export function CybernexEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".ce-header-item",
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
        ".ce-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: listRef.current || sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (sectionRef.current) {
        const hiddenEls = sectionRef.current.querySelectorAll('.ce-header-item, .ce-item');
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8fafc] text-zinc-950 overflow-hidden border-b border-zinc-200">
      {/* Background Light Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#0099cc 1px, transparent 1px), linear-gradient(90deg, #0099cc 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="ce-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#0099cc]" />
            <span className="text-[11px] font-mono font-bold text-[#0099cc] uppercase tracking-[0.25em]">
              The Ecosystem Future
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#0099cc]" />
          </div>

          <AnimatedTitle
            theme="light"
            className="ce-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "The Future We " },
              { text: "Are Building", isHighlighted: true }
            ]}
          />

          <p className="ce-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            We envision a future where businesses are more connected, data-driven, secure, and intelligent.
          </p>
        </div>

        {/* Ecosystem Tree Structure */}
        <div className="max-w-5xl mx-auto">
          {/* Root Node */}
          <div className="ce-header-item flex justify-center mb-6">
            <div className="px-8 py-3.5 bg-white border border-[#0099cc]/40 shadow-md text-center rounded-none">
              <span className="text-sm font-mono font-bold text-[#0099cc] tracking-widest uppercase">KAIZEN INFINITIES GROUP</span>
            </div>
          </div>

          {/* Tree Cards Grid */}
          <div ref={listRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
            {ECOSYSTEM.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="ce-item group relative p-5 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#0099cc] hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between overflow-hidden cursor-pointer">
                  {/* Left Cyber Blue Accent Line */}
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#0099cc] transition-colors duration-300" />

                  <div>
                    <div className="w-11 h-11 mx-auto mb-3 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#0099cc] group-hover:bg-[#0099cc] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 group-hover:text-[#0099cc] transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-500 leading-tight mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
