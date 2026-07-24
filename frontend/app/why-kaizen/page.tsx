import type { Metadata } from "next";
import { WhyKaizenHero } from "@/components/home/why-kaizen-page/why-kaizen-hero";
import { WhyKaizenPartnerships } from "@/components/home/why-kaizen-page/why-kaizen-partnerships";
import { WhyKaizenPillars } from "@/components/home/why-kaizen-page/why-kaizen-pillars";
import { WhyKaizenApproach } from "@/components/home/why-kaizen-page/why-kaizen-approach";
import { WhyKaizenComparison } from "@/components/home/why-kaizen-page/why-kaizen-comparison";
import { WhyKaizenCommitment } from "@/components/home/why-kaizen-page/why-kaizen-commitment";
import { WhyKaizenEngagement } from "@/components/home/why-kaizen-page/why-kaizen-engagement";
import { WhyKaizenSuccess } from "@/components/home/why-kaizen-page/why-kaizen-success";
import { WhyKaizenCTA } from "@/components/home/why-kaizen-page/why-kaizen-cta";

export const metadata: Metadata = {
    title: "Why Kaizen Infinities | Your Digital Transformation Partner",
    description: "More than a technology vendor. Discover why organizations trust Kaizen Infinities as their long-term digital transformation partner with our six pillars of excellence.",
};

export default function WhyKaizen() {
    return (
        <div className="flex flex-col">
            <WhyKaizenHero />
            <WhyKaizenPartnerships />
            <WhyKaizenPillars />
            <WhyKaizenApproach />
            <WhyKaizenComparison />
            <WhyKaizenCommitment />
            <WhyKaizenEngagement />
            <WhyKaizenSuccess />
            <WhyKaizenCTA />
        </div>
    );
}
