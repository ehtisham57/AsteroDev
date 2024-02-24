import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import it from "./HomeItPartImage.png"
import './index.css'

export const HomeItPartSec = () => {
  return (
    <div className='HomeItpartnerSec container-fluid'>
      <div className='HomeItpartnerSecRow container row'>
        <div className='HomeItpartnerSecimg col-lg-6 col-md-12'>
          <img src={it} />
        </div>
        <div className=' col-lg-6 col-md-12'>
          <div className='HomeItpartnerSecMainHeading'>
            <h1>
              Let Us be your <br /> iT partner!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Etiam aliquam hendrerit lacus eget varius. <br />
              Integer efficitur augue a laoreet tempor.
            </p>
          </div>

          <div className='HomeItpartnerSecparaDown'>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br / >  Etiam aliquam hendrerit lacus eget varius. <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br / > Etiam aliquam hendrerit lacus eget varius.  <br / > Integer efficitur augue a laoreet tempor.
            </p>
           
          </div> 
          <button className='HomeItpartnerSecparaDownButton'>Get Started</button>

          <div className='HomeItpartnerSecListDown'>
            <p>
              <CheckIcon style={{
                  background: "linear-gradient(45deg, #00AB8A 30%, #02F8C9 90%)",
              }} / > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
               <CheckIcon style={{
                  background: "linear-gradient(45deg, #00AB8A 30%, #02F8C9 90%)",
              }} / > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
               <CheckIcon style={{
                  background: "linear-gradient(45deg, #00AB8A 30%, #02F8C9 90%)",
              }} / > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

      </div>
    </div>
  )
}