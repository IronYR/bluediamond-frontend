import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div>

      <section className="container flex flex-col items-center justify-center" style={{width:"100vw"}}>
        <ContactForm/>
      </section>
      </div>

      <Footer />
    </div>
  )
}
