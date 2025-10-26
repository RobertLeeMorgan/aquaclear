import type { Species } from "../../pages/resources/weedIdentification";
import SpeciesCard from "./SpeciesCard";

export default function SpeciesGrid({ data }: { title: string; data: Species[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
      {data.map((item) => (
        <SpeciesCard key={item.commonName} species={item} />
      ))}
    </div>
  );
}