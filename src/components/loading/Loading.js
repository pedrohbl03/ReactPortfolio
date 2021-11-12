import React from 'react';
import LoadingProgress from '../loadingProgress/LoadingProgress';
import Logo from '../../assets/logo.png';


const Loading = (props) => {

  return (
    <div className="flex justify-center items-center h-screen animate__animated animate__backInLeft">
      <div className="loading-container">
        <div className="brand-logo">
          <img className="animate-jump mx-auto" src={Logo} style={{ maxWidth: "100px" }}/>
        </div>
        <p className="font-bold text-light text-center text-xs py-3">Carregando um checkpoint ...</p>
        <LoadingProgress/>
      </div>
    </div>
  )
}

export default Loading;