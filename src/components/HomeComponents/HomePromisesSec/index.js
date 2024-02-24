import React from 'react'
import "./index.css"
import PromiseCard from '../../allComponents/card'
import HomePromiseImage from "./HomePromisesSec.png"
export const HomePromisesSec = () => {
    return (
        <div className='container-fluid HomePromisesSec'>
            <div className='container mx-auto d-flex justify-content-center'>
                <div className='HomePromisesSecHeading'>
                    <h1>
                        Our Promises To you!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nulla eros turpis, lacinia a maximus sit amet, rutrum convallis velit.
                    </p>
                </div>
            </div>
            <div className='container HomePromisesSecCardGrid row mx-auto d-flex justify-content-center'>
                <PromiseCard para='We provide high-quality online digital solutions' title='01' />
                <PromiseCard para='We ensure customer satisfaction at all levels' title='02' />
                <PromiseCard para='We treat every team member with respect' title='03' />
                <PromiseCard para='We explore methods for improvement' title='04' />
                <PromiseCard para='We offer extended support for all projects' title='05' />
                <PromiseCard para='We ensure bug-free project delivery every time' title='06' />
                <PromiseCard para='We provide a 100% money-back guarantee' title='07' />
                <PromiseCard para='We have got an eye for functional design ' title='08' />
            </div>

            <div className='container d-flex py-5 row mx-auto'>
                <div className='HomePromisesSecDownHeading col-lg-6 '>
                    <h1>
                    Start improving your business today!
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Etiam aliquam hendrerit lacus eget varius. <br />
                    Integer efficitur augue a laoreet tempor. 
                    </p>
                </div>
                <div className='HomePromisesSecDownImag col-lg-6 '>
                   <img src={HomePromiseImage} />
                </div>
            </div>
        </div>
    )
}
