export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const FETCH_SIGN_IN = 'FETCH_SIGN_IN';
export const FETCH_SIGN_UP = 'FETCH_SIGN_UP';

export const UserInfo =  {
    success: false,
    result: '',
    token: 'empty',
    info: {
        email: 'empty',
        name: 'empty'
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