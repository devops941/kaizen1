import type { Metadata } from "next";
import { EngagementHero } from "@/components/home/engagement/engagement-hero";
import { EngagementJourney } from "@/components/home/engagement/engagement-journey";
import { EngagementTimeline } from "@/components/home/engagement/engagement-timeline";
import { EngagementCommunication } from "@/components/home/engagement/engagement-communication";
import { EngagementTeam } from "@/components/home/engagement/engagement-team";
import { EngagementCommitments } from "@/components/home/engagement/engagement-commitments";
import { EngagementCTA } from "@/components/home/engagement/engagement-cta";

export const metadata: Metadata = {
    title: "Client Engagement Model | Kaizen Infinities",
    description: "Discover our transparent, collaborative client engagement model. From discovery to continuous improvement, experience clarity and measurable progress throughout your project lifecycle.",
};

export default function Engagement() {
    return (
        <div className="flex flex-col">
            <EngagementHero />
            <EngagementJourney />
            <EngagementTimeline />
            <EngagementCommunication />
            <EngagementTeam />
            <EngagementCommitments />
            <EngagementCTA />
        </div>
    );
}
