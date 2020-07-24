import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import NameNav from "./components/NameNav";
import Portfolio from "./components/Portfolio";
// import Project from "./components/Project";
import Footer from "./components/Footer";
// import Wrapper from "./component/Wrapper"
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger, faEnvelopeOpenText, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faHamburger, faEnvelopeOpenText, faFilePdf);

class App extends Component {

  state = {

  };

  componentDidMount() {

  };

render() {
  return (
    <div className="App">
      <Header/>
      <NameNav/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}
}

export default App;
