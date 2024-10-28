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
    <div className='w-full flex justify-center items-center flex-col'>
      <div className='w-full flex justify-center items-center flex-col'>
        <Navbar/>
        <Hero/>
      </div>
      
      <Services/>
      <BlogLanding/>
      <Footer/>
    </div>
  )
}

export default Index
