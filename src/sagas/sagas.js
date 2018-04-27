import { all, call, put, takeEvery } from 'redux-saga/effects';
import { signIn, signUp } from '../store/action';
import { requestSignIn, requestSignUp } from '../requests/postsUser';

//WATCHERS
function* watchFetchSignIn() {
    yield takeEvery('FETCH_SIGN_IN', fetchSignInAsync);
}

function* watchFetchSignUp() {
    yield takeEvery('FETCH_SIGN_UP', fetchSignUpAsync);
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


export default function* userSaga() {
    yield all([watchFetchSignIn(), watchFetchSignUp()]);
}