import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";


// export async function getProjects(){

//     const client = createClient({

//         projectId: '8sfwwolx',

//         dataset: 'production',
       
//         apiVersion: "2023-07-26",

//     });

//     return client.fetch(
        
//         groq`*[_type == "project"]{
//           _id,
//           _createdAt,
//           name,
//           slug,
//           "slug":slug.current,
//           "image":image.asset->url,
//           url,
//           content

//         }`

//     )
// }
// ?
// ?
// ?
// why Comment ?
// ?
// ?
// ?
// ?
// this Commented Code Can be Written As 
//
//
// Getting All The Projects 




export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    )
  }
  


//   Getting Projects According to the Slug 



export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

  
export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

