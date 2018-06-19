import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import Footer from "../common/Footer";
import me from "../../assets/img/me.jpg";

const About = () => (
    <div>
        <Container>
            <Row>

                <Col md={4}>
                    <img className="img-fluid" src={me} alt=""/>
                </Col>

                <Col md={8}>
                    <h3 className="my-3">My name is Valeria</h3>
                    <p>
                        I always wanted to have a big family and I have it. I had to give up a lot of things for that
                        reason but I have an entrepreneurial spirit and I don't want to give up on that.
                    </p>
                    <p>
                        When my family go out we are always like a walking advertisement for tipper trucks. To whatever
                        playground or park we go, every child would like to play with them. This tipper toy is a legend in my
                        country.
                    </p>
                    <p className={'mb-5'}>Why don't make it a legend here? </p>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
);

export default About
