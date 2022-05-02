import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase/firebase.init';


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
                    alert("product created")
                    reset()
                }
            }
            )
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>add product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='price' type="number" {...register("price", { required: true })} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-2' placeholder='supplier' {...register("supplier", { required: true })} />
                <input className='mb-2' placeholder='description' {...register("desc", { required: true })} />
                <input className='mb-2' value={`${user?.email}`} type="email" {...register("email", { required: true })} />
                <input className='mb-2' placeholder='image' {...register("img", { required: true })} />
                <input className='mb-2' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;