import React from 'react';


const Button = (props) => {

  const isLoading = () => {
    console.log('Você clicou!')
  }

  return (
    <div className="btn-container flex min-w-min">
      <button onClick={isLoading} className="btn w-24 mx-auto hover:bg-primary p-2 font-bold text-light rounded border-2 border-primary transition duration-500 ease-in-out ">Play!</button>
    </div>
  )
}

export default Button;