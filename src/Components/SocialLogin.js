import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
            <button style={{ width: '200px', height: '40px', backgroundColor: 'var(--blue)' }} className='d-block mx-auto border-0 rounded text-white' onClick={() => signInWithGoogle()}>Google Login</button>

        </div>
    );
};

export default SocialLogin;