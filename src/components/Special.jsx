import React from 'react'
import four from '../assets/4.jpg'
import hi from '../assets/hi.png'
import two from '../assets/spanner_5567683.png'
 import three from '../assets/hammer_10362978.png'

const Special = () => {
        const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgb(228,120,94), rgb(236,134,112))',
  };
  return (
    <div className='w-full py-24' style={gradientStyle}>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 mb-[100px]'>
                <p className='py-2 text-2xl text-white font-medium'>SPECIALIZATION</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-6xl font-bold text-white'>Expertise <br/> & Innovation
                </h1>
                <p className='py-2 text-lg text-white md:w-[500px]'>Various versions have evolved over the years, sometimes by accident Various  versions have evolved over the years, sometimes by accident.</p>
              
                          <ul className="list-none list-inside">
      <li className="mb-2 flex items-center text-white">
        <div className="w-4 h-4 rounded-full bg-red-400 mr-2 flex items-center justify-center">
          <span className="text-white">&#10003;</span>
        </div>
        Customize your kitchen
      </li>
      <li className="mb-2 flex items-center text-white">
        <div className="w-4 h-4 rounded-full bg-red-400 mr-2 flex items-center justify-center">
          <span className="text-white">&#10003;</span>
        </div>
        Design your Kitchen in 3d
      </li>
      <li className="mb-2 flex items-center text-white">
        <div className="w-4 h-4 rounded-full bg-red-400 mr-2 flex items-center justify-center">
          <span className="text-white">&#10003;</span>
        </div>
        Delivery & installation
      </li>
    </ul>
                   
                
            </div>
            
              <div className='md:mt-[300px]'>
                  <img className= 'w-[175px] h-[233px] md:w-[350px] md:h-[533px] rounded-[20px] mt-[-70px] md:mt-[-250px]' src={four} alt='' />
              <img className='w-[35px] md:w-[70px] ml-[-390px] md:ml-[540px] md:mt-[-220px] mt-[-180px]  absolute inset-x-[750px] ' src={three} alt='' />
              <img className='w-[125px] h-[62px] md:w-[250px] md:h-[125px] ml-[300px] md:ml-[400px] mt-[-100px] md:mt-[-250px]  inset-y-[200px] rounded-[20px]' src={ hi } alt='' />
             <img className=' w-[35px] md:w-[70px] ml-[-390px] md:ml-[540px] mt-[-50px]  md:mt-[-275px]  absolute inset-x-[750px] ' src={two} alt='' />
             <img className='w-[125px] h-[62px] md:w-[250px] md:h-[125px] ml-[300px] md:ml-[400px] mt-[-150px] md:mt-[-300px]  inset-y-[200px] rounded-[20px]' src={ hi } alt='' />
           </div>



        </div>
        

    </div>
  )
}

export default Special
