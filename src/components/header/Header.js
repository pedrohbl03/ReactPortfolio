import React from 'react';
import Button from '../button/Button';

const Header = () => {

  return (
    <section className="h-screen flex items-center text-light animate__animated animate__zoomIn">
      <div className="presentation">
        <h1 className="md:text-6xl text-2xl font-bold">
          Olá! <br /> Eu sou o <span className="animation-title inline-block text-primary cursor-pointer">PEDRO</span>,
         <br /> Desenvolvedor frontend júnior</h1>
        <p className="text-gray-300 text-2xl py-5">Desenvolvedor web/frontend</p>
        <Button content="Entre em contato" redirect="/contact"></Button>
      </div>
    </section>
  )
}

export default Header;