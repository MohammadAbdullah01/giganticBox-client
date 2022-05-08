import React, { useState, useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import { FaTrash } from 'react-icons/fa';
import './ManageInventory.css'

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
                    }
                })
        }
    }
    return (
        <>
            {products.length ?
                <div>
                    <div className='container d-flex mt-3 justify-content-end'>
                        <button className='manage-inventory-btn' onClick={() => navigate('/products/add')}> <span style={{ borderBottom: "2px solid white" }}>Add new product</span></button>
                    </div>
                    <h1 className='text-center common-clr mt-3 mb-2'>MANAGE ITEMS</h1>
                    <div className="table-responsive">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr className="align-middle text-center">
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Image</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product =>
                                    <tr className="align-middle text-center" key={product._id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td><img style={{ width: "70px" }} src={product.img} alt="" /></td>
                                        <td><button style={{ border: "none" }} onClick={() => handleDelete(product._id)}>< FaTrash className='delete-btn' /></button></td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                    </div>
                </div>
                :
                <div className='w-100 h-100 mx-auto text-center my-5' ><Spinner animation="border" variant="success" /></div>
            }
        </>
    );
};

export default ManageInventory;