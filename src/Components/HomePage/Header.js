import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
    }

    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" style={{ backgroundColor: 'var(--blue)' }} >
                <Container>
                    <Navbar.Brand className='text-light' as={Link} to="/home">Automotive</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="/blog">Subscribe</Nav.Link>
                        </Nav>
                        {
                            user &&
                            <>
                                <Nav>
                                    <Nav.Link className='text-light' as={Link} to="/manage">Manage Items</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link className='text-light' as={Link} to="/add">Add Item</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link className='text-light' as={Link} to="/myitems">My Items</Nav.Link>
                                </Nav>
                            </>
                        }

                        {
                            user ? <Nav>
                                <Nav.Link className='text-light' onClick={handleLogOut}>Log out</Nav.Link>
                            </Nav>
                                :
                                <Nav>
                                    <Nav.Link className='text-light' as={Link} to="/login">Log in</Nav.Link>
                                </Nav>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;