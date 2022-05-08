import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product, children }) => {
    useEffect(() => {
        AOS.init();
    })
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
                    }
                })
        }
    }

    const navigate = useNavigate()
    const { _id, name, img, price, quantity, desc, supplier } = product;
    return (
        <Col sm={12} md={6} lg={4} data-aos="fade-up" data-aos-duration="1000">
            <div className='product mx-auto' >
                <img className='product-img' src={img} alt="" />
                <h4 style={{ marginBottom: "2px", marginTop: "8px" }}>{name}</h4>
                <p><small>Supplier: {supplier}</small></p>
                <h5 style={{ marginBottom: "2px" }}>Price: {price}</h5>
                <h6 style={{ marginTop: "0px", marginBottom: "2px" }}>Quantity: {quantity}</h6>
                <p style={{ marginTop: "10px" }}><small>{desc}</small></p>
                <button className='update-btn' onClick={() => navigate(`/update/${_id}`)}>Update</button>
                {children && <button className='update-btn ms-2' onClick={() => handleDelete(children.id)}>Delete</button>}
            </div>
        </Col>
    );
};

export default Product;