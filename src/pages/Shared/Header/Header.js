import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
import { Link, useLocation } from 'react-router-dom';
import brand from '../../../images/brand.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar className='navbar-container sticky-top' collapseOnSelect expand="lg" variant='dark'>
                <Container>
                    <Link to='/' className='me-3'>
                        <img width="200px" src={brand} alt="" />
                    </Link>
                    <Navbar.Toggle style={{ color: "white" }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/services'>Services</CustomLink>
                            <CustomLink to='/blog'>Blog</CustomLink>
                        </Nav>
                        <Nav>

                            <div className='d-flex flex-column flex-lg-row  ' style={{ marginTop: "5px" }}>
                                {user && <CustomLink to='/items'>My Products</CustomLink>}
                                {user && <CustomLink to='/products/add'>Add Product</CustomLink>}
                                {user && <CustomLink to='/manageinventory'>Manage Products</CustomLink>}
                            </div>
                            {user ? <button className='log-out-btn' onClick={logOut}>log out</button> : <CustomLink to='/login'>Login</CustomLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;