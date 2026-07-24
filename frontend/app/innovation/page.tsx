import type { Metadata } from "next";
import { InnovationHero } from "@/components/home/innovation/innovation-hero";
import { InnovationBuilding } from "@/components/home/innovation/innovation-building";
import { InnovationLabs } from "@/components/home/innovation/innovation-labs";
import { InnovationLearning } from "@/components/home/innovation/innovation-learning";
import { InnovationStandards } from "@/components/home/innovation/innovation-standards";
import { InnovationEcosystem } from "@/components/home/innovation/innovation-ecosystem";
import { InnovationPrograms } from "@/components/home/innovation/innovation-programs";
import { InnovationQA } from "@/components/home/innovation/innovation-qa";
import { InnovationCyberNex } from "@/components/home/innovation/innovation-cybernex";
import { InnovationPrinciples } from "@/components/home/innovation/innovation-principles";
import { InnovationFuture } from "@/components/home/innovation/innovation-future";
import { InnovationCTA } from "@/components/home/innovation/innovation-cta";

export const metadata: Metadata = {
    title: "Innovation, Research & Excellence | Kaizen Infinities",
    description: "Discover Kaizen Innovation Labs (K-Labs) where ideas become reality. Explore our research in AI, Cloud Engineering, Cybersecurity, IoT, Automation, and Future Technologies.",
};

export default function Innovation() {
    return (
        <div className="flex flex-col">
            <InnovationHero />
            <InnovationBuilding />
            <InnovationLabs />
            <InnovationLearning />
            <InnovationStandards />
            <InnovationEcosystem />
            <InnovationPrograms />
            <InnovationQA />
            <InnovationCyberNex />
            <InnovationPrinciples />
            <InnovationFuture />
            <InnovationCTA />
        </div>
    );
}
