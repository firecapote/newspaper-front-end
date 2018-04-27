import React, { Component } from 'react';
import Nav from './nav';
import { routes } from './router';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                {routes}
            </div>
        );
    }
}

export default App;