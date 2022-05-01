import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Home/Product/Product';

const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts([])
    const firstSixProducts = products.slice(0, 6) || {};
    return (
        <div>
            <h1>all products</h1>
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
                <button onClick={() => navigate('/manageinventory')}>Manage Inventory</button>
            </Container>
        </div>
    );
};

export default Products;