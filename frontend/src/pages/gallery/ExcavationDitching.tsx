import millpond1before from "../../assets/projects/millpond1before.jpg";
import millpond1after from "../../assets/projects/millpond1after.jpg";
import millpond2before from "../../assets/projects/millpond2before.jpg";
import millpond2after from "../../assets/projects/millpond2after.jpg";
import millpond3before from "../../assets/projects/millpond3before.jpg";
import millpond3after from "../../assets/projects/millpond3after.jpg";
import BeforeAfter from "../../components/BeforeAfter";
import llanfyllinAfter from "../../assets/projects/habitatafter.jpg";
import llanfyllinBefore from "../../assets/projects/habitatbefore.jpg";

export default function ExcavationDitching() {
  return (
    <section className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Habitat Creation & Ditching Projects
          </h1>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Our restoration projects combine technical precision and ecological
            care — rebuilding reed beds, reshaping watercourses, and creating
            vibrant habitats for aquatic life.
          </p>
        </section>

        {/* ---------------- Pembroke Mill Pond ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body space-y-2">
            {/* Section 1 - Intro Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div className="space-y-4">
                <h2 className="card-title text-2xl text-primary">
                  Pembroke Mill Pond
                </h2>
                <p className="text-base text-base-content/80 leading-relaxed">
                  The reed bed at Pembroke Mill Pond had dried and become boggy,
                  causing water loss and habitat decline. Our solution was to
                  construct a bund surrounding the area, redirecting water to
                  restore moisture levels and encourage regrowth.
                  <br />
                  <br />
                  This phase required selective reed cutting and clearance to
                  make space for excavation equipment, while maintaining
                  existing wildlife zones.
                </p>
              </div>
              <BeforeAfter
                before={millpond1before}
                beforeDesc="Reed bed before works"
                after={millpond1after}
                afterDesc="After bund formation"
              />
            </div>

            {/* Section 2 - Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <BeforeAfter
                before={millpond2before}
                beforeDesc="Overgrown tree line before clearance"
                after={millpond2after}
                afterDesc="Cleared bank ready for ditching"
              />
              <p className="text-base text-base-content/80 leading-relaxed">
                Once reeds were harvested, our team used the Truxor’s digging
                arm to carry out ditching and bund shaping. This required
                careful navigation through dense vegetation and unstable
                terrain.
                <br />
                <br />
                By alternating between manual trimming and mechanical
                excavation, we ensured minimal disruption while achieving full
                bund connectivity.
              </p>
            </div>

            {/* Section 3 - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <p className="text-base text-base-content/80 leading-relaxed">
                The bund extended several hundred meters through hedgerows and
                wooded areas. Once the structure was complete, it was left to
                green naturally through spring and summer, forming a thriving
                wetland corridor that now supports diverse aquatic plant life.
              </p>
              <BeforeAfter
                before={millpond3before}
                beforeDesc="Path before shaping"
                after={millpond3after}
                afterDesc="Bund path established and greening"
              />
            </div>
          </div>
        </div>

        {/* ---------------- Llanfyllin Scrapes ---------------- */}
        <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
          <div className="card-body space-y-2">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div className="space-y-4">
                <h2 className="card-title text-2xl text-primary">
                  Llanfyllin Scrapes
                </h2>
                <p className="text-base text-base-content/80 leading-relaxed">
                  At Llanfyllin, we transformed a floodplain into a connected
                  network of shallow pools designed to attract wading birds and
                  wetland species. The project involved precision excavation to
                  manage water levels while maintaining the area’s natural
                  hydrology.
                  <br />
                  <br />
                  This habitat creation effort demonstrates how reshaping
                  landforms can yield both ecological and aesthetic value,
                  turning once-flat ground into a mosaic of living waterways.
                </p>
              </div>

              <BeforeAfter
                before={llanfyllinBefore}
                beforeDesc="Llanfyllin before shaping"
                after={llanfyllinAfter}
                afterDesc="Bund path established and greening"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
