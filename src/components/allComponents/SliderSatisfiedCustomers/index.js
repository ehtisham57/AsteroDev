import React from 'react'
import "./index.css"
import CustomerCard from '../CustomerCard'
import sara from "./assets/sarah.jpg"
import Alex from "./assets/Alex Rodriguez.jpg"
import Emily from "./assets/Emily Johnson.jpg"
import jessica from "./assets/Jessica Chen.jpeg"
import megan from "./assets/Megan Carter.jpg"
import michael from "./assets/Michael Bennett.png"
import robert from "./assets/Robert Parker.jpg"
import devid from "./assets/David Miller.jpg"

export const SliderSatisfiedCustomers = () => {
    return (
        <div className='SliderSatisfiedCustomers container-fluid'>
            <div className='mx-auto d-flex justify-content-center container'>
                <div className='SliderSatisfiedCustomersHeading'>
                    <h1>
                        Words from Satisfied < br /> Customers
                    </h1>
                </div>
            </div>
            <div>
                <div className='SliderCustomerCard row container mx-auto '>
                    <CustomerCard
                        heading="“A Remarkable Web Development Journey”"
                        src={sara}
                        paragraph="“Working with the web development team was a game-changer for my business. They transformed my outdated website into a sleek, modern platform that truly reflects my brand. Kudos to the talented team for their dedication and expertise!”"
                        username="Sarah Thompson"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“Skyrocketing Sales with Expert Web Development”"
                        src={Alex}
                        paragraph="“I can't thank the web development experts enough for their outstanding work on my e-commerce site. The user-friendly design and seamless functionality have significantly boosted my online sales. Highly recommend their services!”"
                        username="Alex Rodriguez"
                        detail="customer"
                    />
                    <CustomerCard
                        heading="“A Website that Speaks My Business Language”"
                        src={Emily}
                        paragraph="“The team's attention to detail and commitment to delivering a responsive website exceeded my expectations. They took the time to understand my vision and implemented it flawlessly. My website is now a true representation of my business.”"
                        username=" Emily Johnson"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“Driving Success with SEO-Optimized Web Development”"
                        src={robert}
                        paragraph="“From concept to execution, the web development team demonstrated top-notch professionalism. They not only created a visually stunning website but also ensured it's optimized for search engines, driving more traffic to my site. Great job!”"
                        username="Robert Parker"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“Capturing the Essence of My Brand Online”"
                        src={jessica}
                        paragraph="“I'm impressed with the level of creativity and technical expertise the team brought to my project. The collaborative process was seamless, and the end result is a website that perfectly captures the essence of my brand. Thank you!”"
                        username="Jessica Chen"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“A Seamless Web Development Experience”"
                        src={michael}
                        paragraph="“The web development team went above and beyond to meet my specific requirements. They were responsive to feedback and implemented changes promptly. I now have a website that stands out in a crowded market. Fantastic job!”"
                        username="Michael Bennett"
                        detail="customer"
                    />
                     <CustomerCard
                        heading="“Elevating Engagement with Expert Web Development”"
                        src={megan}
                        paragraph="“The team's commitment to delivering a mobile-friendly and visually appealing website was evident throughout the project. They not only met but exceeded my expectations. My business has seen a significant uptick in online engagement since the launch. Highly recommended!”"
                        username="Megan Carter"
                        detail="customer"
                    />
                     <CustomerCard
                        heading="“Exceptional Web Development Expertise”"
                        src={devid}
                        paragraph="“I'm thrilled with the website developed by this talented team. The site's performance is outstanding, and the user experience is seamless. Their expertise in web development truly sets them apart. I couldn't be happier with the results.”"
                        username="David Miller"
                        detail="customer"
                    />
                </div>
            </div>
        </div>
    )
}
