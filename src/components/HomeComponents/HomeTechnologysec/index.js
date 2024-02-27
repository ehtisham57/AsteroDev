import React from 'react'
import './index.css'
import tech from "./technology.png"
const HomeTechnologysec = () => {
  return (
    <div className='HomeTechnologysec py-5'>
      <div className='row data-aos="fade-down" py-5 px=lg-5 HomeTechnologyseccont d-flex container'>
        <div className='col-lg-6'>
          <div className='HomeTechnologyHeading'>
            <h1 data-aos="fade-up" data-aos-duration="1500">
            Technologies <br / > that we work <br / > on!
            </h1>
            <p data-aos="fade-up-up" data-aos-duration="1500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br / > Etiam aliquam hendrerit lacus eget varius. Integer  <br / > efficitur augue a laoreet tempor. 
            </p>
          </div>
        </div>
        <div className='col-lg-6 align-items-up'>
          <img data-aos="fade-up" data-aos-duration="1500"
           src={tech} width='100%'alt='image'/>
        </div>
      </div>
    </div>
  )
}

export default HomeTechnologysec