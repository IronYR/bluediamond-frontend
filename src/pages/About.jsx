import "../App.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection"
function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <FadeInSection>
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          </section>
        </FadeInSection>

        <div className="space-y-12">
          <FadeInSection>
            <section className="bg-blue-500 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl lg:text-6xl font-semibold mb-4">Our Vision</h2>
              <p className="text-white leading-relaxed ">
                To revolutionize industries through tailored AI solutions that speak the unique language of each field, fostering innovation, efficiency, and trust in every interaction.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="bg-blue-500 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl lg:text-6xl font-semibold mb-4">Our Mission</h2>
              <p className="text-white leading-relaxed lg:text-2xl">
                We are committed to delivering specialized AI technologies that bridge the gap between complex industry needs and advanced AI capabilities. By leveraging our expertise from TU Wien, HTL Kramsach, and National University of Science and Technology, we develop solutions that enhance operations in chemical engineering, electronics, and mechanical engineering.
              </p>
              <p className="text-white leading-relaxed lg:text-2xl mt-4">
                Our focus on explainable AI ensures transparency and trust, while our HR AI optimizes workflows to empower teams. Together, we aim to transform challenges into opportunities, driving real-world impact for our clients.
              </p>
            </section>
          </FadeInSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
