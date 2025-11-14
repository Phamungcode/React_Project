import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Geno3D from "./sections/Geno3D";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      {/* projects */}
      {/* testimonials */}
      {/* contact */}
      {/* footer */}
      <Geno3D />
    </div>
  );
};

export default App;
