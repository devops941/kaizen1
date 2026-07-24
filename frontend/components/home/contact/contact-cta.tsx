'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, MessageSquare, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cct-content",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
      className="relative py-15 lg:py-30 overflow-hidden bg-[#080808] text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div
          className="cct-float absolute top-[15%] left-[12%] w-16 h-16 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/20 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          <MessageSquare className="w-7 h-7 text-[#c8b4a0]" />
        </div>
        <div
          className="cct-float absolute top-[25%] right-[15%] w-14 h-14 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/20 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
        >
          <Phone className="w-6 h-6 text-[#c8b4a0]" />
        </div>
        <div
          className="cct-float absolute bottom-[20%] left-[15%] w-12 h-12 rounded-none bg-[#0f0f0f] border border-[#c8b4a0]/20 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 20}px)` }}
        >
          <Mail className="w-5 h-5 text-[#c8b4a0]" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cct-content flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-medium tracking-[0.3em] text-[#c8b4a0] uppercase">
              Schedule Your Discovery Session
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          <h2 className="cct-content text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8">
            <span className="block text-white">Ready to Elevate Your</span>
            <span className="block text-[#c8b4a0]">Enterprise Architecture?</span>
          </h2>

          <p className="cct-content text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Let&apos;s discuss how Kaizen Infinities can help transform your business operations with custom ERP, 
            cloud engineering, agentic AI, and CyberNex cybersecurity.
          </p>

          <div className="cct-content flex flex-wrap items-center justify-center gap-4 mb-16">
            <AnimatedButton
              px="px-8"
              py="py-5"
              icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#c8b4a0] text-[#080808] rounded-none text-[14px] font-mono font-bold tracking-[0.1em]"
            >
              Schedule a Technical Discovery Call
            </AnimatedButton>

            <AnimatedButton
              px="px-8"
              py="py-5"
              icon={<MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              className="border border-white/20 text-[14px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#c8b4a0] hover:border-[#c8b4a0]/50 transition-all duration-300 rounded-none"
            >
              Send Us a Message
            </AnimatedButton>
          </div>

          <div className="cct-content flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
              <span>Response SLA: &lt; 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
              <span>Free Architecture Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8b4a0]" />
              <span>No-Obligation Proposal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
