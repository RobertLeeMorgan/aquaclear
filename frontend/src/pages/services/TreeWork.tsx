import ContactUsCard from "../../components/common/ContactUsCard";

export default function TreeWork() {
  return (
    <section className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Tree Work & Vegetation Management
          </h1>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Waterways can often become obstructed by fallen trees, branches, or
            overgrown vegetation. Our Truxor’s log grab and grip bucket make
            removal safe and efficient, supporting our certified chainsaw
            operators in keeping watercourses clear, accessible, and healthy.
          </p>
        </div>

        {/* Section 1 - Truxor Operations */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl text-primary font-semibold">
              Safe and Efficient Obstruction Removal
            </h2>
            <p className="text-base text-base-content/80 leading-relaxed">
              Fallen trees and branches can quickly block channels, slow flow,
              and cause flooding or habitat loss. With the Truxor’s log grab, we
              remove timber directly from the water with precision and minimal
              disturbance to banks or wildlife. Its lightweight frame allows
              easy access to tight or sensitive areas where larger machinery
              would be unsuitable.
            </p>
          </div>
          <img
            src="/images/truxor/debris.webp"
            alt="Truxor removing tree debris from waterway"
            className="rounded-2xl shadow-lg object-cover w-full h-60 sm:h-72"
          />
        </div>

        {/* Section 2 - Joint Operations */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/services/chainsawWork.webp"
            alt="Chainsaw operator clearing overhanging branches"
            className="rounded-2xl shadow-lg object-cover w-full h-60 sm:h-72 order-2 md:order-1"
          />
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl text-primary font-semibold">
              Working Alongside Other Services
            </h2>
            <p className="text-base text-base-content/80 leading-relaxed">
              Our tree work often forms part of larger restoration or
              maintenance projects such as weed cutting or dredging. The Truxor
              can support chainsaw operators by retrieving debris or ferrying
              timber across the water, ensuring smooth coordination between land
              and water operations.
              <br />
              <br />
              This combined approach ensures that both aquatic and surrounding
              terrestrial environments are managed effectively and safely.
            </p>
          </div>
        </div>
        <ContactUsCard
          title="Tree Work"
          url="/services/flotsam-removal"
          text="For more information or to discuss a specific project, please contact us directly. You can also view our"
          linkto="Debris Clearing"
          extension="services"
          treeWork
        />
      </div>
    </section>
  );
}
