import teram1 from "../../assets/projects/teram1.jpg";
import teram2 from "../../assets/projects/teram2.jpg";
import siltcake from "../../assets/projects/siltcake.jpg";
import pembs1 from "../../assets/projects/pembs1.jpg";
import pembs2 from "../../assets/projects/pembs2.jpg";
import pembs3 from "../../assets/projects/pembs3.jpg";
import pembs4 from "../../assets/projects/pembs4.jpg";
import valleys1 from "../../assets/projects/valleys1.jpg";
import valleys2 from "../../assets/projects/valleys2.jpg";
import preston from "../../assets/projects/preston.jpg";
import northreserve1 from "../../assets/projects/northreserve1.jpg";
import northreserve2 from "../../assets/projects/northreserve2.jpg";
import SiltMethods from "../../components/SiltMethods";
import BeforeAfter from "../../components/BeforeAfter";

export default function SiltPumping() {
  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Page Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Silt Pumping & Dewatering
          </h1>
          <p className="text-base text-base-content/80 leading-relaxed">
            We undertake a range of silt management projects across the UK, from
            desilting ponds and waterways to managing industrial silt discharge.
            Every site requires a tailored approach — balancing environmental
            care, water control, and sustainable sediment handling.
          </p>
        </section>

        {/* Multiple Winter Works */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary">
                Multiple Winter Works — Semi-Permeable Membranes
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                Over winter, several silt pumping projects required temporary
                semi-permeable membranes in place of de-silting bags — ideal
                when the terrain isn’t level enough. These membranes trapped
                silt while allowing water to drain naturally. Once dry, the silt
                was removed or left to green over during the summer months.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <img
                src={teram1}
                alt="Silt membrane setup"
                className="rounded-xl object-cover h-52 w-full shadow-sm"
              />
              <img
                src={teram2}
                alt="Membrane silt collection"
                className="rounded-xl object-cover h-52 w-full shadow-sm hidden md:block"
              />
            </div>
          </div>
        </div>

        {/* Utility Company */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 p-6 md:flex-row-reverse items-center">
            <div className="order-2 md:order-1 space-y-3">
              <h2 className="text-2xl font-semibold text-primary">
                Water Utility Company — Silt Cake Processing
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                In partnership with a major water utility, silt was pumped into
                a holding tank and processed into a dry, compact “silt cake.”
                This minimized waste volume and allowed for cleaner handling and
                removal from site — a crucial step for heavily regulated water
                facilities.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={siltcake}
                alt="Silt cake processing tank"
                className="rounded-xl object-cover h-48 sm:h-64 w-full shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* North England Reserve */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary">
                North England Nature Reserve — Bund & Teram System
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                At a northern reserve, we used a silt pump with a permeable
                Teram membrane placed over a soil and timber bund. This
                increased water depth while maintaining flow in the watercourse.
                Once full, the bunds were left to drain, then greened naturally
                through the warmer months, enhancing biodiversity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <img
                src={northreserve1}
                alt="Bund setup at reserve"
                className="rounded-xl object-cover h-52 w-full shadow-sm"
              />
              <img
                src={northreserve2}
                alt="Teram in use at reserve"
                className="rounded-xl object-cover h-52 w-full shadow-sm hidden md:block"
              />
            </div>
          </div>
        </div>

        {/* Pembrokeshire Reserve */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 p-6 md:flex-row-reverse items-center">
            <div className="order-2 md:order-1 space-y-3">
              <h2 className="text-2xl font-semibold text-primary">
                Pembrokeshire Nature Reserve — Dewatering Bags & Grab Bucket
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                At a pond site in Pembrokeshire, silt and reed buildup had
                choked the watercourse. Using a combination of silt pumping and
                dewatering bags, we gradually filtered out excess material. Once
                drained, a grab bucket was used to remove a central “silt
                island,” reopening the natural flow of the brook.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <img
                src={pembs1}
                alt="Silt pump in action"
                className="rounded-xl object-cover h-52 w-full shadow-sm hidden md:block"
              />
              <img
                src={pembs2}
                alt="Dewatering bags on site"
                className="rounded-xl object-cover h-52 w-full shadow-sm"
              />
              <img
                src={pembs3}
                alt="Grab bucket removing silt"
                className="rounded-xl object-cover h-52 w-full shadow-sm hidden md:block"
              />
              <img
                src={pembs4}
                alt="Cleared pond area"
                className="rounded-xl object-cover h-52 w-full shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Valleys */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Welsh Valleys — Grab Bucket Desilting
            </h2>
            <p className="text-base-content/80 leading-relaxed text-center max-w-3xl mx-auto">
              In the Welsh Valleys, silt accumulation had made a public pond
              shallow and unsightly. Using a grab bucket, we restored depth and
              water quality. The diff view below shows the transformation
              clearly.
            </p>
              <BeforeAfter before={valleys1} after={valleys2} />
          </div>
        </div>

        {/* Preston */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary">
                Preston — Silt Pump & Geotextile Barrier
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                This private pond project in Preston involved pumping silt
                behind a geotextile barrier set on unused land. After draining
                and setting, the membrane was removed and the silt left to green
                over, restoring the pond’s natural balance and clarity.
              </p>
            </div>
            <div>
              <img
                src={preston}
                alt="Geotextile barrier in Preston"
                className="rounded-xl object-cover h-48 sm:h-64 w-full shadow-sm"
              />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <SiltMethods />
        </div>
      </div>
    </div>
  );
}
