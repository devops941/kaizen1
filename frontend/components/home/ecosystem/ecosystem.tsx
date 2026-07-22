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
      gsap.from(".eco-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });

      gsap.from(".eco-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/15 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="eco-header flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.25em]">Our Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <AnimatedTitle
              className="eco-header text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] max-w-2xl"
              segments={[
                { text: "Our Business " },
                { text: "Ecosystem", isHighlighted: true }
              ]}
            />
            <p className="eco-header text-base text-white/40 max-w-md leading-relaxed">
              One technology partner for every digital challenge — from software to cloud to cybersecurity.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="eco-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="eco-card group relative bg-[#0f0f0f] border border-white/[0.06] p-8 cursor-pointer overflow-hidden hover:border-[#c8b4a0]/20 transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#c8b4a0]/5 to-transparent" />

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[#c8b4a0]/20 rounded-lg group-hover:border-[#c8b4a0]/40 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#c8b4a0]/60 group-hover:text-[#c8b4a0] transition-colors" />
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#c8b4a0] transition-colors">{service.title}</h3>
                  <p className="text-sm text-white/30 leading-relaxed mb-5">{service.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-medium text-white/20 uppercase tracking-wider px-2 py-1 border border-white/[0.06] group-hover:border-[#c8b4a0]/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-4 h-4 text-[#c8b4a0]/60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured - CyberNex */}
        <div className="eco-featured group relative bg-[#0f0f0f] border border-[#c8b4a0]/10 p-8 lg:p-12 cursor-pointer overflow-hidden hover:border-[#c8b4a0]/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c8b4a0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-[#c8b4a0]/30 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-[#c8b4a0]" />
                </div>
                <span className="text-[11px] font-medium text-[#c8b4a0]/60 uppercase tracking-[0.2em]">Featured Division</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-light text-white tracking-tight mb-4">
                Cyber Security Excellence — <br className="hidden lg:block" />
                <span className="text-[#c8b4a0]">Powered by CyberNex</span>
              </h3>
              <p className="text-white/40 leading-relaxed max-w-xl">
                South India&apos;s Next Generation Cyber Security Experience Center. Enterprise-grade cyber range for ethical hacking, SOC, digital forensics, and incident response.
              </p>
            </div>

            <div className="flex-shrink-0">
              <AnimatedButton
                px="px-5"
                py="py-4"
                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="bg-[#c8b4a0] text-[#080808] text-[13px] font-medium tracking-[0.1em]"
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

