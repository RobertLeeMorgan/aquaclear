import truxor from "../assets/truxor.jpg";

export default function Truxor() {
  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full card bg-base-100 shadow-2xl p-8 space-y-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-4">
          Truxor Amphibious Machines
        </h1>

        {/* Intro */}
        <p className="text-lg text-center text-gray-600">
          <strong>Aquaclear Water Management</strong> are proud partners of{" "}
          <strong>Truxor UK Ltd</strong> — the official UK retailer and distributor
          of Truxor Amphibious Machines.
        </p>

        {/* Image */}
        <figure className="flex justify-center">
          <img
            src={truxor}
            alt="Truxor Amphibious Harvester"
            className="rounded-xl shadow-lg max-w-md object-cover"
          />
        </figure>

        {/* Description */}
        <div className="space-y-3">
          <p>
            The <strong>Truxor Amphibious Harvester</strong> is a versatile,
            lightweight, land-to-water machine designed for efficient and
            environmentally sensitive water management.
          </p>
          <p>
            Its amphibious design allows easy access to wetlands, ponds,
            lakes, and riverbanks — enabling Aquaclear to carry out tasks from
            cutting aquatic vegetation to dredging, excavation, and silt removal
            with minimal disruption to the surrounding ecosystem.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Truxor UK Services
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Truxor Sales</li>
            <li>Tools and Attachments</li>
            <li>Spare Parts</li>
            <li>Truxor Servicing</li>
            <li>Order Spare Parts</li>
            <li>Training</li>
          </ul>
        </div>

        {/* Contact + CTA */}
        <div className="mt-8 bg-base-200 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Truxor UK Contact
          </h3>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.truxoruk.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              www.truxoruk.co.uk
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@truxoruk.co.uk"
              className="link link-primary"
            >
              info@truxoruk.co.uk
            </a>
          </p>
          <p>
            <strong>Telephone:</strong>{" "}
            <a href="tel:07775672567" className="link link-primary">
              07775 672567
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <a
            href="https://www.truxoruk.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Truxor UK
          </a>
        </div>
      </div>
    </section>
  );
}
