import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/";
import About from "./components/pages/About/";
// import NameNav from "./components/NameNav/";
import Portfolio from "./components/pages/Portfolio/";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact/";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger, faEnvelopeOpenText, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faLinkedin, faHamburger, faEnvelopeOpenText, faFilePdf);

class App extends Component {

  state = {

  };

  componentDidMount() {

  };

render() {
  return (
    <Router>
    {/* <div className="App"> */}
      <Header/>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/portfolio" component={Portfolio}/>
      <Route exact path ="/contact" component={Contact}/>
    {/* </div> */}
    </Router>
  );
}
}

export default App;
