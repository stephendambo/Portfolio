import React from 'react'
import img2 from '../assets/Images/Ex.jpg';
import {motion} from 'framer-motion'
const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
         <motion.h1 
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity: 0, y:  -100}}
         transition={{duration: 1.5}}
         className='my-20 text-center text-4xl'> Experience <span className="font-light text-xl"> october(2023)-present</span></motion.h1>
         <div className='flex flex-wrap'>
          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x:  -100}}
          transition={{duration: 1}}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-between'>
           <img src={img2} className='w-1/2 rounded-2xl' alt="" />
          </div>
          
           </motion.div>
           <div className='w-full lg:w-1/2'>
           <div className='flex justify-center lg:justify-start'>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x:  100}}
            transition={{duration: 1}}
            className='my-2 max-w-xl py-6'>I am currently working as a Software Developer with wificombat.com
              (Wifi Combat is a Digital Incubation Hub offering a variety of
              Educational Technology Solutions to Institutions, schools, and the
              Government to help bridge the gap of preparing youth for the 21st
              century) and boosting my professional skills
            
            <p className="text-gray-700 font-bold">Graduate 2019</p>
            Bachelor of Science in Science Laboratory Technology from university
            of Jos Plateau state, Nigeria.
            <p className="text-gray-700 font-bold">Internship</p>
            Completed three months internship in web development with wificombat
            and power learn project(PLP)
            <p className="text-gray-700 font-bold">Certification</p>
            Power learn project(PLP) Dec., 2023</motion.p>
          </div>
          </div>
         </div>
        </div>
      )
    }
    

export default Experience