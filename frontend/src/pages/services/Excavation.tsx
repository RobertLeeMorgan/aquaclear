import { FaExclamationTriangle } from "react-icons/fa";
import BeforeAfter from "../../components/ui/BeforeAfter";
import PageHeader from "../../components/layout/PageHeader";
import ContactUsCard from "../../components/common/ContactUsCard";

export default function ExcavationDitching() {
  return (
    <div className="bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <PageHeader
          title="Excavation & Ditching"
          subtitle="Our Truxor Amphibious Harvester allows us to reach and excavate
            areas that conventional machinery simply can’t. From restoring
            wetlands to strengthening banks, we deliver precise excavation and
            ditching works that enhance both water flow and ecological health."
        />

        {/* ---------------- Problems Section ---------------- */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body p-6 md:p-10">
            <h2 className="card-title text-2xl text-primary mb-4">
              Why Excavation & Ditching Is Important
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-base-content/80">
              {[
                "Restores water flow and circulation in blocked channels",
                "Prevents flooding by increasing drainage capacity",
                "Creates or enlarges ponds and watercourses",
                "Strengthens banks and supports structural stability",
                "Encourages habitat diversity and wetland regrowth",
                "Connects isolated areas of standing water",
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-warning" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base-content/80">
              Strategic excavation not only shapes the landscape — it ensures
              long-term site stability, better water management, and the
              creation of thriving aquatic ecosystems.
            </p>
          </div>
        </div>

        {/* ---------------- Equipment Section ---------------- */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-primary text-center">
            Specialist Equipment
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Excavator Arm */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img
                  src="/images/truxor/truxorexcavator.webp"
                  alt="Truxor Excavator Arm"
                  className="object-cover h-56 w-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">
                  Truxor Excavator Arm
                </h3>
                <p className="text-base-content/80">
                  Fitted with a precision digging arm, the Truxor can move large
                  quantities of silt, clay, and gravel even in shallow or boggy
                  conditions. Material can be deposited safely on nearby banks
                  or transported by floating platforms.
                </p>
              </div>
            </div>

            {/* Grab Bucket */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img
                  src="/images/truxor/grabbucket.webp"
                  alt="Truxor Grab Bucket"
                  className="object-cover h-56 w-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">Grab Bucket</h3>
                <p className="text-base-content/80">
                  Ideal for stony or gravel beds, the grab bucket dredges and
                  lifts heavier material with accuracy — removing obstructions
                  and shaping new channels without harming the existing habitat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Habitat Creation Section ---------------- */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 items-center p-6 md:p-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Habitat Creation & Water Management
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                Excavation and ditching often serve a dual purpose — improving
                water flow while enhancing biodiversity. By constructing bunds,
                scrapes, and interconnecting channels, we enable natural water
                movement across the landscape and promote wetland regeneration.
              </p>
              <p className="text-base-content/80 leading-relaxed">
                Our work often includes enlarging ponds, reconnecting isolated
                pools, and stabilizing banks. These projects create balanced,
                self-sustaining habitats for fish, amphibians, and birdlife.
              </p>
            </div>
            <img
              src="/images/after/millpond3.webp"
              alt="Bund and trench formation"
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
        </div>

        {/* ---------------- Project Example ---------------- */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Project Example</h2>
          <BeforeAfter
            before="/images/before/habitat.webp"
            after="/images/after/habitat.webp"
            beforeDesc="Before Excavation & Ditching"
            afterDesc="After Habitat Restoration"
          />
          <p className="text-base-content/80 max-w-2xl mx-auto">
            At a recent project in mid-Wales, we transformed a dried floodplain
            into a vibrant wetland habitat by constructing bunds and linking
            water channels. The result: a connected ecosystem that naturally
            manages water levels while supporting thriving aquatic species.
          </p>
        </div>
        <ContactUsCard
          title="Excavation or Water Management"
          text="To learn more about our excavation and ditching services, or to
            discuss your project, please contact us directly. You can also view
            more examples in our"
          url="/gallery/excavation-ditching"
          linkto="Excavation Gallery"
        />
      </div>
    </div>
  );
}
