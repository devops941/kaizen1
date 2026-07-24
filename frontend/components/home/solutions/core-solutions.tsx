'use client';

import { useEffect, useRef, useState } from "react";
import { AnimatedTitle } from "../animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Database, Globe, Smartphone, Brain, Cloud, Server,
    ChevronDown, CheckCircle2, ArrowRight
} from "lucide-react";
import { AnimatedButton } from "../animated-button";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
    {
        num: "01",
        icon: Database,
        title: "ERP & Enterprise Software",
        subtitle: "Enterprise Resource Planning",
        description: "Integrated business management to streamline operations, automate workflows, and gain real-time analytics across all enterprise departments.",
        features: ["Finance & Accounting", "Inventory Management", "HR & Payroll", "Supply Chain", "Manufacturing", "CRM Integration"],
        technologies: ["SAP", "Odoo", "Custom ERP", "Microsoft Dynamics"]
    },
    {
        num: "02",
        icon: Globe,
        title: "Web Engineering & Portals",
        subtitle: "Modern Scalable Web Applications",
        description: "Build high-performance, responsive web applications and portals that deliver exceptional user experiences across all devices.",
        features: ["Corporate Websites", "E-Commerce Platforms", "Educational Portals", "Government Portals", "LMS Systems", "Customer Portals"],
        technologies: ["Next.js", "React", "Node.js", "Python", "PHP", "MySQL", "PostgreSQL"]
    },
    {
        num: "03",
        icon: Smartphone,
        title: "Mobile Engineering",
        subtitle: "Cross-Platform & Native Mobile Apps",
        description: "Deploy powerful mobile experiences to Android and iOS from a unified codebase with native-level performance and UI responsiveness.",
        features: ["iOS Development", "Android Development", "Cross-Platform Apps", "Enterprise Mobility", "App Store Optimization", "Ongoing Maintenance"],
        technologies: ["Flutter", "React Native", "Swift", "Kotlin"]
    },
    {
        num: "04",
        icon: Brain,
        title: "AI & Intelligent Automation",
        subtitle: "Machine Learning & Process AI",
        description: "Transform operations with intelligent workflow automation, predictive analytics, document processing, and AI decision frameworks.",
        features: ["AI Chatbots & Agents", "Document Processing", "ML Predictive Models", "Business Intelligence", "Voice Automation"],
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Computer Vision"]
    },
    {
        num: "05",
        icon: Cloud,
        title: "Cloud Engineering & DevOps",
        subtitle: "Cloud Infrastructure Architecture",
        description: "Architect, migrate, and optimize cloud infrastructure for high availability, zero-downtime scalability, and cost efficiency.",
        features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Automation", "Containerization", "Real-Time Monitoring", "Cost Optimization"],
        technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"]
    },
    {
        num: "06",
        icon: Server,
        title: "Infrastructure & Networking",
        subtitle: "Enterprise IT Backbone",
        description: "Design and deploy robust enterprise IT infrastructure forming the secure, high-speed foundation of digital business operations.",
        features: ["Network Architecture", "Server Deployment", "Firewall & Zero-Trust", "Wireless Enterprise", "Data Center Setup", "Disaster Recovery"],
        technologies: ["Cisco", "Fortinet", "VMware", "Dell", "HPE", "MikroTik"]
    },
];

function AccordionItem({
    item,
    isOpen,
    onToggle
}: {
    item: typeof SOLUTIONS[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const Icon = item.icon;

    useEffect(() => {
        if (contentRef.current) {
            gsap.to(contentRef.current, {
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
                duration: 0.4,
                ease: "power2.inOut",
            });
        }
    }, [isOpen]);

    return (
        <div className="sol-accordion group relative bg-white border border-zinc-200 hover:border-[#9e7b56] transition-all duration-300 rounded-none shadow-xs overflow-hidden">
            {/* Left Hover Accent Bar */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

            <button
                onClick={onToggle}
                className="w-full flex items-start gap-6 p-6 lg:p-8 text-left cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#9e7b56] bg-[#9e7b56]/10 px-2.5 py-1 border border-[#9e7b56]/20 rounded-none">
                        {item.num}
                    </span>
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none group-hover:border-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300 text-[#9e7b56]">
                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs font-mono font-semibold text-[#9e7b56] uppercase tracking-wider">{item.subtitle}</p>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-zinc-400 group-hover:text-[#9e7b56] transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>

                    <p className="text-sm text-zinc-600 leading-relaxed font-light line-clamp-2 lg:line-clamp-none">
                        {item.description}
                    </p>
                </div>
            </button>

            <div
                ref={contentRef}
                className="overflow-hidden h-0"
            >
                <div className="p-6 lg:p-8 pt-0 border-t border-zinc-100 bg-[#fdfdfd]">
                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                        <div>
                            <h4 className="text-xs font-mono font-bold text-[#9e7b56] uppercase tracking-[0.2em] mb-4">Core Deliverables</h4>
                            <ul className="space-y-2">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-light">
                                        <CheckCircle2 className="w-4 h-4 text-[#9e7b56] flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-mono font-bold text-[#9e7b56] uppercase tracking-[0.2em] mb-4">Technologies & Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs font-mono font-semibold px-3 py-1.5 bg-white border border-zinc-200 text-zinc-800 rounded-none shadow-2xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CoreSolutions() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".sol-header-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
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
                ".sol-accordion",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="sol-header-item flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                        <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">Our Core Solutions</span>
                    </div>
                    <AnimatedTitle
                        theme="light"
                        className="sol-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
                        segments={[
                            { text: "Comprehensive " },
                            { text: "Technology Solutions", isHighlighted: true }
                        ]}
                    />
                    <p className="sol-header-item text-base text-zinc-600 leading-relaxed font-light">
                        We design, engineer, and support intelligent digital solutions that streamline operations,
                        automate workflows, enhance customer experiences, and accelerate business growth.
                    </p>
                </div>

                {/* Accordion List with Sharp Corners */}
                <div ref={gridRef} className="space-y-4 mb-12">
                    {SOLUTIONS.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="sol-header-item flex flex-wrap items-center gap-4">
                    <AnimatedButton
                        px="px-6"
                        py="py-4"
                        icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        className="bg-[#9e7b56] text-white rounded-none text-[13px] font-medium tracking-[0.1em]"
                    >
                        Schedule Solution Discovery
                    </AnimatedButton>
                </div>
            </div>
        </section>
    );
}
