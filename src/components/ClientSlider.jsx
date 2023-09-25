import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const ClientSlider = ({ clients }) => {
  return (
    <Swiper slidesPerView={1} spaceBetween={30} grabCursor={true} loop={true} breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
            1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
                  19200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

    }}>
        {clients.map((client, index) => {
            const {message, name, position, borderColor} = client
            return <SwiperSlide key={index} style={{ borderColor: borderColor }}>
                <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[250px] rounded-[12px]  py-6 px-[30px] bg-white'>
                    <div className='mb-[30px]'>{message}</div>
                    <div className='gap-x-[10px]'>
                        <div className='font-bold'>{name}</div>
                    <div className='text-light'>{ position}</div>
                    </div>
                </div>
            </SwiperSlide>
      })}
  </Swiper>
  );
};




export default ClientSlider;
