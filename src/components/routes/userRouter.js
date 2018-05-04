import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../users/signup';
import SignIn from '../users/signin';
import HomeUsers from '../users/home';
import ROUTES from '../../constants/routes';

export const UserRouter = () => (
    <Switch>
        <Route exact path={ROUTES.USERS} component={HomeUsers} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
    </Switch>
);