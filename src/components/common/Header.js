import React from 'react'
import {Button, Col, Container, NavItem, NavLink, Row} from 'reactstrap';
import {Link} from "react-router-dom";


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
                            <strong dangerouslySetInnerHTML={{__html:props.headerData.title}}>{}</strong>
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
                            {/*<Button className={'btn-lg'}*/}
                            {/*    onClick={() => this.handleClick(props.linkTo)}*/}
                            {/*        color={'secondary'}>*/}
                            {/*    Hop on!*/}
                            {/*</Button>*/}

                            <NavLink tag={Link} to="/shop" className={"btn-lg btn btn-primary"}>
                                Go to shop
                            </NavLink>
                        </h2>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header
