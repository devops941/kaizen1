'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "../animated-button";
import { Database, Globe, Smartphone, Brain, Cloud, Server, ShieldCheck, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { icon: Database, title: "Digital Engineering", desc: "ERP, CRM, HRMS, Accounting, Inventory — enterprise solutions.", tags: ["ERP", "CRM", "HRMS"] },
  { icon: Globe, title: "Web Engineering", desc: "Modern, responsive, scalable web applications.", tags: ["Next.js", "React", "Node.js"] },
  { icon: Smartphone, title: "Mobile Engineering", desc: "Android, iOS and cross-platform enterprise apps.", tags: ["Flutter", "iOS", "Android"] },
  { icon: Brain, title: "Artificial Intelligence", desc: "ML, BI, AI chatbots, and intelligent automation.", tags: ["ML", "NLP", "AI"] },
  { icon: Cloud, title: "Cloud Engineering", desc: "AWS, Azure, GCP migration and DevOps.", tags: ["AWS", "Azure", "GCP"] },
  { icon: Server, title: "Infrastructure", desc: "Enterprise networking, servers, and security.", tags: ["Cisco", "Fortinet", "VMware"] },
];

export function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".eco-header",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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

      gsap.fromTo(
        ".eco-card",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: gridRef.current || sectionRef.current,
            start: "top 90%",
            once: true,
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        ".eco-featured",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: gridRef.current || sectionRef.current,
            start: "bottom 95%",
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
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f4f3ef] border-y border-zinc-200/80 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(#080808 1px, transparent 1px), linear-gradient(90deg, #080808 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="eco-header flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
            <span className="text-[11px] font-semibold text-[#9e7b56] uppercase tracking-[0.25em]">Our Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <AnimatedTitle
              theme="light"
              className="eco-header text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] max-w-2xl"
              segments={[
                { text: "Our Business " },
                { text: "Ecosystem", isHighlighted: true }
              ]}
            />
            <p className="eco-header text-base text-[#080808]/60 max-w-md leading-relaxed font-light">
              One technology partner for every digital challenge — from software to cloud to cybersecurity.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="eco-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="eco-card group relative bg-white border border-zinc-200/90 p-8 cursor-pointer overflow-hidden shadow-xs hover:border-[#9e7b56]/40 hover:shadow-md transition-all duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#9e7b56]/5 to-transparent" />

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-lg group-hover:border-[#9e7b56]/40 group-hover:bg-[#9e7b56]/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#9e7b56] transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#080808] mb-2 group-hover:text-[#9e7b56] transition-colors">{service.title}</h3>
                  <p className="text-sm text-[#080808]/60 leading-relaxed mb-5 font-light">{service.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-semibold text-[#080808]/60 uppercase tracking-wider px-2 py-1 bg-zinc-100 border border-zinc-200/80 group-hover:border-[#9e7b56]/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-4 h-4 text-[#9e7b56]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured - CyberNex */}
        <div className="eco-featured group relative bg-[#080808] border border-[#c8b4a0]/20 p-8 lg:p-12 cursor-pointer overflow-hidden shadow-xl hover:border-[#c8b4a0]/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c8b4a0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-[#c8b4a0]/30 rounded-lg bg-[#c8b4a0]/10">
                  <ShieldCheck className="w-6 h-6 text-[#c8b4a0]" />
                </div>
                <span className="text-[11px] font-semibold text-[#c8b4a0] uppercase tracking-[0.2em]">Featured Division</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-light text-white tracking-tight mb-4">
                Cyber Security Excellence — <br className="hidden lg:block" />
                <span className="text-[#c8b4a0]">Powered by CyberNex</span>
              </h3>
              <p className="text-white/60 leading-relaxed max-w-xl font-light">
                South India&apos;s Next Generation Cyber Security Experience Center. Enterprise-grade cyber range for ethical hacking, SOC, digital forensics, and incident response.
              </p>
            </div>

            <div className="flex-shrink-0">
              <AnimatedButton
                px="px-5"
                py="py-4"
                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="bg-[#c8b4a0] text-[#080808] text-[13px] font-medium tracking-[0.1em] hover:bg-[#d4c4b0]"
              >
                Explore CyberNex
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
