import {
    FETCH_SIGN_IN,
    FETCH_SIGN_UP,
    SIGN_IN,
    SIGN_UP,
    FETCH_ALL_POSTS,
    ADD_ALL_POSTS
} from '../constants/actions';

export const UserInfo =  {
    result: '',
    token: '',
    allPosts: [],
    info: {
        email: '',
        name: ''
    }
};

export function fetchSignIn(values) {
    return { type: FETCH_SIGN_IN, payload: values }
}

export function fetchSignUp(values) {
    return { type: FETCH_SIGN_UP, payload: values }
}

export function signIn(userInfo) {
    return { type: SIGN_IN, userInfo }
}

export function signUp(userInfo) {
    return { type: SIGN_UP, userInfo }
}

export function fetchAllPosts(values) {
    return { type: FETCH_ALL_POSTS, payload: values }
}

export function addAllPosts(allPosts) {
    return { type: ADD_ALL_POSTS, allPosts }
}
