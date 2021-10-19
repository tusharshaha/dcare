import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
const Services = () => {
    const {services} = useService()
    return (
        <>
        <Header></Header>
        <Container className="my-5 text-center">
            <div>
                <h3 className='top-text text-uppercase'>DCARE Services</h3>
                <p className='text-secondary'>A hospital is no place to be sick</p>
            </div>
            <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
                {
                    services?.map(service => <Service key={service.id} services={service}></Service>)
                }
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Services;