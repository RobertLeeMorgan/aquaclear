import CompanyOverview from "../components/sections/CompanyOverview";
import TruxorSection from "../components/sections/TruxorSection";
import PageHeader from "../components/layout/PageHeader";

export default function About() {
  return (
    <div className="py-16 flex flex-col items-center">
      <div className="max-w-5xl px-4 sm:px-8 w-full">
        <PageHeader
          title="About Aquaclear"
          subtitle="Specialists in waterway, reed bed, and wetland management — combining decades of experience with innovative amphibious technology."
        />

        <CompanyOverview />

        {/* Divider */}
        <div className="divider my-12"></div>

        <TruxorSection />
      </div>
    </div>
  );
}
