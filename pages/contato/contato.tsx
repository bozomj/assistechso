import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

export default function Contato() {
  return (
    <section
      id='contato'
      className='flex justify-center p-8 font-bold text-2xl bg-gray-900 text-gray-100'
    >
      <div className='flex  gap-4  md:max-w-[58rem]  w-full'>
        <Link
          href={'https://instagram.com/assistechso'}
          target='_blank'
          className=' hover:text-pink-600'
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
