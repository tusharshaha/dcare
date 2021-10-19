import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css'
const NotFound = () => {
    const history = useHistory()
    return (
        <div className='notFound'>
            <Button onClick={()=>history.push('/home')} variant='primary'> Back To Home</Button>
        </div>
    );
};

export default NotFound;