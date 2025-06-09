import React from "react";

const SectionContact = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-16 mb-20  max-sm:flex flex-col p-2">
        <div className="rounded-xl bg-gradient-to-t from-green-900 to-green-950 p-16">
          <h2 className="text-green-400 text-4xl font-serif mb-4">
            Nossos Contatos
          </h2>
          <p className="text-gray-300 text-balance mb-6">
            Tem interesse em passar uma temporada na Forest? Entre em contato
            com a gente por telefone ou email.
          </p>
          <h3 className="text-green-400 text-2xl font-serif">Base</h3>
          <p className="text-gray-300 text-balance mb-6">
            Rua da Mata, 123 - Floresta Nacional - RJ
          </p>
          <h3 className="text-green-400 text-2xl font-serif">E-mail</h3>
          <p className="text-gray-300 text-balance mb-6">contato@gmail.com</p>
          <h3 className="text-green-400 text-2xl font-serif ">Telefone</h3>
          <p className="text-gray-300 text-balance">21 9999-9999</p>
        </div>
        <div className="text-white p-16 rounded-xl bg-gradient-to-t from-green-900 to-green-950  max-sm:flex justify-center">
        <div className="grid gap-4">
  <div className="grid">
    <label className="mb-1" htmlFor="nome">Nome</label>
    <input
      className="bg-green-800/60 rounded p-2 text-white placeholder-white"
      type="text"
      id="nome"
      placeholder="Digite seu nome"
    />
  </div>

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
    <div className="grid">
      <label className="mb-1" htmlFor="e-mail">E-mail</label>
      <input
        className="bg-green-800/60 rounded p-2 text-white placeholder-white"
        type="email"
        placeholder="seu@email.com"
      />
    </div>
    <div className="grid">
      <label className="mb-1" htmlFor="telefone">Telefone</label>
      <input
        className="bg-green-800/60 rounded p-2 text-white placeholder-white"
        type="tel"
        placeholder="(21) 00000-0000"
      />
    </div>
  </div>

  <div className="grid">
    <label className="mb-1" htmlFor="mensagem">Mensagem</label>
    <textarea
      className="bg-green-800/60 rounded p-2 text-white placeholder-white"
      id="mensagem"
      rows={4}
      placeholder="Escreva sua mensagem"
    ></textarea>
  </div>

  <button
    type="submit"
    className="rounded-xl bg-green-800/60 p-2 mt-2 hover:bg-green-500/60 text-white font-semibold"
  >
    Enviar E-mail
  </button>
</div>
</div>
</div>


      <ul className="container mx-auto flex items-center gap-10 p-5 max-sm:flex-col">
        <li>
          <img src="./src/assets/caravan.svg" alt="" />
        </li>
        <li>
          <img src="./src/assets/dogs.svg" alt="" />
        </li>
        <li>
          <img src="./src/assets/wildbeast.svg" alt="" />
        </li>
        <li>
          <img src="./src/assets/lescone.svg" alt="" />
        </li>
        <li>
          <img src="./src/assets/surfbot.svg" alt="" />
        </li>
      </ul>
    </>
  );
};

export default SectionContact;
