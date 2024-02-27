import React from 'react'
import "./index.css"
import ContactFormCom from "../../allComponents/ContactForm"
export const ContactForm = () => {
  return (
    <div className='container-fluid ContactForm'>
        <div className='container'>
            <div className='row ContactFormRow'>
                <div className='col-lg-6 ContactFormLeft'>
                    <h1 data-aos="fade-right" data-aos-duration="1500">
                    Contact Us <br / > for better <br / > reach
                    </h1>
                    <p data-aos="fade-up-right" data-aos-duration="1500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br / >
                    Etiam aliquam hendrerit lacus eget varius. <br / >
                    Integer efficitur augue a laoreet tempor. 
                    </p>
                </div>
                <div className='col-lg-6 ContactFormRight'>
                    <h1 data-aos="fade-down" data-aos-duration="1500">
                        Fill out this form
                    </h1>
                    <p data-aos="fade-down" data-aos-duration="1500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam  hendrerit lacus eget varius.
                        Integer efficitur augue a laoreet tempor.
                    </p>
                   <ContactFormCom />
                </div>
            </div>
        </div>
    </div>
  )
}
