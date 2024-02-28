import React from 'react'
import "./index.css"
import Button from 'react-bootstrap/Button';
import v1 from "./assets/v1.png";
import v2 from "./assets/v2.png"
import v4 from "./assets/v4.png"
import { BetterSolutionCard } from '../../allComponents/BetterSolutionCard';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const HomeCardSec = () => {
    return (


        <div className='d-flex CardSecmain container-fluid'>
           <div className='row d-flex mx-auto'>
           <div className='CardSecmainFirstdiv col-lg-4'>
                <h3 data-aos="fade-down"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    Building <br /> better <br /> solutions!
                </h3>
                <Button data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="CardSecmainbtn" variant="dark">get Started <span className='ArrowbtnSpn'> <ArrowRightAltIcon className='arrowbtn' /></span></Button>
            </div>
            <div className='col-lg-8'>
                <div className='row my-3'>
                    <BetterSolutionCard 
                    src={v1} 
                    CardTitle="Design" 
                    cardTitleHover="Design" 
                    CardPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius." 
                    CardparaHover="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius."
                    href="#"
                    />
                      <BetterSolutionCard 
                    src={v2} 
                    CardTitle="Development" 
                    cardTitleHover="Development" 
                    CardPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius." 
                    CardparaHover="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius."
                    href="#"
                    />
                    

                </div>
                <div className='row my-3'>
                    
                <BetterSolutionCard 
                    src={v4} 
                    CardTitle="Product Management" 
                    cardTitleHover="Product Management" 
                    CardPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius." 
                    CardparaHover="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius."
                    href="#"
                    />
                      <BetterSolutionCard 
                    src={v4} 
                    CardTitle="Testing & QA" 
                    cardTitleHover="Testing & QA" 
                    CardPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius." 
                    CardparaHover="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius."
                    href="#"
                    />

                </div>
            </div>
           </div>
        </div>

    )
}

export default HomeCardSec