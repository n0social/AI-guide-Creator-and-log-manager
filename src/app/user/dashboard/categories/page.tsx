import { getServerSession } from 'next-auth';
import { prisma } from '../../../../lib/prisma';
import { authOptions } from '../../../../lib/auth';
import type { Category } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function CategoriesDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect('/');
  }
  const userId = (session.user as { id: string }).id;

  // Fetch user's categories (categories where user has created guides or blogs)
  const userCategories: Category[] = await prisma.category.findMany({
    where: {
      OR: [
        { guides: { some: { authorId: userId } } },
        { blogs: { some: { authorId: userId } } },
      ],
    },
    orderBy: { name: 'asc' },
  });

  // Fetch all categories
  const allCategories: Category[] = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    take: 50,
  });

    // This page has been removed. Guide categories are no longer used.
    return null; // Return null or a different component if needed.
}
