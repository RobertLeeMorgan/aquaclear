import SEOLink from "../components/ui/SEOLink";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/images/hero-background.webp)",
      }}
      aria-label="Aquatic weed removal on a lake"
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Aquaclear</h1>
          <p className="mb-5 font-medium text-white">
            Over 20 years protecting lakes, ponds, reedbeds, and wetlands across
            the UK. From vegetation control to dredging, we keep your water safe
            and beautiful.
          </p>
          <SEOLink to="/home" className="btn btn-primary">
            Book a service today
          </SEOLink>
        </div>
      </div>
    </div>
  );
}
