// import { defineConfig } from 'sanity';

// import { deskTool } from 'sanity/desk';

// import schemas from "./sanity/schemas"

// import sanityClient from '@sanity/client'




// const config = defineConfig({

//   projectId: '8sfwwolx',

//   dataset: 'production',
 
//   title: "My Portfolio Website ",

//   apiVersion: "2023-07-26",

//   basePath: "/admin",

//   plugins: [deskTool()],

//   schema: { types: schemas },

 
// })

// export default config


// export const client = sanityClient({
//   projectId: '8sfwwolx',
  
//   dataset: 'production',
  
//   title: "My Portfolio Website ",
  
//   apiVersion: "2023-07-26",
  
   
// }) 

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"


const config = defineConfig({
  projectId: '8sfwwolx',
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-07-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config