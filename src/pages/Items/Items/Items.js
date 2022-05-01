import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Home/Home/Product/Product';

const Items = () => {
    const [products, setProducts] = useProducts()

    return (
        <div>
            <Container>
                <div>
                    <Row className='g-3'>
                        {products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)}
                    </Row>
                </div>
                <br />
            </Container>
        </div>
    );
};

export default Items;