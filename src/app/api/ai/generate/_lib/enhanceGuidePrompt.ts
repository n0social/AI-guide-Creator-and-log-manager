// Returns a detailed guide prompt
export function enhanceGuidePrompt(topic: string): string {
  return [
    `Write an in-depth, comprehensive, and practical guide about: ${topic}.`,
    `The guide should be detailed enough to give the reader a strong, working understanding of the subject, as if they spent 1-2 hours researching it.`,
    `Structure the guide with clear sections and headers. For each section/header, write several paragraphs (not just a few sentences) with detailed explanations, examples, and actionable advice.`,
    `Make the guide immersive: use storytelling, analogies, and real-world scenarios to draw the reader in. Use a conversational, engaging tone.`,
    `Dive deep into each subtopic, providing context, background, and step-by-step instructions where relevant.`,
    `Include graphs or visualizations (in markdown or mermaid format) whenever they would help explain a concept. If a graph is not needed, do not include one.`,
    `If possible, reference or adapt graphs from credible articles (cite the source in a references section at the end).`,
    `Avoid being superficial or generic. Each section should be thorough and feel like a mini-article on its own.`,
    `Use immersive techniques: open sections with a scenario, question, or story. Make the reader feel like they're on a journey of discovery.`,
  ].join(' ');
}
