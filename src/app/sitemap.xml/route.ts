import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const guides = await prisma.guide.findMany({ select: { slug: true, updatedAt: true } });
  const blogs = await prisma.blog.findMany({ select: { slug: true, updatedAt: true } });

  const baseUrl = 'https://yourdomain.com';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  guides.forEach(guide => {
    xml += `  <url>\n    <loc>${baseUrl}/guides/${guide.slug}</loc>\n    <lastmod>${guide.updatedAt.toISOString()}</lastmod>\n  </url>\n`;
  });
  blogs.forEach(blog => {
    xml += `  <url>\n    <loc>${baseUrl}/blog/${blog.slug}</loc>\n    <lastmod>${blog.updatedAt.toISOString()}</lastmod>\n  </url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
