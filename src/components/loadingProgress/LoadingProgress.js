import React from 'react';
import { useState, useEffect } from 'react';


const LoadingProgress = () => {

  const [style, setStyle] = useState({});


  useEffect(() => {
    const newStyle = {
      width: `100%`
    }
    setStyle(newStyle)
  }, [])

  return (
    <div className="relative pt-1 max-w-sm mx-auto">
      <div className="overflow-hidden h-0.5 mb-4 text-xs flex mx-auto rounded bg-current max-w-sm">
        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary animate-progress" style={style}></div>
      </div>
    </div>
  )
}

export default LoadingProgress;