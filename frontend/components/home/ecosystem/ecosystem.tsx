'use client';

import { useEffect, useRef } from "react";
import { Database, Globe, Smartphone, Brain, Cloud, Server, ShieldCheck, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Database,
    title: "Digital Engineering",
    desc: "ERP, CRM, HRMS, Accounting, Inventory — enterprise solutions for every vertical.",
    tags: ["ERP", "CRM", "HRMS"],
  },
  {
    icon: Globe,
    title: "Web Engineering",
    desc: "Modern, responsive, scalable web applications and portals built with cutting-edge frameworks.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    desc: "Android, iOS and cross-platform enterprise mobile applications with offline sync and biometrics.",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Machine Learning, BI, AI chatbots, document processing, predictive analytics, and intelligent automation agents.",
    tags: ["ML", "NLP", "Automation"],
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    desc: "AWS, Azure, Google Cloud migration, virtualization, containerization and DevOps.",
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    icon: Server,
    title: "Infrastructure Solutions",
    desc: "Enterprise networking, servers, firewalls, VPN, NAS storage and data center setup.",
    tags: ["Cisco", "Fortinet", "VMware"],
  },
];

export function Ecosystem() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.eco-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Our Services</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter leading-[1.05] uppercase max-w-xl">
              Our Business <span className="text-zinc-400">Ecosystem</span>
            </h2>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              One technology partner for every digital challenge — from software to cloud to cybersecurity.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="eco-card group relative bg-white border border-zinc-200 p-7 rounded-2xl hover:border-zinc-400 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-950 tracking-tight mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-widest bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CyberNex Featured Card */}
        <div className="group relative bg-zinc-950 border border-zinc-800 p-8 md:p-10 rounded-2xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Featured Division</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-3">
                Cyber Security Excellence —<br className="hidden md:block" /> Powered by <span className="text-emerald-400">CyberNex</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                South India's Next Generation Cyber Security Experience Center. Enterprise-grade cyber range for ethical hacking, SOC, digital forensics, cloud security, and incident response.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-colors duration-300 group/btn">
                Explore CyberNex
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

