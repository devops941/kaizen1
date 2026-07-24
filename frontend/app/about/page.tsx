import { AboutHero } from "@/components/home/about/about-hero";
import { AboutWhoWeAre } from "@/components/home/about/about-who-we-are";
import { AboutStory } from "@/components/home/about/about-story";
import { AboutPurpose } from "@/components/home/about/about-purpose";
import { AboutVision } from "@/components/home/about/about-vision";
import { AboutMission } from "@/components/home/about/about-mission";
import { AboutValues } from "@/components/home/about/about-values";
import { AboutSnapshot } from "@/components/home/about/about-snapshot";
import { AboutEcosystem } from "@/components/home/about/about-ecosystem";
import { AboutPromise } from "@/components/home/about/about-promise";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <AboutWhoWeAre />
            <AboutStory />
            <AboutPurpose />
            <AboutVision />
            <AboutMission />
            <AboutValues />
            <AboutSnapshot />
            <AboutEcosystem />
            <AboutPromise />
        </div>
    );
}
