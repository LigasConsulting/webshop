import React from 'react'
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import PayPallAddButton from "./PayPallAddButton";
import {ShopContext} from "../../ShopContext";


const Item = (props) => {
    return (
        <Card className={'mb-3'}>
            <div className={'free-delivery'}>Free delivery</div>
            <CardImg top width="100%" src={props.itemData.image} alt="Card image cap"/>
            <CardBody>
                <CardTitle>{props.itemData.title}</CardTitle>
                {/*<CardSubtitle>Price: {props.itemData.price} GBP</CardSubtitle>*/}
                <CardText>{props.itemData.description}</CardText>
                <PayPallAddButton colour={props.itemData.price.colour} buttonId={props.itemData.price.buttonId}/>

                {/*                <Button tag={Link} to={'/shop/' + props.itemData.id}>
                    {props.itemData.price}
                </Button>*/}
                {/*<ShopContext.Consumer>*/}


                    {/*{({addItem}) => (*/}
                        {/*<div onClick={() => addItem(props.itemData)}>*/}
                            {/**/}
                        {/*</div>*/}
                    {/*)}*/}

                {/*</ShopContext.Consumer>*/}
            </CardBody>
        </Card>
    );
};
export default Item;
