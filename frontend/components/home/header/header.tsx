'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
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
  { name: "Contact", href: "/contact" },
];

interface MenuNavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function MenuNavLink({ href, label, isActive, onClick }: MenuNavLinkProps) {
  const chars = label.split("");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group menu-link relative text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tighter uppercase transition-colors duration-300 block w-fit py-1 overflow-hidden select-none ${isActive ? "text-[#c8b4a0]" : "text-white/40 hover:text-white"
        }`}
    >
      <span className="sr-only">{label}</span>
      <span className="flex overflow-hidden" aria-hidden="true">
        {chars.map((char, index) => (
          <span
            key={index}
            className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{
              transitionDelay: `${index * 0.015}s`,
              marginRight: char === " " ? "0.25em" : "0"
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
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // GSAP animation for overlay menu (on mount)
  useEffect(() => {
    if (isOpen && menuRef.current) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();

      // Ensure element opacity is reset before fade-in
      gsap.set(menuRef.current, { opacity: 0 });

      tl.to(menuRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
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
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setIsOpen(false);
      }
    });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isOpen
          ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[#c8b4a0]/[0.08]"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-18 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="header-reveal flex items-center gap-3 group" onClick={isOpen ? closeMenu : undefined}>
              <div className="relative w-9 h-9 flex items-center justify-center">
                <span className="text-lg font-light text-[#c8b4a0]">K</span>
                <div className="absolute inset-0 border border-[#c8b4a0]/30 rounded-lg group-hover:border-[#c8b4a0]/50 transition-colors duration-300" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-light tracking-[0.15em] text-white">
                  KAIZEN<span className="text-[#c8b4a0]">.</span>
                </span>
                <span className="hidden lg:block text-[10px] font-medium tracking-[0.2em] text-white/30 ml-1">
                  INFINITIES
                </span>
              </div>
            </Link>

            {/* CTA & Hamburger */}
            <div className="header-reveal flex items-center gap-4">
              <Button className="hidden sm:inline-flex bg-[#c8b4a0] text-[#080808] rounded-none px-6 py-5 text-[11px] font-medium tracking-[0.1em] hover:bg-[#d4c4b0] transition-colors duration-300">
                Schedule Call
              </Button>

              <button
                onClick={isOpen ? closeMenu : () => setIsOpen(true)}
                className="w-11 h-11 flex items-center justify-center border border-white/10 hover:border-[#c8b4a0]/40 transition-colors duration-300 cursor-pointer group"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-white/70 group-hover:text-[#c8b4a0] transition-colors duration-300" />
                ) : (
                  <Menu className="w-5 h-5 text-white/70 group-hover:text-[#c8b4a0] transition-colors duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu - Starts under the header */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-x-0 bottom-0 top-[72px] lg:top-[80px] z-[90] bg-[#080808] flex flex-col overflow-y-auto"
        >
          <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full p-8 lg:p-12 relative">
            {/* Links Grid */}
            <nav className="grid grid-cols-2 gap-x-12 gap-y-4 lg:gap-y-5 my-auto py-10">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MenuNavLink
                    key={link.name}
                    href={link.href}
                    isActive={isActive}
                    onClick={closeMenu}
                    label={link.name}
                  />
                );
              })}
            </nav>

            {/* Bottom details */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/[0.04]">
              <div className="menu-bottom-item">
                <div className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Business Enquiries</div>
                <a href="mailto:hello@kaizeninfinities.com" className="text-sm font-light text-white/50 hover:text-[#c8b4a0] transition-colors">
                  hello@kaizeninfinities.com
                </a>
              </div>

              <div className="menu-bottom-item flex gap-6">
                {["LinkedIn", "Twitter", "GitHub", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[11px] font-medium tracking-[0.15em] text-white/30 hover:text-[#c8b4a0] uppercase transition-colors"
                  >
                    {social}
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
