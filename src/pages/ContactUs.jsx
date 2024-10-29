import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import FadeInSection from "../components/FadeInSection";
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div>
        <section
          className="container flex flex-col items-center justify-center"
          style={{ width: "100vw" }}
        >
          <FadeInSection>
            <ContactForm />
          </FadeInSection>
        </section>
      </div>

      <Footer />
    </div>
  );
}
