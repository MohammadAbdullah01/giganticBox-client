import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const [token] = useToken(user || user1)
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
        }
    }, [user, user1])
    return (
        <div className='login-container'>
            <div className='form-container'>
                <h1 className='login-title'>Please Register</h1>
                <div>
                    <form>
                        <div className='form-input-group'>
                            <label htmlFor="email">Enter Your Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className='form-input-group'>
                            <label htmlFor="password">Enter Your Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
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