'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedTitle } from "../animated-title";
import { AnimatedButton } from "../animated-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, ArrowRight, Eye, Lock, Zap, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { icon: ShieldCheck, label: "Zero-Trust Architecture" },
  { icon: Eye, label: "24/7 SOC Monitoring" },
  { icon: Lock, label: "Penetration Testing" },
  { icon: Zap, label: "<15 Min Incident SLA" },
  { icon: Globe, label: "Cloud Security" },
];

export function CyberNex() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cnx-eyebrow", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });

      gsap.from(".cnx-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      });

      gsap.from(".cnx-text", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
      });

      gsap.from(".cnx-feat", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-40 overflow-hidden bg-[#0a0a0a]"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#c8b4a0]/5 via-transparent to-transparent rounded-full blur-[150px]"
          style={{ transform: `translate(-50%, -50%) translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="cnx-eyebrow flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c8b4a0]/60 animate-pulse" />
                <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.2em]">CyberNex</span>
              </div>
            </div>

            <AnimatedTitle
              className="cnx-title text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
              segments={[
                { text: "South India's Next Gen " },
                { text: "Cyber Security", isHighlighted: true },
                { text: " Experience Center" }
              ]}
            />

            <p className="cnx-text text-base text-white/40 leading-relaxed mb-8 max-w-lg">
              CyberNex bridges classroom learning and enterprise security operations — a fully equipped, enterprise-grade cyber range for ethical hacking, SOC, digital forensics, cloud security, and incident response.
            </p>

            <div className="cnx-feats flex flex-col gap-3 mb-8">
              {FEATURES.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="cnx-feat group flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/20 rounded-lg group-hover:border-[#c8b4a0]/40 group-hover:bg-[#c8b4a0]/5 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#c8b4a0]/60 group-hover:text-[#c8b4a0] transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-white/50 group-hover:text-white/70 transition-colors">{feat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="cnx-text flex flex-wrap gap-4">
              <AnimatedButton
                px="px-5"
                py="py-4"
                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="bg-[#c8b4a0] text-[#080808] text-[11px] font-medium tracking-[0.1em]"
              >
                Explore CyberNex
              </AnimatedButton>
              <AnimatedButton
                px="px-5"
                py="py-4"
                className="border border-white/[0.1] text-[11px] font-medium tracking-[0.1em] text-white/50 hover:text-white/70 hover:border-[#c8b4a0]/30 transition-all duration-300"
              >
                Security Audit
              </AnimatedButton>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="relative h-[400px] hidden lg:flex items-center justify-center"
            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
          >
            {/* Rings */}
            <div className="absolute inset-0 border border-[#c8b4a0]/[0.08] rounded-full animate-[spin_80s_linear_infinite]" />
            <div className="absolute inset-6 border border-[#c8b4a0]/[0.06] rounded-full animate-[spin_60s_linear_infinite_reverse]" />
            <div className="absolute inset-12 border border-[#c8b4a0]/[0.04] rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-18 border border-[#c8b4a0]/[0.03] rounded-full animate-[spin_25s_linear_infinite_reverse]" />

            {/* Central shield */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-[#c8b4a0]/10 rounded-full blur-2xl" />
              <div className="relative w-32 h-32 bg-[#0f0f0f] border border-[#c8b4a0]/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-[#c8b4a0]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-[#c8b4a0]" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute top-8 right-8 flex items-center gap-3 bg-[#0f0f0f] border border-[#c8b4a0]/10 px-4 py-3"
              style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
            >
              <div className="w-2 h-2 rounded-full bg-[#c8b4a0]/60 animate-pulse" />
              <span className="text-[11px] font-medium text-white/50">SOC Active</span>
            </div>

            <div
              className="absolute bottom-12 left-8 flex items-center gap-3 bg-[#0f0f0f] border border-[#c8b4a0]/10 px-4 py-3"
              style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
            >
              <span className="text-[11px] font-medium text-white/50">Threats: 0</span>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" />
              <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
