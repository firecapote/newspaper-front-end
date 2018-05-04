import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app/app.js'

const appEl = document.getElementById("app");

ReactDOM.render(
    <App/>,
    appEl
);