export default function SiltMethods() {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Silt Pumping Methods
          </h1>
          <p className="text-base text-base-content/80 leading-relaxed">
            As the material being pumped is always a mixture of silt and water, it’s often necessary 
            to separate the two once removed. This allows the water to drain safely back into the 
            original source (or another approved location), while the silt can be managed or reused.
          </p>
          <p className="text-base text-base-content/70">
            Below are a few of the methods we at Aquaclear Water Management commonly use.  
            For full project examples, visit the <span className="font-semibold text-primary">Silt Pumping</span> page.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {/* Dewatering Bags */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="silt-methods" aria-label="Dewatering bags" />
            <div className="collapse-title text-xl font-semibold text-primary">
              Dewatering Bags
            </div>
            <div className="collapse-content space-y-4">
              <p className="text-base text-base-content/80 leading-relaxed">
                Dewatering bags are used in areas of flat, even ground where there’s space to deploy them. 
                Custom-made to any size up to <strong>5m × 12m</strong>, these bags are filled and left to 
                naturally drain water through their woven geotextile material.
              </p>
              <p className="text-base text-base-content/70">
                To maximise efficiency, multiple bags can be used simultaneously — some draining while others fill.
              </p>
              <img
                src="/images/services/siltbags.webp"
                alt="Dewatering bags setup"
                className="rounded-xl shadow-md object-cover w-full h-48 max-w-2xl sm:h-64 justify-self-center"
                loading="lazy"
              />
              <ul className="list-disc list-inside text-sm text-base-content/70">
                <li>Half size: 5m × 6m</li>
                <li>Full size: 5m × 12m</li>
              </ul>
            </div>
          </div>

          {/* Geotextile Barriers */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="silt-methods" aria-label="Geotextile barriers" />
            <div className="collapse-title text-xl font-semibold text-primary">
              Geotextile Barriers (Permeable Membranes)
            </div>
            <div className="collapse-content space-y-4">
              <p className="text-base text-base-content/80 leading-relaxed">
                Geotextile barriers — also called permeable membranes — are ideal in uneven or sloped terrain 
                where bags cannot be placed. The barriers are flexible, scalable, and can be installed with a 
                sloped surface behind which silt-laden water is pumped.
              </p>
              <p className="text-base text-base-content/70">
                As water drains through, silt is trapped and consolidated for later removal.
              </p>
              <img
                src="/images/services/siltbarrier.webp"
                alt="Geotextile barrier setup"
                className="rounded-xl shadow-md object-cover w-full h-48 max-w-2xl sm:h-64 justify-self-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Soil Bunds */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="silt-methods" aria-label="Soil bunds"/>
            <div className="collapse-title text-xl font-semibold text-primary">
              Soil Bunds
            </div>
            <div className="collapse-content space-y-4">
              <p className="text-base text-base-content/80 leading-relaxed">
                Soil bunds can be formed using excavators near a water source. Once created, they serve as 
                containment areas for pumped silt and water. The trapped water gradually drains through the 
                soil, leaving the silt to dry naturally.
              </p>
              <p className="text-base text-base-content/70">
                Once dry, the silt can be removed, reused, or left to green over.
              </p>
              <img
                src="/images/services/siltbunds.webp"
                alt="Soil bund containment"
                className="rounded-xl shadow-md object-cover w-full h-48 max-w-2xl sm:h-64 justify-self-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
