import { agencies } from "../../assets/agencies";

export default function TrustedClients() {
  return (
    <section className="bg-base-200 px-4 sm:px-8 py-6 md:py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Trusted by Leading Environmental Organisations
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-95 hover:opacity-100 transition line-clamp-2">
        {agencies.map((agency) => (
          <img
            key={agency.title}
            src={agency.imgUrl}
            alt={agency.title}
            className="h-10 md:h-12 object-contain"
          />
        ))}
      </div>
    </section>
  );
}
