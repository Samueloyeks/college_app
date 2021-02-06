import { authConstants } from '../constants';

const LOGIN = authConstants.LOGIN
const LOGOUT = authConstants.LOGOUT


export function authReducer(state = {
    isAuthenticated: false
}, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}
