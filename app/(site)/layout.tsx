import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jubair Ahmed',
  description: 'FullStack Web Developer',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="md:px-[4rem] bg-slate-900 md:m-[3rem]  m-[1rem] px-[1rem]">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"> Jubair Ahmed</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}

          </div>

        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
