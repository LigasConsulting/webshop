import React from 'react'
import {Col, Container, Row, UncontrolledCarousel} from "reactstrap";

import shopItemsData from '../../assets/shop-item-data';
import PayPallAddButton from "./PayPallAddButton";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const ItemDetail = ({match}) => {
    this.article = shopItemsData.find(item => item.id === match.params.itemId);
    return (

        <Container>
            <UncontrolledCarousel items={this.article.details.images}/>
            <h1>{this.article.title}</h1>
            <h2> {`Price: ${this.article.price.value} ${this.article.price.currency}`} </h2>
            <Container className={'metadata-detail'}>
                <Row>
                    <Col md={12} lg={4}><FontAwesomeIcon icon="weight"/> <b>{this.article.details.metadata.weight}</b></Col>
                    <Col md={12} lg={4}><FontAwesomeIcon icon="child"/> <b>{this.article.details.metadata.age}</b> </Col>
                    <Col md={12} lg={4}><FontAwesomeIcon icon="arrows-alt"/> <b>{this.article.details.metadata.size}</b></Col>
                </Row>
            </Container>
            <Container>
                <h3>Description:</h3>
                <p>
                    {this.article.details.description}
                </p>
            </Container>
            <PayPallAddButton/>
        </Container>
    );
};

export default ItemDetail
