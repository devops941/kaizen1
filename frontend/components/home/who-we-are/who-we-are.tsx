'use client';

import { useEffect, useRef, useState } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 200, suffix: "+", label: "Enterprise Projects" },
  { value: 150, suffix: "+", label: "Global Clients" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const PHILOSOPHY_STEPS = [
  {
    num: "01",
    label: "Strategic Vision",
    desc: "Analyzing core business goals and operational workflows to engineer tailored software strategies.",
    tag: "Phase 01 — Analysis"
  },
  {
    num: "02",
    label: "Scalable Architecture",
    desc: "Designing resilient cloud-native systems, modular microservices, and API-first data foundations.",
    tag: "Phase 02 — Blueprint"
  },
  {
    num: "03",
    label: "Intelligent Engineering",
    desc: "Building high-performance applications with AI automation, enterprise ERPs, and zero-trust security.",
    tag: "Phase 03 — Execution"
  },
  {
    num: "04",
    label: "Continuous Evolution",
    desc: "Perpetual refinement, automated monitoring, and iterative enhancements true to our Kaizen philosophy.",
    tag: "Phase 04 — Evolution"
  },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(parseFloat((eased * value).toFixed(1)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="group">
      <div className="text-4xl md:text-5xl font-extralight text-white tracking-tight tabular-nums mb-2">
        {value % 1 === 0 ? Math.round(count) : count.toFixed(1)}
        <span className="text-[#c8b4a0]">{suffix}</span>
      </div>
      <div className="text-[11px] text-white/30 tracking-[0.15em] uppercase">{label}</div>
    </div>
  );
}

export function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".wwa-eyebrow",
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
        ".wwa-title",
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
        ".wwa-text",
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
        ".wwa-step",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#c8b4a0]/5 via-transparent to-transparent rounded-full blur-[150px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 pb-16 border-b border-white/[0.06]">
          {STATS.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Text (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="wwa-eyebrow flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.25em]">Who We Are</span>
              </div>

              <AnimatedTitle
                className="wwa-title text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
                segments={[
                  { text: "Technology Built " },
                  { text: "Around", className: "text-white/40 block" },
                  { text: "Continuous", isHighlighted: true, className: "block" },
                  { text: "Improvement", className: "text-white/60 block" }
                ]}
              />

              <p className="wwa-text text-base text-white/40 leading-relaxed mb-6 max-w-lg">
                <span className="text-[#c8b4a0]">Kaizen</span> is a Japanese philosophy of continuous improvement through small, consistent, meaningful changes. At Kaizen Infinities, we transformed this philosophy into a modern technology company.
              </p>
              <p className="wwa-text text-base text-white/40 leading-relaxed mb-10 max-w-lg">
                Enterprise software, ERP, cloud-native applications, intelligent automation, AI, and cybersecurity — helping organizations become smarter, faster, and more secure.
              </p>
            </div>

            <blockquote className="wwa-text border-l border-[#c8b4a0]/30 pl-6 mt-4">
              <p className="text-lg font-light text-white/70 italic leading-relaxed">
                &ldquo;We don&apos;t sell software. We engineer business transformation.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: Philosophy (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="wwa-eyebrow flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <div className="text-[11px] font-semibold text-[#c8b4a0] uppercase tracking-[0.25em]">Our Philosophy</div>
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">4-Stage Methodology</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {PHILOSOPHY_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="wwa-step group relative bg-[#0f0f0f] border border-white/[0.06] p-6 lg:p-7 hover:border-[#c8b4a0]/40 hover:bg-[#141414] transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-medium text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20">
                        {step.num}
                      </span>
                      <h4 className="text-lg font-medium text-white group-hover:text-[#c8b4a0] transition-colors">
                        {step.label}
                      </h4>
                    </div>
                    <span className="text-[10px] text-white/20 uppercase tracking-wider hidden sm:block">
                      {step.tag}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
