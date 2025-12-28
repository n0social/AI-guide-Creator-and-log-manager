// Gets a guide outline from OpenAI
export async function getGuideOutline(topic: string, openaiApiKey: string): Promise<string[]> {
  const outlineRes = await fetch('https://api.openai.com/v1/chat/completions', {
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
          content: `You are an expert educator and content strategist. Given a topic, break it down into a logical, comprehensive outline of 5-10 major sections (with subpoints if needed) for an in-depth guide. Only return the outline as a markdown list.`,
        },
        {
          role: 'user',
          content: `Create an outline for a comprehensive guide on: ${topic}`,
        },
      ],
      max_tokens: 200,
      temperature: 0.5,
    }),
  });
  if (!outlineRes.ok) return [];
  const outlineData = await outlineRes.json();
  const outlineText = outlineData.choices?.[0]?.message?.content || '';
  return outlineText
    .split('\n')
    .map((line: string) => line.replace(/^[-*\d.]+\s*/, '').trim())
    .filter((line: string) => line.length > 0);
}
