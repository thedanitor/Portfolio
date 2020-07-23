import React from 'react';
import './App.css';
import PortfolioNav from "./components/PortfoioNav";
import About from "./components/About";
import NameNav from "./components/NameNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

library.add(faHamburger);

function App() {
  return (
    <div className="App">
      <PortfolioNav/>
      <NameNav/>
      <About/>
    </div>
  );
}

export default App;
