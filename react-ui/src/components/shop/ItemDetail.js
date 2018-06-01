import React from 'react'
import {Container, UncontrolledCarousel, Button} from "reactstrap";
import shopItemsData from '../../assets/shop-item-data';

const ItemDetail = ({match}) => {
    console.log(match.params.itemId);
    this.article = shopItemsData.find(item => item.id === match.params.itemId);
    console.log(this.article);
    return (

        <Container>
            <UncontrolledCarousel  items={this.article.images}/>
            <h1>{this.article.title}</h1>
            <h2>Price: {this.article.price}</h2>
            <Button onClick={console.log(this.article.id)}>
                Add to shopping cart
            </Button>
        </Container>
    );
};

export default ItemDetail
