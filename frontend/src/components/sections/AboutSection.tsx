export default function AboutSection() {
    return (
        <section className="sm:py-10 py-6 bg-base-200 px-6">
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
              src="/images/header.webp"
              alt="Aquaclear team working on site"
              className="rounded-2xl shadow-lg w-full max-w-md max-h-64 object-cover"
            />
          </div>
        </div>
      </section>
    )
}