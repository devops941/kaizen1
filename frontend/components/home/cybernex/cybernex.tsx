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
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cnx-eyebrow",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
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
        ".cnx-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            once: true,
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        ".cnx-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        ".cnx-feat",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
    <section
      ref={sectionRef}
      className="relative py-15 lg:py-30 overflow-hidden bg-[#f4f3ef] border-t border-zinc-200/80"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(#080808 1px, transparent 1px), linear-gradient(90deg, #080808 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#7a582b]/15 via-transparent to-transparent rounded-full blur-[140px]"
          style={{ transform: `translate(-50%, -50%) translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="cnx-eyebrow flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#7a582b]" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7a582b] animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-[#7a582b] uppercase tracking-[0.2em]">CyberNex</span>
              </div>
            </div>

            <AnimatedTitle
              theme="light"
              className="cnx-title text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
              segments={[
                { text: "South India's Next Gen " },
                { text: "Cyber Security", isHighlighted: true },
                { text: " Experience Center" }
              ]}
            />

            <p className="cnx-text text-base text-[#080808]/70 leading-relaxed mb-8 max-w-lg font-light">
              CyberNex bridges classroom learning and enterprise security operations — a fully equipped, enterprise-grade cyber range for ethical hacking, SOC, digital forensics, cloud security, and incident response.
            </p>

            <div className="cnx-feats flex flex-col gap-3 mb-8">
              {FEATURES.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="cnx-feat group flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-zinc-300 bg-white rounded-none group-hover:border-[#7a582b] group-hover:bg-[#7a582b]/10 transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5 text-[#7a582b] transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-[#7a582b] transition-colors">{feat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="cnx-text flex flex-wrap gap-4">
              <AnimatedButton
                px="px-6"
                py="py-4"
                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="bg-[#080808] text-white hover:bg-[#222] text-[13px] font-mono font-bold tracking-[0.1em] shadow-md rounded-none"
              >
                Explore CyberNex
              </AnimatedButton>
              <AnimatedButton
                px="px-6"
                py="py-4"
                className="border border-zinc-400 bg-white text-[13px] font-mono font-bold tracking-[0.1em] text-[#080808] hover:border-[#7a582b] hover:bg-zinc-50 transition-all duration-300 shadow-xs rounded-none"
              >
                Security Audit
              </AnimatedButton>
            </div>
          </div>

          {/* Right: Enhanced High-Contrast Visual */}
          <div
            className="relative h-[400px] hidden lg:flex items-center justify-center"
            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
          >
            {/* Darker High-Contrast Orbital Rings */}
            <div className="absolute inset-0 border-2 border-[#7a582b]/35 rounded-full animate-[spin_80s_linear_infinite]" />
            <div className="absolute inset-6 border border-[#7a582b]/25 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
            <div className="absolute inset-12 border border-[#7a582b]/20 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-18 border border-[#7a582b]/15 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

            {/* Central High-Contrast Shield Node */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-[#7a582b]/30 rounded-full blur-2xl" />
              <div className="relative w-32 h-32 bg-white border-2 border-[#7a582b]/40 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-20 h-20 bg-[#7a582b] rounded-full flex items-center justify-center border border-[#5c401d] shadow-inner">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Floating High-Contrast Badges */}
            <div
              className="absolute top-8 right-8 flex items-center gap-3 bg-white border border-[#7a582b]/30 px-4 py-3 shadow-lg rounded-none"
              style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
            >
              <div className="w-2.5 h-2.5 rounded-none bg-[#7a582b] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-zinc-900">SOC ACTIVE</span>
            </div>

            <div
              className="absolute bottom-12 left-8 flex items-center gap-3 bg-white border border-[#7a582b]/30 px-4 py-3 shadow-lg rounded-none"
              style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
            >
              <span className="text-[11px] font-mono font-bold text-zinc-900">THREATS: 0</span>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#7a582b" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
              <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#7a582b" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
