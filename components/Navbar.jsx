"use client"

import {motion} from "framer-motion"
import { navVariants } from '@/utils/motion';


import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';


export default function Navbar({pages}){


   

    return(

         <>
          <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={` flex items-center gap-[2rem] mt-5 md:gap-[10rem]`}
          >
            <div className="absolute w-[40%] h-[20%]  top-10 left-10 -z-10    inset-0 gradient-01" />
           

           <div>
                 
           <Link href="/" className="text-white z-50 text-lg md:text-[1.8rem] font-bold">ProjectShowcase</Link>

           </div>


          <div className="flex items-center z-50   gap-5 md:text-xl text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline text-yellow-400 ">{page.title}</Link>
            ))}

          </div>
          


        

          </motion.nav>


          </>

        )
}