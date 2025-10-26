export interface Species {
  commonName: string;
  scientificName?: string;
  family?: string;
  identification: string;
  description: string;
  image: string;
}

export const weeds: Species[] = [
  {
    commonName: "Canadian Pond-weed & Nuttall's Water-weed",
    family: "Elodea Family",
    identification: `Canadian Pond-weed: Freshwater herb with much-branched stems up to 3m long. Leaves are dark green and grow in whorls of three along the middle and terminal parts of the stem, becoming denser toward the ends.

Nuttall's Water-weed: Similar appearance but with longer, more slender stems, often freely branched. Leaves are pale green, evenly spaced, typically in whorls of 3 or occasionally 4.`,
    description: `This highly invasive perennial plant family originates from North America. In UK waters they grow rapidly in shallow areas, outcompeting native species, reducing biodiversity, and clogging waterways. Despite being labelled as "oxygenating plants", dense growth can cause oxygen level fluctuations harmful to fish and invertebrates.

Both species are listed under Schedule 9 of the Wildlife and Countryside Act (England & Wales), making it an offence to plant them in the wild. Best management involves cutting in spring to hinder new growth and removing all cut material from the watercourse.`,
    image: "/images/weeds/canadianpondweed.webp",
  },
  {
    commonName: "Curly Water-weed",
    scientificName: "Lagarosiphon major",
    identification: `Appears as a "floating rope" with branched stems and strongly curled leaves that alternate along the stem. Individual stems can reach up to 3m long.`,
    description: `Native to South Africa, this invasive species thrives in UK waters. Similar in impact to the Elodea family, it rapidly outcompetes native species, causes biodiversity loss, and blocks water flow. Despite its oxygenating reputation, dense infestations can destabilize oxygen levels and harm aquatic life.

There have been cases of Curly Waterweed completely filling large lakes in the UK and Ireland. It is listed under Schedule 9 of the Wildlife and Countryside Act, making its planting in the wild illegal.`,
    image: "/images/weeds/waterweed.webp",
  },
  {
    commonName: "Broad-leaved Pond-weed",
    scientificName: "Potamogeton natans",
    identification: `Leaves: Floating, dark green, leathery, 5–10 cm long, pointed tips and rounded bases.
Flower: Dull yellow-green on 5–10 cm stalks.`,
    description: `A fast-growing perennial common in UK lakes, ponds, and canals. Grows in still freshwater, typically in water under 1m deep but can reach 2m. Flowers from May to September.`,
    image: "/images/weeds/broadleaf.webp",
  },
  {
    commonName: "Duck Weed",
    family: "Lemnoideae",
    identification: `Tiny floating plants, each 1.5–5 mm in diameter, forming dense yellow-green mats across water surfaces.`,
    description: `Common in ponds, canals, and flooded gravel pits. Duckweed reproduces by division and can rapidly blanket entire surfaces, blocking light and oxygen exchange. Removal by hand is difficult due to its size.

Aquaclear uses Truxor’s specialized tools to scoop and remove duckweed effectively from watercourses.`,
    image: "/images/weeds/duckweed.webp",
  },
  {
    commonName: "Water Soldier",
    scientificName: "Stratiotes aloides",
    identification: `Leaves: Rosettes of sword-shaped, serrated leaves growing from a central point and attached by long, thin strands from the waterbed.
Flower: Single, three-petaled white (sometimes pinkish) flower held above water during summer.`,
    description: `Native to Europe, these plants remain submerged most of the year, surfacing and flowering from June to August. Manageable in small numbers, but large populations can choke small waterways.`,
    image: "/images/weeds/watersoldier.webp",
  },
  {
    commonName: "White & Yellow Water Lily",
    scientificName: "Nymphaea alba & Nuphar lutea",
    identification: `White Water Lily: Large white flowers (sometimes pink-tinged) on stalks just above the water. Rounded, leathery leaves up to 30 cm across float on the surface.

Yellow Water Lily: Smaller, cup-shaped yellow flowers with more oval and smaller leaves.`,
    description: `Widespread across UK waters, growing in depths up to 5m. Flowers from June to August. While lilies are often visually appealing and beneficial, excessive growth can blanket the surface, restricting light and other plants’ growth. Periodic cutting or rhizome removal may be needed to maintain balance.`,
    image: "/images/weeds/waterlily.webp",
  },
  {
    commonName: "Algae",
    identification: `Appears as foam, scum, or mats on or below the water surface, usually bright green to yellowish in colour, often resembling a paint spill.`,
    description: `Algal blooms occur from nutrient overabundance (from runoff), warm temperatures, and still water. These blooms can damage ecosystems by depleting oxygen and blocking light.

Harmful Algal Blooms (HABs): Potentially toxic, often indistinguishable from non-toxic blooms, can harm or kill animals.

Non-toxic Blooms: Still harmful, causing oxygen loss and disrupting ecosystems when decomposing. Control options include mechanical removal, improving water flow, and using barley straw rafts to limit growth.`,
    image: "/images/weeds/algae.webp",
  },
];

