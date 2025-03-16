import Card from '@/components/Card';

export default function Produtos() {
  return (
    <>
      <section className='flex flex-col p-2 gap-4 md:flex-row flex-wrap justify-center'>
        <Card
          key={1}
          image='https://http2.mlstatic.com/D_NQ_NP_884912-MLU72067385668_102023-O.webp'
          alt=''
          legend='Teclado Semi-mecanico'
          valor={120.0}
        />

        <Card
          key={1}
          image='https://http2.mlstatic.com/D_NQ_NP_858109-MLA40944407720_022020-O.webp'
          alt=''
          legend='Teclado Semi-mecanico'
          valor={120.0}
        />

        <Card
          key={1}
          image='https://http2.mlstatic.com/D_NQ_NP_958552-MLB82237580907_022025-O.webp'
          alt=''
          legend='Teclado Semi-mecanico'
          valor={120.0}
        />
      </section>
    </>
  );
}
