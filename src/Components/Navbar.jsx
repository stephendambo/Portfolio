import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
     <div className='flex flex-shrink-0 items-center'>
      <h2>Portfolio</h2>
     </div>
     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        
        <a href="https://www.linkedin.com/in/stephendambo" target="-blank">
              <FaLinkedin className="cursor-pointer" size={25} />
            </a>
        <a href="https://github.com/stephendambo" target="-blank">
              <FaGithub className="cursor-pointer" size={25} />
            </a>
        <a href="https://twitter.com/dambolin9?t=gRNIR-5kMao9Npqe4HsODA&s=08" target="-blank">
              <FaSquareXTwitter className="cursor-pointer" size={25} />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=1ejeniloz9nyh&utm_content=6c2z1q3" target="-blank">
              <FaInstagram className="cursor-pointer" size={25} />
            </a>
        
     </div>
    </nav>
  )
}

export default Navbar