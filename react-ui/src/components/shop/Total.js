import React from 'react'
import {ShopContext} from '../../ShopContext'

const Total = () => {
    this.calcTotal = function (items) {
        if (items && items.length>0) {
            return items
                .map(item => item.price * item.count)
                .reduce(({acc, val}) => acc + val);
        }
    };
    return (
        <div>
            Total:
            <ShopContext.Consumer>
                 {({items}) => this.calcTotal(items)}
            </ShopContext.Consumer>
        </div>
    );
};

export default Total
