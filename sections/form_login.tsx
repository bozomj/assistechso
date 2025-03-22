export default function FormLogin() {
  return (
    <div className='flex flex-col md:max-w-[30rem] gap-4 bg-gray-300 items-stretch text-center rounded-2xl w-full p-4'>
      <img src='favicon.ico' alt='' className='h-[6rem] object-contain' />
      <h1 className='text-3xl font-bold text-amber-700'>Entrar</h1>
      <input
        type='text'
        placeholder='E-mail'
        className='bg-gray-600 p-3 rounded text-gray-200 outline-0'
      />
      <input
        type='password'
        placeholder='Senha'
        className='bg-gray-600 p-3 rounded text-gray-200 outline-0'
      />
      <button
        onClick={login}
        className='bg-indigo-700 p-3 font-bold text-gray-200 cursor-pointer rounded hover:bg-indigo-500'
      >
        ENTRAR
      </button>
    </div>
  );
}

function login() {
  alert('vc esta querendo fazer login');
}
