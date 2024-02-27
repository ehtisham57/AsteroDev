import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import contactreaserch from "./assets/constactresearch.png"
import dots from "./assets/dots.png"
import v1 from "./assets/v1.png"
import v2 from "./assets/v2.png"
import v3 from "./assets/v4.png"


import './index.css'


export const ContactLifecyclesec = () => {
  return (
    <div className='ContactItpartnerSec container-fluid'>
      <div className='ContactItpartnerSecRow container row'>

        <div className=' col-lg-6 col-md-12'>
          <div className='ContactItpartnerSecMainHeading'>
            <h1 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
              Software Development Lifecycle
            </h1>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='row ContactItpartnerSecMiniCardRow mx-0'>
              <div className='col-lg-3 col-md-12 ContactItpartnerSecMini'>
                <img src={v1} alt='image' />
                <p>Planning & Requirements Gathering</p>
              </div>
              <div className='col-lg-3 col-md-12 ContactItpartnerSecMini'>
                <img src={v2} alt='image' />
                <p>Development and Implementation</p>
              </div>
              <div className='col-lg-3 col-md-12 ContactItpartnerSecMini'>
                <img src={v3} alt='image' />
                <p>Deployment and System Maintenance</p>
              </div>
            </div>
          </div>



        </div>

        <div className='ContactItpartnerSecimg col-lg-6 col-md-12'>
          <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className='ContactpartPeople'>
            <img data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="dotsImage" src={dots} alt='image'/>
            <div className='card ContactpartPeopleCard'>
              <img className="peopleImagecontact" src={contactreaserch} alt='image' />
              <div className='ContactpartPeopleCardText'>
                <h1>Research Pre Production</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  Etiam aliquam hendrerit lacus eget varius. <br />
                  Integer efficitur augue a laoreet tempor. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
