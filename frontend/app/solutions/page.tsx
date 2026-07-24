import { SolutionsHero } from "@/components/home/solutions/solutions-hero";
import { CoreSolutions } from "@/components/home/solutions/core-solutions";
import { IndustryMatrix } from "@/components/home/solutions/industry-matrix";
import { WhyDifferent } from "@/components/home/solutions/why-different";
import { EngagementModel } from "@/components/home/solutions/engagement-model";
import { SolutionsCta } from "@/components/home/solutions/solutions-cta";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SolutionsHero />
            <CoreSolutions />
            <WhyDifferent />
            <IndustryMatrix />
            <EngagementModel />
            <SolutionsCta />
        </div>
    );
}
