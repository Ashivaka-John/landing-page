import React from 'react'
import Card from './Card';



const Features = () => {
     const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgb(237,132,110), rgb(246,147,124))',
  };
  return (
    <section id='features' className='w-full py-24' style={gradientStyle}>
        <div className='md:max-w-[1480px] m-auto grid md:flex flex-row max-w-[600px]  px-4 md:px-0'>
            
            <div className='justify-center gap-4 mb-[50px] '>
                <p className='py-2 text-2xl text-white font-medium '>FEATURES</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-white '>Explore Our Advantages<br/>& Best Features
                  </h1>
                  
            </div>
            
             



        </div>
         <div className=' md:flex gap-5 md:ml-[50px]'>
                
           
                 <Card/>
          
           </div>

    </section>
  )
}

export default Features
