import React from 'react'
import img from '../assets/Images/Stv.jpg';
import { motion } from "framer-motion"

const container = (delay) => ({
hidden: {x: -100, opacity: 0},
visible: {x: 0, 
  opacity: 1,
  transition: {duration: 0.5, delay: delay},
},

});
const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
              <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-4xl font-thin tracking-tight lg:mt-4 lg:text-8xl txt'>Steve Dambo</motion.h1>
              <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-blue-300 via-slate-500 t0-purple-500 bg-clip-text text-3xl tracking-tight text-transparent txt'>Software Developer</motion.span>
              <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a skilled front-end developer with expertise in React.js and Angular, creating dynamic and responsive user interfaces. As a certified data scientist, I specialize in extracting insights from data using Python, R, and SQL. Additionally, I excel as a virtual assistant, handling administrative tasks with precision, and ensuring efficiency and productivity. With a keen eye for detail, I deliver high-quality results across all roles.</motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
             <motion.img 
             initial={{x: 100, opacity: 0}}
             animate={{x: 0, opacity: 1}}
             transition={{duration: 1, delay: 1.2}}
             src={img} className='w-1/2 rounded-2xl' alt="Steve" />
            </div>
            <div className='w-full lg:w-1/2'>
             <div className='flex justify-center lg:justify-start'>
              <p></p>
             </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Home