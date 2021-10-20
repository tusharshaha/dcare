import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Appointment.css'
const Appointment = () => {
    return (
        <div>
            <Header></Header>
            <div className='appointment'>
                <Container className='pt-5'>
                    <Row>
                        <Col xs={8} md={6}>
                            <Form onSubmit={(e) => e.preventDefault()}>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Control type="text" placeholder="Your Password" className='py-2' />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" className='py-2'/>
                                    </Form.Group>

                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Control placeholder="Address 1" className='py-3' />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Control placeholder="Address 2 (0ptional)" className='py-3'/>
                                </Form.Group>
                                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;