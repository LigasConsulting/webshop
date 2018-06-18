import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import Item from './Item';

import shopItemsData from '../../assets/shop-item-data';
import Footer from "../common/Footer";

const Shop = () => {

    this.createItemGrid = () => {
        let itemsPerRow = 3;
        let totalItems = shopItemsData.length;
        let noRows = parseInt(totalItems / itemsPerRow) + 1;
        let row = [];

        for (let i = 0; i < noRows; i++) {
            let col = [];
            for (let j = 0; j < itemsPerRow; j++) {
                let index = itemsPerRow * i + j;
                if (index < totalItems) {
                    col.push(<Col md={4} key={shopItemsData[index].id}>
                        <Item itemData={shopItemsData[index]}/>
                    </Col>)
                }
            }
            row.push(<Row key={i}>{col}</Row>)
        }
        return row
    };

    return (
        <div>
            <Container>
                {this.createItemGrid()}
            </Container>
            <Footer/>
        </div>
    );
};
export default Shop
