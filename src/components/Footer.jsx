import React from 'react'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#452017] py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
               <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-white'>KTC
                </h1>
             
            </div>

            <div>
                <h3 className='text-2xl font-bold text-[#CC5E45]'>Explore</h3>
                <ul className='py-6 text-white'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Course</li>
                    <li className='py-2'>Blog</li>
                    <li className='py-2'>Contact</li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold text-[#CC5E45]'>Category</h3>
                <ul className='py-6 text-white'>
                    <li className='py-2'>Design</li>
                    <li className='py-2'>Development</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Business</li>
                    <li className='py-2'>Lifestyle</li>
                    <li className='py-2'>Photography</li>
                    <li className='py-2'>Music</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold text-[#CC5E45]'>SOCIAL</h3>
                  <div className='flex gap-4 py-4 md:ml-[-110px]'>
                        <div className='p-4 bg-black rounded-xl'><FaFacebookF size={20} style={{color:'white'}} /></div>
                        <div className='p-4 bg-black rounded-xl'><FaDribbble size={20} style={{color:'white'}} /></div>
                        <div className='p-4 bg-black rounded-xl'><FaLinkedinIn size={20} style={{color:'white'}} /></div>
                        <div className='p-4 bg-black rounded-xl'><FaInstagram size={20} style={{color:'white'}} /></div>
                        <div className='p-4 bg-black rounded-xl'><FaBehance size={20} style={{color:'white'}} /></div>

                </div>



            </div>
        
          </div>
           <div>
               <p className=' font-bold text-center mt-16 md:text-center'>&copy; 2023 KTC. All Rights Reserved.
          </p>
        
            </div>
    </div>
  )
}

export default Footer