import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import YouTube from 'react-youtube';

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

const SectionYoutubeLeft = (props) => {
    const opts = {
        height:  props.height || '390',
        width: props.width ||'640',
        playerVars: {
            autoplay:1,
            loop: 1,
            playlist: props.sectionData.youtubeId,
            mute:1
        }
    };

    return (
        <section id={props.id}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col lg={6} className={"order-lg-2"}>
                        <div className={"p-5"}>
                            <YouTube
                                videoId={props.sectionData.youtubeId}
                                opts={opts}
                            />
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
}
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


export {SectionLeft, SectionRight, SectionYoutubeLeft}
