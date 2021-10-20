import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Services.css'
const Services = () => {
    const {services} = useService()
    return (
        <>
        <Header></Header>
        <div className='service-container py-5'>
        <Container className="text-center">
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
                    services?.map(service => <Service key={service.id} services={service}></Service>)
                }
            </Row>
        </Container>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Services;