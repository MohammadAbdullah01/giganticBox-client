import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const items = [
        { name: "Samsung Refrigerator 689L", img: "https://static-01.daraz.com.bd/p/mdc/4f4f6a36ecf41c374277a9c5ec0f0369.jpg", desc: "3 doors walton fridge. You can store more and more groceries in this fridge. we have a extra large space to store", price: "129000", quantity: "5", supplier: "walton" }]
    // const result = JSON.stringify(items)
    // console.log(items)
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