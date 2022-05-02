import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product, children }) => {
    // console.log(children)
    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete?')
        if (proceed) {
            fetch(`https://evening-basin-87782.herokuapp.com/product/delete/${id}`, {
                method: "delete",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        children.setLoading(!children.loading)
                        alert("successfully deleted")
                    }
                })
        }
    }

    const navigate = useNavigate()
    const { _id, name, img, price, quantity, desc, supplier } = product;
    return (
        <Col sm={12} md={6} lg={4}>
            <div className='product'>
                <img className='product-img' src={img} alt="" />
                <h2>{name}</h2>
                <p><small>{supplier}</small></p>
                <h3>price: ${price}</h3>
                <h4>quantity: {quantity}</h4>
                <p><small>{desc}</small></p>
                <button onClick={() => navigate(`/update/${_id}`)}>Update</button>
                {children && <button onClick={() => handleDelete(children.id)}>Delete</button>}

            </div>
        </Col>
    );
};

export default Product;