import React from 'react'
import {Button, ButtonGroup, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import PayPallAddButton from "./PayPallAddButton";
import {Link} from "react-router-dom";


const Item = (props) => {
    return (
        <Card className={'mb-3'}>
            <CardImg top width="100%" src={props.itemData.image} alt="Card image cap"/>
            <CardBody>
                <CardTitle>{props.itemData.title}</CardTitle>
                <CardTitle> {`${props.itemData.price.value} ${props.itemData.price.currency}`} </CardTitle>
                <CardText>{props.itemData.summary}</CardText>
                <ButtonGroup>
                    <PayPallAddButton colour={props.itemData.price.colour} buttonId={props.itemData.price.buttonId}/>
                    <Button color="link" size="lg" tag={Link} to={'/shop/' + props.itemData.id}>
                        Detail
                    </Button>
                </ButtonGroup>
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
