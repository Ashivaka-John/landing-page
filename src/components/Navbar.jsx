import React, { useState } from 'react';
import close from '../assets/close.svg'
import hamburgerMenu from '../assets/hamburgerMenu.svg'

const Navbar = () => {
    const bgColor = 'rgb(228,120,95)';

    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <div className='w-full h-[80px]  sticky top-0 z-50' style={{ backgroundColor: bgColor }}>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>

                <h1 className='font-bold text-[35px] text-white'>KTC</h1>

                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4 text-white'>
                        <li><a href="#about">About</a></li>
                        <li><a href="#courses">Kitchens</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className='px-8 py-3 rounded-md bg-[#1124A3] text-white font-bold'>Contact Us</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt="Menu Icon" />
                </div>
            </div>

            <div className={toggle ? 'absolute z-40 p-4 w-full px-8 md:hidden ' : 'hidden'} style={{ backgroundColor: bgColor }}>
                <ul className='text-white'>
                    <li className='p-4 hover:bg-red-400'><a href="#about">About</a></li>
                    <li className='p-4 hover:bg-red-400'><a href="#courses">Kitchens</a></li>
                    <li className='p-4 hover:bg-red-400'><a href="#features">Features</a></li>
                    <li className='p-4 hover:bg-red-400'><a href="#contact">Contact</a></li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-5 rounded-md bg-[#1124A3] text-white font-bold'>Contact Us</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
