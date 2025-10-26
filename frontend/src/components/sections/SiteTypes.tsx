import {siteTypes} from "../../assets/sites"
import type { Sites } from "../../assets/sites";

export default function SiteSpecificCarousel() {
  return (
    <section className="max-w-6xl mx-auto px-6  space-y-8">
      <h2 className="text-3xl font-bold text-primary text-center">
        Site-Specifics
      </h2>

      <div className="carousel flex carousel-start mx-auto max-w-5xl mx-auto space-x-6 p-4 rounded-box">
        {siteTypes.map((site: Sites, i) => (
          <div
            key={i}
            className="carousel-item flex-shrink-0 card w-64 overflow-hidden bg-base-100 rounded-2xl shadow-lg"
          >
            <figure>
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold text-primary">
                {site.title}
              </h3>
              <p className="text-base-content/90 leading-relaxed text-sm">
                {site.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
