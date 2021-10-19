import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Button} from 'react-bootstrap';
import './SignUp.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const {setError,googleSignIn, registerNewUser, error, success} = useAuth()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (password.length < 6) {
            setError("Password should be at least 6 character")
          }
         else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password should be two uppercase letters.");
          }else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Password should be two number digits.");
          } else {
            registerNewUser(email, password, name);
            setError('')
          }
    }

    return (
        <>
            <Header></Header>
            <div className='sign-up'>
                <form onSubmit={handleSubmit} className='signup-container'>
                    <p>Your Name:</p>
                    <input onBlur={e=> setName(e.target.value)} type="text" placeholder='Your Name' required />
                    <p>Your Email:</p>
                    <input onBlur={e => setEmail(e.target.value)} type="Email" placeholder='Enter Your Email' required/>
                    <p>Your Password:</p>
                    <input onBlur={e => setPassword(e.target.value)} type="password" name="" id="" placeholder='Enter Your Password' required/>
                    <Button variant='info' className='text-white fw-bold' type='submit'>Sign Up</Button>
                </form>
                <Button onClick={googleSignIn} variant='outline-primary' className='mt-3'>Sign In With Google</Button>
                <p className="text-danger mt-3">{error}</p>
                <p className="text-success">{success}</p>
                <Link to='/login'>Already Have account? Pleace Login..</Link>
            </div>
        <Footer></Footer>
        </>
    );
};

export default SignUp;