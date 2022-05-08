import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Home/Product/Product';
import './Products.css'


const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts([])
    const firstSixProducts = products.slice(0, 6) || {};
    // console.log(products.length)
    return (
        <>
            {products.length ? <div>
                <h1 className='text-center mt-5 mb-3 common-clr' >OUR REFRIGERATORS</h1>
                <Container>
                    <div>
                        <Row className='g-3'>
                            {firstSixProducts.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)}
                        </Row>
                    </div>
                    <br />
                    <div className='d-flex justify-content-end'>
                        <button className='manage-inventory-btn-2' onClick={() => navigate('/manageinventory')}>Manage Inventory</button>
                    </div>
                </Container>
            </div>
                :
                <div className='w-100 h-100 mx-auto text-center my-5' ><Spinner animation="border" variant="success" /></div>}
        </>
    );
};

export default Products;