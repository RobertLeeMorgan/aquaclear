import { services } from "../../assets/services";
import type { Service } from "../../assets/services";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        What We Do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 justify-items-center m-4 sm:m-10">
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
