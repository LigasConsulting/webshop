import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import me from "../../assets/img/closed.jpg";
import Footer from "../common/Footer";

const Closed = () => (
    <div>
        <Container className={'my-5'}>
            <Row>

                <Col md={4}>
                    <img className="img-fluid" src={me} alt=""/>
                </Col>

                <Col md={8}>
                    <p>
                        Hi All
                    </p>
                    <p>
                        The toy truck shop is now closed. We hope that we brought a bit off joy to our little customers
                        lives with our trucks.
                    </p>
                    <p>
                        It was a very interesting experience for us and we gained a lot of valuable experiences but
                        we are now exploring new endeavours.
                    </p>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
);

export default Closed
