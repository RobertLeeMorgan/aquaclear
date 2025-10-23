import truxorGrab from "../../assets/projects/debris.jpg";
import chainsawWork from "../../assets/projects/chainsawWork.jpg";
import { Link } from "react-router-dom";

export default function FlotsamRemoval() {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center py-8 sm:py-12 sm:px-6">
      <div className="w-full max-w-6xl p-10 space-y-16">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Trash and Flotsam Removal
          </h1>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Urban waterways and drainage systems are often unsightly due to the
            presence of trash, plastic bottles, and other aquatic flotsam.
            Build-up of these materials causes interrupted water flow and
            obstruction. Aquaclear specialises in the removal of debris and
            flotsam from these waterways.
          </p>
        </div>

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
            src={truxorGrab}
            alt="Truxor removing debris from a canal"
            className="rounded-2xl shadow-md w-full max-h-[420px] object-cover"
          />
        </div>

        {/* TREE DEBRIS SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={chainsawWork}
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

        {/* CONTACT SECTION */}
        <div className="card bg-base-100 shadow-md border border-base-300 text-center p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            Need Help with Flotsam Removal?
          </h3>
          <p className="text-base-content/80 max-w-2xl mx-auto leading-relaxed">
            For more information or to discuss a specific project, please
            contact us directly. You can also view our{" "}
            <Link
              to="/services/tree-work"
              className="text-primary font-semibold hover:underline"
            >
              Tree Work
            </Link>{" "}
            services.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn btn-primary mt-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
