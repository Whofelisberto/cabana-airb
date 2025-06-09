import React from "react";

const Section = () => {
  return (
    <>
      <section className="container grid lg:grid-cols-[2fr_3fr] mx-auto gap-8 pt-16 p-2">
        <div className="max-sm:ml-2 mr-2 mb-8 content-end bg-[url('./src/assets/padrao.svg')] bg-no-repeat bg-contain bg-left-bottom">
          <h2 className="text-white mb-8 text-3xl font-serif sm:text-5x1">
            Refugio Natual
          </h2>
          <ul className="text-white sm:text-xl">
            <li className="flex items-center gap-4">
              <span className="h-0.5 w-6 bg-green-400 inline-block"></span>
              Experimente a natureza de perto
            </li>
            <li className="flex items-center gap-4">
              <span className="h-0.5 w-6 bg-green-400 inline-block"></span>
              Conecte-se com a natureza
            </li>
            <li className="flex items-center gap-4">
              <span className="h-0.5 w-6 bg-green-400 inline-block"></span>
              Desconecte-se do digital
            </li>
            <li className="flex items-center gap-4">
              <span className="h-0.5 w-6 bg-green-400 inline-block"></span>
              Observe a vida selvagem
            </li>
            <li className="flex items-center gap-4">
              <span className="h-0.5 w-6 bg-green-400 inline-block"></span>
              Escolha a sua cabine preferida
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-4 sm:gap-8 mb-8 max-sm: ml-2 mr-2">
   <div className="col-span-full grid *:col-start-1 *:row-start-1">
    <img className="h-52 w-full object-cover rounded-xl" src="./src/assets/casa1.jpg" alt="" />
    <span className="uppercase m-2 self-start justify-self-end text-white rounded-full bg-green-950/60 px-4 py-2 max-sm: text-sm">Ruby</span>
   </div>
   
   <div className="grid *:col-start-1 *:row-start-1">
    <img className="rounded-xl object-cover size-full" src="./src/assets/casa2.jpg" alt="" />
    <span className="uppercase m-2 self-start justify-self-end text-white rounded-full bg-green-950/60 px-4 py-2 max-sm: text-sm">Emerald</span>
   </div>
   <div className="grid *:col-start-1 *:row-start-1">
    <img className="rounded-xl size-full object-cover" src="./src/assets/casa3.jpg" alt="" />
    <span className="uppercase m-2 self-start justify-self-end text-white rounded-full bg-green-950/60 px-4 py-2 max-sm: text-sm ">Saphire</span>
   </div>
        </div>
      </section>
    </>
  );
};

export default Section;
