import React, { useEffect, useState } from 'react';
import './Reviews.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import { Container, Spinner } from 'react-bootstrap';

const Reviews = () => {
    useEffect(() => {
        AOS.init();
    })
    const [opinions, setOpinions] = useState([])
    useEffect(() => {
        fetch("https://evening-basin-87782.herokuapp.com/opinions")
            .then(res => res.json())
            .then(data => {
                setOpinions(data)
            })
    }, [])
    return (
        <>
            {opinions.length ?
                <Container>
                    <h1 className='text-center common-clr mt-5 mb-5' data-aos="zoom-in" data-aos-duration="800">SUPPLIERS BABBLE</h1>
                    <div>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={40}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {opinions.map(opinion => <SwiperSlide key={opinion._id}>
                                <div className='review-container'>
                                    <img className='review-img' src={opinion.img} alt="" />
                                    <h4 >{opinion.name}</h4>
                                    <p className='common-clr'>{opinion.opinion}</p>
                                </div>
                            </SwiperSlide>)}
                            <br />
                        </Swiper>
                    </div>
                </Container>
                :
                <div className='w-100 h-100 mx-auto text-center my-5' ><Spinner animation="border" variant="success" /></div>
            }
        </>
    );
};

export default Reviews;