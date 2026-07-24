'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ChevronDown, MessageCircle, FileText, Palette, Code, TestTube, Shield, Rocket, GraduationCap, TrendingUp, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Phase 1 – Discover",
    activities: "Stakeholder Workshops, Business Discovery, Process Observation, Requirement Gathering, Gap Analysis",
    deliverables: "BRD, Stakeholder Map, Current-State Analysis",
  },
  {
    num: "02",
    icon: FileText,
    title: "Phase 2 – Define",
    activities: "Functional Analysis, Technical Feasibility, Risk Assessment, Solution Architecture Planning",
    deliverables: "Functional Spec, Solution Blueprint, Project Roadmap",
  },
  {
    num: "03",
    icon: Palette,
    title: "Phase 3 – Design",
    activities: "User Research, Information Architecture, Wireframes, Interactive Prototypes, Design System",
    deliverables: "UI Mockups, Design Prototype, User Journey Maps",
  },
  {
    num: "04",
    icon: Code,
    title: "Phase 4 – Engineer",
    activities: "Modular Development, API-First, Cloud-Native, Secure Coding, Scalable Database Design",
    deliverables: "Working Application, Production APIs, DB Schemas",
  },
  {
    num: "05",
    icon: TestTube,
    title: "Phase 5 – Validate",
    activities: "Functional Testing, Performance Testing, Security Audit, UAT, Regression Testing",
    deliverables: "QA Reports, Automated Test Cases, Security Audit Log",
  },
  {
    num: "06",
    icon: Shield,
    title: "Phase 6 – Secure",
    activities: "Secure Architecture Review, Vulnerability Assessment, RBAC, Encryption, SOC Strategy",
    deliverables: "Security Assessment, Risk Mitigation Plan, Compliance Checklist",
  },
  {
    num: "07",
    icon: Rocket,
    title: "Phase 7 – Deploy",
    activities: "Production Rollout, Data Migration, User Configuration, Infra Setup, Monitoring",
    deliverables: "Live Production Environment, Deployment Docs, Failover Plan",
  },
  {
    num: "08",
    icon: GraduationCap,
    title: "Phase 8 – Enable",
    activities: "Admin & End-User Training, Manuals, Knowledge Base, Video Tutorials, Go-Live Support",
    deliverables: "Training Materials, User Docs, Adoption Roadmap",
  },
  {
    num: "09",
    icon: TrendingUp,
    title: "Phase 9 – Optimize",
    activities: "Performance Monitoring, Feature Enhancements, Analytics Review, User Feedback",
    deliverables: "Enhancement Roadmap, Quarterly Business Reviews",
  },
  {
    num: "10",
    icon: Lightbulb,
    title: "Phase 10 – Innovate",
    activities: "Applied AI, Machine Learning, BI Dashboards, IoT Integration, DevSecOps Automation",
    deliverables: "Innovation Roadmap, Continuous Kaizen Strategy",
  },
];

interface PhaseCardProps {
  phase: typeof PHASES[0];
  isOpen: boolean;
  onClick: () => void;
}

function PhaseCard({ phase, isOpen, onClick }: PhaseCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const Icon = phase.icon;

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
      className={`kf-phase group relative border border-white/[0.08] transition-all duration-500 cursor-pointer rounded-none overflow-hidden ${
        isOpen ? 'border-[#c8b4a0]/50 bg-[#141414]' : 'bg-[#0f0f0f] hover:border-[#c8b4a0]/30 hover:bg-[#121212]'
      }`}
      onClick={onClick}
    >
      {/* Left Hover Accent Bar */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#c8b4a0] transition-colors duration-300" />

      {/* Header */}
      <div className="flex items-center gap-4 p-6 lg:p-7">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#c8b4a0] bg-[#c8b4a0]/10 px-2.5 py-1 border border-[#c8b4a0]/20 rounded-none">
            {phase.num}
          </span>
          <div className="w-11 h-11 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0] group-hover:border-[#c8b4a0] group-hover:bg-[#c8b4a0]/20 transition-all duration-300 flex-shrink-0">
            <Icon className="w-5 h-5 text-[#c8b4a0]" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-[#c8b4a0] transition-colors">
            {phase.title}
          </h3>
        </div>

        <ChevronDown className={`w-5 h-5 text-white/50 group-hover:text-[#c8b4a0] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Expandable Content */}
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <div className="px-6 lg:px-7 pb-6 border-t border-white/10 pt-4 bg-[#0a0a0a]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mb-2">Key Activities</h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">{phase.activities}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono font-bold text-[#c8b4a0] uppercase tracking-wider mb-2">Deliverables</h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">{phase.deliverables}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KineticFramework() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".kf-header-item",
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
        ".kf-phase",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
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
        const hiddenEls = sectionRef.current.querySelectorAll('.kf-header-item, .kf-phase');
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
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="kf-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
            <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
              The 10-Step Framework
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
          </div>

          <AnimatedTitle
            theme="dark"
            className="kf-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "The " },
              { text: "KINETIC™", isHighlighted: true },
              { text: " 10-Step Framework" }
            ]}
          />

          <p className="kf-header-item text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            A comprehensive roadmap from discovery to innovation — each phase designed for 
            maximum impact and seamless transition.
          </p>
        </div>

        {/* Phases Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
          {PHASES.map((phase, index) => (
            <PhaseCard
              key={index}
              phase={phase}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
