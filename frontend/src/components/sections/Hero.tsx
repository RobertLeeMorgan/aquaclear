import SEOLink from "../ui/SEOLink";

export default function Hero() {
  return (
    <section
      className="hero min-h-[80vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url("/images/truxor/banner.webp")` }}
    >
      <div className="hero-overlay bg-black/50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
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
