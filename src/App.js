import React from 'react';
import Wrapper from './components/wrapper/Wrapper';
import PlayPage from './pages/play/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact component={PlayPage}/>
            <Wrapper></Wrapper>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
