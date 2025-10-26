import PageHeader from "../components/layout/PageHeader";
import TruxorContact from "../components/sections/TruxorContact";

export default function Truxor() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-4xl w-full card bg-base-100 shadow-2xl p-8 space-y-6">
        <PageHeader
          title="Truxor Amphibious Machines"
          subtitle={
            <>
              <strong>Aquaclear Water Management</strong> are proud partners of{" "}
              <strong>Truxor UK Ltd</strong> — the official UK retailer and
              distributor of Truxor Amphibious Machines.
            </>
          }
        />
        
        {/* Image */}
        <figure className="flex justify-center">
          <img
            src="images/truxor/truxor.webp"
            alt="Truxor Amphibious Harvester"
            className="rounded-2xl shadow-xl object-cover w-full max-w-md sm:h-60 h-48"
          />
        </figure>

        {/* Description */}
        <section className="space-y-3">
          <p>
            The <strong>Truxor Amphibious Harvester</strong> is a versatile,
            lightweight, land-to-water machine designed for efficient and
            environmentally sensitive water management.
          </p>
          <p>
            Its amphibious design allows easy access to wetlands, ponds, lakes,
            and riverbanks — enabling Aquaclear to carry out tasks from cutting
            aquatic vegetation to dredging, excavation, and silt removal with
            minimal disruption to the surrounding ecosystem.
          </p>
        </section>

        {/* Services List */}
        <section className="mt-6">
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
        </section>

        <TruxorContact/>

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
    </div>
  );
}
