import React, { useEffect, useState } from 'react';
import './Reviews.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import { Container } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    // const users = [
    //     { name: "prantik", img: "https://randomuser.me/api/portraits/men/42.jpg", review: "best refrigerator warehouse of my local area. I always look for authentic products. If anyone looks for same then giganticBoc will be good choice for her." },
    //     { name: "Jack", img: "https://randomuser.me/api/portraits/men/44.jpg", review: "GiganticBox is the most popular warehouse of my area. I'm brought a fridge from them about 3 years ago. Product is good still now. So good wishes for them." },
    //     { name: "Jannie", img: "https://randomuser.me/api/portraits/women/53.jpg", review: "I was looking for a good fridge last 1 week. Finally i brought it from gigantic house. Their behavior is so good. I think their product will be also good to use." },
    //     { name: "Sumon", img: "https://randomuser.me/api/portraits/men/50.jpg", review: "good refrigerator warehouse of my my area. I  was looking for authentic products  then my brother called me to buy from gigantic. Their behavior and product is good." },
    //     { name: "Minnie", img: "https://randomuser.me/api/portraits/women/25.jpg", review: "This is a good choice for those who looks for fridge. I always look for authentic products. I anyone looks for same then giganticBoc will be good choice for her." },
    // ]
    // console.log(JSON.stringify(users))
    console.log(reviews)
    return (
        <Container>
            <h1 className='text-center common-clr mt-5 mb-4'>HAPPY CLIENTS</h1>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {reviews.map(review => <SwiperSlide>
                        <div className='review-container'>
                            <img className='review-img' src={review.img} alt="" />
                            <h4 >{review.name}</h4>
                            <p className='common-clr'>{review.review}</p>
                        </div>
                    </SwiperSlide>)}
                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide> */}
                    <br />
                </Swiper>
            </div>
        </Container>
    );
};

export default Reviews;