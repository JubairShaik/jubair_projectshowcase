// import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Admin Page',
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
       <body>
       {children} 
       </body>
    
    </html>
  )
}


 