import { Link } from "react-router-dom";
import BeforeAfter from "../../components/BeforeAfter";

import reedbed1before from "../../assets/projects/reedbed1before.jpg";
import reedbed1after from "../../assets/projects/reedbed1after.jpg";
import reedbed2before from "../../assets/projects/reedbed2before.jpg";
import reedbed2after from "../../assets/projects/reedbed2after.jpg";
import reedbed3before from "../../assets/projects/reedbed3before.jpg";
import reedbed3after from "../../assets/projects/reedbed3after.jpg";
import reed1 from "../../assets/projects/reed1.jpg";
import reed2 from "../../assets/projects/reed2.jpg";
import reed3 from "../../assets/projects/reed3.jpg";
import reed4 from "../../assets/projects/reed4.jpg";

export default function ReedBedControl() {
  return (
    <section className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* ---------------- HEADER ---------------- */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Reed Bed Control & Management
          </h1>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Aquaclear are experts in the management and maintenance of reed beds
            and waterways, with years of experience cutting and clearing reed
            beds across the UK. Regular maintenance encourages healthy new reed
            growth, supports wildlife, and keeps water moving freely through
            these vital habitats.
          </p>
        </div>

        {/* ---------------- ABOUT ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body md:p-10">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Experience
            </h2>
            <p className="text-base-content/80 leading-relaxed mb-4">
              We understand that reed beds are an intermediate habitat between
              open water and marshland. Without routine cutting and clearance,
              they can quickly become overgrown and stagnant. Regular
              maintenance promotes biodiversity and ensures sustainable habitat
              health.
            </p>
            <p className="text-base-content/80 leading-relaxed mb-3">
              Our clients include organisations such as:
            </p>
            <ul className="list-disc list-inside text-base-content/80 space-y-1">
              <li>Royal Society for the Protection of Birds (RSPB)</li>
              <li>The Environment Agency</li>
              <li>Natural England</li>
              <li>Natural Resources Wales</li>
              <li>Herts & Middlesex Wildlife Trust</li>
              <li>Various local councils and trusts</li>
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
            <ul className="list-disc list-inside space-y-1 text-base-content/80">
              <li>Cut and clear large blocks of reed</li>
              <li>Maintain sight lines and channels</li>
              <li>Create wading pools for birds and wildlife</li>
              <li>Restore existing pools and ditches</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={reed1}
              alt="Truxor cutting reeds"
              className="rounded-2xl shadow-md object-cover h-48 w-full"
            />
            <img
              src={reed2}
              alt="Reed cutting in progress"
              className="rounded-2xl shadow-md object-cover h-48 w-full"
            />
            <img
              src={reed3}
              alt="Clearing reed bed area"
              className="rounded-2xl shadow-md object-cover h-48 w-full"
            />
            <img
              src={reed4}
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
                    and visibility. These areas can be cut and cleared to
                    restore their original purpose, maintaining open water
                    channels and allowing better circulation throughout the reed
                    bed.
                  </p>
                </div>
                <BeforeAfter
                  before={reedbed1before}
                  after={reedbed1after}
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
                    Our machines can operate in deep water, shallow water, or
                    dry ground, making them ideal for efficiently cutting and
                    removing large reed areas that would be too difficult or
                    dangerous by hand.
                  </p>
                </div>
                <BeforeAfter
                  before={reedbed2before}
                  after={reedbed2after}
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
                    width and ensure all cut material is cleared and placed
                    neatly on the nearby banks, maintaining a clean, natural
                    look.
                  </p>
                </div>
                <BeforeAfter
                  before={reedbed3before}
                  after={reedbed3after}
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
                    and all removed reed is cleared to leave a tidy, open
                    habitat ideal for wildlife.
                  </p>
                </div>
                <BeforeAfter
                  before={reed3}
                  after={reed4}
                  beforeDesc="Dense reed area before pool creation"
                  afterDesc="Open wading pool after cutting and clearance"
                />
              </div>
            </div>
          </div>

          {/* ---------------- CONTACT ---------------- */}
          <div className="card bg-base-100 shadow-md border border-base-300 text-center p-8 space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              Need Reed Bed Management?
            </h3>
            <p className="text-base-content/80 max-w-2xl mx-auto leading-relaxed">
              To discuss your reed bed or aquatic management requirements,
              pleasevcontact us directly. You can also explore more examples in
              our{" "}
              <Link
                to="/gallery/weed-reed-cutting"
                className="text-primary font-semibold hover:underline"
              >
                Weed & Reed Cutting Gallery
              </Link>
              .
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn btn-primary mt-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
