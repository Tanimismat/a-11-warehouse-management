import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/add">Add Item</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/logout">Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;