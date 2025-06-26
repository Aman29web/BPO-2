import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Stats from './components/Stats'
import Testimonial from './components/testimonials'
import CTASection from './components/CTASection'
import About from './components/About'
import Hero1 from './components/Hero1'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Car } from 'lucide-react'
import CareersForm from './components/CareersForm'
import Hero3D from './components/Hero3D'
import BPOHero from './components/BPOHero'

const App = () => {
  return (
    <div>
      {/* <Hero3D/> */}
      {/* <BPOHero/> */}
      <Navbar/>
      <Hero1/>
      <Hero/>
      <WhyChooseUs/>
      <Industries/>
      <Stats/>
      <Testimonial/>
      <About/>
      <CTASection/>
      <Services/>
      <Contact/>
      <CareersForm/>

      <Footer/>
      
    </div>
  )
}

export default App
