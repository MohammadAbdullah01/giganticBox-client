import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase/firebase.init';
import './AddProduct.css'


const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://evening-basin-87782.herokuapp.com/products/add', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    alert("product added")
                    reset()
                }
            }
            )
    };
    return (
        <div className='add-product-section' >
            <div className='mx-auto add-product-container'>
                <div className='product-container2'>
                    <h1 className='text-center my-4 mx-auto d-block common-clr' >Add a new product!</h1>
                    <form className='d-flex flex-column add-product-form' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' placeholder='name' {...register("name", { required: true })} />
                        <input className='mb-2' placeholder='price' type="number" {...register("price", { required: true })} />
                        <input className='mb-2' placeholder='quantity' type="number" {...register("quantity", { required: true })} />
                        <input className='mb-2' placeholder='supplier' {...register("supplier", { required: true })} />
                        <textarea className='mb-2' placeholder='description' {...register("desc", { required: true })} />
                        <input className='mb-2' value={`${user?.email}`} type="email" {...register("email", { required: true })} />
                        <input className='mb-2' placeholder='image url' {...register("img", { required: true })} />
                        <input className='mb-2 update-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;