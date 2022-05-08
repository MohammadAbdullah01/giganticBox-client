import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    // const items = [
    //     { name: "Walton side by side Refrigerator WNI-5F3-GDEL-XX 563 L (Mirror)", img: "https://static-01.daraz.com.bd/p/96633099af7eb00ef43f1ae194e54a65.jpg", desc: "Keep all your food fresh and healthy for longer with Walton Refrigerator. Its dynamic airflow and precise temperature contron maintain the optimal humidity levels on both refrigerator and freezer compartments.", price: "72891", quantity: "15", supplier: "Walton" },

    //     { name: "ECO+ 566 LITER SIDE BY SIDE GLASS DOOR FRIDGE BLACK", img: "https://static-01.daraz.com.bd/p/df7a5516300e385f46e47b262bf89323.jpg", desc: "Smart Touch Electronic Control in stylish Eco+ Side by Side Refrigerator with total No Frost and Multi Air Flow! Buy to avail up to 36 months EMI or Kisti facility. Good in quality and nice to look.", price: "77,000", quantity: "10", supplier: "Eco+" },

    //     { name: "Samsung Top Mount Refrigerator RT27HAR9DUTD3 253 L", img: "https://static-01.daraz.com.bd/p/3a09ef888f5e4143ce3ac2e6677fa07a.jpg", desc: "The Samsung Refrigerator’s high efficiency and long lasting LED lighting is slimmer, brighter and more power-efficient than conventional lighting. Located on the top side of the refrigerator compartment.", price: "36,700", quantity: "25", supplier: "Samsung" },

    //     { name: "LG 284 Liter No-Frost Refrigerator Hazel Plumeria", img: "https://static-01.daraz.com.bd/p/2aacdc2be593b53aa84f40dba43be9a2.jpg", desc: "284 Litres ConvertiblePLUS Fridge with Smart Inverter Compressor, Door Cooling+™, Smart Diagnosis™, Auto Smart Connect GL-T302SPZY. Cool to watch and also suitful for your house. We recommand our best product. ", price: "52,500", quantity: "18", supplier: "LG" },

    //     { name: "Walton WFD-1F3-GDEL-XX Direct Cool Refrigerator - 176 Ltr", img: "https://static-01.daraz.com.bd/p/31090271a6af60c6552bedb84f4f5435.jpg", desc: "WFD-1F3-GDEL-XX. 176 Ltr. 163 Ltr. 1. Any damage due to accident, electrical fault, natural causes, negligence or improper installation. 2. Any damage or failure caused by unauthorized. GL-T302SPZY.", price: "22,250", quantity: "35", supplier: "Walton" },

    //     { name: "Kelvinator KHV-138DF Defrost Refrigerator - 150L", img: "https://static-01.daraz.com.bd/p/d2da915cc61f588b856784dc66f8afcc.jpg", desc: " Electronic temperature control with LED display. No frost design with finned evaporator. Reversible door with magnetic door seal. Stylish interior LED light. 1 easy pulling.", price: "19,900", quantity: "20", supplier: "Kelvinator " },

    // ]
    // const result = JSON.stringify(items)
    // console.log(result)


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