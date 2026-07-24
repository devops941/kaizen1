'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Shield, Eye, Lock, FileSearch, Server, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    icon: Shield,
    title: "Ethical Hacking & Pen Testing",
    desc: "Penetration testing, vulnerability assessment, and security audits to identify weaknesses before attackers do."
  },
  {
    icon: Eye,
    title: "24/7 SOC Operations",
    desc: "Security Operations Center monitoring for real-time threat detection, incident response, and compliance."
  },
  {
    icon: FileSearch,
    title: "Digital Forensics & Response",
    desc: "Incident response, evidence collection, chain of custody preservation, and deep forensic breach investigations."
  },
  {
    icon: Lock,
    title: "Cloud Security Hardening",
    desc: "AWS, Azure, and GCP security assessments, configuration hardening, IAM governance, and monitoring."
  },
  {
    icon: Server,
    title: "Interactive Cyber Range",
    desc: "Hands-on simulation environment with real-world attack scenarios and live defensive exercises."
  },
  {
    icon: Users,
    title: "Red Team / Blue Team Exercises",
    desc: "Adversarial simulation testing and defensive exercises to validate and harden enterprise security posture."
  },
];

export function CybernexCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cc-header-item",
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
        ".cc-card",
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
        const hiddenEls = sectionRef.current.querySelectorAll('.cc-header-item, .cc-card');
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
      {/* Light Cyber Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#0099cc 1px, transparent 1px), linear-gradient(90deg, #0099cc 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="cc-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#0099cc]" />
            <span className="text-[11px] font-mono font-bold text-[#0099cc] uppercase tracking-[0.25em]">
              Security Capabilities
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#0099cc]" />
          </div>

          <AnimatedTitle
            theme="light"
            className="cc-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Comprehensive " },
              { text: "Cybersecurity", isHighlighted: true },
              { text: " Services" }
            ]}
          />

          <p className="cc-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            From vulnerability assessments to 24/7 SOC operations, CyberNex provides 
            enterprise-grade security solutions.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {CAPABILITIES.map((cap, i) => (
            <div 
              key={i} 
              className="cc-card group relative p-6 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#0099cc] hover:shadow-md transition-all duration-300 text-left overflow-hidden flex flex-col justify-between"
            >
              {/* Left Cyber Blue Accent Line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#0099cc] transition-colors duration-300" />

              <div>
                <div className="w-12 h-12 mb-5 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#0099cc] group-hover:bg-[#0099cc] group-hover:text-white transition-all duration-300">
                  <cap.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#0099cc] transition-colors mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
