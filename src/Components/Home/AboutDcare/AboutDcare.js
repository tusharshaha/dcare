import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutDcare = () => {
    return (
        <div className='bg-secondary text-center text-white py-5'>
            <Container>
                <Row xs={2} md={2} lg={4} className='g-4 py-4'>
                    <Col>
                    <h2>567</h2>
                    <h5>Nurses</h5>
                    </Col>
                    <Col>
                    <h2>1285</h2>
                    <h5>Happy Patients</h5>
                    </Col>
                    <Col>
                    <h2>32</h2>
                    <h5>Departments</h5>
                    </Col>
                    <Col>
                    <h2>344</h2>
                    <h5>Blood Dontaions</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutDcare;