import React from 'react'
import first from '../assets/first.png'
import seco from '../assets/2nd.jpg'
import third from '../assets/3rd.jpg'

const Courses = () => {
  
  return (
   <section id='courses' className='w-full py-24 bg-[#FBECE7]'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-rows-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='justify-center gap-4 mb-[100px]'>
                <p className='py-2 text-2xl text-[#E6B8B0] font-medium '>PORTFOLIO</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-black '>Our Projects
                  </h1>
                  
            </div>
            
              <div className='md:mb-[-600px] md:flex gap-5 md:ml-[-50px]'>
                 <div> <img src={first} className="md:flex md:order-last  order-first rounded-[20px] w-[400px] h-100px] ml-[50px] md:w-[400px] md:h-[250px]" />
                  <br />
                  <p className='font-bold text-[28px] ml-60'>Kitchen</p></div>
                 
          <div>
            <img src={seco} className="md:flex md:order-last  order-first rounded-[20px] w-[400px] h-100px] ml-[50px] md:w-[400px] md:h-[250px]" />
                  <br />
                  <p className='font-bold text-[28px] ml-60'>Kitchen</p>
                  </div>
                 
          <div>
            <img src={third} className="md:flex md:order-last  order-first rounded-[20px] w-[400px] h-100px] ml-[50px] md:w-[400px] md:h-[250px]" />
                    <br />
                  <p className='font-bold text-[28px] ml-60'>Kitchen</p>
                  </div>
           </div>



        </div>
        

    </section>
  )
}

export default Courses