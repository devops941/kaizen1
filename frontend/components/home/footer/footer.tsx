'use client';

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { AnimatedLink } from "../animated-link";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions" },
  { label: "KINETIC™", href: "/kinetic" },
  { label: "CYBERNEX", href: "/cybernex" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "WHY KAIZEN", href: "/why-kaizen" },
  { label: "CONTACT", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "TWITTER", href: "https://twitter.com" },
  { label: "YOUTUBE", href: "https://youtube.com" },
  { label: "GITHUB", href: "https://github.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#12100e] text-white overflow-hidden pt-12 pb-8 border-t border-white/[0.08]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Main 3-Column Layout Flanking the Center Ticket Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mb-12">

          {/* Left Column: PAGES (Span 2) */}
          <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#c8b4a0] uppercase mb-5 block">
              PAGES
            </span>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link, idx) => (
                <AnimatedLink
                  key={idx}
                  href={link.href}
                  className="text-sm sm:text-base lg:text-lg font-extrabold tracking-wider text-white/80 hover:text-white uppercase"
                >
                  {link.label}
                </AnimatedLink>
              ))}
            </nav>
          </div>

          {/* Center Column: The Custom Tabbed Ticket/Badge Shape Card (Span 8 - Extra Large) */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex justify-center z-10">
            <div className="relative w-full max-w-4xl lg:max-w-5xl py-16 px-8 sm:px-14 lg:py-24 lg:px-20 text-center group">

              {/* Custom SVG Tabbed Card Shape with Top and Bottom Bump Notch */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg viewBox="0 0 900 550" preserveAspectRatio="none" className="w-full h-full drop-shadow-2xl">
                  {/* Outer Shape path with top raised tab and bottom lowered tab */}
                  <path
                    d="M 40,45 
                       L 330,45 
                       C 350,45 360,12 385,12 
                       L 515,12 
                       C 540,12 550,45 570,45 
                       L 860,45 
                       Q 880,45 880,65 
                       L 880,485 
                       Q 880,505 860,505 
                       L 570,505 
                       C 550,505 540,538 515,538 
                       L 385,538 
                       C 360,538 350,505 330,505 
                       L 40,505 
                       Q 20,505 20,485 
                       L 20,65 
                       Q 20,45 40,45 Z"
                    fill="#070707"
                    stroke="#c8b4a0"
                    strokeWidth="1.8"
                    strokeOpacity="0.35"
                  />
                </svg>
              </div>

              {/* Organic Topographical Wavy Lines Overlay */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity duration-700">
                <svg viewBox="0 0 900 550" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M 30 90 Q 250 20 480 110 T 870 70" stroke="#c8b4a0" strokeWidth="1.5" fill="none" opacity="0.65" />
                  <path d="M 30 180 Q 290 260 580 150 T 870 220" stroke="#c8b4a0" strokeWidth="1.2" fill="none" opacity="0.55" />
                  <path d="M 30 290 Q 200 200 490 350 T 870 270" stroke="#c8b4a0" strokeWidth="1.4" fill="none" opacity="0.45" />
                  <path d="M 30 400 Q 360 480 700 380 T 870 440" stroke="#c8b4a0" strokeWidth="1.2" fill="none" opacity="0.55" />
                  <path d="M 30 460 Q 270 390 540 480 T 870 460" stroke="#c8b4a0" strokeWidth="0.9" strokeDasharray="6 6" fill="none" opacity="0.4" />
                  <path d="M 30 45 Q 420 180 800 25 T 870 130" stroke="#c8b4a0" strokeWidth="0.9" strokeDasharray="4 4" fill="none" opacity="0.35" />
                </svg>
              </div>

              {/* Radial Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c8b4a0]/12 rounded-full blur-3xl pointer-events-none" />

              {/* Center Card Content */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.6rem] font-black leading-[0.96] tracking-tighter uppercase text-white mb-10">
                  ENGINEERING<br />
                  <span className="text-[#c8b4a0]">INTELLIGENT</span><br />
                  DIGITAL ENTERPRISES.
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column: FOLLOW ON (Span 2) */}
          <div className="lg:col-span-2 order-3 flex flex-col items-center lg:items-end text-center lg:text-right z-20">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#c8b4a0] uppercase mb-5 block">
              FOLLOW ON
            </span>
            <nav className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((link, idx) => (
                <AnimatedLink
                  key={idx}
                  href={link.href}
                  external
                  className="text-sm sm:text-base lg:text-lg font-extrabold tracking-wider text-white/80 hover:text-white uppercase"
                >
                  {link.label}
                </AnimatedLink>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs font-bold text-white/50 tracking-wider uppercase">
            © {new Date().getFullYear()} KAIZEN INFINITIES. ALL RIGHTS RESERVED
          </p>

          <div className="flex items-center gap-6 text-xs font-bold text-white/50 tracking-wider uppercase">
            <AnimatedLink href="/privacy" className="text-white/50 hover:text-white">PRIVACY POLICY</AnimatedLink>
            <AnimatedLink href="/terms" className="text-white/50 hover:text-white">TERMS OF SERVICE</AnimatedLink>
            <AnimatedLink href="/cookies" className="text-white/50 hover:text-white">COOKIE POLICY</AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

