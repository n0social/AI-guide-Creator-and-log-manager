// Calculates a detail score for a guide section
export function detailScore(section: string): number {
  let score = 0;
  const wordCount = section.split(/\s+/).length;
  if (wordCount > 100) score += 2;
  else if (wordCount > 60) score += 1;
  if (/for example|e\.g\.|- |• /.test(section.toLowerCase())) score += 2;
  if (/^\s*[-*]\s+/m.test(section) || /^\s*\d+\.\s+/m.test(section)) score += 1;
  if (/step|case study|scenario|in practice|let's|consider/i.test(section)) score += 1;
  return score;
}
