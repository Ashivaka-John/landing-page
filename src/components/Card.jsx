import React, { useState } from 'react';
import { product } from '../data/Courses.js';

const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const bgColor = 'rgb(214, 94, 69)';

  const { cards } = product;

  return (
    <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
      {cards.map((card, cardIndex) => {
        const { icon, title, subtitle } = card;
        const isHovered = cardIndex === hoveredIndex;

        return (
          <div
            key={cardIndex}
            onMouseEnter={() => setHoveredIndex(cardIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${
              isHovered ? `shadow-2xl bg-${bgColor}` : 'bg-transparent'
            } w-[350px] h-[350px] flex flex-col justify-center items-center ms-auto p-[65] text-center rounded-[12px] cursor-pointer transition-all ml-[130px] md:ml-[30px]`}
           >
            <div className='mb-6'>
              <img className='h-[60px]' src={icon} alt='' />
            </div>
            <div className='mb-3 text-[30px] font-bold text-white'>{title}</div>
            <div className='mb-6 text-light text-white'>{subtitle}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;