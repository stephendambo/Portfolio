import React from 'react'
import img3 from '../assets/Images/MicDAM.jpeg'
import img4 from '../assets/Images/Gogo.jpeg'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:  -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div className='mb-8 flex flex-wrap lg:justify-center'>
         <motion.div 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x:  -100}}
         transition={{duration: 1}}
         className='w-ful lg:w-1/4'>
           <img src={img3} width={250} height={250} className='mb-6 rounded' alt="" />
         </motion.div>

          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x:  100}}
          transition={{duration: 1}}
          className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>MicDAM</h6>
            <p className='mb-4 text-neutral-400'>MicDAM is a food app featuring a variety of African dishes and is currently under development.<p className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>HTML CSS JavaScript</p></p>
          </motion.div>

        </div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x:  -100}}
        transition={{duration: 1}}
        className='mb-8 flex flex-wrap lg:justify-center'>
         <div className='w-ful lg:w-1/4'>
           <img src={img4} width={250} height={250} className='mb-6 rounded' alt="" />
         </div>

          <div className='w-full max-w-xl lg:w-3/4'>
            <motion.h6 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x:  100}}
            transition={{duration: 1}}
            className='mb-2 font-semibold'>Gogo</motion.h6>
            <p className='mb-4 text-neutral-400'>Gogo is an airport ride-sharing service that allows you to share your ride with another person and split the cost. Gogo is currently under development. <p className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>HTML CSS React</p></p>
          </div>

        </motion.div>
         </div>
         

 )
}
export default Projects;

