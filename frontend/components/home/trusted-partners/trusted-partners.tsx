'use client';

import { CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

interface Partner {
  name: string;
  sector: 'education' | 'enterprise' | 'msme' | 'government' | 'manufacturing' | 'healthcare' | 'startup' | 'finance';
}

const PARTNERS: Partner[] = [
  { name: "Educational Institutions", sector: 'education' },
  { name: "Corporate Enterprises", sector: 'enterprise' },
  { name: "MSMEs", sector: 'msme' },
  { name: "Government Organizations", sector: 'government' },
  { name: "Manufacturing", sector: 'manufacturing' },
  { name: "Healthcare", sector: 'healthcare' },
  { name: "Startups", sector: 'startup' },
  { name: "Financial Services", sector: 'finance' },
];

// Sector-specific color tokens (refined, not defaults)
const SECTOR_COLORS = {
  education: { bg: '#EEF4F9', border: '#B8D5E8', accent: '#1D5A8E' },
  enterprise: { bg: '#F3F1F9', border: '#D4C5E8', accent: '#4F2F7A' },
  msme: { bg: '#F8F4EE', border: '#DCCCB8', accent: '#6B4A2F' },
  government: { bg: '#F0F6F0', border: '#BFD9C0', accent: '#2D5A3D' },
  manufacturing: { bg: '#F2F5F8', border: '#C5D6E5', accent: '#3A5A7A' },
  healthcare: { bg: '#F0F8F4', border: '#BFE0D0', accent: '#1B6B4B' },
  startup: { bg: '#FBF5E8', border: '#E8DCC5', accent: '#8B5A2B' },
  finance: { bg: '#F5F2F9', border: '#D9CEEA', accent: '#3E2752' },
};

function BadgeItem({ partner, isHovered }: { partner: Partner; isHovered: boolean }) {
  const colors = SECTOR_COLORS[partner.sector];

  return (
    <div
      className="relative flex items-center gap-2.5 px-5 py-3 mx-2.5 rounded-lg whitespace-nowrap transition-all duration-500 cursor-pointer group/badge"
      style={{
        backgroundColor: isHovered ? colors.accent : colors.bg,
        borderColor: colors.border,
        borderWidth: '1.5px',
      }}
    >
      {/* Subtle depth shadow - refined, not heavy */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `0 8px 16px ${colors.accent}20`,
        }}
      />

      <CheckCircle2
        className="w-4 h-4 transition-all duration-500 flex-shrink-0 relative z-10"
        style={{
          color: isHovered ? '#E8F5E9' : colors.accent,
          filter: isHovered ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'none',
        }}
      />

      <span
        className="font-semibold text-sm tracking-tight relative z-10"
        style={{
          color: isHovered ? '#FFFFFF' : colors.accent,
          transition: 'color 0.5s ease',
        }}
      >
        {partner.name}
      </span>
    </div>
  );
}

export function TrustedPartners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Duplicate for seamless infinite marquee
  const sliderItems = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#F9F8F7] via-[#FAFAF9] to-[#F5F4F2] overflow-hidden border-b border-[#E5E3E0]">
      {/* Refined grid background - minimal, professional */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0000000a_1px,transparent_1px),linear-gradient(180deg,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      {/* Subtle radial accent - one risk, justified */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#4F2F7A]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#1B6B4B]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow label - structural, not decorative */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#9E8BA5]" />
            <p className="text-xs font-medium text-[#6B5B7A] uppercase tracking-widest">
              Trusted by Organizations
            </p>
          </div>

          {/* Main heading - typography carries personality */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 text-[#2C2824] leading-tight">
            Partnership Across Sectors
          </h2>

          <p className="text-base md:text-lg text-[#6B6B6B] font-normal max-w-2xl">
            From enterprise to emerging markets, our platform empowers diverse organizations to build, scale, and innovate with confidence.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group py-8">
        {/* Refined fade gradients - asymmetrical for flow direction */}
        <div className="absolute top-0 left-0 bottom-0 w-12 md:w-40 bg-gradient-to-r from-[#F9F8F7] via-[#F9F8F7]/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 md:w-40 bg-gradient-to-l from-[#F5F4F2] via-[#F5F4F2]/40 to-transparent z-20 pointer-events-none" />

        {/* Marquee animation */}
        <div className="flex w-max animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused] gap-3">
          {sliderItems.map((partner, idx) => (
            <div
              key={`${partner.sector}-${idx}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <BadgeItem
                partner={partner}
                isHovered={hoveredIndex === idx}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle indicator - structural device with purpose */}
      <div className="flex justify-center mt-8 gap-1.5 relative z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#C5C0BA]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9D4CC]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#E5E3E0]" />
      </div>
    </section>
  );
}