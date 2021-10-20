import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './DcEnvironment.css'
const DcEnvironment = () => {
    return (
        <div>
            <Row xs={2} md={4} lg={4} className="g-0">
                <Col>
                    <div className='hospital-img'>
                    <img src={`https://i.pinimg.com/564x/15/43/7e/15437e5835089c459ace673af73e17b6.jpg`} alt="" />
                    </div>
                </Col>

                <Col>
                    <div className='hospital-img'>
                    <img src={`https://i.pinimg.com/564x/82/b7/c4/82b7c4868260af900fa3c3f41cd03a1b.jpg`} alt="" />
                    </div>
                </Col>

                <Col>
                    <div className='hospital-img'>
                    <img src={`https://i.pinimg.com/564x/9c/a5/55/9ca555a29e30553691cbc7de9a9dc6ec.jpg`} alt="" />
                    </div>
                </Col>

                <Col>
                    <div className='hospital-img'>
                    <img src={`https://i.pinimg.com/564x/87/2a/8f/872a8f9173885cfde7375ff0ae299809.jpg`} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DcEnvironment;