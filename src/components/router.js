import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectedSignUp from './signup/form.js';
import ConnectedSignIn from './signin/form.js';

export const routes =
        <Switch>
            <Route path="/users/signin" component={ConnectedSignIn} />
            <Route path="/users/signup" component={ConnectedSignUp} />
        </Switch>;