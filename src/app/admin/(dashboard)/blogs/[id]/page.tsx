import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import BlogForm from '../BlogForm'
import { BLOG_CATEGORIES } from '@/app/api/ai/generate/_lib/blogCategories'

interface EditBlogPageProps {
  params: { id: string }
}

async function getBlog(id: string) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  // Use blog-specific categories
  const categories = BLOG_CATEGORIES.map((cat, idx) => ({
    id: cat.slug,
    name: cat.name,
    slug: cat.slug,
    color: '',
    description: cat.description || '',
  }));
  return { blog, categories };
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { blog, categories } = await getBlog(params.id)

  if (!blog) {
    notFound()
  }

  return <BlogForm blog={blog} categories={categories} />
}
