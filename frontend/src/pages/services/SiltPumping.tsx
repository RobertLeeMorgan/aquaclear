import { FaExclamationTriangle } from "react-icons/fa";
import BeforeAfter from "../../components/BeforeAfter";
import { Link } from "react-router-dom";
import doroPump from "../../assets/projects/doroPump.jpg";
import truxor from "../../assets/projects/truxor.jpg";
import valleys1 from "../../assets/projects/valleys1.jpg";
import valleys2 from "../../assets/projects/valleys2.jpg";
import dewateringBag from "../../assets/projects/siltbags.jpg";
import geotextileBarrier from "../../assets/projects/siltbarrier.jpg";
import soilBund from "../../assets/projects/siltbunds.jpg";
import grab from "../../assets/projects/grabbucket.jpg"


export default function SiltPumping() {
  return (
    <div className="bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* ---------------- Header ---------------- */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Dredging & Silt Pumping
          </h1>
          <p className="text-base md:text-lg text-base-content/80 max-w-3xl mx-auto">
            The buildup of silt in watercourses can lead to a range of problems — 
            from cosmetic issues to serious environmental risks. Our dredging and 
            silt pumping services provide effective, environmentally conscious 
            solutions for long-term water management.
          </p>
        </div>

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
              Left unchecked, these issues can lead to the loss of aquatic life and, 
              in severe cases, the complete degradation of the watercourse. 
              Dredging and desilting provide long-lasting solutions to restore and 
              preserve your water environments.
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
                <img src={truxor} alt="Truxor Amphibious Harvester" className="object-cover h-56 w-full" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">The Truxor</h3>
                <p className="text-base-content/80">
                  The Truxor Amphibious Harvester can be fitted with dredging and silt pumping tools, 
                  allowing for efficient and low-impact silt removal from difficult-to-access areas.
                </p>
              </div>
            </div>

            {/* Doro Pump */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img src={doroPump} alt="Doro Pump" className="object-cover h-56 w-full" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">The Doro Pump</h3>
                <p className="text-base-content/80">
                  The Doro Pump allows us to access problem areas and pump large quantities of silt — 
                  up to 300 meters away — into specific containers for controlled disposal.
                </p>
              </div>
            </div>

            {/* Grab Bucket */}
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <figure>
                <img src={grab} alt="Grab Bucket" className="object-cover h-56 w-full" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">The Grab Bucket</h3>
                <p className="text-base-content/80">
                  Ideal for stone or gravel beds, the Grab Bucket dredges silt from the bottom 
                  and transports it to designated disposal areas with minimal disruption.
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
              The silt removed is often a mixture of sediment and water. Depending on 
              the site, we use various containment and separation systems to ensure 
              clean, efficient removal.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <img src={dewateringBag} alt="Dewatering Bags" className="rounded-xl object-cover h-48 w-full shadow" />
                <p className="mt-2 font-medium text-center">Dewatering Bags</p>
              </div>
              <div>
                <img src={geotextileBarrier} alt="Geotextile Barriers" className="rounded-xl object-cover h-48 w-full shadow" />
                <p className="mt-2 font-medium text-center">Geotextile Barriers</p>
              </div>
              <div>
                <img src={soilBund} alt="Soil Bunds" className="rounded-xl object-cover h-48 w-full shadow" />
                <p className="mt-2 font-medium text-center">Soil Bunds</p>
              </div>
            </div>

            <p className="text-base-content/80">
              Other solutions include large water tanks and specialised farming equipment. 
              Some operate on a continuous flow system, while others use a “fill and drain” 
              method — chosen based on site conditions.
            </p>
          </div>
        </div>

        {/* ---------------- Before / After ---------------- */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Project Example</h2>
          <BeforeAfter
            before={valleys1}
            after={valleys2}
            beforeDesc="Before Dredging"
            afterDesc="After Silt Removal"
          />
          <p className="text-base-content/80 max-w-2xl mx-auto">
            Our silt pumping work transforms blocked or stagnant watercourses into 
            clear, healthy, and functioning systems — all while preserving the 
            surrounding habitat.
          </p>
        </div>

        {/* ---------------- Contact Section ---------------- */}
        <div className="card bg-base-100 shadow-md border border-base-300 text-center p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            Need Help with Silting or Dredging?
          </h3>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            For more information or to discuss a specific project, 
            please contact us directly. You can also view our full 
            <Link to="/gallery/silting" className="text-primary font-semibold"> Silt Pumping Gallery </Link>
            or download our equipment brochure for technical data.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-outline">Download Brochure (PDF)</button>
          </div>
        </div>
      </div>
    </div>
  );
}
