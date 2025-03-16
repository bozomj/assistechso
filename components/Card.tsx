import React from 'react';

interface CardProps {
  image: string;
  legend: string;
  valor: number;
  alt: string;
}

const Card: React.FC<CardProps> = ({ image, legend, valor, alt }) => {
  return (
    <div className='flex flex-1 flex-col bg-gray-50 p-2 rounded-2xl md:min-w-[18rem] '>
      <img src={image} alt={alt || legend} />
      <legend className='font-bold'>{legend}</legend>
      <span className='text-green-700 font-bold'>R$: {valor}</span>
    </div>
  );
};

export default Card;
