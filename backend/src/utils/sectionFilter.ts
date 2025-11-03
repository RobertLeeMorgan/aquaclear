export default function getSectionFilter(message: string): string[] {
  const lower = message.toLowerCase();
  const sections: string[] = [];

  if (
    /\b(projects|examples|photos|pictures|gallery|portfolio|case study)\b/.test(
      lower
    )
  )
    sections.push("gallery");

  if (
    /\b(identify|species|invasive|identification|aquatic plants)\b/.test(lower)
  )
    sections.push("resources");

  if (/\b(contact|phone|email|reach|support|enquire)\b/.test(lower))
    sections.push("contact");

  if (
    /\b(truxor|amphibious harvester|grab bucket|grip rake|excavator arm|reed rake|silt pumping tool|equipment|machine)\b/.test(
      lower
    )
  )
    sections.push("truxor");

if (
    /\b(clients|testimonial|review|feedback|customer|worked for)\b/.test(lower)
  )
    sections.push("clients");

  if (
    /\b(dredge|pump|silt|excavation|ditching|habitat creation|reed|weed|flotsam|tree work|water management|lake maintenance|pond clearance|vegetation removal)\b/.test(
      lower
    )
  )
    sections.push("services");

  return sections;
}
