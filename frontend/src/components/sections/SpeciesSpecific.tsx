import SEOLink from "../ui/SEOLink";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import BeforeAfter from "../../components/ui/BeforeAfter";

export default function SpeciesSpecific() {
  return (
    <section className="space-y-6 ">
      <h2 className="text-3xl font-bold text-primary text-center mb-4">
        Species-Specific Information
      </h2>

      {/* -------------------- Blanket Weed -------------------- */}
      <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100 transition-all duration-300">
        <input type="radio" name="weed-accordion" />
        <div className="collapse-title text-xl font-semibold text-primary">
          Blanket Weed (Algae) Removal and Control
        </div>
        <div className="collapse-content space-y-4 leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-8">
            <p className="text-base-content/90">
              Algae, often called <strong>'Pond Scum'</strong> or{" "}
              <strong>'Blanket Weed'</strong>, is common on UK watercourses.
              Rising temperatures increase growth, with blooms peaking in spring
              and summer. Surface mats absorb sunlight, warming the water and
              accelerating growth, while nutrient runoff from agriculture
              promotes rapid spreading.
            </p>
            <img
              src="/images/weeds/algae.webp"
              alt="Blanket weed"
              className="rounded-2xl max-h-60 w-full object-cover mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
            The Problems with Algae
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 text-base-content/80">
            {[
              "Unsightly and foul smelling",
              "Impede movement of boats and watercraft",
              "Reduce sunlight for submerged plants",
              "Hamper fishing and watersports",
              "Clog inlets, outlets, and water features",
              "Produce harmful toxins dangerous to humans and wildlife",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaExclamationTriangle className="text-warning mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-3">
            <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
              Algae Removal
            </h3>
            <p className="text-base-content/90">
              Mechanical skimming removes algae from the surface while
              preserving oxygenating plants below, restoring water clarity and
              balancing the aquatic environment.
            </p>
            <p className="text-base-content/90">
              Silt removal controls nutrients such as nitrates and phosphates,
              reducing future bloom risk and providing a longer-term algae
              management solution.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------- Bulrush & Bur-reed -------------------- */}
      <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100 transition-all duration-300">
        <input type="radio" name="weed-accordion" />
        <div className="collapse-title text-xl font-semibold text-primary">
          Bulrush and Bur-reed Cutting and Removal
        </div>
        <div className="collapse-content space-y-4 leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-8">
            <p className="text-base-content/90">
              These marginal plants form dense rhizomes. Moderate growth
              supports habitats, but excessive growth blocks inlets, reduces
              flow, and impacts biodiversity.
            </p>
            <img
              src="/images/weeds/bulrush.webp"
              alt="Bulrush"
              className="rounded-2xl max-h-60 w-full object-cover mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
            The Problems with Excessive Growth
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 text-base-content/80">
            {[
              "Block inlets and outlets",
              "Reduce water depth and flow",
              "Increase flood risk",
              "Outcompete native plants",
              "Impede navigation and water movement",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaExclamationTriangle className="text-warning mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-3">
            <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
              Cutting and Clearing
            </h3>
            <p className="text-base-content/90">
              Mechanical cutting opens waterways and encourages healthy
              regrowth. Precision cutting maintains habitats while keeping water
              flowing.
            </p>
            <p className="text-base-content/90">
              Grip and grab buckets remove rhizomes from blocked or encroached
              areas, providing longer-term control.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------- Water Lily -------------------- */}
      <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100 transition-all duration-300">
        <input type="radio" name="weed-accordion" />
        <div className="collapse-title text-xl font-semibold text-primary">
          Water Lily Maintenance and Control
        </div>
        <div className="collapse-content space-y-4 leading-relaxed">
          <p className="text-base-content/90">
            Water lilies are common in UK ponds and lakes. They provide habitat
            but can dominate water surfaces, outcompeting native species if left
            unchecked.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
            A Feature Plant
          </h3>
          <p className="text-base-content/90">
            Precision cutting clears selected areas while maintaining ecological
            balance. Large rhizome systems may require root removal for
            long-term control.
          </p>
          <BeforeAfter
            before="/images/before/waterlily1.webp"
            after="/images/after/waterlily1.webp"
            beforeDesc="Dense lily pads covering pond surface"
            afterDesc="Selective clearing restoring open water"
          />
        </div>
      </div>

      {/* -------------------- Invasive Species -------------------- */}
      <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100 transition-all duration-300">
        <input type="radio" name="weed-accordion" />
        <div className="collapse-title text-xl font-semibold text-primary">
          Invasive Species Removal and Control
        </div>
        <div className="collapse-content space-y-4 leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-8">
            <p className="text-base-content/90">
              Many invasive species are banned from sale in the UK. Many
              waterways are already infested and require regular maintenance to
              keep them at bay.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
              <img
                src="/images/weeds/canadianpondweed.webp"
                alt="Invasive species"
                className="rounded-2xl max-h-60 w-full object-cover mx-auto shadow-lg "
              />
              <img
                src="/images/weeds/floatingpennywort.webp"
                alt="Invasive species"
                className="rounded-2xl max-h-60 h-full object-cover mx-auto shadow-lg hidden sm:block"
              />
              <img
                src="/images/weeds/duckweed.webp"
                alt="Invasive species"
                className="rounded-2xl max-h-60 w-full object-cover mx-auto shadow-lg hidden sm:block"
              />
              <img
                src="/images/weeds/horsetail.webp"
                alt="Invasive species"
                className="rounded-2xl max-h-60 w-full object-cover mx-auto shadow-lg hidden sm:block"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
            The Problems with Invasive Species
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 text-base-content/80">
            {[
              "Outcompete native plant species",
              "Remove oxygen from the water",
              "Clog waterways",
              "Hamper water activities",
              "Endanger swimmers/divers",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaExclamationTriangle className="text-warning mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-3">
            <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
              When clearing invasives we will:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 text-base-content/80">
              {[
                "Cut and remove as much plant material as possible",
                "Cut deeply at the base to prevent fragmentation",
                "Remove cut material to stop spread and re-growth",
                "Clean machinery between sites to avoid cross-contamination",
                "Leave cut material on the bank for up to 48 hours to allow invertebrates to return",
                "Advise clients on ongoing maintenance after work",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-success mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 pt-6 text-center">
            <p className="mb-3 text-base text-base-content/90">
              Need help identifying an invasive species? Check out our
              comprehensive
              <span className="font-semibold text-primary"> </span>
            </p>
            <SEOLink
              to="/resources/weed-identification-guide"
              className="inline-block bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary-focus transition-colors duration-300"
            >
              Invasive Species Guide
            </SEOLink>
          </div>
        </div>
      </div>
    </section>
  );
}
