import ContactUsCard from "../../components/common/ContactUsCard";
import PageHeader from "../../components/layout/PageHeader";
import { Link } from "react-router-dom";

export default function FlotsamRemoval() {
  return (
    <div className="flex justify-center py-8 sm:py-12 sm:px-6">
      <div className="w-full max-w-6xl space-y-16">
        <PageHeader
          title="Trash and Flotsam Removal"
          subtitle="Urban waterways and drainage systems are often unsightly due to the
            presence of trash, plastic bottles, and other aquatic flotsam.
            Build-up of these materials causes interrupted water flow and
            obstruction. Aquaclear specialises in the removal of debris and
            flotsam from these waterways."
        />

        {/* DEBRIS CLEARANCE */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">
            Debris Clearance
          </h2>
          <p className="leading-relaxed text-base-content/80">
            We are frequently asked to carry out debris clearance on lakes and
            canals that experience heavy traffic from boats, canoes, and other
            watercraft. Surface and underwater debris can at best be a minor
            annoyance but at worst can make a watercourse impassable. It is
            therefore sometimes necessary to carry out debris clearance to
            remove these potential risks.
          </p>
        </div>

        {/* TRUXOR SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">
              Clearance with the Truxor
            </h2>
            <p className="leading-relaxed text-base-content/80">
              The Truxor Amphibious Harvester can be fitted with a number of
              tools to carry out debris removal, and operators are equipped with
              additional tools for specialised clearance tasks:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li>
                <strong>Reed Rake:</strong> Used to scoop up and remove surface
                and partially submerged materials, which can then be placed on
                nearby banks or into designated areas.
              </li>
              <li>
                <strong>Grab Bucket:</strong> Ideal for pulling submerged debris
                from the bottom and removing it completely from the watercourse.
              </li>
            </ul>
          </div>
          <img
            src="/images/truxor/debris.webp"
            alt="Truxor removing debris from a canal"
            className="rounded-2xl shadow-md w-full max-h-[420px] object-cover"
          />
        </div>

        {/* TREE DEBRIS SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="/images/services/chainsawWork.webp"
            alt="Chainsaw operators clearing tree debris"
            className="rounded-2xl shadow-md w-full max-h-[420px] object-cover order-2 lg:order-1"
          />
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-primary">
              Tree Debris and Chainsaw Work
            </h2>
            <p className="leading-relaxed text-base-content/80">
              It is common for waterways to be completely obstructed by fallen
              trees. Our chainsaw-trained operators can work in conjunction with
              the Truxor to remove these obstructions altogether. For more
              information, visit our{" "}
              <Link
                to="/services/tree-work"
                className="text-primary font-semibold hover:underline"
              >
                Tree Work
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
        <ContactUsCard
          title="Flotsam Removal"
          text="For more information or to discuss a specific project, please
            contact us directly. You can also view our"
          extension="services"
          url="/services/tree-work"
          linkto="Tree Work"
        />
      </div>
    </div>
  );
}
