import React from 'react';
import square from '../assets/square2.jpg'
import flash from '../assets/flash.jpg'
import fin from '../assets/fin.png'
import hi from '../assets/hi.png'
import cicle from '../assets/cicle-removebg-preview.png'


const Hero = () => {
         const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgb(230, 124, 100), rgb(255, 161, 139))',
  };
  return (
    <div className='w-full py-24' style={gradientStyle}>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 mb-[100px]'>
                <p className='py-2 text-2xl text-white font-medium'>KITCHEN'S</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-white'>Your Dream <br/> Kitchen
                </h1>
                <p className='py-2 text-lg text-white md:w-[500px]'>Various versions have evolved over the years, sometimes by accident Various  versions have evolved over the years, sometimes by accident.</p>
              
                     <button className='px-8 py-5 rounded-md bg-[#1124A3] text-white font-bold w-[200px]'>Explore Kitchen's</button>
                   
                
            </div>
            
              <div className='mb-[100px]'>
                  <img className='md:w-[300px] w-[150px] h-[266px] md:h-[433px] ml-[-625px] md:ml-[150px]  absolute inset-x-[800px] inset-y-[595px] md:inset-y-[250px] rounded-[20px]' src={flash} alt='' />
                      
                        <img className='w-[95px] h-[95px] md:w-[150px] md:h-[150px] ml-[-715px] md:ml-[150px]  absolute inset-x-[1000px] md:inset-y-[350px] rounded-[20px] inset-y-[695px]' src={fin} alt='' />
                        <img className='w-[95px] h-[40px] md:w-[150px] md:h-[85px] ml-[-615px] md:ml-[150px]  absolute inset-x-[750px] md:inset-y-[200px] inset-y-[575px] md:rounded-[20px] rounded-[13px]' src={hi} alt='' />
                          <img className='w-[50px] md:w-[100px] md:ml-[150px] ml-[-595px]  absolute inset-x-[750px] md:inset-y-[150px] inset-y-[559px]' src={cicle} alt='' />
                        <img className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-[20px] md:mt-[250px] mt-[100px] ml-[100px] md:ml-[40px]' src={square} alt='' />
           </div>



        </div>
        

    </div>
  )
}

export default Hero 