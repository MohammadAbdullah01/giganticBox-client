import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Product from '../../Home/Home/Product/Product';

const Items = () => {
    const navigate = useNavigate()
    const [user, userLoading] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const [myProducts, setMyProducts] = useState([])
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        (async () => {
            try {
                // fetch(`http://localhost:5000/myproducts?email=${user?.email}&token=${localStorage.getItem("accessToken")}`)
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.message === "success") {
                //             setMyProducts(data.result)
                //         }
                //     })
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
        <div>
            <Container>
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
    );
};

export default Items;