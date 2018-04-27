import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from "../components/app";
import { BrowserRouter } from 'react-router-dom';


const appEl = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    appEl
);