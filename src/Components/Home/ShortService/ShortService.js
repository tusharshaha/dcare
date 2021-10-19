import React from 'react';
import { Col } from 'react-bootstrap';
import './ShortService.css'
const ShortService = ({services}) => {
    const {name, description} = services;
    return (
        <Col className='px-3'>
            <h3 className='text-uppercase shortService'>{name}</h3>
            <p>{description.slice(0, 129)}</p>
        </Col>
    );
};

export default ShortService;