import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen p-4 m-auto max-w-[1240px]'>
        <h1 className='p-4 text-center font-bold text-2xl'>Let's work together</h1>
        <form className='m-auto max-w-[600px]'>
            <div className='gap-2 grid grid-cols-2'>
                <input type="text" placeholder='Name' className='p-3 w-full border shadow-lg' />
                <input type="email" placeholder="Email" className='p-3 w-full border shadow-lg' />
            </div>
            <input type="text" placeholder="Subject" className='p-3 w-full border shadow-lg my-2' />
            <textarea cols="30" rows="10" placeholder='Message' className='p-3 w-full border shadow-lg'></textarea>
            <button className='mt-2 w-full p-3 border shadow-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Contact