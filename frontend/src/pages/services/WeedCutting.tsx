import { FaExclamationTriangle, FaLeaf } from "react-icons/fa";
import PageHeader from "../../components/layout/PageHeader";
import BeforeAfter from "../../components/ui/BeforeAfter";
import ContactUsCard from "../../components/common/ContactUsCard";
import SpeciesSpecific from "../../components/sections/SpeciesSpecific";
import SiteTypes from "../../components/sections/SiteTypes";

export default function AquaticWeedCutting() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16 py-16">
      {/* HEADER */}
      <PageHeader
        title="Aquatic Weed Cutting & Removal"
        subtitle="Specialists in the cutting, removal, and control of aquatic and marginal weeds across the UK — including blanket weed, pondweed, water lilies, pennywort, reeds, and more."
      />
      {/* OUR SERVICE */}
      <div className="card bg-base-100 border border-base-300 shadow-md">
        <div className="card-body px-4 sm:px-8 py-6 md:py-10 space-y-4">
          <h2 className="card-title text-2xl text-primary">Our Service</h2>
          <p className="text-base-content/80 leading-relaxed">
            Excessive aquatic weed growth can reduce flow, increase flood risk,
            and suppress native habitats. We provide mechanical cutting,
            collection, and long-term management solutions to restore open water
            and balance aquatic ecosystems.
          </p>
          <h3 className="font-semibold text-base-content/80">Core services</h3>
          <div className="grid md:grid-cols-2 gap-4 text-base-content/80">
            {[
              "Surface & submerged weed cutting",
              "Collection & removal of cut material",
              "Root & rhizome extraction",
              "Silt pumping & dredging",
              "SSSI / heritage-sensitive operations",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaLeaf className="text-success mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* WHY CONTROL */}
      <div className="card bg-base-100 border border-base-300 shadow-md">
        <div className="card-body px-4 sm:px-8 py-6 md:py-10">
          <h2 className="card-title text-2xl text-primary">
            Why Control Matters
          </h2>
          <p className="text-base-content/80 mb-3">
            Unchecked weed growth can:
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-base-content/80">
            {[
              "Block inlets and reduce water flow",
              "Lower oxygen levels and harm fish",
              "Outcompete native plant life",
              "Obstruct boating and fishing",
              "Increase flood and drainage risks",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaExclamationTriangle className="text-warning mt-1" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* METHODS */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary text-center">
            Methods & Equipment
          </h2>
          <p className="text-base-content/90 leading-relaxed text-center max-w-2xl mx-auto">
            Our Truxor amphibious harvesters operate in lakes, ponds, canals,
            fisheries and reservoirs, fitted with knives, rakes and grab buckets
            for precise cutting and lifting to depths of 2m.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Mechanical Cutting",
              img: "/images/truxor/truxor.webp",
              text: "Low-impact cutting reduces excessive plant growth and maintains open water for navigation and habitat balance.",
            },
            {
              title: "Grip Rake & Grab Bucket",
              img: "/images/truxor/rake.webp",
              text: "Used to collect cut vegetation and lift it to banks for removal, preventing nutrient return and regrowth.",
            },
            {
              title: "Root & Rhizome Removal",
              img: "/images/truxor/grabbucket.webp",
              text: "Where lilies or reeds regrow annually, root removal provides longer-term control and improved water flow.",
            },
          ].map(({ title, img, text }) => (
            <div
              key={title}
              className="card bg-base-100 border border-base-300 shadow-md"
            >
              <figure>
                <img
                  src={img}
                  alt={title}
                  className="object-cover h-56 w-full"
                />
              </figure>
              <div className="card-body px-4 sm:px-8 py-6 md:py-10">
                <h3 className="card-title text-xl text-primary">{title}</h3>
                <p className="text-base-content/80">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SpeciesSpecific />

      <SiteTypes />

      {/* ENVIRONMENTAL & LEGAL BEST PRACTICE */}
      <div className="card bg-base-100 border border-base-300 shadow-md">
        <div className="card-body px-4 sm:px-8 py-6 md:py-10 space-y-4">
          <h2 className="card-title text-2xl text-primary">
            Environmental & Legal Best Practice
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-base-content/80">
            {[
              "Leave cut material temporarily to allow invertebrate return before removal.",
              "Clean and inspect machinery between sites to prevent invasive spread.",
              "Comply with Schedule 9 of the Wildlife & Countryside Act for regulated species.",
              "Adapt methods for SSSI and heritage sites with appropriate consent.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaLeaf className="text-success mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* BEFORE / AFTER */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">
          Before & After Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BeforeAfter
            before="/images/before/example1.webp"
            after="/images/after/example1.webp"
            beforeDesc="Dense vegetation blocking open water"
            afterDesc="Restored clear channel"
          />
          <BeforeAfter
            before="/images/before/example2.webp"
            after="/images/after/example2.webp"
            beforeDesc="Algae and pondweed build-up"
            afterDesc="Improved clarity and flow"
          />
        </div>
      </div>
      {/* CONTACT */}
      <ContactUsCard
        title="Aquatic Weed Cutting & Removal"
        text="Book a free consultation to discuss weed issues, arrange a visit, or explore the best control options."
        url="/gallery/weed-reed-cutting"
        linkto="Weed & Reed Cutting Gallery"
      />
    </div>
  );
}
