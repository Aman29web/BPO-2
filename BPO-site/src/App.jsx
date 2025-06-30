import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Stats from './components/Stats'
import Testimonial from './components/HeroSection'
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
import BpoHero2 from './components/BpoHero2'
import HeroSection from './components/HeroSection'
// import Testimonials from './components/testimonials'
import Temp from './components/Temp'

const App = () => {
  return (
    <div>
      {/* <Hero3D/> */}
      {/* <BPOHero/> */}
      <Navbar/>
      
      {/* <Testimonial/> */}
      <HeroSection></HeroSection>

      {/* <BpoHero2></BpoHero2> */}
      {/* <Hero1/> */}
      <Hero/>
      <WhyChooseUs/>
      <Industries/>
      <Stats/>
      <About/>
      <CTASection/>
      <Services/>
      <Contact/>
      {/* <Testimonials></Testimonials> */}
      <Temp></Temp>
      <CareersForm/>

      <Footer/>
      
    </div>
  )
}

export default App
