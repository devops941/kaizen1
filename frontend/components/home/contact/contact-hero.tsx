'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { ArrowRight, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cch-eyebrow", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
      });

      gsap.from(".cch-title-line", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      });

      gsap.from(".cch-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
      });

      gsap.from(".cch-stat", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: containerRef.current, start: "top 65%" }
      });

      gsap.from(".cch-float", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
      });

      gsap.to(".cch-content", {
        y: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const STATS = [
    { icon: Phone, value: "24/7", label: "Support" },
    { icon: Mail, value: "< 24h", label: "Response" },
    { icon: MapPin, value: "1", label: "Office" },
    { icon: MessageSquare, value: "100%", label: "Commitment" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden bg-[#080808] flex items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.03]"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)`,
          background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] opacity-[0.02]"
        style={{
          transform: `translate(50%, 50%) translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
          background: 'radial-gradient(circle, #c8b4a0 0%, transparent 70%)'
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="cch-float absolute top-[15%] left-[10%] w-16 h-16 rounded-2xl bg-[#0f0f0f] border border-[#c8b4a0]/10 flex items-center justify-center"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          <MessageSquare className="w-7 h-7 text-[#c8b4a0]/40" />
        </div>
        <div
          className="cch-float absolute top-[25%] right-[15%] w-14 h-14 rounded-xl bg-[#0f0f0f] border border-[#c8b4a0]/10 flex items-center justify-center"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
        >
          <Phone className="w-6 h-6 text-[#c8b4a0]/30" />
        </div>
        <div
          className="cch-float absolute bottom-[30%] left-[8%] w-12 h-12 rounded-lg bg-[#0f0f0f] border border-[#c8b4a0]/10 flex items-center justify-center"
          style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 25}px)` }}
        >
          <Mail className="w-5 h-5 text-[#c8b4a0]/30" />
        </div>
        <div
          className="cch-float absolute bottom-[20%] right-[10%] w-14 h-14 rounded-xl bg-[#0f0f0f] border border-[#c8b4a0]/10 flex items-center justify-center"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
        >
          <MapPin className="w-6 h-6 text-[#c8b4a0]/40" />
        </div>
      </div>

      <div className="cch-content container mx-auto px-6 lg:px-16 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="cch-eyebrow flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-medium tracking-[0.3em] text-[#c8b4a0]/70 uppercase">
              Contact Us
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-6">
            <span className="cch-title-line block text-white">Your Digital Transformation</span>
            <span className="cch-title-line block text-[#c8b4a0]">Starts with a</span>
            <span className="cch-title-line block text-white/80">Conversation</span>
          </h1>

          <p className="cch-subtitle text-base md:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you&apos;re exploring ERP solutions, custom software, AI, cloud modernization, 
            cybersecurity, or enterprise training, our team is ready to help.
          </p>

          <div className="cch-stat grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center p-4 bg-[#0f0f0f]/50 border border-white/[0.04]">
                <stat.icon className="w-5 h-5 text-[#c8b4a0]/50 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/30 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton
              px="px-6"
              py="py-4"
              icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#c8b4a0] text-[#080808] rounded-none text-[13px] font-medium tracking-[0.1em]"
            >
              Get in Touch
            </AnimatedButton>
            <AnimatedButton
              px="px-6"
              py="py-4"
              className="border border-white/[0.1] text-[13px] font-medium tracking-[0.1em] text-white/50 hover:text-white/70 hover:border-[#c8b4a0]/30 transition-all duration-300"
            >
              Schedule a Call
            </AnimatedButton>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c8b4a0]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/10 to-transparent" />
    </section>
  );
}
