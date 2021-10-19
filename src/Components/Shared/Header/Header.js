import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    let history = useHistory()
    const handleSignUp = ()=>{
        history.push('/signup')
    }
    const {user, logOut} = useAuth()
    return (
        <Navbar expand="lg" sticky="top" bg="info" variant="dark">
            <Container>
                <Navbar.Brand>
                    <h3 className='text-uppercase logo-text'>Dcare</h3>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <ul className='nav-menu'>
                            <li><NavLink className='item' activeClassName='selected' to='/home'>Home</NavLink></li>

                            <li><NavLink className='item' activeClassName='selected' to='/services'>Services</NavLink></li>

                            {!user.displayName?<>
                            <li><NavLink className='item' activeClassName='selected' to='/login'>Login</NavLink></li>

                            <li><button onClick={handleSignUp} className='btn btn-secondary'>SignUp</button></li>
                            </>:
                            <>
                            <li className='user-container'>{user.photoURL && <img className='user-image' src={user.photoURL} alt="" />}<span className='text-capitalized fw-bold text-primary'>{user.displayName}</span></li>

                            <li><button onClick={logOut} className='btn btn-secondary'>LogOut</button></li>
                            </>
                            }
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;