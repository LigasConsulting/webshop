import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Item = (props) => {

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.itemData.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.itemData.title}</CardTitle>
                    <CardSubtitle>{props.itemData.subtitle}</CardSubtitle>
                    <CardText>{props.itemData.description}</CardText>
                    <Button>{props.itemData.price}</Button>
                </CardBody>
            </Card>
        </div>
    );
};
export default Item;
