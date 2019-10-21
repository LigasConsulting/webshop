import React from 'react'
import Closed from "./components/web/Closed";
import {unregister} from './registerServiceWorker';

unregister();

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Closed/>
        );
    }
}

export default App
