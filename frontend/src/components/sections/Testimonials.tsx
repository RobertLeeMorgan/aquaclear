import { testimonials } from "../../assets/testimonials";

export default function Testimonials() {
    return (
        <section className="bg-base-200 sm:py-16 py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          What Our Clients Say
        </h2>

        <div className="carousel flex carousel-start mx-auto max-w-5xl mx-auto space-x-6 p-4 rounded-box">
          {testimonials.map((t, i) => (
            <div key={i} className="carousel-item">
              <div className="card bg-base-100 shadow-md w-80 h-full">
                <div className="card-body items-center text-center">
                  <div className="rating mb-2">
                    {[...Array(5)].map((_, j) => (
                      <input
                        key={j}
                        type="radio"
                        name={`rating-${t.name}`}
                        className="mask mask-star-2 bg-yellow-400"
                        checked
                        readOnly
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">“{t.quote}”</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm opacity-70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}