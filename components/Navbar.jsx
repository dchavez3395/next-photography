import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);


  return (
    <div style={{backgroundColor: `${color}`}} className='w-full z-10 ease-in duration-300 fixed left-0 top-0' >
        <div className='text-white flex justify-between items-center p-4 m-auto max-w-[1240px]'>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className='text-4xl font-bold cursor-pointer' >Hi-Res</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='sm:flex hidden'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/work'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            {/*Mobile Menu Button */}
            <div className='sm:hidden z-[100000] block' onClick={handleNav}>
                    {nav ? (
                    <AiOutlineClose size={20} className='text-white' onClick={handleNav} />
                ) : (
                    <AiOutlineMenu size={20} style={{ color: `${textColor}` }} onClick={handleNav} />
                )}
            </div>
            {/*Mobile Menu */}
            <div className={nav ? 'h-screen sm:hidden w-full absolute  top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black ease-in duration-300'
                                : 'h-screen sm:hidden w-full absolute  top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center bg-black ease-in duration-300'
                                }>
                <ul>
                    <li onClick={handleNav} className='text-4xl hover:text-gray-500 p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='text-4xl hover:text-gray-500 p-4'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li onClick={handleNav} className='text-4xl hover:text-gray-500 p-4'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li onClick={handleNav} className='text-4xl hover:text-gray-500 p-4'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>

            </div>
    </div>
  )
}

export default Navbar