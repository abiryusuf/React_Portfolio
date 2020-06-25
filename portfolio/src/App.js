import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';

function App() {
  return (
      <div id="bg-img">
        <Router>


          <Switch>

            <Route path="/home" component={Home} />

            <Route exact path="/" component={Home} />

           

            

          </Switch>

        </Router>
      </div>
  );
}

export default App;
