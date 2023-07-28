import { getProjects } from "@/sanity/sanity-utils"

import Image from 'next/image'
import Link from 'next/link'

import {Heading,Projectcard }from "@/components"
 


export default async function Home() {
  
  const projects = await getProjects();

  return (
    <div>
      <Heading/>
      <Projectcard projects = {projects}/>
    </div>
  )

}
