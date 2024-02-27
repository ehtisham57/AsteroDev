import React from 'react'
import Card from 'react-bootstrap/Card';

export const BetterSolutionCard = ({src , cardTitleHover, CardTitle, CardPara , CardparaHover, href}) => {
  return (
    <>
    <div className='col-lg-6'>
                        <Card className='maincardcot my-2 ' >
                            <Card.Img className='cardimage' variant="top" src={src} alt='image'/>
                            <Card.Body>
                                <Card.Title className='maincardcotTitle'>{CardTitle}</Card.Title>
                                <Card.Text className='maincardcotpara'>{CardPara}</Card.Text>
                            </Card.Body>
                            <div className='onHoverCard'>
                                <h3>{cardTitleHover}</h3>
                                <p>{CardparaHover}</p>

                                 <a href={href}>Learn more</a>
                            </div>
                        </Card>
                    </div>
    </>
  )
}
