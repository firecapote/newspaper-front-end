import { UserInfo, SIGN_IN, SIGN_UP } from './action';

export function todoApp(state = UserInfo, action) {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, state, {
                success: true,
                token: action.userInfo.token,
                info: {
                    email: action.userInfo.email
                }
            });
        case SIGN_UP:
            return Object.assign({}, state, {
                result: action.userInfo.result,
                info: {
                    name: action.userInfo.name
                }
            });
        default:
            return state;
    }
}