'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
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

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
        delay: 0.4,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    document.body.style.overflow = isMobileOpen ? "" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[#c8b4a0]/[0.08]"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-item px-3 py-2 text-[12px] font-medium tracking-wide transition-all duration-300 ${isActive
                      ? "text-[#c8b4a0]"
                      : "text-white/40 hover:text-white/70"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button className="hidden lg:inline-flex bg-[#c8b4a0] text-[#080808] rounded-none px-6 py-5 text-[11px] font-medium tracking-[0.1em] hover:bg-[#d4c4b0] transition-colors duration-300">
              Schedule Call
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden text-white/70 hover:text-white hover:bg-transparent"
              onClick={toggleMobileMenu}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-[#080808]/98 backdrop-blur-xl border-b border-[#c8b4a0]/[0.08] transition-all duration-500 ${isMobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
        <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMobileMenu}
                className={`px-4 py-3 text-sm font-light tracking-wide rounded-lg transition-all duration-300 ${isActive
                    ? "text-[#c8b4a0] bg-[#c8b4a0]/5"
                    : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 mt-4 border-t border-white/[0.06]">
            <Button className="w-full bg-[#c8b4a0] text-[#080808] rounded-none py-5 text-[11px] font-medium tracking-[0.1em]">
              Schedule Call
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
