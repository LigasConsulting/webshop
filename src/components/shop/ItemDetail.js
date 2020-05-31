import React from 'react'
import {Col, Container, Row, UncontrolledCarousel} from "reactstrap";

import shopItemsData from '../../assets/shop-item-data';
import PayPallAddButton from "./PayPallAddButton";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {Helmet} from "react-helmet";

const ItemDetail = ({match}) => {
    this.article = shopItemsData.find(item => item.id === match.params.itemId);
    return (

        <Container>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{`Shop item -  ${this.article.title}`}</title>
                <meta name="keywords" content="shop"/>
                <meta name="description" content="Web shop for toy dump truck."/>
                <meta property="og:type" content="website"/>
                <script type="application/ld+json">{`
                    {
                        "@context": "http://schema.org/",
                        "@type": "Product",
                        "name": "${this.article.title}",
                        "image": [
                            "${this.article.image}"
                        ],
                        "description": "${this.article.summary}",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "${this.article.price.currency}",
                            "price": "${this.article.price.value}",
                            "itemCondition": "https://schema.org/NewCondition",
                            "availability": "https://schema.org/InStock"
                        }
                    }
                `}</script>
            </Helmet>
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
            {/*<PayPallAddButton/>*/}
        </Container>
    );
};

export default ItemDetail
