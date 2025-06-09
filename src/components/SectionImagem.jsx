import React from 'react'

const SectionImagem = () => {
  return (
    <>
    <div className="container sm:mx-auto text-white p-2">
  <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-t from-green-950/80 relative">
<div>
    <img className="relative sm:rounded-lg mx-auto w-full object-cover max-sm:h-96 " src="./src/assets/floresta.jpg" alt=""  />
</div>
    <div className="absolute bg-black/70 max-sm:rounded-xl  top-10 right-10  sm:bg-black sm:inline-flex gap-8 items-center py-1 pl-4 pr-1 rounded-full">

      <p>vagas para dezembro abertas</p>
      <a className="bg-green-600 sm:py-2 px-4 inline-block rounded-full" href="">Reserve Hoje</a>
    </div>

    <h1 className="absolute top-32 right-10 font-serif max-sm:text-2xl mb-10 text-white sm:text-5xl text-right">
      Venha Experimentar a<br />Vida na Floresta
    </h1>

    <div className="absolute bottom-10 right-0 max-sm:flex-col flex sm:items-center justify-between w-full px-10 max-sm:mt-15 ">
      <p className="text-sm sm:pt-5 ">Melhores lugares para visitar <span className="underline">2025</span></p>
      <div>
        <p className="uppercase text-sm text-right flex flex-col max-sm: pt-2">recomendado por</p>
        <p className="flex items-center justify-end">
          <img className="w-28" src="./src/assets/wildbeast.svg" alt="" />
          <span className="px-1">|</span> 
          Revista Nacional
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SectionImagem