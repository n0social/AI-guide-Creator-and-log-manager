import { PERSONALITY_MATRIX } from './personalityMatrix';

export function buildBlogPrompt(topic: string, personality: string): { prompt: string, maxEmojis: number } {
  const persona = PERSONALITY_MATRIX[personality] || PERSONALITY_MATRIX['friendly'];
  const prompt = `
Write a short, ${personality} blog post about: "${topic}".

Personality details:
${persona.description}
Writing style: ${persona.style}
Vocabulary: ${Array.isArray(persona.vocabulary) ? persona.vocabulary.join(', ') : (persona.vocabulary || '')}
Sentence structure: ${persona.sentenceStructure || ''}
Pacing: ${persona.pacing || ''}
Signature sign-off: ${Array.isArray(persona.signOffs) ? persona.signOffs[0] : (persona.signOffs || '')}

Instructions:
- Use a conversational, authentic tone as if sharing an update with friends.
- Weave references and facts naturally into the narrative (e.g., "Dr. Smith from this article says...").
- Cite at least one or two specific, named sources (e.g., "According to a 2023 study in Nature..." or "As Forbes reports...").
- Avoid generic phrases like "studies show" or "experts say" without attribution.
- If the topic involves a brand or product, subtly and authentically mention its use or benefits in a way that fits the story (e.g., "It's good to have one on a cold day at work").
- Do not include a references section at the end.
- Limit emoji usage to ${persona.maxEmojis} per post, and never use more than one per sentence.
- Avoid sounding like a guide or article.
- Example opener: ${Array.isArray(persona.exampleOpeners) ? persona.exampleOpeners[0] : (persona.exampleOpeners || '')}

Output format:
[Title]
[Body]

Remember: Make the post feel real, personal, and engaging.
  `.trim();
  return { prompt, maxEmojis: persona.maxEmojis };
}
