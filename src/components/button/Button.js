import React from 'react';


const Button = (props) => {

  return (
    <div className="btn-container flex min-w-min">
      <a className="button-primary text-light font-bold" href={props.redirect}>{props.content}</a>
    </div>
  )
}

export default Button;