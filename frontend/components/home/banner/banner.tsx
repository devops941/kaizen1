'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Activity, Shield, Server } from "lucide-react";

const SLIDES = [
  {
    title: ["Engineering", "Intelligent Digital", "Enterprises."],
    desc: "Kaizen Infinities Private Limited is a technology-driven software engineering company delivering enterprise applications, ERP solutions, AI-powered automation, cloud infrastructure, IT consulting, and cybersecurity excellence through CyberNex — our dedicated Cyber Security Experience Center.",
    primaryCTA: "Schedule a Consultation",
    secondaryCTA: "Explore Solutions",
    orbTheme: "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]",
    iconColor: "text-blue-500",
    badges: [
      { icon: Shield, title: "Zero-Trust", delay: "delay-[0ms]", pos: "top-4 right-8" },
      { icon: Server, title: "99.9% Uptime", delay: "delay-[200ms]", pos: "bottom-12 right-12" },
      { icon: Activity, title: "12ms Latency", delay: "delay-[400ms]", pos: "top-1/2 -left-4" }
    ]
  },
  {
    title: ["KINETIC™", "Delivery Framework", "Methodology."],
    desc: "Our proprietary 10-phase delivery methodology ensures that every enterprise solution we build is robust, secure, scalable, and aligned perfectly with your long-term business objectives.",
    primaryCTA: "View Methodology",
    secondaryCTA: "Case Studies",
    orbTheme: "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]",
    iconColor: "text-emerald-500",
    badges: [
      { icon: Activity, title: "Deep Discovery", delay: "delay-[0ms]", pos: "top-12 left-4" },
      { icon: Server, title: "2-Week Sprints", delay: "delay-[200ms]", pos: "bottom-8 left-1/2" },
      { icon: Shield, title: "Zero Downtime", delay: "delay-[400ms]", pos: "top-1/4 -right-2" }
    ]
  },
  {
    title: ["South India's", "Next Generation", "CyberNex."],
    desc: "Bridging classroom learning and enterprise security operations. A fully equipped, enterprise-grade cyber range for ethical hacking, SOC, digital forensics, and incident response.",
    primaryCTA: "Explore CyberNex",
    secondaryCTA: "Security Audit",
    orbTheme: "bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_70%)]",
    iconColor: "text-red-500",
    badges: [
      { icon: Shield, title: "24/7 SOC", delay: "delay-[0ms]", pos: "top-8 right-1/4" },
      { icon: Server, title: "<15 Min SLA", delay: "delay-[200ms]", pos: "bottom-1/4 -left-6" },
      { icon: Activity, title: "Deep Analysis", delay: "delay-[400ms]", pos: "bottom-12 right-4" }
    ]
  }
];

