import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import {NavLink} from 'react-router-dom';
const Header= () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/*<Navbar.Brand href="#home">Thanh</Navbar.Brand>*/}
                <NavLink to="/" className='navbar-brand'>Thanh</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*Sử dụng thẻ link để liên kết đường dẫn đến các trang khác */}
                        {/*thẻ nav link tự tạo active thay vì nav-link active giúp sáng lên khi hover*/}
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link '>Users</NavLink>
                        <NavLink to="/admins" className='nav-link '>Admin</NavLink>

                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#users">Users</Nav.Link>*/}
                        {/*<Nav.Link href="#admin">Admin</Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item >Log in </NavDropdown.Item>
                        <NavDropdown.Item >Log out</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;