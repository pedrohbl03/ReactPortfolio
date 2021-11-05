import React from 'react';
import LogoStart from '../../components/logo-start/LogoStart';
import LoadingProgress from '../../components/loadingProgress/LoadingProgress';
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
        
        {(progress) ? (
            <div className="text-center">
              <p className="text-light font-bold">Carregando primeira fase ...</p>
              <LoadingProgress></LoadingProgress>
            </div>
          ) : (
            <div className="btn-container">
              <button onClick = {(e) => setProgress(true)} className="btn w-24 mx-auto hover:bg-primary p-2 font-bold text-light rounded border-2 border-primary transition duration-500 ease-in-out"> Play! </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PlayPage;