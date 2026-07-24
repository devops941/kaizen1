import { CTASection } from "@/components/home/industries/cta-section";
import { IndustriesHero } from "@/components/home/industries/industries-hero";
import { IndustryCards } from "@/components/home/industries/industry-cards";
import { SolutionMatrix } from "@/components/home/industries/solution-matrix";
import { SuccessSection } from "@/components/home/industries/success-section";
import { WhyIndustriesKaizen } from "@/components/home/industries/why-industries";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Industries We Serve | Kaizen Infinities",
  description: "Purpose-built technology solutions for 11+ industries including Education, Healthcare, Manufacturing, Retail, Government, and more. Industry-specific expertise for digital transformation.",
};

export default function Industries() {
  return (
    <div className="flex flex-col">
      <IndustriesHero />
      <IndustryCards />
      <WhyIndustriesKaizen />
      <SolutionMatrix />
      <SuccessSection />
      <CTASection />
    </div>
  );
}
