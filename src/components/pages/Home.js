import React from "react";
import About from "./About";
import Portfolio from "./Portfolio/";
import Contact from "./Contact/";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="Home">
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
