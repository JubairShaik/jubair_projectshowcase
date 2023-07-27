import { defineConfig } from 'sanity';

import { deskTool } from 'sanity/desk';

import schemas from "./sanity/schemas"

import sanityClient from '@sanity/client'




const config = defineConfig({

  projectId: '8sfwwolx',

  dataset: 'production',
 
  title: "My Portfolio Website ",

  apiVersion: "2023-07-26",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },

  useCdn: true
})




export default config


export const client = sanityClient({
  projectId: '8sfwwolx',
  
  dataset: 'production',
  
  title: "My Portfolio Website ",
  
  apiVersion: "2023-07-26",
  
  useCdn: true
}) 