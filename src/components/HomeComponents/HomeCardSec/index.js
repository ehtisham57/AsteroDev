import React from 'react'
import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import v1 from "./assets/v1.png";
import v2 from "./assets/v2.png"
import v4 from "./assets/v4.png"
import { BetterSolutionCard } from '../../allComponents/BetterSolutionCard';


const HomeCardSec = () => {
    return (


        <div className='d-flex CardSecmain container-fluid'>
           <div className='row d-flex mx-auto'>
           <div className='CardSecmainFirstdiv col-lg-4'>
                <h3>
                    Building <br /> better <br /> solutions!
                </h3>
                <Button className="CardSecmainbtn" variant="dark">get Started <i class="bi bi-arrow-right-circle"></i></Button>
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