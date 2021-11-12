import React from 'react';
import LogoStart from '../../components/logo-start/LogoStart';
import LoadingProgress from '../../components/loadingProgress/LoadingProgress';
import Button from '../../components/button/Button';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const PlayPage = () => {

  const [progress, setProgress] = useState(false);
  const history = useHistory()
  
  if (progress){
    setTimeout(() => {
      history.push('/home')
    }, 5000)
  }



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <LogoStart></LogoStart>
        <div className="welcome text-light font-bold pb-5">
          <h2 className="text-6xl">Seja bem vindo!</h2>
          <p className="text-2xl"> Vamos começar e conhecer mais o meu trabalho ?</p>
        </div>
        {(progress) ? (
            <div className="text-center">
              <p className="text-light font-bold">Carregando a primeira fase ...</p>
              <LoadingProgress></LoadingProgress>
            </div>
          ) : (
            <div className="btn-container">
              <button onClick = {(e) => setProgress(true)} className="button-primary text-light font-bold"> Play! </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PlayPage;