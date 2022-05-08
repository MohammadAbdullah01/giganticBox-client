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
                        <Carousel.Caption className='service-summary'>
                            <h2 className="common-clr">We provide best refrigerators with guaranty.</h2>
                            <p>We provide fridges with low price. Our fridges are good in quality and long lasting. We have several companies best fridges.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={delivery}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='service-summary'>
                            <h2 className="common-clr">Free Delivery</h2>
                            <p>Free delivery available if u become our premium member or fulfill our requirements.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={communication}
                            alt="third slide"
                        />

                        <Carousel.Caption className='service-summary'>
                            <h2 className="common-clr">Good Communication</h2>
                            <p>We care of our clients. We do extra care of or clients so the client can make a good communication with us.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-container'>
                        <img
                            className="d-block w-100 carousel-img"
                            src={contact}
                            alt="fourth slide"
                        />

                        <Carousel.Caption className='service-summary'>
                            <h2 className="common-clr">24/7 contact available</h2>
                            <p>We are always available in online for our customers message/call. Just knock us whenever your need.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Services;