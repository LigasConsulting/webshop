import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'
import faSquare from '@fortawesome/fontawesome-free-solid/faSquare'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

import {withHero} from "./components/common/Hero";
import Home from "./components/web/Home";
import Shop from "./components/shop/Shop";
import About from "./components/web/About";
import Navigation from "./components/web/Navigation";
import ItemDetail from "./components/shop/ItemDetail";
import ShoppingCard from "./components/shop/ShoppingCard";
import {ShopContext} from "./ShopContext";

fontawesome.library.add(brands, faShoppingCart, faSquare, faCheck, faEnvelope);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.addItem = (newItem) => {
            this.setState(state => {
                    let entry = state.items.find(item => item.id = newItem.id);
                    if (entry) {
                        entry.count++;
                    } else {
                        state.items.push(Object.assign({}, newItem, {count: 1}));
                    }
                    return {
                        items: state.items
                    }
                }
            )
        };

        this.removeItem = (id) => {
            this.setState(state => {
                let index = state.items.find(item => item.id = id);
                return {
                    items: state.items.slice(index, 1)
                }
            });
        };

        this.state = {
            items: [],
            addItem: this.addItem,
            removeItem: this.removeItem
        };
    }


    render() {
        return (
            <Router>
                <ShopContext.Provider value={this.state}>
                    <Navigation/>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/about'} component={withHero(About)}/>
                    <Route path={'/shopping-cart'} component={withHero(ShoppingCard)}/>

                    <Route exact path={'/shop'} component={withHero(Shop)}/>
                    <Route exact path={'/shop/:itemId'} component={withHero(ItemDetail)}/>
                </ShopContext.Provider>
            </Router>
        );
    }
}

export default App
