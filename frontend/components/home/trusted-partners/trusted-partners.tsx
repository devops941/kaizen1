'use client';

import { CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PARTNERS = [
  "Educational Institutions",
  "Corporate Enterprises",
  "MSMEs",
  "Government Organizations",
  "Manufacturing",
  "Healthcare",
  "Startups",
  "Financial Services",
];

export function TrustedPartners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const sliderItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tp-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/10 to-transparent" />
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="tp-header flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.25em]">
              Trusted by Organizations
            </span>
          </div>

          <h2 className="tp-header text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white tracking-tight leading-[1.1]">
            Partnership Across <span className="text-[#c8b4a0]">Sectors</span>
          </h2>

          <p className="tp-header text-base text-white/40 max-w-xl leading-relaxed">
            From enterprise to emerging markets, our platform empowers diverse organizations to build, scale, and innovate with confidence.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className="relative w-full flex overflow-hidden group py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        <div
          className="flex w-max gap-3"
          style={{
            animation: `marquee 50s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {sliderItems.map((partner, idx) => (
            <div
              key={`${partner}-${idx}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <div
                className={`flex items-center gap-3 px-6 py-4 rounded-none whitespace-nowrap cursor-pointer transition-all duration-500 ${hoveredIndex === idx
                    ? 'bg-[#c8b4a0] text-[#080808]'
                    : 'bg-[#111111] text-white/50 hover:text-white/80'
                  }`}
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${hoveredIndex === idx ? 'text-[#080808]/60' : 'text-[#c8b4a0]/40'}`} />
                <span className="text-sm font-light tracking-wide">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee (reverse) */}
      <div
        className="relative w-full flex overflow-hidden group py-6 mt-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0c0c0c] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0c0c0c] to-transparent z-20 pointer-events-none" />

        <div
          className="flex w-max gap-3"
          style={{
            animation: `marquee-reverse 55s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {[...sliderItems].reverse().map((partner, idx) => (
            <div
              key={`reverse-${partner}-${idx}`}
              onMouseEnter={() => setHoveredIndex(idx + 100)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-center gap-3 px-6 py-4 rounded-none whitespace-nowrap cursor-pointer transition-all duration-500 ${hoveredIndex === idx + 100
                    ? 'bg-[#c8b4a0] text-[#080808]'
                    : 'bg-[#0f0f0f] text-white/40 hover:text-white/70'
                  }`}
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${hoveredIndex === idx + 100 ? 'text-[#080808]/60' : 'text-[#c8b4a0]/30'}`} />
                <span className="text-sm font-light tracking-wide">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}