// import React from 'react';
import React from "react";

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from "./Component/Header/Header.js"
import About from './Component/ABout/About.js'
import Service from './Component/Serviced/Service';
import Home from "./Component/Home/Home";
import Faq from './Component/FAQ/Faq.js';
import Team from './Component/Team/Team';
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer";
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
         
    
        
      // <div>
      //   <Header/>
      //   <About/>
      //   <Service/>
      //   <Contact/>
      //      <Switch>
      //        <Route path="/" component={Header} />
      //        <Route path="/about" component={About} />
             
      //      </Switch>

      // </div>
      <Router>
      <div>
        <Header/>
        <About />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/contact">
            < Contact/>
          </Route>
          <Route path="/about">
            < About/>
          </Route>
        </Switch>
      </div>
    </Router>
       
         
  );
}

export default App;
