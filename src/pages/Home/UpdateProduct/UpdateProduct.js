import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const { productId } = useParams()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const { name, img, price, quantity, supplier, desc } = product;
    const handleDeliver = (id) => {
        const newQuantity = quantity - 1;
        fetch(`https://evening-basin-87782.herokuapp.com/product/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                alert("successfully delivered")
                setLoading(!loading)
            })
    }

    const updateQuantity = (e, id) => {
        e.preventDefault()

        if (e.target.addquantity.value > 0) {
            const newQuantity = parseInt(e.target.addquantity.value) + parseInt(quantity);
            fetch(`https://evening-basin-87782.herokuapp.com/product/addquantity/${id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ quantity: newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    alert("quantity added")
                    setLoading(!loading)
                    e.target.reset()
                })
        }
    }

    useEffect(() => {
        fetch(`https://evening-basin-87782.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId, loading])


    return (
        <div>
            <div className='btn-container container'>
                <button className='manage-inventory-btn' onClick={() => navigate('/manageinventory')}> <span style={{ borderBottom: "2px solid white" }}>Manage Inventory</span></button>
            </div>
            <Container>
                <div className='update-container'>
                    <div className='update-left'>
                        <div>
                            <img className='update-product-img' src={img} alt="" />

                        </div>
                    </div>
                    <div className='update-right'>
                        <h3>{name}</h3>
                        <h6>Supplier:{supplier}</h6>
                        <h5>Price: {price}</h5>
                        <h5>Quantity: {quantity}</h5>
                        <p>Sold out: {quantity < 1 ? "yes" : "no"}</p>
                        <p>{desc}</p>
                        {quantity < 1 ? <button className='sold-out-btn'>Sold out</button> : <button className='update-btn' onClick={() => handleDeliver(productId)}>deliver</button>
                        }
                        <div className='mt-3'>
                            <form className='stock-form' onSubmit={(e) => updateQuantity(e, productId)}>
                                <label htmlFor="addquantity">Restock:</label>
                                <input className='stock-input' placeholder='quantity' type="number" name="addquantity" id="addquantity" />
                                <input className='stock-btn' type="submit" value="stock" />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UpdateProduct;