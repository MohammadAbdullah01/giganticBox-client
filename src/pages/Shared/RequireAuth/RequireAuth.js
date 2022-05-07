import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <div className='w-100 h-100 mx-auto text-center my-5' ><Spinner animation="border" variant="success" /></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default RequireAuth;