export const reeds: Species[] = [
  {
    commonName: "Branched & Unbranched Bur-reeds",
    family: "Sparganium Family",
    identification: `Branched Bur-reed: Robust, erect plant up to 1.5m tall with long, spiked green leaves. Produces branched stems with separate male and female flower clusters and spiky fruit up to 1cm wide.

Unbranched Bur-reed: Found in deeper waters (~1m), with narrower floating leaves and unbranched flowering spikes.`,
    description: `Extremely common in UK lakes, ponds, and canals. Dense rhizomes form mats beneath the surface. Overgrowth can block flow and reduce depth, requiring regular cutting or rhizome removal.`,
    image: "/images/weeds/burreed.webp",
  },
  {
    commonName: "Bulrush / Cattail",
    scientificName: "Typha",
    identification: `Tall plant (up to 3m) with long blade-like leaves and a straw-coloured stem topped with a dense brown cylindrical flower spike.`,
    description: `Frequent in UK freshwater habitats, often growing alongside Common Reed. In rich soil, it can quickly become invasive and choke watercourses from the banks inward. Controlled by cutting or removing root matter.`,
    image: "/images/weeds/bulrush.webp",
  },
  {
    commonName: "Common Reed",
    scientificName: "Phragmites",
    identification: `Tall plant with round, hollow stems typically 2m tall (occasionally up to 4m). Flat leaves taper to a point. Flowers form 20–60 cm clusters ("spikelets") each containing 1–6 flowers.`,
    description: `Forms extensive reedbeds across UK wetlands, turning from yellow-brown in winter to green in summer. Flowers August–October. While vital habitats for birds, unmanaged reedbeds can overtake water areas and require regular maintenance to preserve balance and biodiversity.`,
    image: "/images/weeds/commonreed.webp",
  },
  {
    commonName: "Floating Pennywort",
    scientificName: "Hydrocotyle ranunculoides",
    identification: `Leaves: Round to kidney-shaped with 3–7 lobes on long petioles (up to 35 cm). 
Flowers: Small pale greenish-white to pale yellow blooms in clusters of 5–13.`,
    description: `A fast-spreading invasive species in UK waterways, growing from shallow margins into deeper water. Banned from sale in 2014 due to rapid spread. Complete removal from the watercourse is critical to prevent regrowth.`,
    image: "/images/weeds/floatingpennywort.webp",
  },
  {
    commonName: "Mare’s-tail",
    scientificName: "Hippuris vulgaris",
    identification: `Leaves: Grow in whorls of 6–12. Submerged leaves are thinner and longer than those above the surface.
Stems: Solid, unbranched, often curved, up to 60 cm long, with 20–30 cm protruding above shallow water.`,
    description: `A creeping perennial found in shallow water and mud flats. Most leaves are above water, but it roots underwater. Known methane emitter; dense growth can obstruct stream and river flow.`,
    image: "/images/weeds/marestail.webp",
  },
  {
    commonName: "Horsetail / Snake Grass",
    scientificName: "Equisetum sp.",
    identification: `Leaves: Thin and spiky, arranged in whorls around the ridged central stem.
Stems: Green, jointed, ridged (6–40 ridges), sometimes with whorled branches.`,
    description: `Though superficially similar to Mare’s-tail, it’s unrelated. Common in shallow water and margins, it spreads rapidly and can become unsightly or obstructive if not managed.`,
    image: "/images/weeds/horsetail.webp",
  },
];
