import type { Metadata } from "next";
import { ResourcesHero } from "@/components/home/resources/resources-hero";
import { ResourcesCategories } from "@/components/home/resources/resources-categories";
import { ResourcesFeatured } from "@/components/home/resources/resources-featured";
import { ResourcesDownloads } from "@/components/home/resources/resources-downloads";
import { ResourcesEvents } from "@/components/home/resources/resources-events";
import { ResourcesNewsletter } from "@/components/home/resources/resources-newsletter";

export const metadata: Metadata = {
    title: "Insights & Resources | Kaizen Infinities",
    description: "Stay ahead with expert insights, practical guides, industry trends, and technology updates from Kaizen Infinities. Download free resources and join our community.",
};

export default function Resources() {
    return (
        <div className="flex flex-col">
            <ResourcesHero />
            <ResourcesCategories />
            <ResourcesFeatured />
            <ResourcesDownloads />
            <ResourcesEvents />
            <ResourcesNewsletter />
        </div>
    );
}
