import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import Item from './Item';

import shopItemsData from '../../assets/shop-item-data';
import data from '../../assets/shop-page-data'

import Footer from "../common/Footer";
import {SectionMiddle} from "../common/PageSections";
import {Helmet} from "react-helmet";

const Shop = () => {

    this.createItemGrid = (shopItemsData) => {
        let items = shopItemsData.filter(item => !item.outOffStock);
        let itemsPerRow = 3;
        let totalItems = items.length;
        let noRows = parseInt(totalItems / itemsPerRow, 10) + 1;
        let row = [];

        for (let i = 0; i < noRows; i++) {
            let col = [];
            for (let j = 0; j < itemsPerRow; j++) {
                let index = itemsPerRow * i + j;
                if (index < totalItems) {
                    col.push(<Col md={4} key={items[index].id}>
                        <Item itemData={items[index]}/>
                    </Col>)
                }
            }
            row.push(<Row key={i}>{col}</Row>)
        }
        return row
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Toy Truck Shop</title>
                <meta name="keywords" content="shop"/>
                <meta name="description" content="Web shop for toy dump truck."/>
                <meta property="og:title" content="Toy Truck" />
                <meta property="og:url" content="https://toy-truck.co.uk/shop" />
                <meta property="og:type" content="website"/>
                <meta name="og:email" content="info@toy-truck.co.uk"/>
            </Helmet>
            <SectionMiddle sectionData={data.sections.label1}/>
            <Container className={'my-5'}>
                <h1>Dump truck 72cm (28inch)</h1>
                {this.createItemGrid(shopItemsData.filter(item => item.size === 'large'))}
                <h1>Small truck 30cm (12inch)</h1>
                {this.createItemGrid(shopItemsData.filter(item => item.size === 'small'))}
            </Container>
            <Footer/>
        </div>
    );
};
export default Shop
