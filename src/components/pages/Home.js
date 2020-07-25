import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="Home">
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;
