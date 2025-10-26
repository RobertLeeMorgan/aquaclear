import BeforeAfter from "../../components/ui/BeforeAfter";
import PageHeader from "../../components/layout/PageHeader";

export default function WeedReedCutting() {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 space-y-10">
      {/* Header */}
      <PageHeader
        title="Reed & Weed Cutting Projects"
        subtitle="Our reed and weed cutting services help restore water flow,
      encourage biodiversity, and maintain healthy aquatic environments.
      Below are a selection of our recent restoration and maintenance
      projects, followed by a look at reed bed creation and wading pools."
      />

      {/* ---------------- RSPB Cambridge ---------------- */}
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        <div className="card-body px-4 py-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-2">
              <BeforeAfter
                before="/images/before/rspb.webp"
                beforeDesc="Dense overgrowth before cutting"
                after="/images/after/rspb.webp"
                afterDesc="Open channel restored after cutting"
              />
            </div>
            <div className="order-2 md:order-1 py-2">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                RSPB Cambridge
              </h2>
              <p className="text-base text-base-content/80 leading-relaxed">
                Working alongside the RSPB, this project involved extensive weed
                cutting to open up water channels and rejuvenate areas of dense
                reed growth. The goal was to restore access for wildlife and
                improve natural water circulation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- CRT Oxfordshire ---------------- */}
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        <div className="card-body px-4 py-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-1">
              <BeforeAfter
                before="/images/before/crt.webp"
                beforeDesc="Overgrown waterway before clearance"
                after="/images/after/crt.webp"
                afterDesc="Flow restored post-maintenance"
              />
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Canal & River Trust – Oxfordshire
              </h2>
              <p className="text-base text-base-content/80 leading-relaxed">
                This section of canal had become overrun with weed growth,
                restricting navigation and impacting aquatic health. We used our
                Truxor units to clear the channels and re-establish flow,
                enabling improved oxygenation and wildlife movement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Dartford ---------------- */}
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        <div className="card-body px-4 py-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-2">
              <BeforeAfter
                before="/images/before/dartford.webp"
                beforeDesc="Choked channel pre-clearance"
                after="/images/after/dartford.webp"
                afterDesc="Healthy watercourse after cutting"
              />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Dartford
              </h2>
              <p className="text-base text-base-content/80 leading-relaxed">
                A large-scale clearance and reed cut project on a watercourse in
                Dartford. Careful timing ensured minimal disruption to nesting
                birds while achieving the required clearance before the main
                flow season.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- CRT Wales ---------------- */}
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        <div className="card-body px-4 py-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-1">
              <BeforeAfter
                before="/images/before/wales.webp"
                beforeDesc="Weed congestion before maintenance"
                after="/images/after/wales.webp"
                afterDesc="Flow restored and waterline visible"
              />
            </div>
            <div className="order-2 md:order-2">
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
          </div>
        </div>
      </div>

      {/* ---------------- Reed Bed & Wading Pools ---------------- */}
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        <div className="card-body px-4 py-6 sm:p-8 space-y-8">
          {/* Section Title */}
          <div className="text-center space-y-6">
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
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              National Trust Reed Bed
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src="/images/projects/reed1.webp"
                alt="Wading Pool 1"
                className="rounded-xl shadow-md object-cover h-48 w-full"
              />
              <img
                src="/images/projects/reed2.webp"
                alt="Wading Pool 2"
                className="rounded-xl shadow-md object-cover h-48 w-full"
              />
              <img
                src="/images/projects/reed3.webp"
                alt="Wading Pool 3"
                className="rounded-xl shadow-md object-cover h-48 w-full hidden md:block"
              />
              <img
                src="/images/projects/reed4.webp"
                alt="Wading Pool 4"
                className="rounded-xl shadow-md object-cover h-48 w-full hidden md:block"
              />
            </div>
          </div>

          {/* RSPB Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              RSPB Reed Bed
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="order-1 md:order-1">
                <BeforeAfter
                  before="/images/before/reed1.webp"
                  after="/images/after/reed1.webp"
                  beforeDesc="Before restoration"
                  afterDesc="After restoration"
                />
              </div>
              <div className="order-2 md:order-2">
                <BeforeAfter
                  before="/images/before/reed2.webp"
                  after="/images/after/reed2.webp"
                  beforeDesc="Before cutting"
                  afterDesc="Healthy reed pool after works"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
