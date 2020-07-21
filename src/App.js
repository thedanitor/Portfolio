import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
// import 'react-bulma-components/basic/react-bulma-components.min.css';
// import { Button } from 'react-bulma-components/full';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
