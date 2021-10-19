import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-section'>
            <Container className='text-white py-5'>
            <Row xs={1} md={2} lg={3} className="g-2">
                <Col className='py-2'>
                    <h2 className='text-uppercase logo-text'>dcare</h2>
                </Col>
                <Col className='py-2'>
                    <h3>About Us</h3>

                    <div className='mt-3'>
                        <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. </p>
                    </div>
                    <div className="icon-container">
                    <a href="https://www.facebook.com/tusharshaha619" rel="noreferrer" target='_blank'><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.twitter.com" rel="noreferrer" target='_blank'><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" rel="noreferrer" target='_blank'><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/tushar-kumar-shaha/" rel="noreferrer" target='_blank'><i className="fab fa-linkedin"></i></a>
                    </div>
                </Col>
                <Col className='py-2'>
                    <h3>Contact Us</h3>
                    <ul className='mt-3 info'>
                        <li><i className="fas fa-phone-volume me-2 icon"></i> +1000053434</li>
                        <li><i className="fas fa-envelope me-2 icon"></i>  tusharkrs2018@gmail.com</li>
                        <li><i className="fas fa-map-marker-alt me-2 icon"></i>  Chittagong,Bangladesh</li>
                    </ul>
                </Col>
            </Row>
            </Container>
            <div className='text-center text-white pb-3'>
            <small>Copyright 2021 by  <span className='text-info'> Tushar Kumar Shaha</span> All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;