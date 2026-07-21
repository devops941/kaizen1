'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

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

  useEffect(() => {
    // GSAP Rainbow Animation for the active link
    if (activeLinkRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(activeLinkRef.current, {
          backgroundPosition: "200% center",
          ease: "none",
          duration: 3,
          repeat: -1,
        });
      }, activeLinkRef);
      return () => ctx.revert();
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase text-foreground">
              Kaizen<span className="text-primary">.</span>Infinities
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                ref={isActive ? activeLinkRef : null}
                className={`text-[13px] font-bold tracking-wider transition-colors relative group
                  ${isActive 
                    ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent" 
                    : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {link.name}
                {isActive ? (
                  <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full"></span>
                ) : (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Section */}
        <div className="flex items-center shrink-0">
          <Button className="hidden lg:inline-flex rounded-full px-7 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" size="default">
            Schedule Consultation
          </Button>
          
          {/* Mobile Menu Placeholder */}
          <Button variant="ghost" size="icon" className="xl:hidden ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
        
      </div>
    </header>
  );
}
