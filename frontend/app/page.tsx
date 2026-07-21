import Link from "next/link";
import { Banner } from "@/components/home/banner/banner";
import { TrustedPartners } from "@/components/home/trusted-partners/trusted-partners";
import { WhoWeAre } from "@/components/home/who-we-are/who-we-are";
import { Ecosystem } from "@/components/home/ecosystem/ecosystem";
import { WhyKaizen } from "@/components/home/why-kaizen/why-kaizen";
import { Framework } from "@/components/home/framework/framework";
import { Industries } from "@/components/home/industries/industries";
import { CyberNex } from "@/components/home/cybernex/cybernex";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <TrustedPartners />
      <WhoWeAre />
      <Ecosystem />
      <WhyKaizen />
      <Framework />
      <Industries />
      <CyberNex />
    </div>
  );
}
