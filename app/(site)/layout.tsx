import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import type { Metadata } from 'next'
 
import {Navbar} from "@/components"


export const metadata: Metadata = {
  title: 'Jubair Ahmed ',
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


      <body className="md:px-[5rem] bg-primary-black md:m-[4rem]  m-[0.6rem] px-[0.69rem]">
        <header className="flex items-center justify-between">
          
          <Navbar pages={pages} />
          
        </header>

        <main className="py-12">{children}</main>
      </body>
    </html>
  )
}
