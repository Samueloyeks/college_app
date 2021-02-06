import { alertConstants } from '../constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
    })
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'error'
    })
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}