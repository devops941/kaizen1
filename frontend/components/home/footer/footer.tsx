'use client';

import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedLink } from "../animated-link";
import React from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

// Animated social link with icon support
function AnimatedSocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  const chars = label.split("");
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-sm text-white/40 group transition-colors"
    >
      <Icon className="w-4 h-4 flex-shrink-0 transition-colors duration-300 group-hover:text-[#c8b4a0]" />
      <span className="inline-flex flex-wrap overflow-hidden" aria-label={label}>
        {chars.map((char, idx) => (
          <span key={idx} className="relative inline-flex overflow-hidden leading-tight">
            <span
              className="relative inline-block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${idx * 0.015}s`, transitionDuration: '0.4s' }}
            >
              {char === " " ? "\u00A0" : char}
              <span
                className="absolute top-full left-0 text-[#c8b4a0]"
                style={{ transitionDelay: `${idx * 0.015}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          </span>
        ))}
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#080808] text-white/40 overflow-hidden pt-24 pb-12 border-t border-white/[0.06]">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/30 to-transparent" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Newsletter - Span 5 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <span className="text-lg font-light text-[#c8b4a0]">K</span>
                    <div className="absolute inset-0 border border-[#c8b4a0]/30 rounded-lg" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-light tracking-[0.15em] text-white">
                      KAIZEN<span className="text-[#c8b4a0]">.</span>
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/30">
                      INFINITIES
                    </span>
                  </div>
                </div>
              </Link>
              <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-md">
                Engineering intelligent digital enterprises through advanced cloud infrastructure, AI-powered automation, and zero-trust cybersecurity excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a href="mailto:contact@kaizeninfinities.com" className="flex items-center gap-3 text-sm text-white/40 hover:text-[#c8b4a0] transition-colors">
                  <Mail className="w-4 h-4 text-[#c8b4a0]/50" />
                  contact@kaizeninfinities.com
                </a>
                <div className="flex items-center gap-3 text-sm text-white/40">
                  <MapPin className="w-4 h-4 text-[#c8b4a0]/50" />
                  Chennai, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Stay Updated</h4>
              <div className="flex items-center max-w-sm">
                <input
                  type="email"
                  placeholder="Enterprise email address"
                  className="bg-[#0f0f0f] border border-white/[0.06] text-white px-4 py-3 w-full focus:outline-none focus:border-[#c8b4a0]/30 transition-colors text-sm placeholder:text-white/20"
                />
                <Button className="bg-[#c8b4a0] hover:bg-[#d4c4b0] text-[#080808] rounded-none px-6 py-3 h-auto ml-1">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Grid - Span 7 */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Solutions</h4>
              <ul className="space-y-4 text-sm">
                <li><AnimatedLink href="/cybernex" className="text-white/40">CyberNex Security</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">Cloud Infrastructure</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">AI Automation</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">ERP Systems</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">Custom Software</AnimatedLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Framework</h4>
              <ul className="space-y-4 text-sm">
                <li><AnimatedLink href="/kinetic" className="text-white/40">KINETIC™ Delivery</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">Zero-Trust Architecture</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">Agile Engineering</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">CI/CD Pipelines</AnimatedLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><AnimatedLink href="/about" className="text-white/40">About Us</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">Careers</AnimatedLink></li>
                <li><AnimatedLink href="#" className="text-white/40">Case Studies</AnimatedLink></li>
                <li><AnimatedLink href="/contact" className="text-white/40">Contact</AnimatedLink></li>
                <li><AnimatedLink href="/resources" className="text-white/40">Resources</AnimatedLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Connect</h4>
              <div className="flex flex-col space-y-4">
                <AnimatedSocialLink href="#" icon={LinkedinIcon} label="LinkedIn" />
                <AnimatedSocialLink href="#" icon={TwitterIcon} label="Twitter" />
                <AnimatedSocialLink href="#" icon={YoutubeIcon} label="YouTube" />
                <AnimatedSocialLink href="#" icon={GithubIcon} label="GitHub" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Kaizen Infinities Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <AnimatedLink href="#" className="text-white/30">Privacy Policy</AnimatedLink>
            <AnimatedLink href="#" className="text-white/30">Terms of Service</AnimatedLink>
            <AnimatedLink href="#" className="text-white/30">Cookie Policy</AnimatedLink>
          </div>
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c8b4a0]/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
