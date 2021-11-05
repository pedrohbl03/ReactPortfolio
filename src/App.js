import React from 'react';
import Navbar from './components/navbar/Navbar';
import Wrapper from './components/wrapper/Wrapper';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
          <Switch>
            <Wrapper/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
