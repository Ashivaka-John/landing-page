

import React from 'react'




const NewsLetter = () => {
     const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgb(228,119,96), rgb(251,160,136)',
  };

  return (
      <div className='w-full py-24 md:h-[330px]' style={gradientStyle}>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 mb-[100px]'>
               
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-white'>Subscribe to Newsletter
                </h1>
                <p className='mb-2 lg:mb-5 text-[15px] font-bold text-white'>The sky was cloudless and of a deep dark blue spectacle before us was indeed sublime</p>
              
                   
                
            </div>
            
             <form >
              <div className='flex ml-12 mt-12 gap-[10px]'>
                  <input className='rounded justify-center items-center mt-[4px] ml-[70px]' type='text' placeholder='Your Email' />
                  <button className='rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-black border-black text-white flex justify-center items-center lg:gap-x-4 md:w-60'>Subscribe</button>
              </div>
          </form>



        </div>
        

    </div>
  )
}

export default NewsLetter
