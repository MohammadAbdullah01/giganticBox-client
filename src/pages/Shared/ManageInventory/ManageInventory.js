import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const ManageInventory = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useProducts(loading)
    const navigate = useNavigate()
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
                        setLoading(!loading)
                        alert("successfully deleted")
                    }
                })
        }
    }
    return (
        <div>
            <button onClick={() => navigate('/products/add')}>Add new product</button>
            <h1>manage inventory</h1>
            <div className="table-responsive">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr className="align-middle text-center">
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Image</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <tr className="align-middle text-center" key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.supplier}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><img style={{ width: "70px" }} src={product.img} alt="" /></td>
                                <td><button onClick={() => handleDelete(product._id)}>delete</button></td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventory;