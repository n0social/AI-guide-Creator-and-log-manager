// Returns a detailed guide prompt
export function enhanceGuidePrompt(topic: string): string {
  return [
    `Write a clear, simple, and practical How-to guide about: ${topic}.`,
    `Focus on step-by-step instructions. Use numbered lists or bullet points for each step.`,
    `Each step should be concise, actionable, and easy to follow, as if explaining to a beginner.`,
    `Where helpful, include visuals: markdown image links (describe the image and suggest a real search keyword), diagrams, or mermaid code blocks.`,
    `If a visual would clarify a step, add a placeholder image or diagram and describe what it should show.`,
    `Use clear section headers for each major part of the process.`,
    `Keep language simple and direct. Avoid jargon unless explained.`,
    `At the end, include a references section with real, credible sources (no example.com or placeholder links). Only use actual URLs from reputable sites, and include a short description for each.`,
    `Do not include unnecessary background or filler. Focus on helping the reader complete the task.`,
  ].join(' ');
}
