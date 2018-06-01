import React from 'react'
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";

const Item = (props) => {

    return (
        <Card>
            <CardImg top width="100%" src={props.itemData.image} alt="Card image cap"/>
            <CardBody>
                <CardTitle>{props.itemData.title}</CardTitle>
                <CardSubtitle>{props.itemData.subtitle}</CardSubtitle>
                <CardText>{props.itemData.description}</CardText>
                <Button tag={Link} to={'/shop/' + props.itemData.id}>
                    {props.itemData.price}
                </Button>
            </CardBody>
        </Card>
    );
};
export default Item;
