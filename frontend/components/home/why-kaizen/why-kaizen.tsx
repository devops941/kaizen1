'use client';

import { useEffect, useRef } from "react";
import { Lightbulb, Building2, ShieldCheck, Zap, PackageCheck, RefreshCw } from "lucide-react";

const PILLARS = [
  {
    num: "01",
    icon: Lightbulb,
    title: "Business First",
    desc: "We understand your business processes before writing a single line of code. Technology follows strategy.",
    accent: "group-hover:border-blue-400 group-hover:shadow-blue-100",
    iconBg: "group-hover:bg-blue-500",
  },
  {
    num: "02",
    icon: Building2,
    title: "Enterprise Architecture",
    desc: "Solutions designed to scale from startups to large organizations with modular, API-first architecture.",
    accent: "group-hover:border-violet-400 group-hover:shadow-violet-100",
    iconBg: "group-hover:bg-violet-500",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Security by Design",
    desc: "Cybersecurity integrated into every solution from day one — not bolted on after. Powered by CyberNex.",
    accent: "group-hover:border-emerald-400 group-hover:shadow-emerald-100",
    iconBg: "group-hover:bg-emerald-500",
  },
  {
    num: "04",
    icon: Zap,
    title: "Future Ready",
    desc: "Cloud-native and AI-enabled architecture ensures your technology investment grows with innovation.",
    accent: "group-hover:border-amber-400 group-hover:shadow-amber-100",
    iconBg: "group-hover:bg-amber-500",
  },
  {
    num: "05",
    icon: PackageCheck,
    title: "End-to-End Delivery",
    desc: "Consulting · Design · Development · Deployment · Support · Training — complete ownership.",
    accent: "group-hover:border-rose-400 group-hover:shadow-rose-100",
    iconBg: "group-hover:bg-rose-500",
  },
  {
    num: "06",
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "True to our Kaizen philosophy, every solution evolves and improves alongside your business.",
    accent: "group-hover:border-cyan-400 group-hover:shadow-cyan-100",
    iconBg: "group-hover:bg-cyan-500",
  },
];

export function WhyKaizen() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.pillar-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 70}ms`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter leading-[1.05] uppercase max-w-lg">
              Why Organizations <span className="text-zinc-400">Choose Kaizen</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-sm leading-relaxed lg:text-right">
            Focus on outcomes, not features. We measure success by the business results we create — not by the code we write.
          </p>
        </div>

        {/* Pillars Grid */}
        <div ref={gridRef} className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className={`pillar-card group relative bg-white border-2 border-zinc-100 p-8 rounded-2xl hover:shadow-xl ${pillar.accent} overflow-hidden cursor-default`}
                style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s' }}>
                {/* Number watermark */}
                <div className="absolute top-4 right-5 text-6xl font-black text-zinc-100 group-hover:text-zinc-200 transition-colors select-none leading-none">
                  {pillar.num}
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${pillar.iconBg}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-950 tracking-tight mb-3">{pillar.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
