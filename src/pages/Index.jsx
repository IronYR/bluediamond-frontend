import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'
import BlogLanding from '../components/BlogLanding'
import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
function Index() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Industries/>
      <BlogLanding/>
      <ContactForm/>
      {/* <Testimonials/> */}
      <Footer/>
      {/* <BlogLanding/>
      <Footer/> */}
    </div>
  )
}

export default Index
