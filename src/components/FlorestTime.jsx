import React from 'react'

const FlorestTime = () => {
  return (
    <div className="container mx-auto content-end bg-[url('./src/assets/padrao.svg')] bg-no-repeat bg-contain bg-center py-16">
      <p className='uppercase text-green-400 text-center mb-16'>Ciclo Natural</p>
      <h2 className='text-7xl font-serif text-white text-center mb-6 max-sm:text-3xl'>Ritmo da Floresta</h2>
      <div className='grid grid-cols-[repeat(3,minmax(300px,1fr))] max-sm:flex flex-col py-5 gap-2 sm:gap-6 overflow-x-auto'>
        <div className='rounded-xl bg-gradient-to-b from-green-700 to-green-950 p-8 max-sm:m-2'>
          <img className='rounded-full bg-green-400 p-2' src="./src/assets/manha.svg" alt="" />
          <h3 className='text-white text-2xl font-serif mt-4 mb-6'>Amanhacer</h3>
          <p className='text-gray-300 mb-2'>Desperte com o canto dos pássaros e participe das nossas caminhadas ao ar livre.</p>
          <span className='text-green-400'>05:40 - 07:00</span>
        </div>
        <div className='rounded-xl bg-gradient-to-b from-green-700 to-green-950 p-8 max-sm:m-2'>
          <img className='rounded-full bg-green-400 p-2' src="/assets/dia.svg" alt="" />
          <h3 className='text-white text-2xl font-serif mt-4 mb-6'>Meio-dia</h3>
          <p className='text-gray-300 mb-2'>Explore nossas trilhas sombreadas e desfrute de um piquenique gourmet na natureza.</p>
          <span className='text-green-400'>12:00 - 14:00</span>
        </div>
        <div className='rounded-xl bg-gradient-to-b from-green-700 to-green-950 p-8 max-sm:m-2'>
          <img className='rounded-full bg-green-400 p-2' src="./src/assets/noite.svg" alt="" />
          <h3 className='text-white text-2xl font-serif mt-4 mb-6'>Anoitecer</h3>
          <p className='text-gray-300 mb-2'>Termine seu dia com nossa sessão de observação de estrelas.</p>
          <span className='text-green-400'>19:00 - 21:00</span>
        </div>
      </div>
    </div>
  )
}

export default FlorestTime
