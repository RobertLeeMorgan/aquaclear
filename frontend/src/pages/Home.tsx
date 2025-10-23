import Services from "../components/Services";
import { testimonials } from "../assets/testimonials";
import banner from "../assets/banner.jpg";
import { agencies } from "../assets/agencies";
import type { Agency } from "../assets/agencies";
import header from "../assets/header.jpg";

export default function Home() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <section
        className="hero min-h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
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
              the UK. Whether it's a private pond or a commercial lake, our team
              keeps your waters healthy, balanced, and beautiful.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/services" className="btn btn-primary">
                Our Services
              </a>
              <a href="/contact" className="btn btn-outline btn-accent">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-12 bg-base-200">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Trusted by Leading Environmental Organisations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-95 hover:opacity-100 transition">
          {agencies.map((agency: Agency) => (
            <img
              key={agency.title}
              src={agency.imgUrl}
              alt={agency.title}
              className="h-10 md:h-12 object-contain"
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          What We Do
        </h2>
        <Services />
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-base-200 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="diff aspect-[16/9] justify-center rounded-2xl overflow-hidden shadow-lg">
            <div className="diff-item-1">
              <img
                alt="daisy"
                src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
              />
            </div>
            <div className="diff-item-2">
              <img
                alt="daisy"
                src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
              />
            </div>
            <div className="diff-resizer w-72"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Featured Project
            </h2>
            <p className="mb-4">
              We recently restored the wetland habitat at{" "}
              <strong>Minsmere Reserve</strong>, cutting invasive vegetation and
              improving water flow across key conservation areas.
            </p>
            <a href="/projects" className="btn btn-primary">
              View More Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* About */}
      <section className="sm:py-16 py-10 bg-base-200 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              About Aquaclear
            </h2>
            <p className="text-base-content/80 mb-6 max-w-xl mx-auto lg:mx-0">
              Founded in 2003, Aquaclear Water Management has provided
              sustainable, environmentally conscious solutions for aquatic weed
              control and silt removal throughout the UK. Our experienced team
              delivers safe, efficient operations for nature reserves, councils,
              and private estates.
            </p>
            <a href="/about" className="btn btn-outline btn-primary">
              Learn More
            </a>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={header}
              alt="Aquaclear team working on site"
              className="rounded-2xl shadow-lg w-full max-w-md max-h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
