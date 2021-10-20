import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../Hooks/useService';
import Service from '../../Service/Service';
import './TopServices.css'
const TopServices = () => {
    const {services} = useService()
    return (
        <Container className="my-5 text-center">
            <div>
                <h3 className='top-text text-uppercase'>DCARE Services</h3>
                <p className='text-secondary'>A hospital is no place to be sick</p>
                <div className='line-container'>
                    <div className='line bg-secondary'></div>
                    <i className="fas fa-plus text-secondary"></i>
                    <div className='line bg-secondary'></div>
                </div>
            </div>
            <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
                {
                    services?.slice(0,6).map(service => <Service key={service.id} services={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default TopServices;