import React from 'react'
import { InstagramImage } from './InstagramImage'
import igImg1 from '../public/Assets/insta-Img-1.avif'
import igImg2 from '../public/Assets/insta-Img-2.avif'
import igImg3 from '../public/Assets/insta-Img-3.avif'
import igImg4 from '../public/Assets/insta-Img-4.avif'
import igImg5 from '../public/Assets/insta-Img-5.avif'
import igImg6 from '../public/Assets/insta-Img-6.avif'


const Instagram = () => {
  return (
    <div className='py-24 text-center mx-auto max-w-[1240px]'>
        <p className='font-bold text-2xl'>Follow me on Instagram</p>
        <p className='pb-4'>@Hi-Res</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-4 gap-2'>
            <InstagramImage socialImage={igImg1} />
            <InstagramImage socialImage={igImg2} />
            <InstagramImage socialImage={igImg3} />
            <InstagramImage socialImage={igImg4} />
            <InstagramImage socialImage={igImg5} />
            <InstagramImage socialImage={igImg6} />
        </div>
    </div>
  )
}

export default Instagram