import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Map></Map>
        </div>
    );
};

export default Home;