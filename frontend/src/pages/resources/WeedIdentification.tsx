import PageHeader from "../../components/layout/PageHeader";
import ContactUsCard from "../../components/common/ContactUsCard";
import SpeciesGrid from "../../components/ui/SpeciesGrid";
import { weeds, reeds } from "./weedIdentification";

export default function WeedIdentification() {
  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16">
        <PageHeader
          title="Aquatic Weed Identification Guide"
          subtitle="Use this guide to identify common aquatic weeds found in UK watercourses. Aquaclear Water Management provide safe and effective solutions for all species listed below."
        />

        {/* ---------------------- Weeds ---------------------- */}
        <SpeciesGrid title="Submerged & Floating Weeds" data={weeds} />

        <PageHeader
          title="In the Margins"
          subtitle="Emergent plant-life that can commonly be found in the margins and very shallow waters of a watercourse."
        />

        {/* ---------------------- Reeds ---------------------- */}
        <SpeciesGrid title="Reeds & Marginal Plants" data={reeds} />

        {/* ---------------------- CONTACT ---------------------- */}
        <ContactUsCard
          title="Weed Management"
          text="If you need help identifying or managing aquatic weeds on your site, contact our team for professional advice and solutions. You can also view our"
          url="/gallery/weed-reed-cutting"
          linkto="Weed Cutting Gallery"
        />
      </div>
    </div>
  );
}
