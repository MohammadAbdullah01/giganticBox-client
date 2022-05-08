import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Product from '../../Home/Home/Product/Product';
import './Items.css'

const Items = () => {
    const navigate = useNavigate()
    const [user, userLoading] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const [myProducts, setMyProducts] = useState([])
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://evening-basin-87782.herokuapp.com/myproducts?email=${user?.email}&token=${localStorage.getItem("accessToken")}`)
                const data = await res.json()
                if (data.message === "success") {
                    setMyProducts(data.result)
                } else {
                    setLoading(!loading)
                    navigate('/login')
                    signOut(auth)
                }
            }
            catch (err) {
                // console.log(err.response.status)
            }
        })()
    }, [user, user?.email, token, navigate, loading])



    return (
        <>
            {myProducts.length ?
                <div className='my-items-container'>
                    <Container className='mt-3'>
                        <h1 className='my-5 common-clr text-center'>MY PRODUCTS</h1>
                        <div>
                            <Row className='g-3'>
                                {myProducts?.map(product => <Product
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
                :
                <div className='w-100 h-100 mx-auto text-center my-5' ><Spinner animation="border" variant="success" /></div>
            }
        </>
    );
};

export default Items;