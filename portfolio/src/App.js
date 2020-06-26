import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div id="bg-img">
        <Router>

          <Header />
          
           <Switch>

            <Route path="/home" component={Home} />

            <Route exact path="/" component={Home} />



           <Route path = "/contact">
            <Contact />
            <Footer />
            </Route>

           

            

          </Switch>

        </Router>
      </div>
  );
}

export default App;
