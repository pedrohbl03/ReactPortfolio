import React from 'react';
import {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Home from '../../pages/home/index';
import About from '../../pages/about/index';
import Contact from '../../pages/contact/index';
import Portfolio from '../../pages/portfolio/index';
import Resume from '../../pages/resume/index';
import Skills from '../../pages/contact/index';
import Loading from '../loading/Loading';

const Wrapper = () => {

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className={(isLoading ? 'md:pl-52 h-screen overflow-hidden' : 'md:pl-52 h-screen')}>
      <Navbar/>
      {(isLoading) ? <Loading/> :
      <div>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/skills" exact component={Skills}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/contact" exact component={Contact}/>
      </div>
      }
    </div>
  )
}

export default Wrapper;