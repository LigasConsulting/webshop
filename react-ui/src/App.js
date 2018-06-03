import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'
import faSquare from '@fortawesome/fontawesome-free-solid/faSquare'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

import Home from "./components/web/Home";
import Shop from "./components/shop/Shop";
import About from "./components/web/About";
import Navigation from "./components/web/Navigation";
import ItemDetail from "./components/shop/ItemDetail";
import {ShopContext} from "./ShopContext";

fontawesome.library.add(brands, faShoppingCart, faSquare, faCheck);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.addItem = (id) => {
            this.setState(state => {
                    let entry = state.items.find(item => item.id = id);
                    if (entry) {
                        entry.count++;
                    } else {
                        state.items.push({id: id, count: 1});
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
                    <Route path={'/about'} component={About}/>

                    <Route exact path={'/shop'} component={Shop}/>
                    <Route exact path={'/shop/:itemId'} component={ItemDetail}/>
                </ShopContext.Provider>
            </Router>
        );
    }
}

export default App
