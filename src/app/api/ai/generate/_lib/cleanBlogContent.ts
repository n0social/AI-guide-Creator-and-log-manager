// Remove lines that are only (or mostly) emojis and ensure minimum text content (for guides only)
export function cleanBlogContent(text: string, minTextLength?: number): string {
  // Remove lines that are only emojis or whitespace
  // Use only ES5-compatible regex for maximum compatibility
  let lines = text.split(/\r?\n/);
  lines = lines.filter(line => {
    // Remove if line is empty or only punctuation/whitespace (no emoji unicode)
    const stripped = line.replace(/[\s.,'"!\-]/g, '');
    return stripped.length > 0;
  });
  const cleaned = lines.join('\n').trim();
  if (minTextLength) {
    // If not enough text, return a warning or empty string (for guides)
    const textOnly = cleaned.replace(/\s+/g, '');
    if (textOnly.length < minTextLength) {
      return '';
    }
  }
  return cleaned;
}
