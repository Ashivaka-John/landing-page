import React from 'react'

import gon from '../assets/gon-removebg-preview 2.png'
import team from '../assets/team-removebg-preview.png'
import now from '../assets/now.jpg'
import cicle from '../assets/circleprofile.png'
import tut from '../assets/true.png'
import very from '../assets/very.png'

const Team = () => {
     const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgb(228,120,94), rgb(236,134,112))',
  };
  return (
        <div className='w-full py-24' style={gradientStyle}>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
              <div className='md:mt-[80px]'>
                   <img className='w-[215px] h-[140px] md:w-[430px] md:h-[300px] ml-[-250px] md:ml-[-110px] rounded-[20px] mt-[45px]  md:mt-[90px]  absolute inset-x-[300px] cursor-pointer' src={now} alt='' />
            <img className='w-[75px] md:w-[150px] ml-[-280px] md:ml-[-200px] rounded-[20px] mt-[137px]  md:mt-[275px]  absolute inset-x-[300px] cursor-pointer' src={tut} alt='' />
            <img className='w-[75px] md:w-[150px] ml-[-60px] md:ml-[200px] rounded-[20px] mt-[137px] md:mt-[275px]  absolute inset-x-[300px] cursor-pointer' src={very} alt='' />
            <img className='w-[75px] md:w-[150px] ml-[-180px] md:ml-[20px] rounded-[20px]  mt-[-15px] md:mt-[-30px]  absolute inset-x-[300px] cursor-pointer' src={cicle} alt='' />
                        <img className='w-[350px] md:w-[700px] md:ml-[-90px] ml-[-60px]' src={team} alt=''/>
           </div>
            <div className='flex flex-col justify-start gap-4 mb-[100px]'>
                <p className='py-2 text-2xl text-white font-medium'>TEAM</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-white'>Our Team <br/> Members
                </h1>
                  <p className='py-2 text-lg text-white md:w-[500px]'>Various versions have evolved over the years, sometimes by accident Various  versions have evolved over the years, sometimes by accident.</p>
                  
                   <div className='flex flex-row'>
              <img className='ml-[-90px]' src={gon} alt='' />
              <p className='font-bold'>42+</p>
            </div>
              
       <button className='px-8 py-5 rounded-md bg-[#1124A3] text-white font-bold w-[200px]'>EXPLORE</button>
                   
                
            </div>
            
            



        </div>
        

    </div>
  )
}

export default Team
