'use client';

import { CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".tp-header",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
    <section
      ref={sectionRef}
      className="relative py-15 lg:py-30 overflow-hidden bg-[#f8f7f4] border-y border-zinc-200/80"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(#080808 1px, transparent 1px), linear-gradient(90deg, #080808 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="tp-header flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
            <span className="text-[11px] font-semibold text-[#9e7b56] uppercase tracking-[0.25em]">
              Trusted by Organizations
            </span>
          </div>

          <AnimatedTitle
            theme="light"
            className="tp-header text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight leading-[1.1]"
            segments={[
              { text: "Partnership Across " },
              { text: "Sectors", isHighlighted: true }
            ]}
          />

          <p className="tp-header text-base text-[#080808]/60 max-w-xl leading-relaxed font-light">
            From enterprise to emerging markets, our platform empowers diverse organizations to build, scale, and innovate with confidence.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className="relative w-full flex overflow-hidden group py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#f8f7f4] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#f8f7f4] to-transparent z-20 pointer-events-none" />

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
                className={`flex items-center gap-3 px-6 py-4 rounded-none whitespace-nowrap cursor-pointer transition-all duration-500 border ${hoveredIndex === idx
                    ? 'bg-[#080808] text-white border-[#080808] shadow-md'
                    : 'bg-white text-[#080808]/70 border-zinc-200/90 shadow-xs hover:border-[#9e7b56]/50'
                  }`}
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${hoveredIndex === idx ? 'text-[#9e7b56]' : 'text-[#9e7b56]/70'}`} />
                <span className="text-sm font-medium tracking-wide">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee (reverse) */}
      <div
        className="relative w-full flex overflow-hidden group py-4 mt-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#f8f7f4] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#f8f7f4] to-transparent z-20 pointer-events-none" />

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
                className={`flex items-center gap-3 px-6 py-4 rounded-none whitespace-nowrap cursor-pointer transition-all duration-500 border ${hoveredIndex === idx + 100
                    ? 'bg-[#080808] text-white border-[#080808] shadow-md'
                    : 'bg-white text-[#080808]/70 border-zinc-200/90 shadow-xs hover:border-[#9e7b56]/50'
                  }`}
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${hoveredIndex === idx + 100 ? 'text-[#9e7b56]' : 'text-[#9e7b56]/70'}`} />
                <span className="text-sm font-medium tracking-wide">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
