import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <h1>please login</h1>
            <button onClick={() => signInWithGoogle()}>login with google</button>
        </div>
    );
};

export default Login;