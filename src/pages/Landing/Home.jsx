import React from 'react'
import NewsletterSection from './Newsletter'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import FeatureSection from '../../components/FeatureSection'
import About from '../../components/About'
import AbstractUILayout from '../../components/AbstractUILayout'

const Home = () => {
  return (
    <div className=''>
      
      <HeroSection />
      <FeatureSection />
      <AbstractUILayout />
      <About />
      
    </div>
  )
}

export default Home