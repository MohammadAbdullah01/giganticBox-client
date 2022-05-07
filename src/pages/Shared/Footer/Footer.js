import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faMessage, faFacebook } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
    const location = useLocation()
    return (
        < div className={`justify-content-center align-items-center ${location.pathname === '/login' || location.pathname === '/register' ? 'd-none' : 'd-block'}`
        }>
            <div className='footer-container d-md-flex justify-content-between'>
                <div className='footer-left '>
                    <h5>Important links</h5>
                    <p className='my-1'>Privacy Policy</p>
                    <p className='my-1'>FAQ and answers</p>
                    <p className='my-1'>Our happy clients</p>
                </div>
                <div className='footer-left'>
                    <h5>Our services</h5>
                    <p className='my-1'>Home delivery</p>
                    <p className='my-1'>7 days return</p>
                    <p className='my-1'>24/7 online</p>
                </div>
                <div className='footer-right '><h5>Contact with us</h5><p><span><FaFacebook className='social-icon' /></span><span><FaLinkedin className='social-icon' /></span><span><FaInstagramSquare className='social-icon' /></span></p>
                    <p><span><FaWhatsappSquare className='social-icon' /></span><span><FaTwitterSquare className='social-icon' /></span></p>
                </div>
            </div>
        </div >
    );
}

export default Footer;