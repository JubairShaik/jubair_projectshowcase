 





















"use client";

import { motion } from "framer-motion";

import {  staggerContainer ,textVariant } from "@/utils/motion";
 








const Heading = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex  mt-7 md:mt-12 flex-col`}
      >
          
       
        <motion.div variants={textVariant(1.1)}
         className="flex flex-row text-yellow-500    justify-center gap-0 items-center"
         >
         Hello I&apos;m
         
        </motion.div>




        <motion.div variants={textVariant(1.2)}
         className="flex flex-row justify-center gap-0 items-center"
         >
        
          <h1 className="headingText"> Jubair Ahme </h1>
          <div className="headingD"></div> 
         
        </motion.div>

        
        <motion.h1 variants={textVariant(1.3)} 
        className= "headingText2 ">
          checkout my projects
        </motion.h1>





      


 



      </motion.div>
    </>
  );
};

export default Heading;
