'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Building2, ShieldCheck, Zap, PackageCheck, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  { num: "01", title: "Business First", desc: "We understand your business processes before writing a single line of code. Technology follows strategy." },
  { num: "02", title: "Enterprise Architecture", desc: "Solutions designed to scale from startups to large organizations with modular, API-first architecture." },
  { num: "03", title: "Security by Design", desc: "Cybersecurity integrated into every solution from day one — not bolted on after." },
  { num: "04", title: "Future Ready", desc: "Cloud-native and AI-enabled architecture ensures your technology investment grows with innovation." },
  { num: "05", title: "End-to-End Delivery", desc: "Consulting · Design · Development · Deployment · Support · Training — complete ownership." },
  { num: "06", title: "Continuous Improvement", desc: "True to our Kaizen philosophy, every solution evolves and improves alongside your business." },
];

export function WhyKaizen() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wk-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });

      gsap.from(".pillar-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillar-grid", start: "top 85%" }
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="wk-header flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
              <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.25em]">Why Choose Us</span>
            </div>
            <h2 className="wk-header text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05] max-w-lg">
              Why Organizations <span className="text-[#c8b4a0]">Choose Kaizen</span>
            </h2>
          </div>
          <p className="wk-header text-base text-white/40 max-w-md leading-relaxed">
            Focus on outcomes, not features. We measure success by the business results we create — not by the code we write.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="pillar-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map((pillar, i) => (
            <div key={i} className="pillar-card group relative bg-[#0f0f0f] border border-white/[0.06] p-8 cursor-pointer overflow-hidden hover:border-[#c8b4a0]/20 transition-all duration-500">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#c8b4a0]/5 to-transparent" />

              <div className="relative z-10">
                <div className="text-[64px] font-extralight text-white/[0.03] leading-none mb-4">{pillar.num}</div>

                <h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#c8b4a0] transition-colors">{pillar.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
