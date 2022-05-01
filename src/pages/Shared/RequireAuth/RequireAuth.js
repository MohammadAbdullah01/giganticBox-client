import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <p>loading</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default RequireAuth;