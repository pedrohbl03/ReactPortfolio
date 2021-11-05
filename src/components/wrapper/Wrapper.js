import React from 'react';
import { Route } from "react-router-dom";
import PlayPage from '../../pages/play/index';
import Home from '../../pages/home/index';

const Wrapper = () => {

  return (
    <div className="md:pl-52">
      <Route path="/" exact component={PlayPage}/>
      <Route path="/home" exact component={Home}/>
    </div>
  )
}

export default Wrapper;