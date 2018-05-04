import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostAll from '../posts';
import ROUTES from '../../constants/routes';

export const PostRouter = () => (
    <Switch>
        <Route exact path={ROUTES.POSTS} component={PostAll} />
    </Switch>
);