import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'
import BlogLanding from '../components/BlogLanding'
import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
function Index() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Industries/>
      <BlogLanding/>
      <Testimonials/>
      <Footer/>
      {/* <BlogLanding/>
      <Footer/> */}
    </div>
  )
}

export default Index
