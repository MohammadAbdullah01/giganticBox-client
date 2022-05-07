import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const location = useLocation()
    return (
        <div className={`justify-content-center align-items-center ${location.pathname === '/login' || location.pathname === '/register' ? 'd-none' : 'd-block'}`}>
            <div className='footer-container'>
                <p>this is footer</p>
            </div>
        </div>
    );
};

export default Footer;