export default function getSectionFilter(message: string): string | null {
  const lower = message.toLowerCase();

  if (
    /\b(projects|examples|photos|pictures|gallery|work done|before and after)\b/.test(
      lower
    )
  )
    return "gallery";

  if (/\bidentify|what weed|species|which plant|invasives|identification\b/.test(lower))
    return "resources";

  if (/\bcontact|phone|email|reach|speak\b/.test(lower)) return "contact";

  if (/\bdredge|pump|silt|excavation|ditching|habitat creation|reed|weed|flotsam|tree work\b/.test(lower))
    return "services";

  return null;
}
