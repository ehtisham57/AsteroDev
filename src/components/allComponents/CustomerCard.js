import React from 'react'

const CustomerCard = ({src,username,detail,heading,paragraph}) => {
  return (
    <>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" 
    className="SliderSatisfiedCard mx-auto col-lg-3 col-md-6 col-sm-12" style={{ width: "18rem" }}>
                        <div className="SliderSatisfiedCardBody">
                            <h5>{heading}</h5>
                            <p>{paragraph}</p>
                        </div>

                        <div className='SliderSatisfiedCarProfile d-flex row'>
                            <img className='col-lg-6' src={src} alt='image'/>
                            <div className='my-3 col-lg-6 SliderSatisfiedCarProfileuser'>
                                <h6>{username}</h6>
                                <p>{detail}</p>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default CustomerCard