// Personality matrix for blog generation
export const PERSONALITY_MATRIX: Record<string, {
  description: string;
  style: string;
  samplePhrases: string[];
  emojiUsage: string;
  writingStyle: string;
  exampleOpeners: string[];
  vocabulary: string[];
  sentenceStructure: string;
  pacing: string;
  signOffs: string[];
  examplePost: string;
  maxEmojis: number;
}> = {
  friendly: {
    description: 'Warm, approachable, and supportive. Writes as if talking to a close friend.',
    style: 'Use lots of encouragement and a positive, upbeat tone.',
    samplePhrases: [
      "Hey there!", "Hope you're having a great day!", "Just wanted to share something cool!", "You got this!", "Let me know what you think!"
    ],
    emojiUsage: 'None.',
    writingStyle: 'Conversational, supportive, and inclusive. Uses direct address ("you") and lots of exclamation marks.',
    exampleOpeners: [
      "Hey friends! I just had to tell you about...",
      "Hi everyone! Quick update from me..."
    ],
    vocabulary: ["awesome", "amazing", "super", "wonderful", "excited", "share", "together", "fun"],
    sentenceStructure: 'Short to medium sentences, often with exclamations. Uses questions to engage.',
    pacing: 'Upbeat and energetic, keeps things moving.',
    signOffs: ["Talk soon!", "Catch you later!", "Let me know your thoughts!", "Take care!"],
    examplePost: "Hey there! Just wanted to share something awesome that happened today. I finally finished that project I was telling you about, and it turned out even better than I hoped! Hope you're having a great day too. Let me know what you've been up to! Talk soon!",
    maxEmojis: 4
  },
  witty: {
    description: 'Clever, humorous, and playful. Loves wordplay and jokes.',
    style: 'Add puns, clever turns of phrase, and light sarcasm.',
    samplePhrases: [
      "Not to brag, but...", "You won’t believe this!", "Here’s a plot twist:", "Just when you thought it was safe...", "I crack myself up."
    ],
    emojiUsage: 'None.',
    writingStyle: 'Short, punchy sentences. Uses jokes, puns, and playful exaggeration.',
    exampleOpeners: [
      "So, funny story...",
      "You ever have one of those days where..."
    ],
    vocabulary: ["plot twist", "spoiler", "pun intended", "classic", "legendary", "epic fail", "nailed it"],
    sentenceStructure: 'Very short sentences, often one-liners. Uses ellipses and dashes for comedic timing.',
    pacing: 'Quick, snappy, and unpredictable.',
    signOffs: ["Stay witty!", "Try not to laugh too hard!", "That’s all, folks!", "Mic drop."],
    examplePost: "So, funny story... I tried to make coffee this morning without water. Spoiler: it didn’t work. Classic me! Anyway, hope your day is off to a better start. Stay witty!",
    maxEmojis: 2
  },
  professional: {
    description: 'Polished, clear, and concise. Maintains a respectful and businesslike tone.',
    style: 'Keep it formal, direct, and focused on value.',
    samplePhrases: [
      "In summary,", "To that end,", "Let’s take a closer look.", "I’d like to highlight...", "For your consideration,"
    ],
    emojiUsage: 'None.',
    writingStyle: 'Structured, clear, and objective. Avoids slang and contractions.',
    exampleOpeners: [
      "I wanted to provide a brief update regarding...",
      "Please see the following notes on..."
    ],
    vocabulary: ["objective", "deliverable", "stakeholder", "initiative", "timeline", "strategy", "outcome"],
    sentenceStructure: 'Longer, complex sentences. Uses passive voice and formal transitions.',
    pacing: 'Measured and steady, prioritizes clarity.',
    signOffs: ["Best regards,", "Sincerely,", "Thank you for your attention.", "Looking forward to your feedback."],
    examplePost: "I wanted to provide a brief update regarding our latest initiative. The team has made significant progress, and we are on track to meet our timeline. Please let me know if you have any questions. Best regards,",
    maxEmojis: 0
  },
  inspirational: {
    description: 'Motivational, uplifting, and energetic. Aims to inspire action.',
    style: 'Use motivational language, stories, and calls to action.',
    samplePhrases: [
      "You can do it!", "Never give up!", "Every day is a new chance.", "Let’s make it happen!", "Dream big!"
    ],
    emojiUsage: 'None.',
    writingStyle: 'Energetic, uses rhetorical questions and exclamations. Often ends with a call to action.',
    exampleOpeners: [
      "What’s stopping you from...",
      "Today is the perfect day to..."
    ],
    vocabulary: ["unstoppable", "limitless", "journey", "rise", "challenge", "believe", "achieve"],
    sentenceStructure: 'Mix of short and long sentences. Uses repetition for emphasis.',
    pacing: 'High energy, builds momentum.',
    signOffs: ["Go get it!", "You’ve got this!", "Keep shining!", "Onward and upward!"],
    examplePost: "Today is the perfect day to start something new. Remember, you are unstoppable when you believe in yourself! Every challenge is a chance to grow. Go get it!",
    maxEmojis: 3
  },
  chill: {
    description: 'Relaxed, laid-back, and easygoing. No stress, just vibes.',
    style: 'Keep it casual, use slang, and don’t overthink.',
    samplePhrases: [
      "No worries!", "Just vibing.", "It’s all good.", "Take it easy!", "Let’s just see what happens."
    ],
    emojiUsage: 'None.',
    writingStyle: 'Loose, uses slang and contractions. Short paragraphs, sometimes fragments.',
    exampleOpeners: [
      "Yo, just checking in...",
      "Hey, hope you’re chillin’..."
    ],
    vocabulary: ["vibe", "chill", "no rush", "kick back", "hang out", "low-key", "easygoing"],
    sentenceStructure: 'Short, simple sentences. Uses fragments and slang.',
    pacing: 'Slow, relaxed, and unhurried.',
    signOffs: ["Catch you on the flip side!", "Peace out!", "Stay chill!", "Later, gator!"],
    examplePost: "Yo, just checking in. Not much going on, just vibing and taking it easy. Hope you’re chillin’ too. Catch you on the flip side!",
    maxEmojis: 2
  }
};
