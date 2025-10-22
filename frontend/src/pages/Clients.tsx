import { testimonials } from "../assets/testimonials";

export default function Clients() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero + Client List Section */}
      <section className="bg-base-200 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Text */}
          <div>
            <h1 className="text-5xl font-bold text-primary mb-6">
              Our Clients
            </h1>
            <p className="text-lg text-base-content/90 mb-6 leading-relaxed">
              Over the years, Aquaclear Water Management has partnered with
              leading environmental organisations, councils, golf courses, and
              private estates across the UK. We take pride in providing
              sustainable solutions for waterway management and ecological
              restoration.
            </p>
            <p className="text-base text-base-content/80">
              From nationally protected reserves to world-class sporting venues,
              our trusted partners reflect our commitment to excellence and
              environmental care.
            </p>
          </div>

          {/* Right: Client List Card */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Organisations We’ve Worked With
              </h2>
              <ul className="list-disc list-outside pl-6 space-y-2 text-base-content/90 max-h-[350px] overflow-y-auto pr-4">
                {[
                  "Royal Society for the Protection of Birds (RSPB)",
                  "Natural Resources Wales",
                  "Environment Agency",
                  "Canal and River Trust",
                  "Natural England",
                  "London Organising Committee of the Olympic Games (LOCOG)",
                  "National Watersports Centre, Nottingham",
                  "The Parks Trust",
                  "Cornwall County Council",
                  "Celtic Manor Golf Resort",
                  "Gleneagles Golf Club",
                  "Various SSSI Sites, Wildlife Trusts, Local Authorities, Golf Clubs, Private Fisheries & Sporting Venues",
                ].map((client, i) => (
                  <li key={i} className="leading-relaxed">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
     <div className="divider bg-base-200 m-0 p-0"></div>

      {/* Testimonials Section */}
      <section className="bg-base-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
            What Our Clients Have Said
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-md border border-base-300"
              >
                <div className="card-body">
                  <div className="rating mb-2">
                    {[...Array(5)].map((_, j) => (
                      <input
                        key={j}
                        type="radio"
                        name={`rating-${testimonial.name}`}
                        className="mask mask-star-2 bg-yellow-400"
                        checked
                        readOnly
                      />
                    ))}
                  </div>
                  <p className="italic mb-3">“{testimonial.quote}”</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-sm text-base-content/70">
                      {testimonial.title}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
