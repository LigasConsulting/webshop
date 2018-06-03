import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {ShopContext} from "../../ShopContext";
import {Route} from "react-router-dom";


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
        <Route render={({ history}) => (
            <div className={props.className}
                 onClick={() => { history.push('/shopping-cart') }}
            >
                <div className="fa-layers  fa-2x">
                    <FontAwesomeIcon icon="shopping-cart"/>
                    <ShopContext.Consumer>
                        {({items}) => this.getCount(items)}
                    </ShopContext.Consumer>
                </div>
            </div>
        )} />
    );
};

export default ShoppingCardIcon;
