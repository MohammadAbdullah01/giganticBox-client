import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import brand from '../../../images/brand.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
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
                        </Nav>
                        <Nav>
                            {user && <CustomLink to='/items'>Items</CustomLink>}
                            {user ? <button onClick={logOut}>log out</button> : <CustomLink to='/login'>Login</CustomLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;