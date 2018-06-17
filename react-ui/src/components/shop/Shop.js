import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import Item from './Item';

import shopItemsData from '../../assets/shop-item-data';
import PayPallCardButton from "./PayPallCardButton";

const Shop = () => {

    this.createItemGrid = () => {
        let itemsPerRow = 4;
        let totalItems = shopItemsData.length;
        let noRows = parseInt(totalItems / itemsPerRow) + 1;
        let row = [];

        for (let i = 0; i < noRows; i++) {
            let col = [];
            for (let j = 0; j < itemsPerRow; j++) {
                let index = itemsPerRow * i + j;
                if (index < totalItems) {
                    col.push(<Col lg={3}>
                        <Item itemData={shopItemsData[index]}/>
                    </Col>)
                }
            }
            row.push(<Row>{col}</Row>)
        }
        return row
    };

    return (
        <Container>
            {this.createItemGrid()}
            <PayPallCardButton />
        </Container>
    );
};
export default Shop
