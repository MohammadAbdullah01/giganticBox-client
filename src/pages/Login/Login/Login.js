import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    return (
        <div>
            <h1>please login</h1>
            <button onClick={() => signInWithGoogle()}>login with google</button>
        </div>
    );
};

export default Login;