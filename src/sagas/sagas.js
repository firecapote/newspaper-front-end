import { all, call, put, takeEvery } from 'redux-saga/effects';
import { signIn, signUp, addAllPosts } from '../store/action';
import { requestSignIn, requestSignUp } from '../requests/postUser';
import { requestGetAllPosts } from '../requests/getPosts';

import {
    FETCH_SIGN_IN,
    FETCH_SIGN_UP,
    FETCH_ALL_POSTS
} from '../constants/actions';

//WATCHERS
function* watchFetchSignIn() {
    yield takeEvery(FETCH_SIGN_IN, fetchSignInAsync);
}

function* watchFetchSignUp() {
    yield takeEvery(FETCH_SIGN_UP, fetchSignUpAsync);
}

function* watchGetAllPosts() {
    yield takeEvery(FETCH_ALL_POSTS, fetchGetAllPosts);
}

//WORKERS
function* fetchSignInAsync({payload}) {
    const dataUser = yield call(requestSignIn, payload);
    yield put(signIn(dataUser));
}

function* fetchSignUpAsync({payload}) {
    const resultData = yield call(requestSignUp, payload);
    yield put(signUp(resultData));
}

function* fetchGetAllPosts({payload}) {
    const allPosts = yield call(requestGetAllPosts, payload);
    yield put(addAllPosts(allPosts));
}


export default function* userSaga() {
    yield all([watchFetchSignIn(), watchFetchSignUp(), watchGetAllPosts()]);
}