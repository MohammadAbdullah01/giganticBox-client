import React, { useEffect, useRef, useState } from 'react';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const [emailPassUser, setEmailPassUser] = useState({})
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);

    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef("")
    const location = useLocation()
    const navigate = useNavigate()
    const [token, setToken] = useToken(user || user1 || user2)
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || user1 || user2) {
            navigate(from, { replace: true });
        }
    }, [user, user1, user2])
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(
        auth
    );
    useEffect(() => {
        if (error || error1 || error2) {
            console.log()
        }
    }, [error, error1, error2])

    useEffect(() => {
        if (error2?.message?.includes("auth/user-not-found")) {
            toast.error("no user found", { id: "17" })
        }
        if (error2?.message?.includes("auth/wrong-password")) {
            toast.error("wrong password", { id: "19" })
        }
    }, [error, error1, error2])

    const handleLogin = event => {
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
        signInWithEmailAndPassword(email, password)

    }


    return (
        <div className='login-container'>
            <Toaster />
            <div className='form-container'>
                <h1 className='login-title'>Please Login</h1>
                <div>
                    <form onSubmit={handleLogin}>
                        <div className='form-input-group'>
                            <label htmlFor="email">Enter Your Email</label>
                            <input ref={emailRef} type="email" name="email" id="email" required />
                        </div>
                        <div className='form-input-group'>
                            <label htmlFor="password">Enter Your Password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        {(loading || loading1 || loading2) && <p>
                            <Spinner animation="border" variant="success" />
                        </p>}
                        <input className='login-btn' type="submit" value="Login" />
                    </form>

                    <div className='login-mechanism'><p>Forgot Password? <span style={{ cursor: "pointer", color: "orange" }} onClick={async () => {
                        if (/\S+@\S+\.\S+/.test(emailRef.current.value)) {
                            await sendPasswordResetEmail(emailRef.current.value);
                            toast.success('reset password email sent', { id: "9" });
                        } else {
                            toast.error('please provide a proper email address', { id: "10" })
                        }
                    }}>Reset</span></p><p>Don't have an account? <span style={{ cursor: "pointer", color: "orange" }} onClick={() => navigate('/register')}>Sign up</span></p></div>
                </div>
                <button className='social-login' onClick={() => signInWithGoogle()}> <img style={{ height: "25px", marginBottom: "2px", marginRight: "5px" }} src={google} alt="" /> Continue with google</button>
                <button className='social-login' onClick={() => signInWithFacebook()} ><img style={{ height: "20px", marginBottom: "4px", marginRight: "5px" }} src={facebook} alt="" /> Continue with facebook</button>
            </div>
        </div>
    );
};

export default Login;