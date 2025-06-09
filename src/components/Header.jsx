import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="container flex justify-between items-center p-8 mx-auto pb-20">
      <a href="./">
        <img src="./src/assets/forest.svg" alt="Forest" />
      </a>
      <nav className="flex">
        <ul className="text-white text-xl flex items-center justify-end p-2 gap-5">
          
          <button
            onClick={toggleMenu}
            className="rounded-full bg-gradient-to-t from-green-500 to-green-950 px-4 p-1 flex justify-between items-center gap-2 lg:hidden"
          >
            Menu <FontAwesomeIcon icon={faBars} />
          </button>

          {menuOpen && (
        <div className="z-50 max-lg:fixed top-20 right-2 bg-green-900 p-4 rounded-lg  shadow-lg lg:hidden flex flex-col gap-4 text-white">
          <a
            className="hover:underline hover:underline-offset-8"
            href="#Acomodações"
          >
            Acomodações
          </a>
          <a href="#Eventos">Eventos</a>
          <a href="#Experiências">Experiências</a>
          <a href="#Contatos">Contatos</a>
        </div>
      )}

          
          <div className="gap-5 max-lg:hidden flex">
            <li className="hover:underline hover:underline-offset-8">
              <a href="#Acomodações">Acomodações</a>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <a href="#Eventos">Eventos</a>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <a href="#Experiências">Experiências</a>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <a href="#Contatos">Contatos</a>
            </li>
          </div>
        </ul>
      </nav>

      {/* Menu Mobile */}
      
    </header>
  );
};

export default Header;
