import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className='top-banner d-flex align-items-center'>
            <Container>
                <Row className=''>
                    <Col className='text-center' xs={10} md={6} lg={6}>
                        <h2 className='text-uppercase top-text'>A passion for healing</h2>
                        <h1 className='text-uppercase top-header'>Medical Center</h1>
                        <p className='top-paragraph'>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;