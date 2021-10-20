import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../Hooks/useService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutDcare from '../AboutDcare/AboutDcare';
import DcEnvironment from '../DcEnvironment/DcEnvironment';
import GoogleMap from '../GoogleMap/GoogleMap';
import ShortService from '../ShortService/ShortService';
import TopBanner from '../TopBanner/TopBanner';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    const {services} = useService();
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <div className='bg-info text-white'>
                <Container>
                    <Row md={2} lg={4} className='g-2 py-4'>
                        {
                            services?.slice(0,4).map(service =><ShortService key={service.id} services={service}></ShortService>)
                        }
                    </Row>
                </Container>
            </div>
                <DcEnvironment></DcEnvironment>
                <TopServices></TopServices>
                <AboutDcare></AboutDcare>
                <GoogleMap></GoogleMap>
                <Footer></Footer>
        </div>
    );
};

export default Home;