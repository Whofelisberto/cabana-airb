import React from "react";

const SectionExperiencies = () => {
  return (
    <div className="container grid grid-cols-2 mx-auto max-sm:flex flex-col">
      <div className="m-5 p-10 bg-gradient-to-t from-green-700 to-green-950 rounded-xl ">
        <p className="uppercase mb-4 text-green-400 font-serif">
          Experiências Exclusivas
        </p>
        <h2 className="text-white text-balance text-4xl font-serif mb-10">
          Escolha Sua Próxima Aventura
        </h2>
        <h3 className="text-xl text-white flex items-center gap-2">
          <span className="h-0.5 w-6 bg-green-400 inline-block m-1"></span>
          Observação Noturna
        </h3>
        <p className="text-gray-400 mb-5">
          Explore a vida selvagem em seu habitat natural sob as estrelas.
        </p>
        <h3 className="text-xl text-white flex items-center gap-2">
          <span className="h-0.5 w-6 bg-green-400 inline-block m-1"></span>
          Vida Selvagem
        </h3>
        <p className="text-gray-400 mb-5">
          Observe a vida selvagem em seu habitat natural.
        </p>
        <h3 className="text-xl text-white flex items-center gap-2">
          <span className="h-0.5 w-6 bg-green-400 inline-block m-1"></span>
          Canoagem
        </h3>
        <p className="text-gray-400 mb-5">
          Conquiste novos horizontes com nossa equipe especializada.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="">
          <img
            className="object-cover size-full rounded-xl"
            src="./src/assets/canoagem.jpg"
            alt=""
          />
          <span className="grid relative bottom-10 right-1 rounded-2xl justify-self-end bg-green-950/60 px-4 max-lg:hidden  text-white uppercase p-1">Canoagem</span>
        </div>
        <div className="">
          <img
            className="object-cover rounded-xl row-span-2"
            src="./src/assets/observacao-noturna.jpg"
            alt=""
          />
          <span className="grid relative bottom-10 right-1 rounded-2xl justify-self-end bg-green-950/60 px-4 max-lg:hidden text-white uppercase p-1">Noturna</span>
        </div>
        <div>
          <img
            className="object-cover rounded-xl"
            src="./src/assets/vida-selvagem.jpg"
            alt=""
          />
          <span className="grid relative bottom-10 right-1 rounded-2xl justify-self-end bg-green-950/60 px-4 max-lg:hidden text-white uppercase p-1">Vida Selvagem</span>
        </div>
      </div>
    </div>
  );
};
export default SectionExperiencies;
