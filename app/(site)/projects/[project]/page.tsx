import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>

    <header className="flex  flex-col md:flex-row    items-center justify-between">
      <h1 className="titleText">{project.name}</h1>
      <Link href={project.url} title="View Project" target="_blank" rel="noopener noreferrer"
     className="bg-gray-100 rounded-lg mt-w text-gray-900
       font-bold md:py-2 md:px-4 w-full md:w-[206px] text-center  my-2 py-1 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
         Live Website
    </Link >

      
    </header>
    <Image src={project.image} alt={project.name} width={1600} height={803} className="my-4 border-2 border-gray-700 object-cover rounded-xl" />


   
    <div className="text-lg text-gray-200 mt-5">
      <PortableText value={project.content} />
    </div>

  </div>
} 