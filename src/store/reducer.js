import { UserInfo } from './action';

import {
    SIGN_IN,
    SIGN_UP,
    ADD_ALL_POSTS
} from '../constants/actions';

export function todoApp(state = UserInfo, action) {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, state, {
                token: action.userInfo.token,
                info: {
                    email: action.userInfo.email,
                    name: action.userInfo.name
                }
            });
        case SIGN_UP:
            return Object.assign({}, state, {
                result: action.userInfo.result
            });
        case ADD_ALL_POSTS:
            return Object.assign({}, state, {
                allPosts: action.allPosts
            });
        default:
            return state;
    }
}