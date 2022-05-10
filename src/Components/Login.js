import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password);
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigateToRegister = () => {
        navigate('/register')
    }

    if (user) {
        navigate(from, { replace: true });
    }

    // if (loading || sending) {
    //     return <Loading></Loading>
    // }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Email sent');
    }

    return (
        <div className='w-50 mx-auto border shadow rounded p-5 m-5'>
            <h2 className='text-center mb-4'>Log in to Account</h2>
            <Form onClick={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />

                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    style={{ width: '200px', height: '40px', backgroundColor: 'var(--blue)' }}
                    className='d-block mx-auto border-0 rounded text-white mb-3'
                >Login
                </Button>

            </Form>

            <p className=''>New to Automotive ? <Link to='/register' className='pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>

            <p>Forget password? <button className='pe-auto border-0 bg-white text-primary' onClick={resetPassword}>Reset password</button></p>

            <SocialLogin></SocialLogin>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;