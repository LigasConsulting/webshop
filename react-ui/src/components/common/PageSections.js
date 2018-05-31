import React from 'react'
import {Col, Container, Row} from 'reactstrap';

const Header = (props) => (

    <header className="masthead text-center text-white d-flex">
        <Container className="my-auto">
            <Row>
                <Col lg={10} className="mx-auto">
                    <h1 className="text-uppercase">
                        <strong>{props.headerData.title}</strong>
                    </h1>
                    <hr/>
                </Col>
                <Col lg={8}>
                    <p className="text-faded mb-5">{props.headerData.subtitle}</p>
                </Col>
            </Row>
        </Container>
    </header>
);


const SectionLeft = (props) => (
    <section>
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={props.sectionData.image} alt=""/>
                    </div>
                </Col>
                <Col lg={6} className="order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">{props.sectionData.label}</h2>
                        <p>{props.sectionData.text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
const SectionRight = (props) => (
    <section>
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={props.sectionData.image} alt=""/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="p-5">
                        <h2 className="display-4">{props.sectionData.label}</h2>
                        <p>{props.sectionData.text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

);
const Footer = (props) => (
    <footer className="py-5 bg-black">
        <div className="container">
            <p className="m-0 text-center text-white small">{props.footerData.copyright}</p>
        </div>
    </footer>
);

export {Header, SectionLeft, SectionRight, Footer}
