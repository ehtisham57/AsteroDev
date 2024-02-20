import React from 'react'
import './index.css'
import tech from "./technology.png"
const HomeTechnologysec = () => {
  return (
    <div className='HomeTechnologysec py-5'>
      <div className='row py-5 px=lg-5 HomeTechnologyseccont d-flex container'>
        <div className='col-lg-6'>
          <div className='HomeTechnologyHeading'>
            <h1>
            Technologies <br / > that we work <br / > on!
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br / > Etiam aliquam hendrerit lacus eget varius. Integer  <br / > efficitur augue a laoreet tempor. 
            </p>
          </div>
        </div>
        <div className='col-lg-6 align-items-right'>
          <img src={tech} width='100%'/>
        </div>
      </div>
    </div>
  )
}

export default HomeTechnologysec