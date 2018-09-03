import React from 'react'
import {Button, Container, Table} from "reactstrap";
import {ShopContext} from "../../ShopContext";
import Total from "./Total";

const ShoppingCardItem = (props) => (
    <tr>
        <td>{props.item.title}</td>
        <td>{props.item.count}</td>
        <td>{props.item.price * props.item.count} ({props.item.price})</td>
    </tr>
);


const ShoppingCard = () => {

    return (
        <Container>
            <Table>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <ShopContext.Consumer>
                    {({items}) => items.map(item => (<ShoppingCardItem item={item}/>))}
                </ShopContext.Consumer>
                </tbody>
            </Table>
            <Total/>
            <Button>
                Order
            </Button>
        </Container>
    )
};

export default ShoppingCard
