import React from 'react'
import "./index.css"
import lock from "./assets/lock.png"
import mobile from "./assets/mobileview.png"
import personal from "./assets/personal.png"

export const WhyAstralDevSec = () => {
    return (
        <div className='WhyAstralDevSec container-fluid'>
            <div className='container'>
                <div className='WhyAstralDevSecDivider row'>
                    <div className='col-lg-6'>

                        <div className='row WhyAstralDevSecDividleft'>
                            <div className='col-lg-6 col-md-12'>
                            <div className='PersonalizedBusinessPackage '>
                                    <h1>
                                        Personalized Business Package
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius. Integer efficitur augue a laoreet tempor.
                                    </p>
                                    <div className='PersonalizedBusinessPackageImage'>
                                    <img src={personal} />
                                    </div>
                                </div>
                               

                            </div>
                            <div className='col-lg-6 col-md-12'>
                            <div className='CustomaziedApproach'>
                                    <h1>
                                        Customazied Approach
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                    <div className='CustomaziedApproachImage'>
                                    <img src={mobile} />
                                    </div>
                                </div>
                                <div className='ResultsDrivenSolutions'>
                                    <h1>
                                        Results Driven Solutions
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius. Integer efficitur augue a laoreet tempor.
                                    </p>
                                    <div className='ResultsDrivenSolutionsImage'>
                                    <img src={lock} />
                                    </div>
                                </div>
                               
                            </div>
                        </div>







                    </div>



                    <div className='col-lg-6'>
                        <div className='WhyAstralDevSecMainHeading'>
                            <h1>
                                Why Astral  <br /> Developers
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Etiam aliquam hendrerit lacus eget varius. <br />
                                Integer efficitur augue a laoreet tempor.
                            </p>
                            
                            <button className='WhyAstralDevSecparaDownButton'>Get Started</button>
                        </div>


                        

                    </div>
                </div>
            </div>
        </div>
    )
}