export function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideContentRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background GSAP loop (Only runs once)
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".bg-grid-pattern", {
        backgroundPosition: "40px 40px",
        duration: 4,
        repeat: -1,
        ease: "none"
      });
      // Floating animation for badges
      gsap.to(".float-badge", {
        y: -10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Slide transition GSAP animations
  useEffect(() => {
    if (!slideContentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset positions first (in case of rapid clicking)
      gsap.set('.reveal-text-inner', { y: "100%" });
      gsap.set('.fade-in-el', { opacity: 0, y: 20 });
      gsap.set('.orb-core', { scale: 0.5, opacity: 0 });
      gsap.set('.float-badge-container', { scale: 0, opacity: 0 });

      // 1. Staggered Text Reveal
      tl.to('.reveal-text-inner', {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
      }, 0);

      // 2. Center Orb Expansion
      tl.to('.orb-core', {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      }, 0.1);

      // 3. Floating Badges Pop In
      tl.to('.float-badge-container', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)"
      }, 0.3);

      // 4. Fade in static elements (desc, buttons, etc.)
      tl.to('.fade-in-el', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, 0.3);

    }, slideContentRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const activeData = SLIDES[currentSlide];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#fdfdfd] text-zinc-950 overflow-hidden pb-12 flex flex-col justify-between border-b border-zinc-200"
    >
      {/* Dynamic Background Pattern */}
      <div className="bg-grid-pattern absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

      {/* Large Abstract Geometric Accent on the Right */}
      <div className="absolute right-[-10%] top-0 bottom-0 w-[50%] bg-zinc-100/50 border-l border-zinc-200 -skew-x-12 -z-10 hidden lg:block" />

      {/* Main Content Area (Wrapped for transitions) */}
      <div ref={slideContentRef} className="container mx-auto px-4 md:px-12 lg:px-24 flex-1 flex flex-col justify-center perspective-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Headline - Left Side (Col span 7) */}
          <div className="lg:col-span-7 relative z-10">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] tracking-tighter uppercase mb-6 h-[14rem] md:h-[14rem] lg:h-auto flex flex-col justify-center">
              <div className="overflow-hidden pb-2">
                <div className="reveal-text-inner origin-bottom whitespace-nowrap">{activeData.title[0]}</div>
              </div>
              <div className="overflow-hidden pb-2">
                <div className="reveal-text-inner origin-bottom text-zinc-400 whitespace-nowrap">{activeData.title[1]}</div>
              </div>
              <div className="overflow-hidden pb-2">
                <div className="reveal-text-inner origin-bottom text-zinc-900 whitespace-nowrap">{activeData.title[2]}</div>
              </div>
            </h1>

            <div className="fade-in-el max-w-xl text-sm md:text-base text-zinc-600 font-medium leading-relaxed border-l-4 border-zinc-950 pl-6 overflow-hidden">
              {activeData.desc}
            </div>

            <div className="fade-in-el mt-12 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none bg-zinc-950 text-white hover:bg-zinc-800 px-8 h-14 text-sm font-bold uppercase tracking-widest group">
                {activeData.primaryCTA}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-none bg-white text-zinc-950 hover:bg-zinc-100 px-8 h-14 text-sm font-bold uppercase tracking-widest border-2 border-zinc-200">
                {activeData.secondaryCTA}
              </Button>
            </div>
          </div>

          {/* Advanced Holographic Tech Radar - Right Side (Col span 5) */}
          <div className="lg:col-span-5 relative z-10 w-full mt-12 lg:mt-0 flex justify-center lg:justify-end items-center h-[500px]">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

              {/* Massive Glowing Central Aura */}
              <div className={`orb-core absolute inset-0 rounded-full blur-[80px] opacity-40 mix-blend-multiply transition-colors duration-1000 ${activeData.orbTheme}`} />

              {/* Advanced Radar Rings */}
              <div className="orb-core absolute w-[85%] h-[85%] rounded-full border border-zinc-200/40 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="orb-core absolute w-[65%] h-[65%] rounded-full border border-zinc-200/80 animate-[spin_20s_linear_infinite_reverse]">
                {/* Orbital dots */}
                <div className={`absolute top-0 left-1/2 -mt-1.5 -ml-1.5 w-3 h-3 rounded-full bg-current ${activeData.iconColor} shadow-[0_0_12px_currentColor]`} />
                <div className={`absolute bottom-[15%] right-[5%] w-2 h-2 rounded-full bg-current ${activeData.iconColor} shadow-[0_0_8px_currentColor] opacity-60`} />
              </div>
              <div className="orb-core absolute w-[45%] h-[45%] rounded-full border-[0.5px] border-zinc-300 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="orb-core absolute w-[25%] h-[25%] rounded-full border border-zinc-200" />

              {/* Central Solid Core */}
              <div className="orb-core relative z-10 w-24 h-24 bg-white/40 backdrop-blur-md rounded-full shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-white/60 flex items-center justify-center before:absolute before:inset-2 before:border before:border-zinc-300/50 before:rounded-full before:animate-[spin_3s_linear_infinite]">
                <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center animate-pulse">
                  <div className={`w-3 h-3 rounded-full bg-current ${activeData.iconColor} shadow-[0_0_15px_currentColor]`} />
                </div>
              </div>

              {/* Connecting Lines (SVG) - Creates a Network Graph look */}
              <svg className="orb-core absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
                {/* Line to Badge 1 */}
                <path d="M 250 250 L 350 120 L 450 120" fill="none" stroke="currentColor" className={`text-zinc-300 stroke-[1.5] ${activeData.iconColor}`} strokeDasharray="4 4" style={{ color: 'rgba(0,0,0,0.1)' }} />
                {/* Line to Badge 2 */}
                <path d="M 250 250 L 320 380 L 420 380" fill="none" stroke="currentColor" className={`text-zinc-300 stroke-[1.5] ${activeData.iconColor}`} strokeDasharray="4 4" style={{ color: 'rgba(0,0,0,0.1)' }} />
                {/* Line to Badge 3 */}
                <path d="M 250 250 L 150 220 L 50 220" fill="none" stroke="currentColor" className={`text-zinc-300 stroke-[1.5] ${activeData.iconColor}`} strokeDasharray="4 4" style={{ color: 'rgba(0,0,0,0.1)' }} />
              </svg>

              {/* Orbiting Glass Badges */}
              {activeData.badges.map((badge, idx) => {
                const Icon = badge.icon;

                // Reposition badges to match the SVG line endpoints
                let absolutePos = "";
                if (idx === 0) absolutePos = "top-[17%] right-[2%]";
                if (idx === 1) absolutePos = "bottom-[16%] right-[5%]";
                if (idx === 2) absolutePos = "top-[38%] -left-[5%]";

                return (
                  <div key={idx} className={`float-badge-container absolute ${absolutePos} z-20`}>
                    <div className="float-badge bg-white/90 backdrop-blur-2xl border border-white/50 p-3 shadow-2xl shadow-zinc-200/50 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:bg-white hover:scale-110 cursor-crosshair group">
                      <div className={`relative p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 ${activeData.iconColor} group-hover:scale-110 group-hover:bg-white transition-all duration-300 z-10 overflow-hidden`}>
                        <div className="absolute inset-0 bg-current opacity-10 group-hover:opacity-20 transition-opacity" />
                        <Icon className="w-5 h-5 relative z-10" />
                      </div>
                      <div className="pr-3">
                        <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">
                          {idx === 0 ? 'Primary Node' : idx === 1 ? 'Status Metric' : 'System Logic'}
                        </div>
                        <div className="font-black text-zinc-950 tracking-tight text-[15px] whitespace-nowrap leading-none">
                          {badge.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center gap-6 mt-12 pt-8 w-full">
          <div className="flex gap-2">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-zinc-200 hover:bg-zinc-100 transition-colors text-zinc-950 bg-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-zinc-200 hover:bg-zinc-100 transition-colors text-zinc-950 bg-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-3 items-center">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all duration-500 rounded-full ${currentSlide === idx ? "w-8 bg-zinc-950" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="ml-auto text-xs font-bold uppercase tracking-widest text-zinc-400 hidden sm:block">
            0{currentSlide + 1} / 0{SLIDES.length}
          </div>
        </div>
      </div>
    </section>
  );
}
