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
            const newQuantity = parseInt(e.target.addquantity.value) + quantity;
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

            <h1>update</h1>
            <button onClick={() => navigate('/manageinventory')}>Manage Inventory</button>
            <Container>
                <div>
                    <div>
                        <img className='update-product-img' src={img} alt="" />
                        <h1>{name}</h1>
                        <h2>quantity: {quantity}</h2>
                    </div>
                </div>
                <div>
                    <br /><br />
                    <button onClick={() => handleDeliver(productId)}>deliver</button>
                    <br /><br />
                    <div>
                        <form onSubmit={(e) => updateQuantity(e, productId)}>
                            <label htmlFor="addquantity">Add quantity:</label>
                            <input type="number" name="addquantity" id="addquantity" />
                            <input type="submit" value="update quantity" />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UpdateProduct;