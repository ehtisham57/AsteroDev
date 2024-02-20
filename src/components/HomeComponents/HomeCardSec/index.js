import React from 'react'
import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import v1 from "./assets/v1.png";
import v2 from "./assets/v2.png"
import v4 from "./assets/v4.png"


const HomeCardSec = () => {
    return (

        <div className='d-flex CardSecmain container-fluid  row mx-0'>
            <div className='CardSecmainFirstdiv col-lg-4'>
                <h3>
                    Building <br /> better <br /> solutions!
                </h3>
                <Button className="CardSecmainbtn mx-2" variant="dark">get Started <i class="bi bi-arrow-right-circle"></i></Button>
            </div>
            <div className='col-lg-8'>
                <div className='row my-3'>
                    <div className='col-lg-6'>
                    <Card className='maincardcot my-2 mx-sm-3' >
                            <Card.Img className='cardimage ' variant="top" src={v1} />
                            <Card.Body>
                                <Card.Title className='maincardcotTitle'>Design</Card.Title>
                                <Card.Text className='maincardcotpara'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                    <Card className='maincardcot my-2 mx-sm-3' >
                            <Card.Img className='cardimage' variant="top" src={v2} />
                            <Card.Body>
                                <Card.Title className='maincardcotTitle'>Development</Card.Title>
                                <Card.Text className='maincardcotpara'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className='row my-3'>
                    <div className='col-lg-6'>
                    <Card className='maincardcot my-2 mx-sm-3' >
                            <Card.Img className='cardimage' variant="top" src={v1} />
                            <Card.Body>
                                <Card.Title className='maincardcotTitle'>Product Management</Card.Title>
                                <Card.Text className='maincardcotpara'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                    <Card className='maincardcot my-2 mx-sm-3' >
                            <Card.Img className='cardimage' variant="top" src={v4} />
                            <Card.Body>
                                <Card.Title className='maincardcotTitle'>Testing & QA</Card.Title>
                                <Card.Text className='maincardcotpara'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam hendrerit lacus eget varius.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeCardSec