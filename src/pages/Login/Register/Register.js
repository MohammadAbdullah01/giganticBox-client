import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import toast, { Toaster } from 'react-hot-toast';
import { sendEmailVerification } from 'firebase/auth';
import { Spinner } from 'react-bootstrap';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const location = useLocation()
    const navigate = useNavigate()
    const [token] = useToken(user || user1 || user2)
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || user1 || user2) {
            navigate(from, { replace: true });
        }
    }, [user, user1, user2])
    const handleRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('please give a proper email address', { id: "2" })
            return;
        }
        if (password.length < 6) {
            toast.error('password length too short', { id: "2" })
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        if (error?.message?.includes("auth/email-already-in-use") || error1?.message?.includes("auth/email-already-in-use") || error2?.message?.includes("auth/email-already-in-use")) {
            toast.error("user already exist", { id: "15" })
        }
    }, [error, error1, error2])

    return (
        <div className='login-container'>
            <Toaster />
            <div className='form-container'>
                <h1 className='login-title'>Please Register</h1>
                <div>
                    <form onSubmit={handleRegister}>
                        <div className='form-input-group'>
                            <label htmlFor="email">Enter Your Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className='form-input-group'>
                            <label htmlFor="password">Enter Your Password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        {(loading || loading1 || loading2) && <p>
                            <Spinner animation="border" variant="success" />
                        </p>}
                        <input className='login-btn' type="submit" value="Register" />
                    </form>
                    <div className='login-mechanism'><p>Already have an account? <span onClick={() => navigate('/login')} style={{ color: "orange", cursor: "pointer" }}>Login</span></p></div>
                </div>
                <button className='social-login' onClick={() => signInWithGoogle()}> <img style={{ height: "25px", marginBottom: "2px", marginRight: "5px" }} src={google} alt="" /> Continue with google</button>
                <button className='social-login' onClick={() => signInWithFacebook()} ><img style={{ height: "20px", marginBottom: "4px", marginRight: "5px" }} src={facebook} alt="" /> Continue with facebook</button>
            </div>
        </div>
    );
};

export default Register;