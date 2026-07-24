'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Target, BarChart3, FileCheck, Heart, TrendingUp, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    num: "01",
    icon: Target,
    title: "Business Processes",
    desc: "We deeply analyze your operational workflows before writing code."
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Operational Efficiency",
    desc: "Pinpoint bottlenecks to build targeted automation and high-ROI tools."
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Industry Regulations",
    desc: "Ensure strict compliance with sector-specific cybersecurity and data laws."
  },
  {
    num: "04",
    icon: Heart,
    title: "Customer Expectations",
    desc: "Align technology touchpoints with intuitive user experiences."
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Scalable Growth Plans",
    desc: "Build modular cloud architectures designed for continuous expansion."
  },
  {
    num: "06",
    icon: Cpu,
    title: "Technology Readiness",
    desc: "Prepare legacy systems for seamless integration with applied AI & cloud."
  },
];

export function WhyIndustriesKaizen() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
          toggleActions: "play none none none",
        }
      });

      tl.fromTo(
        ".why-ind-header-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
        0
      )
      .fromTo(
        ".why-ind-reason",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", clearProps: "all" },
        0.2
      )
      .fromTo(
        ".why-ind-visual",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
        0.3
      );
    }, sectionRef);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="why-ind-header-item flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
              <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                Why Industries Choose Us
              </span>
            </div>

            <AnimatedTitle
              theme="dark"
              className="why-ind-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
              segments={[
                { text: "We Understand Business " },
                { text: "Before Technology", isHighlighted: true }
              ]}
            />

            <p className="why-ind-header-item text-base md:text-lg text-white/80 leading-relaxed mb-10 font-light max-w-2xl">
              Every successful digital transformation starts with listening. Before recommending 
              technology, we invest time in understanding your organization, workflows, challenges, 
              and future vision.
            </p>

            {/* Reasons List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REASONS.map((reason, i) => (
                <div key={i} className="why-ind-reason group flex items-start gap-4 p-4 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 relative">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300 flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-[#c8b4a0]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#c8b4a0] transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Container */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <div className="why-ind-visual relative w-80 h-80">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[#0f0f0f] border border-[#c8b4a0]/40 flex items-center justify-center shadow-[0_0_40px_rgba(200,180,160,0.15)]">
                  <div className="text-center">
                    <span className="text-4xl font-light text-[#c8b4a0]">K</span>
                    <div className="text-[9px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mt-0.5">Kaizen</div>
                  </div>
                </div>
              </div>

              {/* Concentric Rings */}
              <div className="absolute inset-0 border border-[#c8b4a0]/20 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 border border-[#c8b4a0]/15 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-[#c8b4a0]/10 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
