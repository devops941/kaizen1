'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ChevronDown, MessageCircle, FileSearch, Map, Palette, Code, TestTube, Rocket, GraduationCap, Wrench, Sparkles } from "lucide-react";

const JOURNEY_STEPS = [
    {
        num: "01",
        icon: MessageCircle,
        title: "Step 1 — Discovery Consultation",
        deliverables: "Initial Discovery Report",
        body: "Understand business objectives, operational challenges, existing software landscape, growth plans, user expectations, and technology readiness."
    },
    {
        num: "02",
        icon: FileSearch,
        title: "Step 2 — Business Process Assessment",
        deliverables: "Business Process Analysis",
        body: "Map Current Process (As-Is), Future Process (To-Be), Automation Opportunities, Integration Requirements, and Risk Areas."
    },
    {
        num: "03",
        icon: Map,
        title: "Step 3 — Digital Transformation Roadmap",
        deliverables: "Solution Roadmap",
        body: "Defines Scope, Priorities, Timeline, Budget, Milestones, Technology Stack, Risk Mitigation, and Future Expansion."
    },
    {
        num: "04",
        icon: Palette,
        title: "Step 4 — UI/UX & Solution Design",
        deliverables: "UI/UX Approval",
        body: "Wireframes, Interactive Prototypes, Dashboard Concepts, Mobile Screens, and User Journey Mapping."
    },
    {
        num: "05",
        icon: Code,
        title: "Step 5 — Agile Development",
        deliverables: "Working Software",
        body: "Sprint Reviews, Progress Reports, Demo Sessions, Change Request Management, and Transparent Communication."
    },
    {
        num: "06",
        icon: TestTube,
        title: "Step 6 — Quality Assurance",
        deliverables: "QA Reports",
        body: "Functional, Security, Performance Testing and UAT. Only approved modules move to production."
    },
    {
        num: "07",
        icon: Rocket,
        title: "Step 7 — Deployment & Go-Live",
        deliverables: "Live Environment",
        body: "Data Migration, Environment Setup, User Configuration, Final Validation, and Production Rollout."
    },
    {
        num: "08",
        icon: GraduationCap,
        title: "Step 8 — Training & Adoption",
        deliverables: "Training Materials",
        body: "Administrator Training, End-User Workshops, User Manuals, Video Tutorials, and Knowledge Base."
    },
    {
        num: "09",
        icon: Wrench,
        title: "Step 9 — Support & Maintenance SLA",
        deliverables: "SLA Support Agreement",
        body: "Technical Assistance, Performance Monitoring, Feature Enhancements, Security Updates, and SLA guarantees."
    },
    {
        num: "10",
        icon: Sparkles,
        title: "Step 10 — Continuous Kaizen Innovation",
        deliverables: "Perpetual Innovation Strategy",
        body: "Quarterly business reviews, emerging AI/Cloud feature integration, performance tuning, and continuous digital evolution."
    },
];

interface JourneyStepProps {
    step: typeof JOURNEY_STEPS[0];
    isOpen: boolean;
    onClick: () => void;
}

function JourneyStep({ step, isOpen, onClick }: JourneyStepProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.fromTo(contentRef.current,
                    { height: 0, opacity: 0 },
                    { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
                );
            } else {
                gsap.to(contentRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.in"
                });
            }
        }
    }, [isOpen]);

    return (
        <div
            className={`ej-step group border rounded-none transition-all duration-300 cursor-pointer overflow-hidden ${
                isOpen ? 'border-[#c8b4a0] bg-[#141414] shadow-lg' : 'border-white/10 bg-[#0f0f0f] hover:border-white/20'
            }`}
            onClick={onClick}
        >
            {/* Header Bar */}
            <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-4">
                    {/* Number & Icon Badge */}
                    <div className="w-10 h-10 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] flex-shrink-0 group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300">
                        <step.icon className="w-5 h-5" />
                    </div>

                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <span className="text-[10px] font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2 py-0.5 border border-[#c8b4a0]/20 rounded-none">
                                {step.num}
                            </span>
                            <h3 className="text-base font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
                                {step.title}
                            </h3>
                        </div>
                        <p className="text-xs font-mono text-white/70">
                            Deliverable: <span className="text-[#c8b4a0] font-medium">{step.deliverables}</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-white/50 hidden sm:inline-block uppercase tracking-wider">
                        {isOpen ? "Collapse" : "Expand Details"}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#c8b4a0] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </div>

            {/* Expandable Body */}
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <div className="px-5 pb-5 border-t border-white/10 pt-4">
                    <p className="text-sm text-white/80 leading-relaxed font-light">{step.body}</p>
                </div>
            </div>
        </div>
    );
}

export function EngagementJourney() {
    const sectionRef = useRef<HTMLElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Centered Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            End-To-End Journey
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
                        segments={[
                            { text: "Your Journey " },
                            { text: "With Kaizen", isHighlighted: true }
                        ]}
                    />

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        From initial strategy consultation to continuous post-launch evolution — every phase is 
                        transparently structured for long-term enterprise growth.
                    </p>
                </div>

                {/* Full-Width Stacked Accordion List (No Empty Slots or Height Disruption) */}
                <div className="max-w-5xl mx-auto space-y-3">
                    {JOURNEY_STEPS.map((step, index) => (
                        <JourneyStep
                            key={index}
                            step={step}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
