import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export const InstagramImage = ({socialImage}) => {
  return (
    <div className='relative'>
        <Image className='h-full w-full' src={socialImage} alt='/' layout='responsive' />
        {/*Overlay*/}
        <div className='hover:bg-black/50 absolute top-0 left-0 right-0 bottom-0 flex cursor-pointer items-center justify-center group'>
        <p className='group-hover:block hidden text-gray-300'><FaInstagram size={30}/></p>
        </div>
    </div>
  )
}
