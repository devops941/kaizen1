'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck, Eye, Lock, Zap, Globe } from "lucide-react";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cnx-text-el", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" }
      });
      gsap.from(".cnx-feat", {
        opacity: 0,
        x: 20,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cnx-feats", start: "top 80%", toggleActions: "play none none none" }
      });
      // Pulsing orb animation
      gsap.to(".cnx-orb", {
        scale: 1.2,
        opacity: 0.15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
      gsap.to(".cnx-orb-2", {
        scale: 1.1,
        opacity: 0.08,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#050810] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="cnx-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="cnx-orb-2 absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-5 pointer-events-none" />

      {/* Tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <div className="cnx-text-el inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-black text-blue-400 uppercase tracking-[0.2em]">Introducing CyberNex</span>
            </div>

            <h2 className="cnx-text-el text-4xl md:text-5xl lg:text-[3rem] font-black text-white tracking-tighter leading-[1.05] uppercase mb-6">
              South India's Next Generation{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Cyber Security
              </span>{" "}
              Experience Center
            </h2>

            <p className="cnx-text-el text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
              CyberNex bridges classroom learning and enterprise security operations — a fully equipped, enterprise-grade cyber range for ethical hacking, SOC, digital forensics, cloud security, and incident response.
            </p>

            <div className="cnx-feats flex flex-col gap-3 mb-10">
              {FEATURES.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="cnx-feat flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm font-bold text-zinc-300">{feat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="cnx-text-el flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-400 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-colors duration-300 group">
                Explore CyberNex
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="inline-flex items-center gap-3 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-all duration-300">
                Security Audit
              </a>
            </div>
          </div>

          {/* Right: Animated Security Visual */}
          <div className="relative flex items-center justify-center h-[420px]">
            {/* Outer ping rings */}
            <div className="absolute w-80 h-80 rounded-full border border-blue-500/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute w-64 h-64 rounded-full border border-blue-500/15 animate-[spin_30s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
            <div className="absolute w-48 h-48 rounded-full border border-blue-500/25 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Central shield */}
            <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-emerald-600/20 border border-blue-500/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Floating badges */}
            {[
              { label: "SOC Active", top: "8%", right: "10%", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
              { label: "Zero Threats", bottom: "12%", right: "5%", color: "border-blue-500/30 bg-blue-500/10 text-blue-400" },
              { label: "Monitoring", top: "40%", left: "0%", color: "border-violet-500/30 bg-violet-500/10 text-violet-400" },
            ].map((badge, i) => (
              <div key={i} className={`absolute border rounded-lg px-4 py-2 backdrop-blur-sm ${badge.color}`}
                style={{ top: badge.top, bottom: badge.bottom, right: badge.right, left: badge.left }}>
                <span className="text-xs font-bold whitespace-nowrap">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
