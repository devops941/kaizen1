'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { FileText, Palette, Code, TestTube, Rocket, BookOpen, GraduationCap, Wrench, Check, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DELIVERABLES = [
  { icon: FileText, text: "Business Requirement Document (BRD)", tag: "DISCOVERY" },
  { icon: FileText, text: "Functional Requirement Specification (FRS)", tag: "DEFINITION" },
  { icon: FileText, text: "Solution Architecture Blueprint", tag: "ARCHITECTURE" },
  { icon: Palette, text: "Interactive UI/UX Prototypes & Design System", tag: "DESIGN" },
  { icon: Code, text: "Production-Ready Source Code & APIs", tag: "ENGINEERING" },
  { icon: TestTube, text: "Comprehensive QA & Security Audit Reports", tag: "VALIDATION" },
  { icon: Shield, text: "CyberNex Security Compliance Log", tag: "SECURITY" },
  { icon: Rocket, text: "Production Deployment & Failover Strategy", tag: "ROLLOUT" },
  { icon: BookOpen, text: "End-User Manuals & API Docs", tag: "DOCUMENTATION" },
  { icon: GraduationCap, text: "Hands-on Team Training Sessions", tag: "ENABLEMENT" },
  { icon: Wrench, text: "Post-Go-Live Support SLA Blueprint", tag: "MAINTENANCE" },
  { icon: Check, text: "Perpetual Kaizen Improvement Roadmap", tag: "INNOVATION" },
];

export function KineticDeliverables() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".kd-header-item",
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
        ".kd-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
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
        const hiddenEls = sectionRef.current.querySelectorAll('.kd-header-item, .kd-item');
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
      {/* Background Light Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="kd-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
              Concrete Deliverables
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
          </div>

          <AnimatedTitle
            theme="light"
            className="kd-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "What " },
              { text: "Clients", isHighlighted: true },
              { text: " Receive" }
            ]}
          />

          <p className="kd-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            Every phase of the KINETIC™ framework produces tangible, documented deliverables to guarantee project transparency.
          </p>
        </div>

        {/* Deliverables Grid with Sharp Corners */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {DELIVERABLES.map((item, i) => (
            <div 
              key={i} 
              className="kd-item group relative p-6 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 text-left cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Left Hover Accent Line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <span className="text-sm font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors leading-snug block">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
