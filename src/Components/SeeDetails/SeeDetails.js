import React from 'react';
import { Container, Row,Col,Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './SeeDetails.css'
const SeeDetails = () => {
    const {id} = useParams()
    const {services} = useService()
    const details = services?.find(service => service.id === parseInt(id));

    return (
        <>
        <Header></Header>
        <Container>

        {!details? <div className='text-center mt-3'>
            <Spinner animation="grow" variant="info" />
        </div> :
        <div className="my-5 custom-card">
            <Row className="g-0">
                <Col md={4}>
                <img src={details?.image}  alt="..."/>
                </Col>
                <Col md={8}>
                <div className="card-body">
                    <h4 className="card-title fw-bold">{details.name}</h4>
                    <p className="card-text pe-5">{details.description}</p>
                </div>
                </Col>
            </Row>
        </div>}
        </Container>
        <Footer></Footer>
        </>
    );
};

export default SeeDetails;