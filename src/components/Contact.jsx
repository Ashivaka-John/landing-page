import React from 'react'
import heroImg from '../assets/map.jpg'
import {FaMailBulk,FaPhoneAlt} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='w-full py-24 bg-[#FBECE7]'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
         
        
            <div className='flex flex-col justify-start gap-4 mb-[100px]'>
                <p className='py-2 text-2xl text-[#E6B8B0] font-medium'>OFFICE</p>
               <h2 className='font-bold mb-2 lg:mb-5 text-black text-[30px]'>7587 Longfellow Road Ankeny, IA 50023</h2>
          <p className='mb-2 lg:mb-5 text-black font-bold flex gap-5'><div className='p-4 bg-[#F39178] rounded-xl'><FaPhoneAlt size={20} style={{ color: 'white' }} /></div>+1(234) 567-89-01</p>
           <p className='mb-2 lg:mb-5 text-black font-bold flex gap-5'><div className='p-4 bg-[#F39178] rounded-xl'><FaMailBulk size={20} style={{color:'white'}} /></div>info@kitchen.com</p>
         
         
                  
              
                     <button className='rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-black border-black text-white flex justify-center items-center lg:gap-x-4 md:w-60'>CONTACT US</button>
                   
                
            </div>
            
             
    <div>
                   <img  src={heroImg} className="md:order-last  order-first rounded-[20px] w-[450px] h-[200px] ml-[50px] md:w-[550px] md:h-[300px]" />
        </div>


        </div>
        
     
    </section>
  )
}

export default Contact
