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
  { label: "Vision", desc: "Understanding your goals" },
  { label: "Strategy", desc: "Planning the path" },
  { label: "Technology", desc: "Building solutions" },
  { label: "Deliver", desc: "Ship & scale" },
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
      gsap.from(".wwa-eyebrow", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });

      gsap.from(".wwa-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      });

      gsap.from(".wwa-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
      });

      gsap.from(".wwa-step", {
        x: -40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#0a0a0a] overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
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

            <p className="wwa-text text-base text-white/40 leading-relaxed mb-6 max-w-md">
              <span className="text-[#c8b4a0]">Kaizen</span> is a Japanese philosophy of continuous improvement through small, consistent, meaningful changes. At Kaizen Infinities, we transformed this philosophy into a modern technology company.
            </p>
            <p className="wwa-text text-base text-white/40 leading-relaxed mb-10 max-w-md">
              Enterprise software, ERP, cloud-native applications, intelligent automation, AI, and cybersecurity — helping organizations become smarter, faster, and more secure.
            </p>

            <blockquote className="wwa-text border-l border-[#c8b4a0]/30 pl-6">
              <p className="text-lg font-light text-white/70 italic leading-relaxed">
                &ldquo;We don&apos;t sell software. We engineer business transformation.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: Philosophy */}
          <div className="wwa-steps lg:pt-8">
            <div className="text-[11px] font-medium text-white/30 uppercase tracking-[0.2em] mb-8">Our Philosophy</div>

            <div className="relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-[#c8b4a0]/30 via-[#c8b4a0]/10 to-transparent" />

              {PHILOSOPHY_STEPS.map((step, i) => (
                <div key={i} className="wwa-step group relative flex items-start gap-6 mb-8 last:mb-0">
                  <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-full h-full border border-[#c8b4a0]/30 rounded-full group-hover:border-[#c8b4a0]/60 transition-colors duration-300" />
                    <div className="absolute inset-2 bg-[#c8b4a0]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex-1 pt-1">
                    <h4 className="text-base font-medium text-white mb-1 group-hover:text-[#c8b4a0] transition-colors">{step.label}</h4>
                    <p className="text-sm text-white/30">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
