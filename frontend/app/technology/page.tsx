import type { Metadata } from "next";
import { TechnologyHero } from "@/components/home/technology/technology-hero";
import { TechnologyPhilosophy } from "@/components/home/technology/technology-philosophy";
import { TechnologyArchitecture } from "@/components/home/technology/technology-architecture";
import { TechnologyStacks } from "@/components/home/technology/technology-stacks";
import { TechnologyCapabilities } from "@/components/home/technology/technology-capabilities";
import { TechnologyStandards } from "@/components/home/technology/technology-standards";
import { TechnologyLifecycle } from "@/components/home/technology/technology-lifecycle";
import { TechnologyCTA } from "@/components/home/technology/technology-cta";

export const metadata: Metadata = {
    title: "Technology Excellence | Kaizen Infinities",
    description: "Explore our technology ecosystem: React, Next.js, Python, AWS, Azure, GCP, Docker, Kubernetes, and more. Enterprise-grade solutions built for performance and scale.",
};

export default function Technology() {
    return (
        <div className="flex flex-col">
            <TechnologyHero />
            <TechnologyPhilosophy />
            <TechnologyArchitecture />
            <TechnologyStacks />
            <TechnologyCapabilities />
            <TechnologyStandards />
            <TechnologyLifecycle />
            <TechnologyCTA />
        </div>
    );
}
