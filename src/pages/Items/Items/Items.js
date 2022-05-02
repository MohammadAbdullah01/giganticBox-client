import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Home/Home/Product/Product';

const Items = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useProducts(loading)
    // const [loading, setLoading] = useState(false)
    // const handleDelete = id => {
    //     const proceed = window.confirm('are you sure you want to delete?')
    //     if (proceed) {
    //         fetch(`https://evening-basin-87782.herokuapp.com/product/delete/${id}`, {
    //             method: "delete",
    //             headers: {
    //                 'content-type': "application/json"
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     setLoading(!loading)
    //                     alert("successfully deleted")
    //                 }
    //             })
    //     }
    // }
    return (
        <div>
            <Container>
                <div>
                    <Row className='g-3'>
                        {products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                            {{ id: product._id, setLoading, loading: loading }}
                        </Product>)}
                    </Row>
                </div>
                <br />
            </Container>
        </div>
    );
};

export default Items;