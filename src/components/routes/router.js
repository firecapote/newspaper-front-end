import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserRouter } from './userRouter';
import { PostRouter } from './postRouter';
import ROUTES from '../../constants/routes';

export const Routes = () => (
        <Switch>
            <Route path={ROUTES.USERS} component={UserRouter} />
            <Route path={ROUTES.POSTS} component={PostRouter} />
        </Switch>
);