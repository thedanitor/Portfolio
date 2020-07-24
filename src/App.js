import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import NameNav from "./components/NameNav";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger, faEnvelopeOpenText, faFilePdf } from '@fortawesome/free-solid-svg-icons';
// import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faHamburger, faEnvelopeOpenText, faFilePdf);

function App() {
  return (
    <div className="App">
      <Header/>
      <NameNav/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
