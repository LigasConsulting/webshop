import React from 'react'
import {Button, Col, Container, Row} from 'reactstrap';
import YouTube from 'react-youtube';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Section = (props) => {

    this.isFlipped = (className) => {
        return props.sectionData.right ? className : '';
    };

    return (
        <section id={props.id}>
            <Container>
                <Row className={"align-items-center py-3"}>
                    <Col sm={6} className={this.isFlipped("order-sm-2")}>
                        <div>
                            <img className={'img-fluid'} src={props.sectionData.image} alt=""/>
                        </div>
                    </Col>
                    <Col sm={6} className={this.isFlipped("order-sm-1")}>
                        <div>
                            <h2>{props.sectionData.label}</h2>
                            <p>{props.sectionData.text}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


const SectionMiddle = (props) => (
    <section className={'bg-dark text-white  py-5 '}>
        <Container className={"text-center"}>
            <h1>{props.sectionData.label}</h1>
        </Container>
    </section>

);


const SectionYoutubeLeft = (props) => {
    const opts = {
        height: props.height || '390',
        width: props.width || '640',
        playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: props.sectionData.youtubeId,
            mute: 1
        }
    };

    return (
        <section id={props.id} className={'py-5 '}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col lg={6} className={"order-lg-2"}>
                        <div className={"p-5 video-responsive"}>
                            <YouTube
                                videoId={props.sectionData.youtubeId}
                                opts={opts}
                            />
                        </div>
                    </Col>
                    <Col lg={6} className={"order-lg-1"}>
                        <div className={"p-5"}>
                            <h2>{props.sectionData.label}</h2>
                            <p>{props.sectionData.text}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const BuyContactUs = (props) => (
    <section className={'bg-dark text-white py-5 '}>
        <Container className={"text-center"}>
            <h1>{props.sectionData.label}</h1>
            <Row>
                <Col lg={6} className={'ml-auto text-center  mb-3'}>
                    <Button size={'lg'} color="primary">
                        <FontAwesomeIcon icon="shopping-cart" className={' mr-1'}/> Shop
                    </Button>
                </Col>
                <Col lg={6} className={'ml-auto text-center'}>
                    <Button size={'lg'} href={"mailto:" + props.sectionData.email}>
                        <FontAwesomeIcon icon="envelope" className={' mr-1'}/> {props.sectionData.email}
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>

);


export {Section, SectionYoutubeLeft, SectionMiddle, BuyContactUs}
