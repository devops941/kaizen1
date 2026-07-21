'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 200, suffix: "+", label: "Enterprise Projects Delivered" },
  { value: 150, suffix: "+", label: "Clients Across Industries" },
  { value: 99.9, suffix: "%", label: "Uptime SLA Guarantee" },
  { value: 10, suffix: "+", label: "Years of Engineering Excellence" },
];

const PHILOSOPHY_STEPS = [
  { label: "Vision", color: "bg-zinc-950" },
  { label: "Strategy", color: "bg-zinc-800" },
  { label: "Technology", color: "bg-zinc-700" },
  { label: "Implementation", color: "bg-zinc-600" },
  { label: "Continuous Improvement", color: "bg-zinc-500" },
  { label: "Business Success", color: "bg-emerald-600" },
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
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * value).toFixed(1)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="text-5xl md:text-6xl font-black text-zinc-950 tracking-tighter tabular-nums leading-none mb-2">
        {value % 1 === 0 ? Math.round(count) : count.toFixed(1)}
        <span className="text-emerald-500">{suffix}</span>
      </div>
      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest max-w-[120px] leading-relaxed">{label}</div>
    </div>
  );
}

export function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wwa-text-el", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".wwa-text-el", start: "top 85%", toggleActions: "play none none none" }
      });
      gsap.from(".wwa-step", {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ".wwa-steps", start: "top 80%", toggleActions: "play none none none" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 pb-24 border-b border-zinc-100">
          {STATS.map((stat, i) => <StatCounter key={i} {...stat} />)}
        </div>

        {/* Who We Are Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="wwa-text-el text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Who We Are</div>
            <h2 className="wwa-text-el text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter leading-[1.05] uppercase mb-6">
              Technology Built Around <span className="text-zinc-400">Continuous Improvement</span>
            </h2>
            <p className="wwa-text-el text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Kaizen is a Japanese philosophy of continuous improvement through small, consistent, meaningful changes. At Kaizen Infinities, we transformed this philosophy into a modern technology company.
            </p>
            <p className="wwa-text-el text-base text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Enterprise software, ERP, cloud-native applications, intelligent automation, AI, and cybersecurity — helping organizations become smarter, faster, and more secure.
            </p>
            <blockquote className="wwa-text-el border-l-4 border-zinc-950 pl-6 text-lg font-bold text-zinc-800 italic">
              "We don't sell software. We engineer business transformation."
            </blockquote>
          </div>

          {/* Right: Philosophy Flow */}
          <div className="wwa-steps relative">
            <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-6">Our Philosophy</div>
            <div className="flex flex-col gap-2">
              {PHILOSOPHY_STEPS.map((step, i) => (
                <div key={i} className="wwa-step group flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {i + 1}
                  </div>
                  <div className={`flex-1 py-3 px-5 ${step.color} text-white font-bold text-sm tracking-wide rounded-r-lg group-hover:translate-x-2 transition-transform`}
                    style={{ marginLeft: `${i * 16}px` }}>
                    {step.label}
                  </div>
                  {i < PHILOSOPHY_STEPS.length - 1 && (
                    <div className="absolute left-[15px] mt-8 w-px h-full bg-zinc-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
