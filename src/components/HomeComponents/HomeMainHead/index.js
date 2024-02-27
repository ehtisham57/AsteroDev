import React from 'react'
import Button from 'react-bootstrap/Button';
import "./index.css"

const HomeMainHead = () => {
    return (
        <>
            <div className='Homemaindiv'>
                <div className='container Homeimagediv'>
                   
                        <h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            {/* <div className='divStyle'> </div> */}
                            WE <br / >
                            IMPLEMENT<br / >
                            <h3>DEVELOPMENT SERVICES</h3>
                             
                        </h5>
                    
                       <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='paradiv'>
                       <p className='Homeparatext'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br / >
                             Etiam aliquam hendrerit lacus eget varius. Integer efficitur <br / > augue a laoreet tempor. 
                            
                        </p>
                         <Button className="Homemainbutton mx-2" variant="dark">get Started <i className="bi bi-arrow-right-circle"></i></Button> 
                       </div>
                       
                </div>
            </div>
        </>
    )
}

export default HomeMainHead