import React from 'react'
import AboutMainHead from '../components/AboutComponents/AboutMainHead'
import { AboutItPartSec } from '../components/AboutComponents/AboutIncritibleproductsec'
import { WhyAstralDevSec } from '../components/AboutComponents/WhyAstralDevSec'
import { SliderSatisfiedCustomers } from '../components/allComponents/SliderSatisfiedCustomers'


const About = () => {
  return (
    <>
      <AboutMainHead />
      <AboutItPartSec />
      <WhyAstralDevSec />
     <SliderSatisfiedCustomers />
    </>
  )
}

export default About