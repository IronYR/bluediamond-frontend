import "../App.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Portfolio() {
  return (
    <div>
      <Navbar />
      <section className="container flex flex-col items-center justify-center" style={{width:"100vw", height:"50vh"}}>
        <h1>Portfolio</h1>
        <p>Work in progress</p>
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;