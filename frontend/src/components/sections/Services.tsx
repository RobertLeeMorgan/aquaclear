import { services } from "../../assets/services";
import type { Service } from "../../assets/services";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="px-4 sm:px-8 py-12 md:py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 sm:mb-10 text-primary">
        What We Do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {services.map((service: Service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            imgDescription={service.imgDescription}
            imgUrl={service.imgUrl}
            description={service.description}
            route={service.route}
          />
        ))}
      </div>
    </section>
  );
}
