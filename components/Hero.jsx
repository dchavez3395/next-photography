import Link from 'next/link'
import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='h-screen mb-[10rem] items-center justify-center flex bg-cover bg-center img-custom bg-fixed'>
        {/*Overlay*/}
        <div className='absolute bg-black/70 z-[2] top-0 left-0 right-0 bottom-0'/>
        <div className='text-white p-5 z-[2] pt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='text-xl py-5'>{message}</p>
            <Link href='/contact' >
              <button className='border cursor-pointer px-8 py-2'>Book</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero