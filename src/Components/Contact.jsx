import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className=' border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:  -100}}
        transition={{duration: 0.5}}
        className='my-10 text-center text-4xl'>Let's Connect</motion.h1>
        <div className='text-center tracking-tighter'>
          <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x:  -100}}
          transition={{duration: 1}}
          className='text-center text-xl tracking-tight font-thin txt'>
              I’m always excited to connect with other professionals, discuss
              potential projects, or simply chat about technology. Feel free to
              reach out to me through any of the following channels: Linkedin,
              Email ...
              <br />I look forward to hearing from you! Whether you have a project in mind, a
              question about my work, or just want to say hello, don't hesitate
              to get in touch.
            </motion.p>
            <br />
            <a href="https://drive.google.com/file/d/1lszI7jizNibvgjfHOUqXtn-NSe-bTFM2/view?usp=drive_link" target="-blank">
              <motion.button 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x:  100}}
              transition={{duration: 1}}
              className="bg-gray-700 p-2 rounded-xl text-white  hover:text-gray-300 font-style: italic">
                View Resume
              </motion.button>
            </a>
        </div>
    </div>
  )
}

export default Contact