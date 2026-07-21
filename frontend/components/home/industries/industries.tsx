'use client';

import { useEffect, useRef } from "react";
import {
  GraduationCap, HeartPulse, Factory, ShoppingCart, Building2, Landmark,
  Rocket, HandHeart, Wheat, Truck, Banknote, Globe
} from "lucide-react";

const INDUSTRIES = [
  { icon: GraduationCap, label: "Education", color: "group-hover:text-blue-500 group-hover:bg-blue-50 group-hover:border-blue-200" },
  { icon: HeartPulse, label: "Healthcare", color: "group-hover:text-rose-500 group-hover:bg-rose-50 group-hover:border-rose-200" },
  { icon: Factory, label: "Manufacturing", color: "group-hover:text-amber-500 group-hover:bg-amber-50 group-hover:border-amber-200" },
  { icon: ShoppingCart, label: "Retail", color: "group-hover:text-orange-500 group-hover:bg-orange-50 group-hover:border-orange-200" },
  { icon: Building2, label: "Banking", color: "group-hover:text-indigo-500 group-hover:bg-indigo-50 group-hover:border-indigo-200" },
  { icon: Landmark, label: "Government", color: "group-hover:text-zinc-700 group-hover:bg-zinc-50 group-hover:border-zinc-300" },
  { icon: HandHeart, label: "NGOs", color: "group-hover:text-pink-500 group-hover:bg-pink-50 group-hover:border-pink-200" },
  { icon: Rocket, label: "Startups", color: "group-hover:text-violet-500 group-hover:bg-violet-50 group-hover:border-violet-200" },
  { icon: Wheat, label: "Agriculture", color: "group-hover:text-lime-600 group-hover:bg-lime-50 group-hover:border-lime-200" },
  { icon: Truck, label: "Transportation", color: "group-hover:text-sky-500 group-hover:bg-sky-50 group-hover:border-sky-200" },
  { icon: Banknote, label: "Financial Services", color: "group-hover:text-emerald-600 group-hover:bg-emerald-50 group-hover:border-emerald-200" },
  { icon: Globe, label: "Hospitality", color: "group-hover:text-teal-500 group-hover:bg-teal-50 group-hover:border-teal-200" },
];

export function Industries() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.ind-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'scale(1) translateY(0)';
          }
        });
      },
      { threshold: 0.05 }
    );
    items.forEach((item, i) => {
      (item as HTMLElement).style.transitionDelay = `${i * 50}ms`;
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Industries</div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter leading-[1.05] uppercase mb-4">
            Industries We <span className="text-zinc-400">Transform</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
            Purpose-built technology for 12+ verticals. Every industry has unique challenges — we engineer unique solutions.
          </p>
        </div>

        {/* Industries Icon Grid */}
        <div ref={gridRef} className="ind-grid grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div key={i} className={`ind-item group flex flex-col items-center justify-center gap-3 p-5 bg-white border border-zinc-200 rounded-2xl cursor-default hover:shadow-lg ${industry.color}`}
                style={{ opacity: 0, transform: 'scale(0.85) translateY(10px)', transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s' }}>
                <div className={`w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all duration-300 ${industry.color}`}>
                  <Icon className="w-6 h-6 text-zinc-600 group-hover:text-current transition-colors duration-300" />
                </div>
                <span className="text-xs font-black text-zinc-700 uppercase tracking-wide text-center leading-tight">{industry.label}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
