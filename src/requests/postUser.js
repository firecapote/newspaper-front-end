import axios from 'axios';
import ENDPOINTS from '../constants/endpoints';

export function requestSignIn(payload) {

    return axios({
        url: ENDPOINTS.SIGN_IN,
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify(payload)
    })
        .then(function (res) {
            console.log('Request succeeded with JSON response', res);
            return {token: res.data.token, email: res.data.user.email, name: res.data.user.name};
        })
        .catch(function (error) {
            console.log('Request failed', error);
            return error;
        });
}

export function requestSignUp(payload) {

    return axios({
        url: ENDPOINTS.SIGN_UP,
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify(payload)
    })
        .then(function (res) {
            console.log('Request succeeded with JSON response', res);
            return {result: res.data};
        })
        .catch(function (error) {
            console.log('Request failed', error);
            return error;
        });
}