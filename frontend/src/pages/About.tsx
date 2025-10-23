import { Link } from "react-router-dom";
import truxor from "../assets/truxor.jpg";

export default function About() {
  return (
    <section className="min-h-screen bg-base-200 py-16 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            About Aquaclear
          </h1>
          <p className="text-lg text-base-content/80">
            Specialists in waterway, reed bed, and wetland management — combining decades of experience
            with innovative amphibious technology.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <img
            src={truxor}
            alt="Aquaclear team working on a waterway"
            className="rounded-2xl shadow-xl object-cover w-full sm:h-80 h-48"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
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
            <Link to="/contact" className="btn btn-primary mt-4">
              Contact for a Free Consultation
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-12"></div>

        {/* Truxor Section */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title text-3xl text-primary mb-4 text-center">
              The Truxor Amphibious Harvester
            </h2>

            <p className="text-base-content/80 mb-4">
              Central to our work is the <strong>Truxor Amphibious Harvester</strong> — a lightweight,
              land-to-water machine that allows us to access areas traditional machinery cannot reach.
              Its ability to transition seamlessly between land and water makes it ideal for everything
              from narrow canals and marinas to sensitive environments such as nature reserves and SSSI sites.
            </p>

            <p className="text-base-content/80 mb-4">
              The Truxor’s low ground pressure and versatile tool attachments make it the perfect solution
              for weed cutting, silt removal, and on-water excavation. Attachments can be swapped within
              minutes, ensuring maximum flexibility for any project.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="table">
                <thead>
                  <tr className="text-primary">
                    <th>Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Min. Width</td><td>2.2m</td></tr>
                  <tr><td>Max. Length</td><td>5m</td></tr>
                  <tr><td>Max. Height (without driver)</td><td>2.6m</td></tr>
                  <tr><td>Weight</td><td>1,400kg</td></tr>
                  <tr><td>Mode of Delivery</td><td>4x4 with trailer</td></tr>
                  <tr><td>Minimum Working Depth</td><td>None required</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-base-content/80 mb-6 italic text-center">
              We are proud to be partnered with <strong>Truxor UK Ltd</strong> — the official UK retailer
              and distributor for Truxor machines, spare parts, and servicing.
            </p>

            {/* Truxor UK Link */}
            <div className="card-actions justify-center">
              <a
                href="https://www.truxoruk.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary"
              >
                Visit Truxor UK Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
