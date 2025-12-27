
import CategoriesClient from './CategoriesClient'
import { BLOG_CATEGORIES } from '@/app/api/ai/generate/_lib/blogCategories'

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  _count: {
    guides: number;
    blogs: number;
  };
}

async function getCategories() {
  // Combine DB categories and blog categories for dashboard
  // Fetch DB categories
  const dbCategories: Category[] = [];
  // If you want to keep DB categories, fetch them here (e.g., guides)
  // const dbCategories = await prisma.category.findMany({ ... });
  // Map blog categories to match Category type
  const blogCategories = BLOG_CATEGORIES.map((cat, idx) => ({
    id: cat.slug,
    name: cat.name,
    slug: cat.slug,
    description: cat.description || '',
    color: '#0ea5e9',
    _count: { guides: 0, blogs: 0 },
  }));
  return [...dbCategories, ...blogCategories];
}

export default async function CategoriesPage() {
  const categories = await getCategories();
  return (
    <div>
      <h1>Categories</h1>
      <CategoriesClient categories={categories} />
    </div>
  );
}
