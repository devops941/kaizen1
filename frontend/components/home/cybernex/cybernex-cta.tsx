'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, MessageSquare, Shield, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CybernexCTA() {
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
        ".ccta-content",
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
      className="relative py-15 lg:py-30 overflow-hidden bg-[#030712] text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        
        {/* Animated Gradient Orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04]"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
            background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)'
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div
          className="ccta-float absolute top-[15%] left-[12%] w-16 h-16 rounded-none bg-[#0b1329] border border-[#00d4ff]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          <Shield className="w-7 h-7 text-[#00d4ff]" />
        </div>
        <div
          className="ccta-float absolute top-[25%] right-[15%] w-14 h-14 rounded-none bg-[#0b1329] border border-[#00d4ff]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
        >
          <Users className="w-6 h-6 text-[#00d4ff]" />
        </div>
        <div
          className="ccta-float absolute bottom-[20%] left-[15%] w-12 h-12 rounded-none bg-[#0b1329] border border-[#00d4ff]/30 flex items-center justify-center shadow-lg"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 20}px)` }}
        >
          <MessageSquare className="w-5 h-5 text-[#00d4ff]" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ccta-content flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#00d4ff]" />
            <span className="text-[11px] font-mono font-medium tracking-[0.3em] text-[#00d4ff] uppercase">
              Get Started
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>

          <h2 className="ccta-content text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8">
            <span className="block text-white">Security Innovation Begins</span>
            <span className="block text-[#00d4ff]">with a Conversation</span>
          </h2>

          <p className="ccta-content text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Ready to strengthen your enterprise cybersecurity posture? Let&apos;s discuss how CyberNex can 
            help protect your infrastructure.
          </p>

          <div className="ccta-content flex flex-wrap items-center justify-center gap-4 mb-16">
            <AnimatedButton
              px="px-8"
              py="py-5"
              icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#00d4ff] text-[#030712] rounded-none text-[14px] font-mono font-bold tracking-[0.1em]"
            >
              Explore CyberNex Solutions
            </AnimatedButton>

            <AnimatedButton
              px="px-8"
              py="py-5"
              icon={<MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              className="border border-[#00d4ff]/40 text-[14px] font-mono font-medium tracking-[0.1em] text-white hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300 rounded-none"
            >
              Partner with Security Experts
            </AnimatedButton>
          </div>

          <div className="ccta-content flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
              <span>24/7 SOC Threat Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
              <span>Enterprise Zero-Trust Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
              <span>Hands-on Cyber Range Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
