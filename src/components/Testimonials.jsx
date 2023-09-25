import React from 'react'
import { testimonials} from '../data/Courses.js'
import ClientSlider from './ClientSlider.jsx'

const Testimonials = () => {
  const { clients } = testimonials;
  return (
     <div className='w-full py-24 bg-[#FBECE7]'>
        <div className='md:max-w-[1480px]  md:grid-rows-2  md:px-0'>
            
            <div className='justify-center gap-4 mb-[100px]'>
                <p className='py-2 text-2xl text-[#E6B8B0] font-medium ml-16'>TESTIMONIALS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-black   ml-16'>Client's Say 
                  </h1>
                  
            </div>
            
              <div className=' w-[400px] md:w-[1400px] ml-[60px]'>
                 
          <ClientSlider clients={clients} />
           </div>



        </div>
        

    </div>
  )
}

export default Testimonials
