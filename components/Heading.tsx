"use client";

import { Variants  } from "framer-motion";
import { motion } from "framer-motion";


const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});


type StaggerContainerVariants = Variants & {
  show: {
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
};



const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): StaggerContainerVariants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});



const Heading: React.FC<HeadingProps & MotionProps> = ({ ...props }) =>  {

  const variants: Variants = staggerContainer(0.2, 0.1);
  
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






























// "use client";

// import { motion } from "framer-motion";

// import { slideIn, staggerContainer  } from "@/utils/motion";
 








// const Heading = () => {
//   return (
//     <>
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         className={` mx-auto flex  mt-7 md:mt-12 flex-col`}
//       >
          
       
//         <motion.div variants={textVariant(1.1)}
//          className="flex flex-row text-yellow-500    justify-center gap-0 items-center"
//          >
//          Hello I&apos;m
         
//         </motion.div>




//         <motion.div variants={textVariant(1.2)}
//          className="flex flex-row justify-center gap-0 items-center"
//          >
        
//           <h1 className="headingText"> Jubair Ahme </h1>
//           <div className="headingD"></div> 
         
//         </motion.div>

        
//         <motion.h1 variants={textVariant(1.3)} 
//         className= "headingText2 ">
//           checkout my projects
//         </motion.h1>





      


 



//       </motion.div>
//     </>
//   );
// };

// export default Heading;
