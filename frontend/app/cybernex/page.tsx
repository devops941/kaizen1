import type { Metadata } from "next";
import { CybernexHero } from "@/components/home/cybernex/cybernex-hero";
import { CybernexCapabilities } from "@/components/home/cybernex/cybernex-capabilities";
import { CybernexPrinciples } from "@/components/home/cybernex/cybernex-principles";
import { CybernexEcosystem } from "@/components/home/cybernex/cybernex-ecosystem";
import { CybernexCTA } from "@/components/home/cybernex/cybernex-cta";

export const metadata: Metadata = {
  title: "CyberNex | Cyber Security Center of Excellence | Kaizen Infinities",
  description: "CyberNex is South India's next generation Cyber Security Experience Center. Ethical hacking, SOC operations, digital forensics, cloud security, and cyber range training.",
};

export default function Cybernex() {
  return (
    <div className="flex flex-col">
      <CybernexHero />
      <CybernexCapabilities />
      <CybernexPrinciples />
      <CybernexEcosystem />
      <CybernexCTA />
    </div>
  );
}
