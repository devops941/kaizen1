'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Download, FileText, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DOWNLOADS = [
    { title: "ERP System Readiness Assessment Checklist", type: "PDF CHECKLIST", pages: "4 Pages" },
    { title: "Enterprise Digital Transformation Playbook", type: "WHITEPAPER", pages: "18 Pages" },
    { title: "Cybersecurity & SOC2 Audit Compliance Checklist", type: "SECURITY LOG", pages: "6 Pages" },
    { title: "Business Process Mapping & Optimization Template", type: "TEMPLATE", pages: "XLS / PDF" },
    { title: "Enterprise Technology Budget & ROI Planner", type: "EXCEL TOOL", pages: "SPREADSHEET" },
    { title: "Cloud Infrastructure Audit & Security Checklist", type: "AUDIT SPEC", pages: "8 Pages" },
];

export function ResourcesDownloads() {
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".rd-header-item",
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
                ".rd-item",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: "power3.out",
                    clearProps: "all",
                    scrollTrigger: {
                        trigger: listRef.current || sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (sectionRef.current) {
                const hiddenEls = sectionRef.current.querySelectorAll('.rd-header-item, .rd-item');
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
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#f8f9fa] text-zinc-950 overflow-hidden border-b border-zinc-200">
            {/* Background Light Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Content */}
                    <div className="lg:col-span-5">
                        <div className="rd-header-item flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
                            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                                Free Lead Assets
                            </span>
                        </div>

                        <AnimatedTitle
                            theme="light"
                            className="rd-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
                            segments={[
                                { text: "Downloadable " },
                                { text: "Toolkits", isHighlighted: true },
                                { text: " & Guides" }
                            ]}
                        />

                        <p className="rd-header-item text-base text-zinc-600 leading-relaxed font-light mb-8">
                            Get complimentary instant access to our practical engineering checklists, whitepapers, 
                            and Excel planners to accelerate your digital transformation.
                        </p>

                        <div className="rd-header-item">
                            <button className="flex items-center gap-3 px-7 py-4 bg-[#9e7b56] text-white text-xs font-mono font-bold hover:bg-[#856543] transition-colors rounded-none shadow-md uppercase tracking-wider">
                                <Download className="w-4 h-4" />
                                <span>Download Complete Toolkit</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: List */}
                    <div ref={listRef} className="lg:col-span-7 space-y-3">
                        {DOWNLOADS.map((item, i) => (
                            <div
                                key={i}
                                className="rd-item group relative flex items-center justify-between gap-4 p-5 bg-white border border-zinc-200 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                {/* Left Accent Line */}
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white transition-all duration-300 flex-shrink-0">
                                        <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-mono font-bold text-[#9e7b56] bg-[#9e7b56]/10 px-2 py-0.5 border border-[#9e7b56]/20 rounded-none">
                                                {item.type}
                                            </span>
                                            <span className="text-[10px] font-mono text-zinc-500">{item.pages}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#9e7b56] transition-colors">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="w-9 h-9 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-zinc-500 group-hover:border-[#9e7b56] group-hover:text-[#9e7b56] transition-all duration-300 flex-shrink-0">
                                    <Download className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
