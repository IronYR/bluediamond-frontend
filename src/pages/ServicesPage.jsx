import "../App.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function ServicesPage() {
  return (
    <div>
      <Navbar />
      <section className="container flex flex-col items-center justify-center" style={{width:"100vw", height:"50vh"}}>
        <h1>Services Page</h1>
        <p>Work in progress</p>
      </section>
      <Footer />
    </div>
  );
}

export default ServicesPage;
