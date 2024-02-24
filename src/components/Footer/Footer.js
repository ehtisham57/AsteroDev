import React from 'react'
import "./index.css"
import logo from "./logo.png"
import { Link } from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import tul from "./tulp.png"
import star from "./satr.png"
const Footer = () => {
    return (
        <div className='container-fluid m-0 FooterMain'>
            <div className='container'>
                <div className='FooterHeading'>
                    <h1>Let’s <span>Talk</span> </h1>
                </div>

                <div className='FooterBody '>
                    <div className='row justify-content-evenly d-flex'>
                        <div className='col-lg-4 LogoText'>
                            <img src={logo} />
                            <p>We help you make the most of your investment with
                                end-to-end premium web solutions suited to your precise
                                digitalization requirements.
                            </p>
                            <div className='SocialLink'></div>
                        </div>
                        <div className='col-lg-4 QuickLinks'>
                            <h1>Quick Links</h1>
                            <div className='QuickLinksRow d-flex row'>
                                <div className='col-lg-6'>
                                    <Link className='FooterLinksClick'>Home</Link>
                                </div>
                                <div className='col-lg-6'>
                                    <Link className='FooterLinksClick'>Pricing</Link>
                                </div>
                                <div className='col-lg-6'>
                                    <Link className='FooterLinksClick'>Services</Link>
                                </div>
                                <div className='col-lg-6'>
                                    <Link className='FooterLinksClick'>About Us</Link>
                                </div>
                                <div className='col-lg-6'>
                                    <Link className='FooterLinksClick'>Portfolio</Link>
                                </div>
                                <div className='col-lg-6'>
                                    <Link className='FooterLinksClick'>Contact Us</Link>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4 Address'>
                            <h1>Address</h1>
                            <div className='AddressInfo d-flex'>
                                <LocalPhoneIcon className='FooterAddressIcon' /> <h6>(469) 780-8890</h6>
                            </div>
                            <div className='AddressInfo d-flex'>
                                <MailOutlineIcon className='FooterAddressIcon' /> <h6>(469) 780-8890</h6>
                            </div>
                            <div className='AddressInfo d-flex'>
                                <PlaceIcon className='FooterAddressIcon' /><h6>(469) 780-8890</h6>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='FooterFooter'>
                    <div className='d-flex row FooterFooterLinks'>
                        <div className='col-lg-4'>
                            <div className='d-flex Footertruspilot'>
                                <img src={star} className='mx-0' /> <img className='mx-0' src={tul} />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='d-flex FooterCopyrigth'>
                                <p>© 2023 ,Astral Developers All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='d-flex Footerterms'>
                                <p>Privacy and Security</p> <div></div> <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer