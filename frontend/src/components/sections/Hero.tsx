import SEOLink from "../ui/SEOLink";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <picture>
        <source srcSet="/images/truxor/banner.webp" type="image/webp" />
        <img
          src="/images/truxor/banner.webp"
          alt="Truxor amphibious machine clearing aquatic weeds"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-neutral-content px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Clear Water. Healthy Habitats. Expert Care.
          </h1>
          <p className="text-lg mb-6">
            From overgrown reedbeds to silted ponds, we bring 20 years of
            hands-on experience restoring and maintaining watercourses across
            the UK.
          </p>
          <div className="flex justify-center gap-4">
            <SEOLink to="/services" className="btn btn-primary">
              Our Services
            </SEOLink>
            <SEOLink to="/contact" className="btn btn-outline btn-secondary">
              Get in Touch
            </SEOLink>
          </div>
        </div>
      </div>
    </section>
  );
}
