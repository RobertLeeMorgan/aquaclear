import SEOLink from "../components/ui/SEOLink";

export default function Hero() {
  return (
    <section
      className="hero min-h-screen relative"
      role="img"
      aria-label="Team performing aquatic weed removal on a lake"
      style={{
        backgroundImage: "url(/images/hero-background.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/50"></div>

      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Aquaclear</h1>
          <h2 className="mb-5 text-lg font-medium text-white">
            Protecting lakes, ponds, reedbeds, and wetlands across the UK for over 20 years.
          </h2>
          <p className="mb-5 text-white">
            Specialists in dredging, vegetation control, and pond restoration — delivering clear, healthy, and sustainable water environments for estates, councils, and private landowners all year round.
          </p>
          <SEOLink to="/home" className="btn btn-primary" aria-label="Book a service with Aquaclear">
            Book a service today
          </SEOLink>
        </div>
      </div>
    </section>
  );
}
