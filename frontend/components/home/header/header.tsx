'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { AnimatedButton } from "../animated-button";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Why Kaizen", href: "/why-kaizen" },
  { name: "KINETIC™", href: "/kinetic" },
  { name: "Technology", href: "/technology" },
  { name: "CyberNex", href: "/cybernex" },
  { name: "Resources", href: "/resources" },
  { name: "Innovation", href: "/innovation" },
  { name: "Engagement", href: "/engagement" },
  { name: "Contact", href: "/contact" },
];

/* ── Active Link Wave — lime green, through center, McLaren-style ── */
function ActiveWave({ width, height }: { width: number; height: number }) {
  const w = width || 200;
  const h = height || 60;
  const cy = h * 0.52;
  const amplitude = Math.min(16, Math.max(8, h * 0.14));
  const cycles = 3;
  const points: string[] = [];
  for (let x = 0; x <= w; x += 1.5) {
    const y = cy + amplitude * Math.sin((x / w) * cycles * 2 * Math.PI);
    points.push(`${x === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(2)}`);
  }
  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none overflow-visible"
      width={w}
      height={h}
      style={{ width: w, height: h }}
    >
      <path
        d={points.join(" ")}
        stroke="#C5FF00"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
}

/* ── Shared nav link for both mobile sidebar & desktop overlay ── */
interface MenuNavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

function MenuNavLink({ href, label, isActive, onClick, className = "" }: MenuNavLinkProps) {
  const chars = label.split("");
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (isActive && linkRef.current) {
      setDims({
        w: linkRef.current.offsetWidth,
        h: linkRef.current.offsetHeight,
      });
    }
  }, [isActive]);

  return (
    <Link
      ref={linkRef}
      href={href}
      onClick={onClick}
      className={`group menu-link relative font-extrabold tracking-tighter uppercase transition-colors duration-300 block w-fit overflow-visible select-none ${
        isActive ? "text-white" : "text-white/40 hover:text-white"
      } ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span className="flex overflow-hidden" aria-hidden="true">
        {chars.map((char, index) => (
          <span
            key={index}
            className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{
              transitionDelay: `${index * 0.015}s`,
              marginRight: char === " " ? "0.25em" : "0",
            }}
          >
            {char === " " ? "\u00A0" : char}
            <span
              className="absolute top-full left-0 text-[#c8b4a0]"
              style={{ transitionDelay: `${index * 0.015}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>
      {isActive && dims.w > 0 && dims.h > 0 && (
        <ActiveWave width={dims.w} height={dims.h} />
      )}
    </Link>
  );
}

