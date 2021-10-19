import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'
const Service = ({services}) => {
    const { id,image, name, description} = services;
    const history = useHistory()
    return (
        <Col>
            <div className='service-card'>
                <div className='service-image'>
                    <img src={image} alt="" />
                </div>
                <div className='service-details'>
                    <h5 className='service-title'>{name}</h5>
                    <p className='text-secondary'>{description.slice(0,150)}....</p>
                    <Button onClick={()=>history.push(`/service/${id}`)} variant="outline-info" className='px-4 mb-4'>See Details</Button>
                </div>
            </div>
        </Col>
    );
};

export default Service;