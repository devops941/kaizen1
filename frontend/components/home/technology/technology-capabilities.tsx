'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Shield, Brain, Wifi, Link2, BarChart3, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
    {
        icon: Shield,
        title: "Cybersecurity Integration",
        subtitle: "Security Built Into Every Architecture Layer",
        note: "Powered by CyberNex",
        items: ["Secure Coding Standards", "Data Encryption at Rest & Transit", "Role-Based Access Control (RBAC)", "Vulnerability Assessments & Pen Testing", "Automated Audit Logging", "SOC2 / ISO Security Compliance"]
    },
    {
        icon: Brain,
        title: "AI & Intelligent Automation",
        subtitle: "Transforming Enterprise Data into Decisions",
        note: "Applied Machine Learning",
        items: ["Generative AI Integration", "Document Intelligence & OCR", "Custom ML Model Training", "Predictive Analytics Engines", "Intelligent Workflow Automation", "BI Analytics & Dashboards"]
    },
    {
        icon: Wifi,
        title: "Internet of Things (IoT)",
        subtitle: "Connecting Physical Operations to Digital Cloud",
        note: "Edge Computing",
        items: ["Industrial Monitoring Systems", "Asset & Fleet GPS Tracking", "Smart Attendance & Access Control", "Agriculture Automation Sensors", "Real-Time Telemetry Processing", "Smart Campus Infrastructure"]
    },
    {
        icon: Link2,
        title: "System & API Integration",
        subtitle: "Bringing Legacy & Modern Ecosystems Together",
        note: "Enterprise Gateway",
        items: ["Payment Gateway Solutions", "SMS / WhatsApp / Email Gateway", "Government API Integrations", "ERP / CRM / Accounting Connectors", "Biometric Hardware APIs", "Cloud & Microservice Mesh"]
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        subtitle: "Executive Dashboards Powered by Real-Time Data",
        note: "Analytics & Insights",
        items: ["Executive C-Suite Dashboards", "Sales, Finance & HR Analytics", "Student & Customer Insights", "Inventory & Supply Chain Tracking", "Operational KPI Telemetry", "Custom Automated Reporting"]
    },
];

export function TechnologyCapabilities() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".tc-header-item",
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
                ".tc-card",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: gridRef.current || sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (sectionRef.current) {
                const hiddenEls = sectionRef.current.querySelectorAll('.tc-header-item, .tc-card');
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#080808] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="tc-header-item flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            Integrated Capabilities
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="tc-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Powerful " },
                            { text: "Integrated", isHighlighted: true },
                            { text: " Solutions" }
                        ]}
                    />

                    <p className="tc-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Deep technological capabilities engineered for security, intelligence, hardware integration, and analytics.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
                    {CAPABILITIES.map((cap, i) => {
                        const Icon = cap.icon;
                        return (
                            <div key={i} className="tc-card group relative p-6 bg-[#0f0f0f] border border-white/[0.08] rounded-none hover:border-[#c8b4a0]/50 hover:bg-[#141414] transition-all duration-300 text-left overflow-hidden flex flex-col justify-between">
                                {/* Left Accent Line */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-[#c8b4a0]" />
                                        </div>
                                        <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2 py-0.5 border border-[#c8b4a0]/20 rounded-none">
                                            {cap.note}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white group-hover:text-[#c8b4a0] transition-colors mb-1">
                                        {cap.title}
                                    </h3>
                                    <p className="text-xs text-white/70 font-light mb-6 leading-relaxed">
                                        {cap.subtitle}
                                    </p>

                                    {/* Items List */}
                                    <div className="space-y-2 border-t border-white/10 pt-4">
                                        {cap.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-2 text-xs font-mono text-white/80">
                                                <Check className="w-3.5 h-3.5 text-[#c8b4a0] flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
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
