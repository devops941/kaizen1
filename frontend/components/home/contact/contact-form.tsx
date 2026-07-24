'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Send, Check, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
  "Education & EdTech",
  "Healthcare & Life Sciences",
  "Manufacturing & Industry 4.0",
  "Retail & E-Commerce",
  "Banking & Financial Services",
  "Government & Public Sector",
  "Non-Profit & Enterprise",
  "Other Industry",
];

const SERVICES = [
  "Enterprise Software Engineering",
  "Custom ERP / CRM Solutions",
  "Mobile Application Development",
  "AI & Automation Integration",
  "Cloud Migration & Services",
  "Infrastructure & DevSecOps",
  "Corporate Upskilling & Training",
  "CyberNex Cybersecurity Audit / SOC",
];

const CONTACT_METHODS = ["Corporate Email", "Direct Phone Call", "WhatsApp Business", "Virtual Video Meeting"];

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    industry: '',
    service: '',
    contactMethod: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cf-header-item",
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
        ".cf-field",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: formRef.current || sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (sectionRef.current) {
        const hiddenEls = sectionRef.current.querySelectorAll('.cf-header-item, .cf-field');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        organization: '',
        designation: '',
        email: '',
        phone: '',
        industry: '',
        service: '',
        contactMethod: '',
        message: '',
      });
    }, 3500);
  };

  return (
    <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#ffffff] text-zinc-950 overflow-hidden border-b border-zinc-200">
      {/* Light Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="cf-header-item flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9e7b56]" />
              <span className="text-[11px] font-mono font-bold text-[#9e7b56] uppercase tracking-[0.25em]">
                Direct Consultation Request
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#9e7b56]" />
            </div>

            <AnimatedTitle
              theme="light"
              className="cf-header-item text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 justify-center"
              segments={[
                { text: "Request a " },
                { text: "Free Technical Consultation", isHighlighted: true }
              ]}
            />

            <p className="cf-header-item text-base text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Fill out the enterprise details below and our senior solution architects will respond with a tailored proposal within 24 hours.
            </p>
          </div>

          {/* Form Container */}
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6 p-8 lg:p-10 bg-white border border-zinc-200 rounded-none shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs placeholder:text-zinc-400 focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                  placeholder="e.g. Alexander Wright"
                />
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Organization / Company</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs placeholder:text-zinc-400 focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                  placeholder="e.g. Acme Enterprises Ltd."
                />
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Designation / Role</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs placeholder:text-zinc-400 focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                  placeholder="e.g. CTO / VP of Technology"
                />
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Corporate Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs placeholder:text-zinc-400 focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                  placeholder="alexander@company.com"
                />
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs placeholder:text-zinc-400 focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                  placeholder="+91 (0452) XXX-XXXX"
                />
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Industry Sector</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                >
                  <option value="">Select Industry Domain</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                >
                  <option value="">Select Service Area</option>
                  {SERVICES.map((svc) => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              <div className="cf-field space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Preferred Contact Channel</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs focus:border-[#9e7b56] focus:outline-none transition-colors rounded-none"
                >
                  <option value="">Select Channel</option>
                  {CONTACT_METHODS.map((method) => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="cf-field space-y-2">
              <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Project / Architecture Scope</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-zinc-300 text-zinc-900 font-mono text-xs placeholder:text-zinc-400 focus:border-[#9e7b56] focus:outline-none transition-colors resize-none rounded-none"
                placeholder="Briefly detail your technology objectives, legacy migration needs, timeline, or security goals..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-3 px-8 py-4.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 rounded-none shadow-md ${
                  isSubmitted 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-[#9e7b56] text-white hover:bg-[#856543]'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Consultation Request Submitted Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Technical Consultation Request</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Strict NDA Confidentiality · No Sales Spam</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
