import React from 'react';
import { useState } from 'react';
import { VscThreeBars,  VscChromeClose} from "react-icons/vsc"
import { AiFillInstagram, AiFillLinkedin, } from "react-icons/ai"
import { MdPersonSearch } from "react-icons/md"
import Logo from '../../assets/logo.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar absolute md:left-0 transition ease-in duration-1000 z-50">
      <div className="nav flex w-full fixed justify-end p-5 text-light text-4xl md:hidden">
        <button onClick={(e) => setIsOpen(true)} className="nav-btn cursor-pointer bg-black-40 p-2 ">
          <VscThreeBars/>
        </button>
      </div>
      <div className={`nav-wrapper fixed h-screen w-screen md:w-52 flex flex-col justify-between text-center bg-navbar md:visible z-50 ${(isOpen) ? ('open animate__animated animate__fadeInLeft animate__faster') : ('close invisible')}`}>
        <div className="nav flex w-full fixed justify-end p-5 text-light text-4xl md:hidden">
        <button onClick={(e) => setIsOpen(false)} className="nav-btn cursor-pointer bg-black-40 p-2">
          <VscChromeClose/>
        </button>
        </div>
        <div className="nav-brand bg-logo py-5">
          <a href="/home">
            <img className="mx-auto" alt="logo-area" style={{ maxWidth: "150px" }} src={Logo}></img>
          </a>
        </div>
        <div className="nav-container">
          <ul className="nav cursor-pointer text-center">
            <li className="nav-items py-3 text-light hover:text-primary border-t border-b border-gray-50 transition ease-in duration-300">
              <a href="/about" className="nav-link">Sobre</a>
            </li>
            <li className="nav-items py-3 text-light hover:text-primary border-b border-gray-50 transition ease-in duration-300">
              <a href="/skills" className="nav-link">Habilidades</a>
            </li>
            <li className="nav-items py-3 text-light hover:text-primary border-b border-gray-50 transition ease-in duration-300">
              <a href="/portfolio" className="nav-link">Projetos</a>
            </li>
            <li className="nav-items py-3 text-light hover:text-primary border-b border-gray-50 transition ease-in duration-300">
              <a href="/resume" className="nav-link w-full">Curriculo</a>
            </li>
            <li className="nav-items py-3 text-light hover:text-primary border-b border-gray-50 transition ease-in duration-300">
              <a href="/contact" className="nav-link w-full">Contato</a>
            </li>

          </ul>
        </div>
        <div className="social-container flex justify-center text-light py-3">
            <a href="https://instagram.com.br/" className="p-2 hover:text-primary text-2xl cursor-pointer transition ease-in duration-200">
              <AiFillInstagram/>
            </a>
            <a href="https://instagram.com.br/" className="p-2 hover:text-primary text-2xl cursor-pointer transition ease-in duration-200">
            <AiFillLinkedin/>
            </a>
            <a href="https://instagram.com.br/" className="p-2 hover:text-primary text-2xl cursor-pointer transition ease-in duration-200">
            <MdPersonSearch/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;