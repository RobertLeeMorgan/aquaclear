export default function ClientList() {
  return (
    <div className="card bg-base-100 shadow-lg border border-base-300">
      <div className="card-body px-4 sm:px-8 py-6 md:py-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Organisations We’ve Worked With
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 text-base-content/90 max-h-[350px] overflow-y-auto pr-4">
          {[
            "Royal Society for the Protection of Birds (RSPB)",
            "Natural Resources Wales",
            "Environment Agency",
            "Canal and River Trust",
            "Natural England",
            "London Organising Committee of the Olympic Games (LOCOG)",
            "National Watersports Centre, Nottingham",
            "The Parks Trust",
            "Cornwall County Council",
            "Celtic Manor Golf Resort",
            "Gleneagles Golf Club",
            "Various SSSI Sites, Wildlife Trusts, Local Authorities, Golf Clubs, Private Fisheries & Sporting Venues",
          ].map((client, i) => (
            <li key={i} className="leading-relaxed">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
