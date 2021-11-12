import React from 'react';
import Logo from '../../assets/logo.png';


const LogoStart = () => {

  return (
    <div className="">
      <div className="Start-logo flex mx-auto">
        <div className="logo-image max-w-sm mx-auto">
          <img className="max-w-full"src={Logo}alt="logo here"></img>
        </div>
      </div>
    </div>
  )
}

export default LogoStart;