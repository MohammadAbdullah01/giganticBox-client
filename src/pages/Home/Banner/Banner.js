
import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    useEffect(() => {
        AOS.init();
    })
    const navigate = useNavigate()
    return (
        <div className='banner-container'>
            <div className='banner-text' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="800">
                <h1>Refrigerators <br />
                    We store the highest quality appliances</h1>
                <p>GiganticBox Appliances stores the top brands in refrigerators. Stores fridges from top brands and maintains the stocking quantity, suppliers and other infos.</p>
                <button onClick={() => navigate('/services')} className='service-btn'>Our services</button>
            </div>
        </div>
    );
};

export default Banner;