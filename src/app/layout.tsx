import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavbarWrapper from '@/components/NavbarWrapper';
import { Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verbshift',
  description: 'Your Content... Streamlined. Professional Prose, Programmatically Generated.',
  keywords: ['Verbshift', 'content', 'AI', 'streamlined', 'editor', 'writing', 'automation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="512x512" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <NavbarWrapper />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
