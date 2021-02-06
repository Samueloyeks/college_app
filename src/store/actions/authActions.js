import { authConstants } from '../constants';
import { alertActions } from './alertActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export const authActions = {
    login,
    logout
};

function login() {
    return dispatch => {
        dispatch(login());
        dispatch(alertActions.success('Logged In'));
    };

    function login() { return { type: authConstants.LOGIN } }
}

function logout() {
    return dispatch => {
        dispatch(logout());
        dispatch(alertActions.success('Logged Out'));
    };

    function logout() { return { type: authConstants.LOGOUT } }
}

