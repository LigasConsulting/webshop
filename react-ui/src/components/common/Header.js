import React from 'react'
import {Button, Col, Container, Row} from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';


const Header = (props) => {

    this.handleClick = (linkTo) => {
        window.location.href = '#'+linkTo;
    };

    return (
        <header className={"masthead text-center text-white d-flex"}>
            <Container className={"my-auto"}>
                <Row className={'text-bg'}>
                    <Col lg={10} className={'mx-auto'}>
                        <h1>
                            <strong>{props.headerData.title}</strong>
                        </h1>
                        <hr/>
                    </Col>
                    <Col lg={10} className={'mx-auto'}>
                        <h2 className={"text-faded"}>
                            {props.headerData.subtitle}&nbsp;&nbsp;
                        </h2>
                    </Col>
                    <Col lg={10} className={'mx-auto'}>
                        <h2 className={"text-faded"}>
                            <Button onClick={() => this.handleClick(props.linkTo)}
                                    color={'secondary'}>
                                Hop on!
                            </Button>
                        </h2>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header
