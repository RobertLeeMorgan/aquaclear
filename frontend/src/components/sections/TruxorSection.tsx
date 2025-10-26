export default function TruxorSection() {
    return (
        <section className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body px-4 sm:px-8">
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
        </section>
    )
}