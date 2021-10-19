import { Button} from 'react-bootstrap';
import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {logIn, googleSignIn, success, error} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(email,password)
    }
    return (
        <>
            <Header></Header>
            <div className='login'>
                <form onSubmit={handleSubmit} className='login-container'>
                    <div className='user-icon'>
                        <i className="fas fa-user"></i>
                    </div>
                    <p>Your Email:</p>
                    <input onBlur={e=> setEmail(e.target.value)} type="Email" placeholder='Enter Your Email'  required/>

                    <p>Your Password:</p>
                    <input onBlur={e=> setPassword(e.target.value)} type="password" name="" id="" placeholder='Enter Your Password' required/>
                    <Button variant='info' className='text-white fw-bold' type='submit'>Login</Button>
                </form>
                <Button onClick={googleSignIn} variant='outline-primary' className='mt-3'>Sign In With Google</Button>
                <p className="text-danger mt-3">{error}</p>
                <p className="text-success">{success}</p>
                <Link to='/signup'>Haven't account? Please Sign up</Link>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;