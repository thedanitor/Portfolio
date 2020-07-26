import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/";
import About from "./pages/About/";
import Portfolio from "./pages/Portfolio/";
import Home from "./pages/Home";
import Contact from "./pages/Contact/";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger, faEnvelopeOpenText, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faLinkedin, faHamburger, faEnvelopeOpenText, faFilePdf);

class App extends Component {

render() {
  return (
    <Router>
      <Header/>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/portfolio" component={Portfolio}/>
      <Route exact path ="/contact" component={Contact}/>
    </Router>
  );
}
}

export default App;
