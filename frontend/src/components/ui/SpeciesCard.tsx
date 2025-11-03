import { useState } from "react";
import type { Species } from "../../pages/resources/weedIdentification";

export default function SpeciesCard({ species }: { species: Species }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200 flex flex-col">
      <figure>
        <img
          src={species.image}
          alt={species.commonName}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body space-y-3 px-4 sm:px-8 flex-1">
        <div>
          <h2 className={`text-primary text-xl font-semibold ${
              expanded ? "" : "line-clamp-1"
            }`}>
            {species.commonName}
          </h2>
          {(species.scientificName || species.family) && (
            <p className="text-sm italic text-base-content/60 mt-0.5">
              {species.scientificName ?? species.family}
            </p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-base">Identification</h3>
          <p
            className={`text-sm leading-relaxed whitespace-pre-line transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {species.identification}
          </p>
        </div>

        {expanded && (
          <div>
            <h3 className="font-semibold text-base">Description</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line transition-all duration-300">
              {species.description}
            </p>
          </div>
        )}

        {(species.description.length > 80 ||
          species.identification.length > 100) && (
          <button
          aria-label={`Read more about ${species.commonName}`}
            onClick={() => setExpanded((e) => !e)}
            className="text-primary text-sm mt-1 font-medium hover:underline"
          >
            {expanded ? "Show less" : "Read more" }
          </button>
        )}
      </div>
    </div>
  );
}
