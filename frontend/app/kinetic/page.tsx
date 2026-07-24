import type { Metadata } from "next";
import { KineticHero } from "@/components/home/kinetic/kinetic-hero";
import { KineticWhatIs } from "@/components/home/kinetic/kinetic-what-is";
import { KineticFramework } from "@/components/home/kinetic/kinetic-framework";
import { KineticVisual } from "@/components/home/kinetic/kinetic-visual";
import { KineticGovernance } from "@/components/home/kinetic/kinetic-governance";
import { KineticDeliverables } from "@/components/home/kinetic/kinetic-deliverables";
import { KineticBenefits } from "@/components/home/kinetic/kinetic-benefits";
import { KineticCTA } from "@/components/home/kinetic/kinetic-cta";

export const metadata: Metadata = {
  title: "KINETIC™ Delivery Framework | Kaizen Infinities",
  description: "Our proprietary 10-phase KINETIC™ Delivery Framework: Kaizen Intelligent Engineering, Technology Integration & Continuous Innovation for guaranteed project success.",
};

export default function Kinetic() {
  return (
    <div className="flex flex-col">
      <KineticHero />
      <KineticWhatIs />
      <KineticFramework />
      <KineticVisual />
      <KineticGovernance />
      <KineticDeliverables />
      <KineticBenefits />
      <KineticCTA />
    </div>
  );
}
