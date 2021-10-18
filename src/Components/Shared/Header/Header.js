import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Header.css'
const Header = () => {
    let history = useHistory()
    const handleSignUp = ()=>{
        history.push('/signup')
    }
    return (
        <Navbar expand="lg" sticky="top" bg="info" variant="dark">
            <Container>
                <Navbar.Brand>
                    <h3>Helth care</h3>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <ul className='nav-menu'>
                            <li><NavLink className='item' activeClassName='selected' to='/home'>Home</NavLink></li>

                            <li><NavLink className='item' activeClassName='selected' to='/services'>Services</NavLink></li>

                            <li><NavLink className='item' activeClassName='selected' to='/login'>Login</NavLink></li>

                            <li><button onClick={handleSignUp} className='custom-btn'>SignUp</button></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;