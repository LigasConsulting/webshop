import React from 'react'
import {Col, Container, Row, Button} from 'reactstrap';


const SectionLeft = (props) => (
    <section id={props.id}>
        <Container>
            <Row className={"align-items-center"}>
                <Col lg={6} className={"order-lg-2"}>
                    <div className={"p-5"}>
                        <img className={"img-fluid rounded-circle"} src={props.sectionData.image} alt=""/>
                    </div>
                </Col>
                <Col lg={6} className={"order-lg-1"}>
                    <div className={"p-5"}>
                        <h2 className={"display-4"}>{props.sectionData.label}</h2>
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
            <Row className={"align-items-center"}>
                <Col lg={6}>
                    <div className={"p-5"}>
                        <img className={"img-fluid rounded-circle"} src={props.sectionData.image} alt=""/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={"p-5"}>
                        <h2 className={"display-4"}>{props.sectionData.label}</h2>
                        <p>{props.sectionData.text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

);


export {SectionLeft, SectionRight}
