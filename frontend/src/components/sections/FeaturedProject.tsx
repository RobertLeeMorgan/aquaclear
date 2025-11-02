import SEOLink from "../ui/SeoLink";
import BeforeAfter from "../ui/BeforeAfter";

export default function FeaturedProject() {
  return (
    <section className="pt-6 bg-base-200 px-4 sm:px-8 py-6 md:py-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <BeforeAfter
          before="/images/before/wales.webp"
          after="/images/after/wales.webp"
          beforeDesc="Before "
          afterDesc=""
        />
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Featured Project
          </h2>
          <p className="mb-4">
            We recently restored the wetland habitat at{" "}
            <strong>Minsmere Reserve</strong>, cutting invasive vegetation and
            improving water flow across key conservation areas.
          </p>
          <SEOLink to="/gallery/weed-reed-cutting" label="Weed/reed cutting gallery" className="btn btn-primary">
            View More Projects
          </SEOLink>
        </div>
      </div>
    </section>
  );
}
