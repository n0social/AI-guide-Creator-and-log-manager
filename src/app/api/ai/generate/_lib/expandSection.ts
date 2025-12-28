// Expands a section using OpenAI
export async function expandSection(section: string, topic: string, openaiApiKey: string): Promise<string> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4.1',
      messages: [
        {
          role: 'system',
          content: `You are an expert educator. Given a section of a guide, expand it with more detail, examples, lists, and depth. Make it immersive and practical.`,
        },
        {
          role: 'user',
          content: `Expand this section from a guide on '${topic}':\n${section}`,
        },
      ],
      max_tokens: 350,
      temperature: 0.7,
    }),
  });
  if (!res.ok) return section;
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || section;
}
