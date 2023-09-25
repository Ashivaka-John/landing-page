import React from 'react';
import bon from '../assets/circleprofile.png'
import fot from '../assets/signature-removebg-preview.png'
import noom from '../assets/Noom-m.jpg'
import square from '../assets/square2.jpg'
import hi from '../assets/hi.png'
import xo from '../assets/xo1.jpg'
import poty from '../assets/poty-removebg-preview.png'


const About = () => {
   
  return (
    <section id='about' className='w-full py-24 bg-[#FBECE7]'>
        <div className='md:max-w-[1480px] m-auto grid md:flex md:gap-[190px] max-w-[600px]  px-4 md:px-0'>
             <div className='mt-[50px] md:mt-[100px]'>
                   <img className='w-[300px] h-[200px] md:w-[600px] md:h-[400px] ml-[90px] md:ml-[100px] rounded-[20px] absolute' src={noom} alt='' />
            <img className='w-[75px] h-[45px] md:w-[150px] md:h-[90px] ml-[100px] rounded-[15px] absolute mt-[180px] md:mt-[380px] ml-[250px] md:ml-[430px]' src={hi} alt='' />
            <img className='w-[125px] h-[75px] md:w-[250px] md:h-[150px] ml-[100px] rounded-[15px] absolute mt-[-50px] md:mt-[-100px] md:ml-[500px] ml-[250px] text-white' src={xo} alt='' />
            <img className='w-[100px] md:w-[200px]  absolute mt-[-75px] md:mt-[-150px] ml-[260px] md:ml-[500px] text-white' src={poty} alt='' />
            <img className='w-[250px] h-[150px] md:w-[500px] md:h-[350px] rounded-[20px] mt-[100px] ml-[50px]' src={square} alt='' />
        </div>
        <br/>
        
            <div className='flex flex-col justify-start gap-4 mb-[100px'>
                <p className='py-2 text-2xl text-[#E6B8B0] font-medium'>ABOUT</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-black'>Designed <br/> For Your Life
                  </h1>
                  <p className='py-2 text-lg font-bold text-black md:w-[500px] text-[25px]'>Various versions have evolved over the years</p>
          <p className='py-2 text-lg text-black md:w-[500px]'>Various versions have evolved over the years, sometimes by accident Various  versions have evolved over the years, sometimes by accident.</p>
          <div className='flex gap-5'>
            <img className='w-[50px] ' src={bon} alt='' />
                  <p className='py-2 text-lg text-black md:w-[500px] font-light'>Various versions have evolved over the years</p>
           </div>  
                     <img className='w-[50px]' src={fot} alt=''/>
                   
                
            </div>
            
             



        </div>
        

    </section>
  )
}

export default About 
