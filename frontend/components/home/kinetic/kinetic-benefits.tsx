'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Target, Brain, Shield, Eye, Truck, Wrench, Rocket, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  { icon: Target, title: "Strategically Planned", desc: "Every architecture decision aligns with your business goals." },
  { icon: Brain, title: "Business-Outcome Driven", desc: "Focus on ROI, cost reduction, and operational efficiency." },
  { icon: Shield, title: "Technically Robust", desc: "Cloud-native, high availability, and enterprise scalability." },
  { icon: Eye, title: "Zero-Trust Security", desc: "Embedded cybersecurity standards powered by CyberNex." },
  { icon: Truck, title: "Delivered Transparently", desc: "Clear milestones, daily communication, and zero surprises." },
  { icon: Wrench, title: "Supported Continuously", desc: "Post-launch SLA support and active system monitoring." },
  { icon: Rocket, title: "Ready for Innovation", desc: "Modular foundation built for AI and continuous improvement." },
];

export function KineticBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".kb-header-item",
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
        ".kb-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
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
        const hiddenEls = sectionRef.current.querySelectorAll('.kb-header-item, .kb-item');
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
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="kb-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
              Why Choose KINETIC™
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="kb-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Clients Invest in " },
              { text: "Confidence", isHighlighted: true }
            ]}
          />

          <p className="kb-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Seven core advantages that set the KINETIC™ delivery framework apart from traditional IT vendors.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={i} 
                className="kb-item group relative bg-[#0f0f0f] border border-white/[0.08] p-7 rounded-none cursor-pointer overflow-hidden hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-500 shadow-xl text-left"
              >
                {/* Left Accent Bar */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#c8b4a0]" />
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]/50 group-hover:text-[#c8b4a0] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8b4a0] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
