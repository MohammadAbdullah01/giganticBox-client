
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-text'>
                <h1>Refrigerators <br />
                    We offer the highest quality appliances</h1>
                <p>GiganticBox Appliances offers the top brands in refrigerators. We will install and service most major brands so you don’t have to go through the hassle of contacting the manufacturer. You can rest assured you’re buying the highest quality refrigerator you can find. Stop by our store to see our expansive selection of refrigerators.</p>
                <button className='service-btn'>Our services</button>
            </div>
        </div>
    );
};

export default Banner;