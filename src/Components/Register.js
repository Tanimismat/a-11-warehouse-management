import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        // navigate('/home')
    }

    if (user) {
        console.log(user)
        navigate(from, { replace: true });
    }

    const navigateToLogin = () => {
        navigate('/login');
    }


    return (
        <div className='w-50 mx-auto border shadow rounded p-5 m-5'>
            <h3 className='text-center mb-4'>Register Your Account</h3>
            <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control ref={nameRef} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button
                    style={{ width: '200px', height: '40px', backgroundColor: 'var(--blue)' }}
                    className='d-block mx-auto border-0 rounded text-white mb-3'
                    variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account ? <Link to='/login' className='pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;