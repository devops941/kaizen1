'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Cpu, Shield, Zap, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { icon: Cpu, title: "Strategic Consulting", desc: "Deep business process analysis before technical execution" },
  { icon: Zap, title: "Technology Engineering", desc: "Modern, scalable, cloud-native enterprise solutions" },
  { icon: Shield, title: "Cybersecurity", desc: "Zero-trust security integrated from day one" },
  { icon: RefreshCw, title: "Continuous Innovation", desc: "Ongoing post-deployment kaizen optimization" },
];

export function KineticWhatIs() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".kw-header-item",
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
        ".kw-content-item",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
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
        ".kw-feature",
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

      gsap.fromTo(
        ".kw-visual",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      // Fallback safety to ensure no element is hidden
      if (sectionRef.current) {
        const hiddenEls = sectionRef.current.querySelectorAll('.kw-header-item, .kw-content-item, .kw-feature, .kw-visual');
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="kw-header-item flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
              <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                What is KINETIC™
              </span>
            </div>

            <AnimatedTitle
              theme="light"
              className="kw-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
              segments={[
                { text: "Kaizen Intelligent Engineering & " },
                { text: "Technology Integration", isHighlighted: true },
                { text: " Cycle" }
              ]}
            />

            <div className="space-y-6">
              <p className="kw-content-item text-base text-zinc-600 leading-relaxed font-light">
                KINETIC™ is our structured business transformation framework combining strategic
                consulting, technology engineering, cybersecurity, QA, and continuous innovation
                into a single lifecycle.
              </p>

              <p className="kw-content-item text-base text-zinc-600 leading-relaxed font-light">
                Unlike traditional development approaches, KINETIC™ ensures every phase flows
                seamlessly into the next, with continuous feedback loops and quality gates that
                guarantee delivery excellence.
              </p>

              {/* Features Grid with Sharp Corners */}
              <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="kw-feature flex items-start gap-4 p-4 bg-white border border-zinc-200 rounded-none shadow-2xs hover:border-[#9e7b56] transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] flex-shrink-0">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1">{feature.title}</h4>
                      <p className="text-xs text-zinc-600 font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual Container */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <div className="kw-visual relative w-80 h-80">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-zinc-50 border border-zinc-800 flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <span className="text-4xl font-light text-[#9e7b56]">K™</span>
                    <div className="text-[9px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider mt-0.5">Kinetic</div>
                  </div>
                </div>
              </div>

              {/* Concentric Rings */}
              <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 border border-zinc-800 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
