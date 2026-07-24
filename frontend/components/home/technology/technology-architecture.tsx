'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Users, Monitor, Smartphone, Shield, Server, Database, Cloud, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ARCH_LAYERS = [
    { num: "LAYER 01", icon: Users, label: "Presentation Layer", desc: "Responsive Web Portals, Cross-Platform Mobile Apps, Admin Dashboards & Customer Interfaces" },
    { num: "LAYER 02", icon: Monitor, label: "API Gateway & Security Edge", desc: "Rate limiting, SSL termination, request routing, Web Application Firewall (WAF) & DDoS protection" },
    { num: "LAYER 03", icon: Server, label: "Core Business Logic", desc: "Modular microservices architecture, RESTful & GraphQL APIs, event-driven message queues" },
    { num: "LAYER 04", icon: Shield, label: "AI & Intelligence Services", desc: "Applied AI models, predictive analytics, document OCR, NLP assistants, & business rules engines" },
    { num: "LAYER 05", icon: Lock, label: "Authentication & Identity (IAM)", desc: "OAuth 2.0 / OIDC, Role-Based Access Control (RBAC), Multi-Factor Auth (MFA) & SSO integration" },
    { num: "LAYER 06", icon: Cloud, label: "Multi-Cloud Infrastructure", desc: "AWS, Azure, and GCP container orchestration with Docker & Kubernetes" },
    { num: "LAYER 07", icon: Database, label: "Data Management Layer", desc: "High-performance Relational (PostgreSQL) & NoSQL (MongoDB, Redis) databases with automated replication" },
    { num: "LAYER 08", icon: Smartphone, label: "Infrastructure & Security Monitoring", desc: "24/7 SIEM monitoring, automated backups, disaster recovery & zero-downtime failover" },
];

export function TechnologyArchitecture() {
    const sectionRef = useRef<HTMLElement>(null);
    const layersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".ta-header-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".ta-layer",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: layersRef.current || sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (sectionRef.current) {
                const hiddenEls = sectionRef.current.querySelectorAll('.ta-header-item, .ta-layer');
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <div className="ta-header-item flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Enterprise Architecture
                        </span>
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="ta-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
                        segments={[
                            { text: "Designed for " },
                            { text: "Performance", isHighlighted: true },
                            { text: ". Built for Scale." }
                        ]}
                    />

                    <p className="ta-header-item text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-light">
                        Our 8-layer modular technology architecture ensures high availability, strict security compliance, and zero technical debt.
                    </p>
                </div>

                {/* Architecture Layers List */}
                <div ref={layersRef} className="max-w-4xl mx-auto space-y-3">
                    {ARCH_LAYERS.map((layer, i) => {
                        const Icon = layer.icon;
                        return (
                            <div key={i} className="ta-layer group relative flex items-center justify-between gap-4 p-5 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 shadow-lg text-left overflow-hidden">
                                {/* Left Accent Line */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div className="flex items-center gap-4 flex-1">
                                    <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none flex-shrink-0">
                                        {layer.num}
                                    </span>
                                    <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300 flex-shrink-0">
                                        <Icon className="w-5 h-5 text-[#c8b4a0]" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
                                            {layer.label}
                                        </h3>
                                        <p className="text-xs text-white/70 font-light leading-relaxed mt-0.5">{layer.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
