import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './AboutUs.css'
import { Container,Row,Col } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <>
        <Header></Header>
        <Container className='py-5'>
            <h1 className='my-5'>Online success made simple. That has been our slogan and vision since 2021</h1>

            <h5 className='py-3'>Born in Melbourne’s Docklands, DCARE is one of the pioneers in providing end-to-end web solutions for businesses in Bangladesh. Over the last 15 years, we have transformed businesses by combining our strong technical ability with our deep understanding of the digital landscape.</h5>
            <h5 className='pb-3'>Over time, the digital landscape has transformed, and the way businesses use online technology has changed. DCARE has also evolved, mastering new skills, developing new products and continuing to provide cutting-edge web design, application development, and ecommerce solutions to our clients.</h5>
            <h5 className='pb-5'>Our customer-oriented approach has been a staple of the company over the years, and we’ll continue to measure our success by the accomplishments of our clients.</h5>

            <Row xs={1} className='g-4' >
                <Col className='about-details'>
                    <div className='about-img'>
                        <img src={`https://i.pinimg.com/564x/e0/61/a7/e061a77ca2f56fe9a8ced80d805b8ce2.jpg`} alt="" />
                    </div>
                    <div className='about-text'>
                        <h2 className='fw-bold'>Vision</h2>
                        <p>Our vision is to be the most sought after digital agency in Australia, facilitating sustainable growth and prosperity for our local and international clients. We are continuously evolving to become an industry leader in the vibrant field of web technologies.</p>
                    </div>
                </Col>

                <Col className='about-details'>
                    <div className='about-text'>
                        <h2 className='fw-bold'>Mission</h2>
                        Our mission is to transform our clients’ businesses, allowing them to utilise powerful technologies and improve their processes. We want to be consistently bringing out world-class products and services, that benefit businesses of all sizes, making them more efficient and effective.
                    </div>
                    <div className='about-img'>
                        <img src={`https://i.pinimg.com/564x/e9/8d/5b/e98d5bf2cb3995f80397b9ec6c9a0744.jpg`} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default AboutUs;