/* ════════════════════════════════════════════════════════════════ */
export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Mobile sidebar refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Desktop overlay ref
  const overlayRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ── Detect mobile breakpoint ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Header reveal on mount ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-reveal", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.4,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  /* ── Open animation ── */
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    if (isMobile) {
      /* MOBILE — slide in from left */
      if (sidebarRef.current && backdropRef.current) {
        gsap.set(sidebarRef.current, { x: "-100%" });
        gsap.set(backdropRef.current, { opacity: 0 });

        const tl = gsap.timeline();
        tl.to(backdropRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" })
          .to(sidebarRef.current, { x: "0%", duration: 0.4, ease: "power3.out" }, "-=0.2")
          .from(".sidebar-link", {
            x: -30,
            opacity: 0,
            stagger: 0.04,
            duration: 0.4,
            ease: "power3.out",
          }, "-=0.15")
          .from(".sidebar-bottom", {
            y: 16,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          }, "-=0.2");
      }
    } else {
      /* DESKTOP — full screen fade */
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { opacity: 0 });
        const tl = gsap.timeline();
        tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" })
          .from(".menu-link", {
            y: 40,
            opacity: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power3.out",
          }, "-=0.2")
          .from(".menu-bottom-item", {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          }, "-=0.3");
      }
    }

    return () => { document.body.style.overflow = ""; };
  }, [isOpen, isMobile]);

  /* ── Close ── */
  const closeMenu = useCallback(() => {
    if (isMobile) {
      const tl = gsap.timeline({ onComplete: () => setIsOpen(false) });
      if (sidebarRef.current) {
        tl.to(sidebarRef.current, { x: "-100%", duration: 0.35, ease: "power2.inOut" });
      }
      if (backdropRef.current) {
        tl.to(backdropRef.current, { opacity: 0, duration: 0.25, ease: "power2.inOut" }, "-=0.15");
      }
    } else {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => setIsOpen(false),
        });
      }
    }
  }, [isMobile]);

  return (
    <>
      {/* ══════════════ HEADER BAR ══════════════ */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[#c8b4a0]/[0.08]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex h-16 lg:h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="header-reveal flex items-center gap-2.5 group"
              onClick={isOpen ? closeMenu : undefined}
            >
              <div className="relative w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center">
                <span className="text-base lg:text-lg font-light text-[#c8b4a0]">K</span>
                <div className="absolute inset-0 border border-[#c8b4a0]/30 rounded-lg group-hover:border-[#c8b4a0]/50 transition-colors duration-300" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm lg:text-base font-light tracking-[0.15em] text-white">
                  KAIZEN<span className="text-[#c8b4a0]">.</span>
                </span>
                <span className="hidden lg:block text-[10px] font-medium tracking-[0.2em] text-white/30 ml-1">
                  INFINITIES
                </span>
              </div>
            </Link>

            {/* CTA + Hamburger */}
            <div className="header-reveal flex items-center gap-3">
              <AnimatedButton
                px="px-4"
                py="py-3"
                className="hidden sm:inline-flex bg-[#c8b4a0] text-[#080808] rounded-none text-[12px] lg:text-[13px] font-medium tracking-[0.1em] hover:bg-[#d4c4b0] transition-colors duration-300"
              >
                Schedule Call
              </AnimatedButton>

              <button
                onClick={isOpen ? closeMenu : () => setIsOpen(true)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center border border-white/10 hover:border-[#c8b4a0]/40 transition-colors duration-300 cursor-pointer group"
              >
                {isOpen ? (
                  <X className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 group-hover:text-[#c8b4a0] transition-colors" />
                ) : (
                  <Menu className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 group-hover:text-[#c8b4a0] transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════ MOBILE SIDEBAR (< lg) ══════════════ */}
      {isOpen && isMobile && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            onClick={closeMenu}
            className="fixed inset-0 z-[89] bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar panel — slides from left */}
          <div
            ref={sidebarRef}
            className="fixed left-0 top-0 bottom-0 z-[95] w-[82vw] max-w-[320px] bg-[#080808] border-r border-[#c8b4a0]/[0.08] flex flex-col overflow-y-auto"
            style={{ transform: "translateX(-100%)" }}
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.05] flex-shrink-0">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="text-base font-light text-[#c8b4a0]">K</span>
                  <div className="absolute inset-0 border border-[#c8b4a0]/30 rounded-lg" />
                </div>
                <span className="text-sm font-light tracking-[0.15em] text-white">
                  KAIZEN<span className="text-[#c8b4a0]">.</span>
                </span>
              </Link>
              <button
                onClick={closeMenu}
                className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-[#c8b4a0]/40 transition-colors"
              >
                <X className="w-4 h-4 text-white/60 hover:text-[#c8b4a0] transition-colors" />
              </button>
            </div>

            {/* Nav links — single column */}
            <nav className="flex-1 flex flex-col gap-1 px-5 py-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MenuNavLink
                    key={link.name}
                    href={link.href}
                    isActive={isActive}
                    onClick={closeMenu}
                    label={link.name}
                    className="sidebar-link text-[1.75rem] py-1.5"
                  />
                );
              })}
            </nav>

            {/* Sidebar bottom */}
            <div className="sidebar-bottom px-5 py-5 border-t border-white/[0.05] flex-shrink-0 space-y-4">
              <div>
                <div className="text-[9px] text-white/20 uppercase tracking-widest mb-1">
                  Business Enquiries
                </div>
                <a
                  href="mailto:hello@kaizeninfinities.com"
                  className="text-xs font-light text-white/50 hover:text-[#c8b4a0] transition-colors"
                >
                  hello@kaizeninfinities.com
                </a>
              </div>

              {/* Schedule Call CTA (mobile) */}
              <AnimatedButton
                px="px-4"
                py="py-3"
                className="w-full bg-[#c8b4a0] text-[#080808] rounded-none text-[12px] font-medium tracking-[0.1em] justify-center"
              >
                Schedule Call
              </AnimatedButton>

              <div className="flex flex-wrap gap-4 pt-1">
                {["LinkedIn", "Twitter", "GitHub", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[10px] font-medium tracking-[0.15em] text-white/30 hover:text-[#c8b4a0] uppercase transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ══════════════ DESKTOP FULLSCREEN OVERLAY (≥ lg) ══════════════ */}
      {isOpen && !isMobile && (
        <div
          ref={overlayRef}
          className="fixed inset-x-0 bottom-0 top-[80px] z-[90] bg-[#080808] flex flex-col overflow-y-auto"
        >
          <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full px-6 lg:px-6 relative z-10">
            {/* Links 2-col grid */}
            <nav className="grid grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-5 my-auto py-10">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MenuNavLink
                    key={link.name}
                    href={link.href}
                    isActive={isActive}
                    onClick={closeMenu}
                    label={link.name}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] py-1"
                  />
                );
              })}
            </nav>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/[0.06]">
              <div className="menu-bottom-item">
                <div className="text-[10px] text-white/20 uppercase tracking-widest mb-1">
                  Business Enquiries
                </div>
                <a
                  href="mailto:hello@kaizeninfinities.com"
                  className="text-sm font-light text-white/50 hover:text-[#c8b4a0] transition-colors"
                >
                  hello@kaizeninfinities.com
                </a>
              </div>
              <div className="menu-bottom-item flex gap-6">
                {["LinkedIn", "Twitter", "GitHub", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[11px] font-medium tracking-[0.15em] text-white/30 hover:text-[#c8b4a0] uppercase transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
