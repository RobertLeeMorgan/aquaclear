import BeforeAfter from "../../components/BeforeAfter";

import rspbBefore from "../../assets/projects/rspbBefore.jpg";
import rspbAfter from "../../assets/projects/rspbAfter.jpg";
import crtBefore from "../../assets/projects/crtBefore.jpg";
import crtAfter from "../../assets/projects/crtAfter.jpg";
import dartfordBefore from "../../assets/projects/dartfordBefore.jpg";
import dartfordAfter from "../../assets/projects/dartfordAfter.jpg";
import walesBefore from "../../assets/projects/walesBefore.jpg";
import walesAfter from "../../assets/projects/walesAfter.jpg";

import reed1 from "../../assets/projects/reed1.jpg";
import reed2 from "../../assets/projects/reed2.jpg";
import reed3 from "../../assets/projects/reed3.jpg";
import reed4 from "../../assets/projects/reed4.jpg";

import reed1before from "../../assets/projects/reed1before.jpg";
import reed2before from "../../assets/projects/reed2before.jpg";
import reed1after from "../../assets/projects/reed1after.jpg";
import reed2after from "../../assets/projects/reed2after.jpg";

export default function WeedReedCutting() {
  return (
    <section className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Reed & Weed Cutting Projects
          </h1>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Our reed and weed cutting services help restore water flow,
            encourage biodiversity, and maintain healthy aquatic environments.
            Below are a selection of our recent restoration and maintenance
            projects, followed by a look at reed bed creation and wading pools.
          </p>
        </section>

        {/* ---------------- RSPB Cambridge ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Text column with title inside */}
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  RSPB Cambridge
                </h2>
                <p className="text-base text-base-content/80 leading-relaxed">
                  Working alongside the RSPB, this project involved extensive
                  weed cutting to open up water channels and rejuvenate areas of
                  dense reed growth. The goal was to restore access for wildlife
                  and improve natural water circulation.
                </p>
              </div>
              <BeforeAfter
                before={rspbBefore}
                beforeDesc="Dense overgrowth before cutting"
                after={rspbAfter}
                afterDesc="Open channel restored after cutting"
              />
            </div>
          </div>
        </div>

        {/* ---------------- CRT Oxfordshire ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Canal & River Trust – Oxfordshire
                </h2>
                <p className="text-base text-base-content/80 leading-relaxed">
                  This section of canal had become overrun with weed growth,
                  restricting navigation and impacting aquatic health. We used
                  our Truxor units to clear the channels and re-establish flow,
                  enabling improved oxygenation and wildlife movement.
                </p>
              </div>
              <BeforeAfter
                before={crtBefore}
                beforeDesc="Overgrown waterway before clearance"
                after={crtAfter}
                afterDesc="Flow restored post-maintenance"
              />
            </div>
          </div>
        </div>

        {/* ---------------- Dartford ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Dartford
                </h2>
                <p className="text-base text-base-content/80 leading-relaxed">
                  A large-scale clearance and reed cut project on a watercourse
                  in Dartford. Careful timing ensured minimal disruption to
                  nesting birds while achieving the required clearance before
                  the main flow season.
                </p>
              </div>
              <BeforeAfter
                before={dartfordBefore}
                beforeDesc="Choked channel pre-clearance"
                after={dartfordAfter}
                afterDesc="Healthy watercourse after cutting"
              />
            </div>
          </div>
        </div>

        {/* ---------------- CRT Wales ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Canal & River Trust – Wales
                </h2>
                <p className="text-base text-base-content/80 leading-relaxed">
                  In Wales, our team carried out targeted cutting and reed
                  management to restore balance in a stretch of canal suffering
                  from invasive growth. The result was improved navigation,
                  aesthetics, and ecosystem function.
                </p>
              </div>
              <BeforeAfter
                before={walesBefore}
                beforeDesc="Weed congestion before maintenance"
                after={walesAfter}
                afterDesc="Flow restored and waterline visible"
              />
            </div>
          </div>
        </div>

        {/* ---------------- Reed Bed & Wading Pools ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body p-6 md:p-10 space-y-8">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Reed Work – Wading Pools
              </h2>
              <p className="text-base text-base-content/80 leading-relaxed max-w-2xl mx-auto">
                Our reed bed restoration and wading pool works aim to create
                shallow habitats ideal for nesting and feeding waterfowl. These
                small-scale pools complement our reed and weed cutting projects,
                promoting biodiversity and restoring natural balance to wetland
                areas.
              </p>
            </div>

            {/* National Trust Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                National Trust Reed Bed
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <img
                  src={reed1}
                  alt="Wading Pool 1"
                  className="rounded-xl shadow-md object-cover h-48 w-full"
                />
                <img
                  src={reed2}
                  alt="Wading Pool 2"
                  className="rounded-xl shadow-md object-cover h-48 w-full"
                />
                <img
                  src={reed3}
                  alt="Wading Pool 3"
                  className="rounded-xl shadow-md object-cover h-48 w-full"
                />
                <img
                  src={reed4}
                  alt="Wading Pool 4"
                  className="rounded-xl shadow-md object-cover h-48 w-full"
                />
              </div>
            </div>

            {/* RSPB Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                RSPB Reed Bed
              </h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <BeforeAfter
                  before={reed1before}
                  after={reed1after}
                  beforeDesc="Before restoration"
                  afterDesc="After restoration"
                />
                <BeforeAfter
                  before={reed2before}
                  after={reed2after}
                  beforeDesc="Before cutting"
                  afterDesc="Healthy reed pool after works"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
