import Image from 'next/image'
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import  {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1  : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
  return (
    <div className='mx-auto max-w-[1240px]' id='gallery'>
        <h1 className='font-bold text-center p-4 text-2xl'>Photo Gallery</h1>
        <div className='relative flex justify-center p-4'>

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'ease-in duration-1000 opacity-[1]' :  'opacity-0'} key={index}>
                        <FaArrowCircleLeft size={50} onClick={prevSlide} className='select-none cursor-pointer text-white/70 absolute top-[50%] left-[30px] z-[2]' />
                        {index === current && (
                            <Image 
                            src={slide.image}
                            alt="/"
                            objectFit='cover'
                            height='600'
                            width='1440'
                            className='z-0' />
                            
                        )}
                        <FaArrowCircleRight size={50} onClick={nextSlide} className='select-none cursor-pointer text-white/70 absolute top-[50%] right-[30px] z-[2]' />
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default Slider