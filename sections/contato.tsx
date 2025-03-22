import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

export default function Contato() {
  return (
    <section
      id='contato'
      className='flex flex-col justify-center items-start p-8 font-bold  bg-gray-900 text-gray-100 w-full'
    >
      <h2 className='text-4xl py-2'>
        <span className='text-orange-600'>Fale</span> com a gente
      </h2>
      <p className='py-4 '>
        Entre em contato, respoderemos o mais breve possível.
      </p>
      <div className='flex  gap-4  md:max-w-[58rem]  w-full text-[1.3rem]'>
        <Link
          href={'https://instagram.com/assistechso'}
          target='_blank'
          className=' hover:text-pink-800'
        >
          <FontAwesomeIcon icon={faInstagram} size='xl' />
        </Link>

        <Link
          href={'https://wa.me/5534997668902?text=[Assistechso]'}
          target='_blank'
          className='  hover:text-green-400'
        >
          <FontAwesomeIcon icon={faWhatsapp} size='xl' /> (34) 99766-8902
        </Link>
      </div>
    </section>
  );
}
