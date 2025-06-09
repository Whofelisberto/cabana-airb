import React from "react";

const SectionEvents = () => {
  return (
  <>
  <div className="container mx-auto">
      <p className="text-green-400 uppercase text-center m-12 font-serif">conecte-se com a natureza</p>
      <h2 className="text-white text-6xl font-serif text-balance text-center mx-auto mb-12 max-sm:text-3xl">Cada Som, Cada Momento,<br/> Uma Nova Descoberta</h2>
      <div className="grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-5 text-white font-serif bg-green-800 overflow-x-auto snap-x snap-mandatory mb-12 p-5">
      
      <div className="grid snap-center gap-4 bg-gradient-to-b from-green-700 to-green-950 p-6 sm:p-8 rounded-xl">
      <h3 className="font-serif text-2xl text-green-400">Lua Nova</h3>
      <p className="font-serif text-5xl">23</p>
      <p className="font-serif text-xl">Março 2049</p>
      <p className="text-balance text-gray-300">Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.</p>
      <button className="bg-green-400 hover:bg-green-950 transiton duration-100 rounded-full h-8 w-40 font-serif"><a href="">Reservar 23/03</a></button>
      </div> 


      <div className="grid snap-center gap-4 bg-gradient-to-b from-green-700 to-green-950 p-6 sm:p-8 rounded-xl"> 
      <h3 className="font-serif text-2xl text-green-400">Aurora Boreal</h3>
      <p className="font-serif text-5xl">23</p>
      <p className="font-serif text-xl">Março 2049</p>
      <p className="text-balance text-gray-300">Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.</p>
      <button className="bg-green-400 hover:bg-green-950 transiton duration-100 rounded-full h-8 w-40 font-serif"><a href="">Reservar 15/06</a></button>
      </div> 

      <div className="grid snap-center gap-4 bg-gradient-to-b from-green-700 to-green-950 p-6 sm:p-8 rounded-xl"> 
      <h3 className="font-serif text-2xl text-green-400">Chuva de Meteoros</h3>
      <p className="font-serif text-5xl">23</p>
      <p className="font-serif text-xl">Março 2049</p>
      <p className="text-balance text-gray-300">Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.</p>
      <button className="bg-green-400 hover:bg-green-950 transiton duration-100 rounded-full h-8 w-40 font-serif"><a href="">Reservar 26/06</a></button>
      </div>  
      </div>

  </div>
  </>
  );
};

export default SectionEvents;
