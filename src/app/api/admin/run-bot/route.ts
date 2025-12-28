import { NextResponse } from 'next/server';

// Import your guide generator logic here
// For demo, we'll use a simple function
async function runBotGuideGenerator() {
  // Example topics for guides
  // Topic pool with categories for more depth
  // Fetch trending topics from an external API (stubbed for demo)
  async function getTrendingTopics() {
    // Example: Replace with real API call (Google Trends, Twitter, etc.)
    // For demo, return a static array
    return [
      'How do I use AI for climate change research?',
      'How do I create viral TikTok content?',
      'How do I secure my crypto wallet?',
      'How do I use ChatGPT for business automation?',
      'How do I get started with drone photography?',
    ];
  }

  const topicCategories = [
    {
      category: 'AI & Machine Learning',
      topics: [
        'How do I train a neural network for image classification?',
        'What is overfitting in machine learning and how can I prevent it?',
        'How do I use transfer learning in deep learning?',
        'How do I deploy a machine learning model to production?',
        'How do I interpret SHAP values in model explainability?',
        'How do I use reinforcement learning for game AI?',
        'How do I use AI for climate change research?',
        'How do I use ChatGPT for business automation?',
      ],
    },
    {
      category: 'IT & Troubleshooting',
      topics: [
        'How do I troubleshoot a slow computer?',
        'How do I recover deleted files on Windows?',
        'How do I fix printer connection issues?',
        'How do I set up a VPN for remote work?',
        'How do I secure my crypto wallet?',
      ],
    },
    {
      category: 'Software & Productivity',
      topics: [
        'How do I automate tasks with Zapier?',
        'How do I create formulas in Excel?',
        'How do I use Notion for project management?',
        'How do I set up email filters in Gmail?',
        'How do I organize files in Google Drive?',
      ],
    },
    {
      category: 'Web Development',
      topics: [
        'How do I build a responsive website with Tailwind CSS?',
        'How do I deploy a Next.js app to Vercel?',
        'How do I create a REST API with Express.js?',
        'How do I optimize images for the web?',
        'How do I set up SEO for a blog?',
      ],
    },
    {
      category: 'Design & Creativity',
      topics: [
        'How do I design a logo in Figma?',
        'How do I create social media graphics in Canva?',
        'How do I animate SVGs for the web?',
        'How do I create viral TikTok content?',
        'How do I get started with drone photography?',
      ],
    },
    {
      category: 'Business & Marketing',
      topics: [
        'How do I write a business plan?',
        'How do I run a successful email marketing campaign?',
        'How do I set up an online store with Shopify?',
        'How do I analyze website traffic with Google Analytics?',
        'How do I manage remote teams effectively?',
      ],
    },
    {
      category: 'Personal Development',
      topics: [
        'How do I set and achieve personal goals?',
        'How do I improve my public speaking skills?',
        'How do I create a daily productivity routine?',
        'How do I learn a new language efficiently?',
      ],
    },
    {
      category: 'Health & Wellness',
      topics: [
        'How do I start a meditation practice?',
        'How do I meal prep for a busy week?',
        'How do I improve sleep quality?',
        'How do I create a home workout plan?',
      ],
    },
    {
      category: 'Travel & Adventure',
      topics: [
        'How do I plan a budget-friendly vacation?',
        'How do I organize a community event?',
        'How do I start a podcast?',
        'How do I care for indoor plants?',
        'How do I get started with photography?',
        'How do I learn basic car maintenance?',
      ],
    },
    {
      category: 'Science & Education',
      topics: [
        'How do I conduct a simple chemistry experiment at home?',
        'How do I learn astronomy basics?',
        'How do I build a model rocket?',
        'How do I teach kids about renewable energy?',
      ],
    },
    {
      category: 'Finance & Investing',
      topics: [
        'How do I create a personal budget?',
        'How do I start investing in stocks?',
        'How do I save for retirement?',
        'How do I understand cryptocurrency basics?',
      ],
    },
  ];


  // Get trending topics (async)
  const trendingTopics = await getTrendingTopics();

  // Randomly select a category/topic or trending topic
  let topic;
  if (Math.random() < 0.2 && trendingTopics.length > 0) {
    // 20% chance to use a trending topic
    topic = trendingTopics[Math.floor(Math.random() * trendingTopics.length)];
  } else {
    const selectedCategory = topicCategories[Math.floor(Math.random() * topicCategories.length)];
    topic = selectedCategory.topics[Math.floor(Math.random() * selectedCategory.topics.length)];
  }

  // Randomize format and audience
  const formatOptions = [
    'step-by-step guide',
    'FAQ',
    'checklist',
    'troubleshooting manual',
    'case study',
    'quick tips',
    'story format',
    'visual walkthrough',
  ];
  const audienceOptions = [
    'for beginners',
    'for advanced users',
    'for kids',
    'for professionals',
    'for hobbyists',
    'for educators',
    'for business owners',
  ];
  const format = formatOptions[Math.floor(Math.random() * formatOptions.length)];
  const audience = audienceOptions[Math.floor(Math.random() * audienceOptions.length)];

  // Add depth to the prompt
  const depthOptions = [
    'Include advanced tips and troubleshooting.',
    'Add a real-world case study or example.',
    'Explain common mistakes and how to avoid them.',
    'Provide a checklist for success.',
    'Suggest resources for further learning.',
    'Break down the process for beginners and experts.',
    'Highlight industry best practices.',
    'Include a summary and actionable next steps.',
  ];
  const depthDetail = depthOptions[Math.floor(Math.random() * depthOptions.length)];

  // Fetch all current categories from the database
  const { prisma } = await import('@/lib/prisma');
  const allCategories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
  if (!allCategories.length) {
    return { success: false, message: 'No categories found in the database.' };
  }
  // Randomly select a category from the current list
  const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  const category = randomCategory.name;

  // Generate guide content using OpenAI directly
  const openaiApiKey = process.env.OPENAI_API_KEY;
  if (!openaiApiKey) {
    return { success: false, message: 'No OpenAI API key.' };
  }
  // Use the same prompt logic as your /api/ai/generate endpoint
  const guidePrompt = `You are an expert technical writer. Write a ${format} ${audience} for: ${topic}. ${depthDetail}`;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4.1',
      messages: [
        { role: 'system', content: guidePrompt },
      ],
      max_tokens: 1800,
      temperature: 0.7,
    }),
  });
  if (!response.ok) {
    return { success: false, message: 'Failed to generate guide content.' };
  }
  const data = await response.json();
  const generatedContent = data.choices[0].message.content;
  const lines = generatedContent.split('\n');
  let titleLine = lines.find((line: string) => line.startsWith('# '));
  let title = titleLine ? titleLine.replace('# ', '').trim() : topic;
  // Validate title
  if (!title || title.length < 5 || /load data|untitled|no content/i.test(title)) {
    return { success: false, message: 'Guide not saved: invalid or meaningless title.' };
  }
  // Duplicate check: look for similar titles
  const similarGuides = await prisma.guide.findMany({
    where: {
      title: {
        contains: title.split(' ').slice(0, 4).join(' '),
        mode: 'insensitive',
      },
    },
    take: 1,
  });
  if (similarGuides.length > 0) {
    return { success: false, message: `Guide not saved: similar guide already exists ('${similarGuides[0].title}').` };
  }
  // Validate content
  if (!generatedContent || generatedContent.length < 100 || /load data|no content|untitled/i.test(generatedContent)) {
    return { success: false, message: 'Guide not saved: content not meaningful.' };
  }
  const slug = title.toLowerCase().replace(/[^a-z0-9\- ]/g, '').replace(/\s+/g, '-');

  // Save guide to database as admin
  // ...existing code...
  const adminUser = await prisma.user.findFirst({ where: { role: 'admin' } });
  if (!adminUser) {
    return { success: false, message: 'No admin user found.' };
  }
  // Only use existing categories
  const dbCategory = await prisma.category.findFirst({ where: { name: category } });
  if (!dbCategory) {
    return { success: false, message: `Category '${category}' does not exist. Please create it first.` };
  }
  const guide = await prisma.guide.create({
    data: {
      title,
      slug,
      content: generatedContent,
      excerpt: lines.slice(1, 4).join(' ').slice(0, 180),
      categoryId: dbCategory.id,
      authorId: adminUser.id,
      published: true,
      featured: false,
      readTime: Math.ceil(generatedContent.split(/\s+/).length / 200),
    },
  });
  return { success: true, message: `Guide generated and saved: ${guide.title}` };
}

export async function POST() {
  const result = await runBotGuideGenerator();
  return NextResponse.json(result);
}
