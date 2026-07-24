'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "@/components/home/animated-button";
import { Mail, ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ResourcesNewsletter() {
    const sectionRef = useRef<HTMLElement>(null);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                ".rn-content",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
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
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-15 lg:py-30 overflow-hidden bg-[#090a0f] text-white"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b4a0]/20 to-transparent" />

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="rn-content flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium tracking-[0.3em] text-[#c8b4a0] uppercase">
                            Insights Newsletter
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <h2 className="rn-content text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-6">
                        <span className="block text-white">Join the</span>
                        <span className="block text-[#c8b4a0]">Kaizen Insights</span>
                        <span className="block text-white/80">Community</span>
                    </h2>

                    <p className="rn-content text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                        Get the latest architecture blueprints, cybersecurity updates, and digital strategy guides 
                        delivered directly to your inbox. Join 5,000+ technology leaders.
                    </p>

                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="rn-content max-w-lg mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c8b4a0]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter corporate email address"
                                    className="w-full pl-11 pr-4 py-4 bg-[#0f0f0f] border border-white/10 text-white text-xs font-mono placeholder:text-white/40 focus:border-[#c8b4a0]/60 focus:outline-none transition-colors rounded-none"
                                    required
                                />
                            </div>
                            <AnimatedButton
                                type="submit"
                                px="px-8"
                                py="py-4"
                                icon={isSubmitted ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                className={`${isSubmitted ? 'bg-emerald-600 text-white' : 'bg-[#c8b4a0] text-[#080808]'} rounded-none text-[13px] font-mono font-bold tracking-[0.1em]`}
                            >
                                {isSubmitted ? 'Subscribed!' : 'Subscribe'}
                            </AnimatedButton>
                        </div>
                    </form>

                    <p className="rn-content text-xs font-mono text-white/50 mt-6">
                        No spam. Unsubscribe anytime. Read our Privacy Policy.
                    </p>
                </div>
            </div>
        </section>
    );
}
