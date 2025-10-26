import { FaExclamationTriangle } from "react-icons/fa";
import BeforeAfter from "../../components/ui/BeforeAfter";
import ContactUsCard from "../../components/common/ContactUsCard";
import PageHeader from "../../components/layout/PageHeader";

export default function SiltPumping() {
  return (
    <div className="bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* ---------------- Header ---------------- */}
        <PageHeader
          title="Dredging & Silt Pumping"
          subtitle="The buildup of silt in watercourses can lead to a range of problems
            — from cosmetic issues to serious environmental risks. Our dredging
            and silt pumping services provide effective, environmentally
            conscious solutions for long-term water management."
        />

        {/* ---------------- Problems Section ---------------- */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body p-6 md:p-10">
            <h2 className="card-title text-2xl text-primary mb-4">
              Common Problems Caused by Silt Build-Up
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-base-content/80">
              {[
                "Increased Risk of Flooding",
                "Contamination of External Water Sources",
                "Reduction in Depth of Water",
                "Underwater Obstructions for Boats or Locks",
                "Increased Aquatic Plant Growth",
                "Release of Foul Odours",
                "Visible Areas of Raised Silt",
                "Discolouration of Water",
              ].map((problem, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-warning" />
                  <span>{problem}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base-content/80">
              Left unchecked, these issues can lead to the loss of aquatic life
              and, in severe cases, the complete degradation of the watercourse.
              Dredging and desilting provide long-lasting solutions to restore
              and preserve your water environments.
            </p>
          </div>
        </div>

        {/* ---------------- Equipment Section ---------------- */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-primary text-center">
            Specialist Equipment
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Truxor */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img
                  src="/images/truxor/truxor.webp"
                  alt="Truxor Amphibious Harvester"
                  className="object-cover h-56 w-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">The Truxor</h3>
                <p className="text-base-content/80">
                  The Truxor Amphibious Harvester can be fitted with dredging
                  and silt pumping tools, allowing for efficient and low-impact
                  silt removal from difficult-to-access areas.
                </p>
              </div>
            </div>

            {/* Doro Pump */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img
                  src="/images/truxor/doroPump.webp"
                  alt="Doro Pump"
                  className="object-cover h-56 w-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">
                  The Doro Pump
                </h3>
                <p className="text-base-content/80">
                  The Doro Pump allows us to access problem areas and pump large
                  quantities of silt — up to 300 meters away — into specific
                  containers for controlled disposal.
                </p>
              </div>
            </div>

            {/* Grab Bucket */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img
                  src="/images/truxor/grabbucket.webp"
                  alt="Grab Bucket"
                  className="object-cover h-56 w-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">
                  The Grab Bucket
                </h3>
                <p className="text-base-content/80">
                  Ideal for stone or gravel beds, the Grab Bucket dredges silt
                  from the bottom and transports it to designated disposal areas
                  with minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Containers Section ---------------- */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="card-body p-6 md:p-10 space-y-6">
            <h2 className="card-title text-2xl text-primary">
              Silt Containers & Water Separation
            </h2>
            <p className="text-base-content/80">
              The silt removed is often a mixture of sediment and water.
              Depending on the site, we use various containment and separation
              systems to ensure clean, efficient removal.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <img
                  src="/images/services/siltbags.webp"
                  alt="Dewatering Bags"
                  className="rounded-xl object-cover h-48 w-full shadow"
                />
                <p className="mt-2 font-medium text-center">Dewatering Bags</p>
              </div>
              <div>
                <img
                  src="/images/services/siltbarrier.webp"
                  alt="Geotextile Barriers"
                  className="rounded-xl object-cover h-48 w-full shadow"
                />
                <p className="mt-2 font-medium text-center">
                  Geotextile Barriers
                </p>
              </div>
              <div>
                <img
                  src="/images/services/siltbunds.webp"
                  alt="Soil Bunds"
                  className="rounded-xl object-cover h-48 w-full shadow"
                />
                <p className="mt-2 font-medium text-center">Soil Bunds</p>
              </div>
            </div>

            <p className="text-base-content/80">
              Other solutions include large water tanks and specialised farming
              equipment. Some operate on a continuous flow system, while others
              use a “fill and drain” method — chosen based on site conditions.
            </p>
          </div>
        </div>

        {/* ---------------- Before / After ---------------- */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Project Example</h2>
          <BeforeAfter
            before="/images/before/valleys1.webp"
            after="/images/after/valleys2.webp"
            beforeDesc="Before Dredging"
            afterDesc="After Silt Removal"
          />
          <p className="text-base-content/80 max-w-2xl mx-auto">
            Our silt pumping work transforms blocked or stagnant watercourses
            into clear, healthy, and functioning systems — all while preserving
            the surrounding habitat.
          </p>
        </div>
        <ContactUsCard
          title="Silting or Dredging"
          text="For more information or to discuss a specific project, please
            contact us directly. You can also view our full"
          extension="or download our equipment brochure for technical data."
          url="/gallery/silting"
          linkto="Silt Pumping Gallery"
          silting
        />
      </div>
    </div>
  );
}
