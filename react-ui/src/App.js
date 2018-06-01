import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Home from "./components/web/Home";
import Shop from "./components/shop/Shop";
import About from "./components/web/About";
import Navigation from "./components/web/Navigation";
import ItemDetail from "./components/shop/ItemDetail";
import {ShopContext} from "./ShopContext";


const App = () => (
    <Router>
        <ShopContext.Provider>
            <Navigation/>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>

            <Route exact path={'/shop'} component={Shop}/>
            <Route exact path={'/shop/:itemId'} component={ItemDetail}/>
        </ShopContext.Provider>
    </Router>
);
export default App
