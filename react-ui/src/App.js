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
import Navigation from "./components/web/Navigation";
import {ShopContext} from "./ShopContext";
import ThankYou from "./components/web/ThankYou";
import About from "./components/web/About";

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
                    <Route path={'/about'} component={withHero({
                        text: 'About me',
                        imgSrc: '/static/img/hero-big.jpg',
                        className: 'page-hero'
                    })(About)}/>
                    {/*<Route path={'/shopping-cart'} component={withHero(ShoppingCard)}/>*/}

                    <Route exact path={'/shop'} component={withHero({
                        text: 'Shop',
                        imgSrc: '/static/img/hero-big.jpg',
                        className: 'page-hero'
                    })(Shop)}/>
                    <Route exact path={'/shop/success'} component={withHero({
                        text: 'Thank you for your parches',
                        imgSrc: '/static/img/hero-big.jpg',
                        className: 'page-hero-thank-you'
                    })(ThankYou)}/>
                    {/*<Route exact path={'/shop/:itemId'} component={withHero(ItemDetail)}/>*/}
                </ShopContext.Provider>
            </Router>
        );
    }
}

export default App
