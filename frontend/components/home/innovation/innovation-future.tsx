'use client';

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/home/animated-title";
import { Rocket } from "lucide-react";

export function InnovationFuture() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="relative py-15 lg:py-30 bg-[#090a0f] text-white overflow-hidden border-b border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(#c8b4a0 1px, transparent 1px), linear-gradient(90deg, #c8b4a0 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c8b4a0]" />
                        <span className="text-[11px] font-mono font-medium text-[#c8b4a0] uppercase tracking-[0.25em]">
                            The Future
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#c8b4a0]" />
                    </div>

                    <AnimatedTitle
                        theme="dark"
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8 justify-center"
                        segments={[
                            { text: "The Future " },
                            { text: "We Are Building", isHighlighted: true }
                        ]}
                    />

                    <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-[#c8b4a0]/30 rounded-none bg-white/5 text-[#c8b4a0]">
                        <Rocket className="w-8 h-8 text-[#c8b4a0]" />
                    </div>

                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                        We envision a future where businesses are more connected, data-driven, secure,
                        and intelligent. Through continuous innovation and engineering excellence, we are building
                        the digital ecosystems of tomorrow.
                    </p>
                </div>
            </div>
        </section>
    );
}
