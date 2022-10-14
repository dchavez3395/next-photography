import Image from 'next/image'
import React from 'react'
import { portfolioData } from './PortfolioData'

const Portfolio = () => {
  return (
    <div className='text-center py-16 mx-auto max-w-[1240px]'>
        <h1 className='p-4 text-2xl font-bold'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='col-span-2 md:col-span-3 row-span-2 w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1551818176-60579e574b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt='/'
                layout='responsive'
                height='451'
                width='677'
                 />
            </div>

            {portfolioData.map((photo, index) => {
                return (
                    <div className='h-full w-full' key={index}>
                        <Image 
                        src={photo.image}
                        objectFit='cover'
                        layout='responsive'
                        width='215'
                        height='217'
                        alt='/' />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Portfolio