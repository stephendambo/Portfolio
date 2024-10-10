import React from 'react'
import img1 from '../assets/Images/Smile.jpg';
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
     <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'> Me</span></h1>
     <div className='flex flex-wrap'>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 2}}
      className='w-full lg:w-1/2 lg:p-8'>
      <div className='flex items-center justify-between'>
       <img src={img1} className='w-1/2 rounded-2xl' alt="" />
      </div>
      </motion.div>
      
       <motion.div 
       whileInView={{opacity: 1, x: 0}}
       initial={{opacity: 0, x: 100}}
       transition={{duration: 1}}
       className='w-full lg:w-1/2'>
       <div className='flex justify-center lg:justify-start'>
        <p className='my-2 max-w-xl py-6'>I am a dedicated and skilled software developer, data scientist, and virtual assistant. I bring a wealth of expertise in creating robust, efficient, and scalable software solutions. My proficiency spans multiple frameworks, with a strong foundation in software development principles and best practices. As a data scientist, I excel in data analysis and visualization, while as a virtual assistant, I handle administrative tasks with precision and efficiency.
              <p className="text-gray-700 font-bold">What I Do ?</p>I specialize in developing web applications, mobile apps, and APIs, with extensive experience in frameworks that help me build robust and scalable solutions. As a data scientist, I excel in data analysis and insights, and as a virtual assistant, I efficiently manage administrative tasks to ensure smooth workflows.
              <p className="text-gray-700 font-bold">My Approach</p>I believe in writing clean, maintainable code and following best practices to ensure that my software is functional, reliable, and easy to maintain. As a data scientist, I apply these principles to data analysis, ensuring clarity and accuracy in insights. As a virtual assistant, I bring the same dedication to organizing tasks and managing workflows. I thrive in collaborative environments where ideas are freely exchanged and built upon for successful outcomes.


              <p className="text-gray-700 font-bold">Continuous Learning</p>
              The tech industry is ever-evolving, and I am committed to
              continuous learning and professional development. Whether it’s
              through online courses, workshops, or collaborating with peers, I
              am always eager to expand my knowledge and stay updated with the
              latest trends and technologies.</p>
      </div>
      </motion.div>
     </div>
    </div>
  )
}

export default About