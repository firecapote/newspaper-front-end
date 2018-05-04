import axios from 'axios';
import ENDPOINTS from '../constants/endpoints';

export function requestGetAllPosts(currentToken) {

    return axios({
        url: ENDPOINTS.POSTS,
        method: 'get',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": currentToken
        }
    })
        .then(function (res) {
            console.log('Request succeeded with JSON response', res);
            return res.data;
        })
        .catch(function (error) {
            console.log('Request failed', error);
            return error;
        });
}