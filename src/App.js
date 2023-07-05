import React from "react";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
