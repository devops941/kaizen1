'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { AnimatedButton } from "@/components/home/animated-button";
import {
  GraduationCap, Factory, HeartPulse, ShoppingCart, Building2, Landmark,
  Rocket, HandHeart, Wheat, Truck, Banknote, ArrowRight,
  Users, Clock, Award
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
  {
    num: "01",
    tag: "EDUCATION",
    icon: GraduationCap,
    title: "Education & Academic Institutions",
    features: ["School/College ERP, SIS, LMS", "Online Exams, Fee Management", "Hostel & Transport Management", "Digital Library & AI Tutor"],
    outcome: "Paperless Campus & Faster Admissions"
  },
  {
    num: "02",
    tag: "MANUFACTURING",
    icon: Factory,
    title: "Manufacturing & Industrial",
    features: ["Production Planning & Inventory", "Quality Control Systems (QMS)", "Barcode/QR Integration", "IoT Sensor Real-Time Monitoring"],
    outcome: "Predictive Maintenance & Executive Dashboards"
  },
  {
    num: "03",
    tag: "HEALTHCARE",
    icon: HeartPulse,
    title: "Healthcare & Hospitals",
    features: ["Hospital Information System (HIS)", "Clinic Management, EMR/EHR", "Pharmacy & Lab Integration", "Telemedicine & Patient Portal"],
    outcome: "Faster Patient Care & HIPAA Compliance"
  },
  {
    num: "04",
    tag: "RETAIL",
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    features: ["Point of Sale (POS) Systems", "Inventory & Omnichannel CRM", "Loyalty Programs & Analytics", "Warehouse Management"],
    outcome: "Higher Sales & Smarter Inventory"
  },
  {
    num: "05",
    tag: "CORPORATE",
    icon: Building2,
    title: "Corporate Enterprises",
    features: ["Enterprise ERP Solutions", "HRMS & Automated Payroll", "Finance & BI Dashboard", "Executive Workflows"],
    outcome: "Streamlined Operational Efficiency"
  },
  {
    num: "06",
    tag: "GOVERNMENT",
    icon: Landmark,
    title: "Government & Public Sector",
    features: ["Citizen Service Portals", "Document Management & E-File", "Workflow Automation", "Regulatory Compliance"],
    outcome: "Transparent Governance & Scalability"
  },
  {
    num: "07",
    tag: "STARTUPS",
    icon: Rocket,
    title: "Startups & Entrepreneurs",
    features: ["Rapid MVP Development", "Product Strategy & UX/UI", "Scalable Cloud Architecture", "Applied AI Integration"],
    outcome: "Fast Market Entry & Investor Readiness"
  },
  {
    num: "08",
    tag: "NGO",
    icon: HandHeart,
    title: "NGOs & Non-Profits",
    features: ["Donation Management Systems", "Volunteer Portals", "Grant & Impact Reporting", "Campaign Analytics"],
    outcome: "Transparent Operations & Donor Trust"
  },
  {
    num: "09",
    tag: "AGRITECH",
    icon: Wheat,
    title: "Agriculture & AgriTech",
    features: ["Farm Management Systems", "Crop Health Monitoring", "IoT & GIS/GPS Integration", "Agricultural Supply Chain ERP"],
    outcome: "Precision Farming & Yield Optimization"
  },
  {
    num: "10",
    tag: "LOGISTICS",
    icon: Truck,
    title: "Logistics & Transportation",
    features: ["Fleet Management Systems", "GPS Real-Time Tracking", "Route Optimization Algorithms", "Fuel & Driver Analytics"],
    outcome: "Reduced Fleet Costs & On-Time Delivery"
  },
  {
    num: "11",
    tag: "FINANCE",
    icon: Banknote,
    title: "Financial Services & BFSI",
    features: ["Customer Portals & Mobile Apps", "Loan Origination Management", "Risk & Fraud Analytics", "Approval Workflow Automation"],
    outcome: "Faster Approvals & Zero-Trust Security"
  },
];

export function IndustryCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".ind-cards-header-item",
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
        ".ind-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
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
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="ind-cards-header-item flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
            <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
              Industries We Serve
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
          </div>

          <AnimatedTitle
            theme="light"
            className="ind-cards-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
            segments={[
              { text: "Technology That " },
              { text: "Understands", isHighlighted: true },
              { text: " Your Business" }
            ]}
          />

          <p className="ind-cards-header-item text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            Purpose-built solutions for 11+ verticals. Every industry has unique operational challenges —
            we engineer tailored solutions that drive real business outcomes.
          </p>
        </div>

        {/* Quick Stats Row */}
        <div className="ind-cards-header-item grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {[
            { icon: Building2, value: "11+", label: "Industries Empowered" },
            { icon: Users, value: "150+", label: "Enterprise Clients" },
            { icon: Award, value: "200+", label: "Projects Delivered" },
            { icon: Clock, value: "10+", label: "Years Excellence" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 bg-white border border-zinc-200 rounded-none shadow-xs">
              <stat.icon className="w-5 h-5 text-[#9e7b56] mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-light text-zinc-900 font-mono mb-1">{stat.value}</div>
              <div className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industry Cards Grid with Sharp Corners */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="ind-card group relative bg-white border border-zinc-200 p-8 rounded-none shadow-xs hover:border-[#9e7b56] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Left Accent Bar on Hover */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#9e7b56] transition-colors duration-300" />

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#9e7b56] bg-[#9e7b56]/10 px-2.5 py-1 border border-[#9e7b56]/20 rounded-none">
                        {item.num}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-none text-[#9e7b56] group-hover:bg-[#9e7b56] group-hover:text-white group-hover:border-[#9e7b56] transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-[#9e7b56] transition-colors">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 font-light">
                        <div className="w-1.5 h-1.5 rounded-none bg-[#9e7b56] mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-wider">
                    {item.outcome}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4 text-[#9e7b56]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="ind-cards-header-item text-center mt-16">
          <p className="text-zinc-600 mb-6 font-light">Don&apos;t see your industry? We engineer custom solutions for every enterprise sector.</p>
          <AnimatedButton
            px="px-6"
            py="py-4"
            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            className="bg-[#9e7b56] text-white rounded-none text-[13px] font-medium tracking-[0.1em]"
          >
            Discuss Your Custom Requirements
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
