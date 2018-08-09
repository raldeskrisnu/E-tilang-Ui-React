import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear,
    close
};

function success(message) {
    return {
        type:alertConstants.SUCCESS, message
    }
}

function error(message){
    return {
        type:alertConstants.ERROR, message
    };
}

function clear(message){
    return {
        type:alertConstants.CLEAR, message
    };
}

function close(message){
    return {
        type:alertConstants.CLOSE, message
    }
}