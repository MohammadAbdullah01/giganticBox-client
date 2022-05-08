import React from 'react';
import './Services.css'
import { Carousel } from 'react-bootstrap';
import stock from '../../images/services/stock.jpg'
import delivery from '../../images/services/delivery.jpg'
import communication from '../../images/services/communication.jpg'
import contact from '../../images/services/contact.jpg'

const Services = () => {
    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={stock}
                            alt="First slide"
                        />
                        <Carousel.Caption className='service-summary' >
                            <h2 className="common-clr">We stock best refrigerators with authentic suppliers.</h2>
                            <p className="text-black">We always verify the fridge and the owner then we store the fridge in our warehouse. So we have qualityful fridges.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={delivery}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='service-summary' >
                            <h2 className="common-clr">Free transport</h2>
                            <p className="text-black">For transporting fridges if suppliers fullfil our requirement we offer free transports.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={communication}
                            alt="third slide"
                        />

                        <Carousel.Caption className='service-summary' >
                            <h2 className="common-clr">Good Communication</h2>
                            <p className="text-black">We maintain a good communication with stuffs and have a nice relation with stuff and suppliers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={contact}
                            alt="fourth slide"
                        />

                        <Carousel.Caption className='service-summary' >
                            <h2 className="common-clr">24/7 contact available</h2>
                            <p className="text-black">We are always available in online for any need.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Services;