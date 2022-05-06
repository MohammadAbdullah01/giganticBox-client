import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()
    const login = location.page;
    // style={`${location.pathname === "/login" ? "display:'none'" : "display:'block'"}`}
    return (
        <div className={`my-5 justify-content-center align-items-center ${location.pathname === '/login' || location.pathname === '/register' ? 'd-none' : 'd-block'}`}>
            <p>this is footer</p>
        </div>
    );
};

export default Footer;