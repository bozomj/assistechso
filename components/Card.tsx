import React from 'react';

interface CardProps {
  image: string;
  legend: string;
  valor?: number;
  alt: string;
}

const Card: React.FC<CardProps> = ({ image, legend, valor, alt }) => {
  return (
    <div className='flex flex-1 items-center flex-col bg-gray-50 p-2 rounded-2xl md:min-w-[18rem] '>
      <img
        src={image}
        alt={alt || legend}
        className=' object-contain h-[14rem]'
      />
      <legend className='font-bold'>{legend}</legend>
      {valor ?? ''}
    </div>
  );
};

export default Card;
