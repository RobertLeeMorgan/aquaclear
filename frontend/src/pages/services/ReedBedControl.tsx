import BeforeAfter from "../../components/ui/BeforeAfter";
import PageHeader from "../../components/layout/PageHeader";
import ContactUsCard from "../../components/common/ContactUsCard";
import { FaLeaf } from "react-icons/fa";

export default function ReedBedControl() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <PageHeader
        title="Reed Bed Control & Management"
        subtitle="Aquaclear are experts in the management and maintenance of reed beds
          and waterways, with years of experience cutting and clearing reed beds
          across the UK. Regular maintenance encourages healthy new reed growth,
          supports wildlife, and keeps water moving freely through these vital
          habitats."
      />
      {/* ---------------- ABOUT ---------------- */}
      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body md:p-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Experience
          </h2>
          <p className="text-base-content/80 leading-relaxed mb-4">
            We understand that reed beds are an intermediate habitat between
            open water and marshland. Without routine cutting and clearance,
            they can quickly become overgrown and stagnant. Regular maintenance
            promotes biodiversity and ensures sustainable habitat health.
          </p>
          <p className="text-base-content/80 leading-relaxed mb-3">
            Our clients include organisations such as:
          </p>
          <ul className="list-disc list-inside text-base-content/80 space-y-1">
          {[
              "Royal Society for the Protection of Birds (RSPB)",
              "The Environment Agency",
              "Natural England",
              "Natural Resources Wales",
              "Herts & Middlesex Wildlife Trust",
              "Various local councils and trusts"
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaLeaf className="text-secondary mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* ---------------- TRUXOR OPERATIONS ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-primary">
            The Truxor on Reed Beds
          </h2>
          <p className="text-base-content/80 leading-relaxed">
            The Truxor Amphibious Harvester allows us to reach areas
            inaccessible to other vehicles. Its lightweight frame minimises
            environmental impact while providing efficient cutting, clearing,
            and transport of reeds and vegetation.
          </p>
          <p className="text-base-content/80 leading-relaxed">
            The Truxor can:
          </p>
          <div className="list-disc list-inside space-y-1 text-base-content/80">
            {[
              "Cut and clear large blocks of reed",
              "Maintain sight lines and channels",
              "Create wading pools for birds and wildlife",
              "Restore existing pools and ditches",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaLeaf className="text-secondary mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/projects/reed1.webp"
            alt="Truxor cutting reeds"
            className="rounded-2xl shadow-md object-cover h-48 w-full"
          />
          <img
            src="/images/projects/reed2.webp"
            alt="Reed cutting in progress"
            className="rounded-2xl shadow-md object-cover h-48 w-full"
          />
          <img
            src="/images/projects/reed3.webp"
            alt="Clearing reed bed area"
            className="rounded-2xl shadow-md object-cover h-48 w-full"
          />
          <img
            src="/images/projects/reed4.webp"
            alt="Truxor operating on wetland"
            className="rounded-2xl shadow-md object-cover h-48 w-full"
          />
        </div>
      </div>
      {/* ---------------- EXAMPLES ---------------- */}
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary">
            Examples of Reed Bed Works
          </h2>
          <p className="text-base text-base-content/80 leading-relaxed max-w-2xl mx-auto">
            Below are a few examples of reed cutting and restoration work,
            showcasing how routine maintenance can restore water movement and
            improve habitat quality.
          </p>
        </div>
        {/* Example 1 */}
        <div className="card bg-base-100 shadow-md border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Clearing Existing Ditches, Pools and Sight Lines
                </h3>
                <p className="text-base text-base-content/80 leading-relaxed">
                  Some reed beds have existing ditches, pools, and sight lines
                  that become overgrown over time, restricting water movement
                  and visibility. These areas can be cut and cleared to restore
                  their original purpose, maintaining open water channels and
                  allowing better circulation throughout the reed bed.
                </p>
              </div>
              <BeforeAfter
                before="/images/before/reedbed1.webp"
                after="/images/after/reedbed1.webp"
                beforeDesc="Overgrown ditches and pools before clearance"
                afterDesc="Restored ditches and clear sight lines after cutting"
              />
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="card bg-base-100 shadow-md border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Clearing Large Blocks or Areas of Reed
                </h3>
                <p className="text-base text-base-content/80 leading-relaxed">
                  Many conservation trusts and councils need to clear large
                  portions of reed beds annually to promote healthy regrowth.
                  Our machines can operate in deep water, shallow water, or dry
                  ground, making them ideal for efficiently cutting and removing
                  large reed areas that would be too difficult or dangerous by
                  hand.
                </p>
              </div>
              <BeforeAfter
                before="/images/before/reedbed2.webp"
                after="/images/after/reedbed2.webp"
                beforeDesc="Dense reed block before clearance"
                afterDesc="Open, rejuvenated reed bed after cutting"
              />
            </div>
          </div>
        </div>

        {/* Example 3 */}
        <div className="card bg-base-100 shadow-md border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Cutting and Clearing Sight Lines
                </h3>
                <p className="text-base text-base-content/80 leading-relaxed">
                  Sight lines are an attractive and functional feature in reed
                  beds, providing open views across the area and encouraging
                  wildlife activity. We can cut sight lines to any required
                  width and ensure all cut material is cleared and placed neatly
                  on the nearby banks, maintaining a clean, natural look.
                </p>
              </div>
              <BeforeAfter
                before="/images/before/reedbed3.webp"
                after="/images/after/reedbed3.webp"
                beforeDesc="Obstructed sight line before cutting"
                afterDesc="Open and maintained sight line after clearance"
              />
            </div>
          </div>
        </div>

        {/* Example 4 */}
        <div className="card bg-base-100 shadow-md border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Cutting and Clearing Wading Pools
                </h3>
                <p className="text-base text-base-content/80 leading-relaxed">
                  Wading pools provide essential shallow-water areas within
                  dense reed beds, attracting wading birds for feeding and
                  nesting. These pools can be cut to almost any size or shape,
                  and all removed reed is cleared to leave a tidy, open habitat
                  ideal for wildlife.
                </p>
              </div>
              <BeforeAfter
                before="/images/projects/reed3.webp"
                after="/images/projects/reed4.webp"
                beforeDesc="Dense reed area before pool creation"
                afterDesc="Open wading pool after cutting and clearance"
              />
            </div>
          </div>
        </div>
        <ContactUsCard
          title="Reed Bed Management"
          text="To discuss your reed bed or aquatic management requirements,
            pleasevcontact us directly. You can also explore more examples in
            our"
          url="/gallery/weed-reed-cutting"
          linkto="Weed & Reed Cutting Gallery"
        />
      </div>
    </div>
  );
}
