import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './Map.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Map = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <Container>
            <h1 className='common-clr text-center mt-5 mb-3' data-aos="zoom-in" data-aos-duration="800">FIND US ON MAP</h1>
            <MapContainer center={[23.660936, 90.162226]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.660936, 90.162226]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
};

export default Map;