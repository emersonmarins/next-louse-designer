"use client"
import { faBars, faHome, faInfoCircle, faTools, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";

export default function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const styleContainer = 'max-sm:flex max-sm:flex-col max-sm:items-center absolute max-sm:top-0 max-sm:right-0 max-sm:pt-24 max-sm:h-[auto] max-sm:w-[250px] z-20 ';
  const styleContainer02 = "before:content-[''] before:absolute before:bg-[linear-gradient(180deg,_#575757,_#171717)] before:top-0 before:h-[450px] before:w-[250px] before:z-10 ";
  const resulSumStyles = styleContainer + styleContainer02;
  const addHidden = ' before:right-[-100%]';
  const addShow = ' before:right-0';
  const transitionStyle = { transition: 'all 1s ease, right 1s ease' }
  const transitionStyleRight = { transition: 'all 1s ease, right 1s ease', right: 0 };
  return (
    <div className={`hidden before:transition-all before:duration-700 ${menuOpen ? resulSumStyles + addShow : resulSumStyles + addHidden}`} style={transitionStyle}>
      {/**Menu Hamburguer*/}
      <div
        onClick={handleMenuToggle}
        className="w-8 h-[1.6rem] max-sm:absolute max-sm:top-12 max-sm:right-2 max-sm:z-10 max-sm:flex cursor-pointer"
      >
        <div className="hidden max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:w-6 max-sm:h-[1.4rem]">
          <div className={`${menuOpen ? 'h-[1px] w-full bg-zinc-200 rotate-45 translate-y-[.65rem]' : 'h-[2px] w-full bg-zinc-900'} `} style={transitionStyle}></div>
          <div className={`${menuOpen ? 'h-[1px] w-full bg-zinc-200 opacity-0' : 'h-[2px] w-full bg-zinc-900'} `} style={transitionStyle}></div>
          <div className={`${menuOpen ? 'h-[1px] w-full bg-zinc-200 -rotate-45 translate-y-[-.65rem]' : 'h-[2px] w-full bg-zinc-900'} `} style={transitionStyle}></div>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className="header__menu-checkbox hidden" />
      <ul className={`relative transition-all ease-in-out duration-700 ${menuOpen ? 'block z-20 right-0' : 'right-[-100%]'}`}>
        <li className="flex gap-5 items-center text-zinc-300 h-14 shadow-2xl px-2 border-b-[1px] border-[#eeeeee17]">
          <FontAwesomeIcon icon={faHome} />
          <a href="#" className="header__menu-link-mobile">Home</a>
        </li>
        <li className="flex gap-5 items-center text-zinc-300 h-14 shadow-2xl px-2 border-b-[1px] border-[#eeeeee17]">
          <FontAwesomeIcon icon={faInfoCircle} />
          <a href="#" className="header__menu-link-mobile">Sobre Nós</a>
        </li>
        <li className="flex gap-5 items-center text-zinc-300 h-14 shadow-2xl px-2 border-b-[1px] border-[#eeeeee17]">
          <FontAwesomeIcon icon={faTools} />
          <a href="#" className="header__menu-link-mobile">Nossos Serviços</a>
        </li>
        <li className="flex gap-5 items-center text-zinc-300 h-14 shadow-2xl px-2 border-b-[1px] border-[#eeeeee17]">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="#" className="header__menu-link-mobile">Contato</a>
        </li>
        <li className="flex gap-7 pt-7">
          <FaFacebook className="text-zinc-300 text-2xl"/>
          <FaInstagram className="text-zinc-300 text-2xl"/>
          <FaWhatsapp className="text-zinc-300 text-2xl"/>
        </li>
      </ul>
    </div>
  );
}