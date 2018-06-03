import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {ShopContext} from "../../ShopContext";


const ShoppingCardIcon = (props) => {

    this.getCount = (items) => {
        let no = items.length > 0 ? items.map(item => item.count).reduce((acc, val) => acc + val) : 0;
        if (no) {
            return (
                <span className="fa-layers-counter">{no}</span>
            )
        }
    };

    return (
        <div className={props.className}>
            <div className="fa-layers  fa-2x">
                <FontAwesomeIcon icon="shopping-cart"/>
                <ShopContext.Consumer>
                    {({items}) => this.getCount(items)}
                </ShopContext.Consumer>
            </div>
        </div>
    );
};

export default ShoppingCardIcon;
