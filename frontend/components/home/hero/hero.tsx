'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Particle system
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.2 + 0.05,
            });
        }

        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 180, 160, ${p.opacity})`;
                ctx.fill();

                particles.forEach((p2) => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(200, 180, 160, ${(1 - dist / 100) * 0.06})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
        setMousePos({ x, y });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".hero-eyebrow", { opacity: 0, x: -30 });
            gsap.set(".hero-title-line", { y: 80, opacity: 0 });
            gsap.set(".hero-desc", { y: 30, opacity: 0 });
            gsap.set(".hero-cta", { y: 20, opacity: 0 });
            gsap.set(".hero-visual", { scale: 0.9, opacity: 0 });

            const tl = gsap.timeline({ delay: 0.3 });

            tl.to(".hero-eyebrow", { opacity: 1, x: 0, duration: 1, ease: "power3.out" })
                .to(".hero-title-line", { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power4.out" }, "-=0.5")
                .to(".hero-desc", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
                .to(".hero-cta", { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4")
                .to(".hero-visual", { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=1");

            gsap.to(".hero-content", {
                y: -60,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-[#080808]"
            onMouseMove={handleMouseMove}
        >
            {/* Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

            {/* Abstract 3D Elements */}
            <div
                className="absolute top-20 -right-40 w-[700px] h-[700px] opacity-[0.07]"
                style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) rotate(${mousePos.x * 8}deg)` }}
            >
                <div className="absolute inset-0 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-12 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-24 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-0 bg-gradient-br from-[#c8b4a0]/10 to-transparent" />
            </div>

            <div
                className="absolute bottom-20 -left-32 w-[500px] h-[500px] opacity-[0.05]"
                style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` }}
            >
                <div className="absolute inset-0 border border-[#c8b4a0] rounded-full" />
                <div className="absolute inset-8 border border-[#c8b4a0]" style={{ transform: 'rotate(30deg)' }} />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '100px 100px'
            }} />

            {/* Content */}
            <div className="hero-content container mx-auto px-6 lg:px-16 relative z-10 min-h-screen flex flex-col justify-center pt-20 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 relative">
                        <div className="hero-eyebrow inline-flex items-center gap-4 mb-8">
                            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                            <span className="text-[11px] font-medium tracking-[0.3em] text-[#c8b4a0]/70 uppercase">
                                Kaizen Infinities
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-extralight leading-[0.95] tracking-tight mb-8">
                            <span className="hero-title-line block text-white">Engineering</span>
                            <span className="hero-title-line block text-[#c8b4a0]">Intelligent</span>
                            <span className="hero-title-line block text-white/90">Digital Enterprises</span>
                        </h1>

                        <p className="hero-desc text-base md:text-lg text-white/40 leading-relaxed max-w-xl mb-10 font-light">
                            A technology-driven software engineering company delivering enterprise applications,
                            ERP solutions, AI-powered automation, cloud infrastructure, IT consulting,
                            and cybersecurity excellence.
                        </p>

                        <div className="hero-cta flex flex-wrap items-center gap-6">
                            <Button className="group relative bg-[#c8b4a0] text-[#080808] rounded-none px-8 py-6 font-medium tracking-wide overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    Schedule Consultation
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>

                            <button className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c8b4a0]/40 group-hover:bg-[#c8b4a0]/5 transition-all duration-300">
                                    <Play className="w-4 h-4 ml-0.5" />
                                </div>
                                <span className="text-sm font-light tracking-wide">Watch Showreel</span>
                            </button>
                        </div>

                        <div className="hero-cta mt-16 pt-8 border-t border-white/[0.06]">
                            <div className="flex flex-wrap gap-10 lg:gap-14">
                                {[
                                    { value: "200+", label: "Enterprise Projects" },
                                    { value: "150+", label: "Global Clients" },
                                    { value: "99.9%", label: "Uptime SLA" },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl md:text-4xl font-extralight text-white tracking-tight">{stat.value}</div>
                                        <div className="text-[11px] text-white/30 tracking-[0.15em] uppercase mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div
                            className="hero-visual relative w-full aspect-square"
                            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
                        >
                            <div className="absolute inset-12 flex items-center justify-center">
                                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#c8b4a0]/10 to-transparent border border-[#c8b4a0]/20" />
                            </div>

                            <div className="absolute inset-0 border border-[#c8b4a0]/[0.06] rounded-full animate-[spin_80s_linear_infinite]" />
                            <div className="absolute inset-6 border border-[#c8b4a0]/[0.04] rounded-full animate-[spin_60s_linear_infinite_reverse]" />
                            <div className="absolute inset-12 border border-[#c8b4a0]/[0.03] rounded-full animate-[spin_40s_linear_infinite]" />
                            <div className="absolute inset-18 border border-[#c8b4a0]/[0.02] rounded-full animate-[spin_25s_linear_infinite_reverse]" />

                            <div
                                className="absolute top-16 right-20 w-24 h-24"
                                style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
                            >
                                <div className="w-full h-full bg-[#0f0f0f] border border-[#c8b4a0]/15 rounded-2xl flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-[#c8b4a0]/10" />
                                </div>
                            </div>

                            <div
                                className="absolute bottom-24 left-12 w-28 h-28"
                                style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
                            >
                                <div className="w-full h-full bg-[#0f0f0f] border border-[#c8b4a0]/10 rounded-2xl flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-lg bg-[#c8b4a0]/8" />
                                </div>
                            </div>

                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="78%" y2="18%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="6 6" opacity="0.15" />
                                <line x1="50%" y1="50%" x2="22%" y2="78%" stroke="#c8b4a0" strokeWidth="0.5" strokeDasharray="6 6" opacity="0.15" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
            </div>
        </section>
    );
}
