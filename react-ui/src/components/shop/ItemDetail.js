import React from 'react'
import {Container, UncontrolledCarousel, Button} from "reactstrap";
import {ShopContext} from "../../ShopContext";

import shopItemsData from '../../assets/shop-item-data';

const ItemDetail = ({match}) => {
    this.article = shopItemsData.find(item => item.id === match.params.itemId);
    return (

        <Container>
            <UncontrolledCarousel items={this.article.images}/>
            <h1>{this.article.title}</h1>
            <h2>Price: {this.article.price}</h2>
            <ShopContext.Consumer>
                {({addItem}) => (
                    <Button onClick={() => addItem(this.article.id)}>
                        Add to shopping cart
                    </Button>
                )}
            </ShopContext.Consumer>
        </Container>
    );
};

export default ItemDetail
