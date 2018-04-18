import React from 'react';
import ReactDOM from 'react-dom';
import FormSignUp from "../components/signup/form.js";
import FormSignIn from "../components/signin/form.js";
//import Home from "../components/index.js"
import { A } from './a';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

A();

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path='/signin' component={FormSignIn}/>
            <Route path='/signup' component={FormSignUp}/>
        </Switch>
    </BrowserRouter>),
    document.getElementById('app')
);