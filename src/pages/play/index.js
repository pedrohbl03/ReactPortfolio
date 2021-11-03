import React from 'react';
import LogoStart from '../../components/logo-start/LogoStart';
import LoadingProgress from '../../components/loadingProgress/LoadingProgress';
import Button from '../../components/button/Button';

const PlayPage = () => {

  const isLoading = false

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <LogoStart></LogoStart>
        
        {(isLoading) ? (
            <LoadingProgress></LoadingProgress>
          ) : (
            null
          )
        }

        <Button></Button>
      </div>
    </div>
  )
}

export default PlayPage;