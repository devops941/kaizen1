'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { MapPin, Phone, Mail, Globe, Clock, Link, Share2, MessageCircle, Video, Building2, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { icon: Link, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Share2, label: "Facebook", href: "https://facebook.com" },
  { icon: MessageCircle, label: "Instagram", href: "https://instagram.com" },
  { icon: Video, label: "YouTube", href: "https://youtube.com" },
];

export function ContactInfo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".ci-header-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all"
        }
      );

      gsap.fromTo(
        ".ci-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
          clearProps: "all"
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (sectionRef.current) {
        const hiddenEls = sectionRef.current.querySelectorAll('.ci-header-item, .ci-card');
        hiddenEls.forEach(el => {
          (el as HTMLElement).style.opacity = '1';
        });
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#080808] text-white overflow-hidden border-b border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <div className="ci-header-item flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-none bg-[#c8b4a0] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c8b4a0] uppercase">
              // GET IN TOUCH · CORPORATE HEADQUARTERS
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-[#c8b4a0]/40 to-transparent" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="ci-header-item text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.04] mb-6"
            segments={[
              { text: "Corporate " },
              { text: "Headquarters", isHighlighted: true },
              { text: " & Reach" }
            ]}
          />

          <p className="ci-header-item text-base md:text-lg text-white/80 leading-relaxed font-light max-w-2xl">
            Connect directly with our corporate team for enterprise software, ERP implementations, AI solutions, 
            cloud transformations, and CyberNex cybersecurity engagements.
          </p>
        </div>

        {/* 2-Column Info & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="ci-card p-7 bg-[#0f0f0f] border border-white/[0.08] rounded-none shadow-xl space-y-6">
              
              <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 bg-[#c8b4a0]/10 text-[#c8b4a0] rounded-none flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mb-1">Corporate Address</h3>
                  <p className="text-sm font-bold text-white leading-snug">Kaizen Infinities Private Limited</p>
                  <p className="text-xs text-white/70 font-mono mt-0.5">Madurai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 bg-[#c8b4a0]/10 text-[#c8b4a0] rounded-none flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mb-1">Official Email</h3>
                  <p className="text-sm font-bold text-white font-mono">contact@kaizeninfinities.com</p>
                  <p className="text-xs text-white/70 font-mono mt-0.5">Response SLA: Within 24 Business Hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 bg-[#c8b4a0]/10 text-[#c8b4a0] rounded-none flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mb-1">Direct Phone</h3>
                  <p className="text-sm font-bold text-white font-mono">+91 (0452) 350-0900</p>
                  <p className="text-xs text-white/70 font-mono mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 bg-[#c8b4a0]/10 text-[#c8b4a0] rounded-none flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mb-1">Web Presence</h3>
                  <p className="text-sm font-bold text-white font-mono">www.kaizeninfinities.com</p>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="ci-card p-6 bg-[#0f0f0f] border border-white/[0.08] rounded-none shadow-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Official Channels</h4>
                <p className="text-[11px] font-mono text-white/50">Follow for updates & technical insights</p>
              </div>

              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center border border-white/10 bg-[#080808] text-white/60 hover:text-[#c8b4a0] hover:border-[#c8b4a0] transition-all rounded-none"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Location HUD Node */}
          <div className="lg:col-span-6 ci-card">
            <div className="h-full min-h-[380px] p-7 bg-[#0f0f0f] border border-white/[0.08] rounded-none shadow-2xl relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8b4a0]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#c8b4a0]" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Regional Headquarters</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-0.5 border border-[#c8b4a0]/20">
                    SOUTH INDIA HUB
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#080808] border border-white/10 rounded-none">
                    <div className="text-xs font-mono font-bold text-[#c8b4a0] mb-1">FACILITY OVERVIEW</div>
                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      Our Madurai headquarters houses Kaizen Digital Solutions, Kaizen Innovation Labs, and 
                      the CyberNex Cyber Security Experience Center of Excellence.
                    </p>
                  </div>

                  <div className="p-4 bg-[#080808] border border-white/10 rounded-none space-y-2">
                    <div className="text-xs font-mono font-bold text-[#c8b4a0]">SECURITY & COMPLIANCE ASSURANCE</div>
                    <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>NDAs & Enterprise Confidentiality Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>24/7 SOC Threat Monitoring Desk</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>LOCAL TIME: IST (UTC +5:30)</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
                  DESK OPEN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
