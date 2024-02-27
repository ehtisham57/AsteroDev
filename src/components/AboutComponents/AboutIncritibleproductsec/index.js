import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import people from "./assets/aboutpeople.png"
import dots from "./assets/dots.png"

import './index.css'

export const AboutItPartSec = () => {
  return (
    <div className='AboutItpartnerSec container-fluid'>
      <div className='AboutItpartnerSecRow container row'>
       
        <div className=' col-lg-6 col-md-12'>
          <div className='AboutItpartnerSecMainHeading'>
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            We create<br /> incridible <br /> products
            </h1>
            <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Etiam aliquam hendrerit lacus eget varius. <br />
              Integer efficitur augue a laoreet tempor.
            </p>
          </div>


          <button data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='AboutItpartnerSecparaDownButton'>Get Started</button>

        </div>

        <div className='AboutItpartnerSecimg col-lg-6 col-md-12'>
          <div className='AboutpartPeople'>
          <img data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" className="dotsImage" src={dots} alt='image'/>
            <img data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" className="peopleImage" src= {people} alt='image'/>
           
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='AboutpartnerDevelopment'>
              <div className='AboutpartnerDevelopmentText'>
              <h1>Development</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius.
              </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
