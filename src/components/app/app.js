import React from 'react';
import Nav from '../navigation/nav';
import { Routes } from '../routes/router';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Nav />
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;