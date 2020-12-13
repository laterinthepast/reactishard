import React from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Products from "./components/pages/Products"
import Contact from "./components/pages/Contact"



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact} />

      </Switch>
    </Router>
        
    </>
  );
}

export default App;
