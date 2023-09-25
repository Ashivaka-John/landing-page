import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Special from './components/Special'
import Features from './components/Features'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Special />
      <Features />
      <Team />
      <Testimonials />
      <Contact />
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default App
