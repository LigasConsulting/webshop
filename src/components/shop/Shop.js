import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import Item from './Item';

import shopItemsLargeData from '../../assets/shop-item-data-large';
import shopItemsSmallData from '../../assets/shop-item-data-small';
import data from '../../assets/shop-page-data'

import Footer from "../common/Footer";
import {SectionMiddle} from "../common/PageSections";

const Shop = () => {

    this.createItemGrid = (shopItemsData) => {
        let items = shopItemsData.filter(item => !item.outOffStock);
        let itemsPerRow = 3;
        let totalItems = items.length;
        let noRows = parseInt(totalItems / itemsPerRow) + 1;
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
            <SectionMiddle sectionData={data.sections.label1}/>
            <Container className={'my-5'}>
                <h1>Tipper truck 72cm (28inch)</h1>
                {this.createItemGrid(shopItemsLargeData)}
                <h1>Small truck 30cm (12inch)</h1>
                {this.createItemGrid(shopItemsSmallData)}
            </Container>
            <Footer/>
        </div>
    );
};
export default Shop
