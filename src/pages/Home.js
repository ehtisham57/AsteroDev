import React from 'react'
import HomeMainHead from '../components/HomeComponents/HomeMainHead'
import {HomeItPartSec} from '../components/HomeComponents/HomeITpartnersec'
import HomeTechnologysec from '../components/HomeComponents/HomeTechnologysec'
import HomeCardSec from '../components/HomeComponents/HomeCardSec'
import {HomePromisesSec} from '../components/HomeComponents/HomePromisesSec'
import { SliderSatisfiedCustomers } from '../components/allComponents/SliderSatisfiedCustomers'

export default function Home() {
  return (
    <>
    <HomeMainHead />
    <HomeItPartSec/>
    <HomeTechnologysec />
    <HomeCardSec />
    <HomePromisesSec />
    <SliderSatisfiedCustomers />  
    </>
  )
}
