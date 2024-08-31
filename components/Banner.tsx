import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { TypewriterEffect } from './ui/typewriter-effect'

const Banner = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Your",
    },
    {
      text: "Space",
    },
    {
      text: "with",
    },
    {
      text: "Us",
   
    },
  ];
  return (
    <div className='relative w-full h-[100vh]' >
      
      <Image 
        src="/Banner.jpg" 
        alt="Banner"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-90 -z-10 brightness-50"
      />
      <div className=' flex items-center justify-center h-full w-full text-center z-50'>
        <div className='text-white '>
        <TypewriterEffect words={words}/>
        <p className='py-2 md:text-sm  text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.br Adipisci, odio!</p>
        <Button className="text-white">Free Consultation</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
