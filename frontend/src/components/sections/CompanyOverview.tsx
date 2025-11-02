import SEOLink from "../ui/SEOLink";

export default function CompanyOverview() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-12">
          <img
            src="/images/truxor/truxor.webp"
            alt="Aquaclear team working on a waterway"
            className="rounded-2xl shadow-xl object-cover w-full sm:h-80 h-48"
          />
          <div>
            <h2 className="text-3xl text-primary font-semibold mb-4">Who We Are</h2>
            <p className="text-base-content/80 mb-4">
              Aquaclear Water Management operates nationwide, offering professional contracting
              services in all aspects of aquatic and wetland maintenance. With over 20 years of experience,
              we’ve worked with national environmental agencies, local councils, and private clients —
              maintaining watercourses from large reedbeds and commercial lakes to small garden ponds.
            </p>
            <p className="text-base-content/80 mb-6">
              Our mission is to protect and restore the UK’s waterways using sustainable, low-impact
              methods. Whether you need vegetation control, silt pumping, or full-scale dredging,
              we bring the expertise and the right equipment to get it done safely and efficiently.
            </p>

            {/* Contact CTA */}
            <SEOLink to="/contact" className="btn btn-primary mt-4">
              Contact for a Free Consultation
            </SEOLink>
          </div>
        </section>
    )
}