import { services } from "../assets/services";
import type { Service } from "../assets/services";
import Card from "./Card";

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 justify-items-center m-4 sm:m-10">
      {services.map((service: Service) => (
        <Card
          key={service.title}
          title={service.title}
          imgDescription={service.imgDescription}
          imgUrl={service.imgUrl}
          description={service.description}
          route={service.route}
        />
      ))}
    </div>
  );
}