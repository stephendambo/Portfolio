import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  
  return (
    <>
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
    

     <div className='container mx-auto px-8'>
     <Navbar/>
     <Home/>
     <About/>
     <Technologies/>
     <Experience/>
     <Projects/>
     <Contact/>
     </div>
    
     </div>
    </>
  )
}

export default App
