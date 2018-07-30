import { alertConstants } from '../constants';

export function alerts(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS :
            return {
                type: 'info',
                message: action.message,
                visible:true
            };
        break;

        case alertConstants.ERROR :
            return {
                type: 'danger',
                message: action.message,
                visible:true
            }
        break;

        case alertConstants.CLOSE :
            return {
                visible:false
            }
        break;

        case alertConstants.CLEAR :
        return {}
        break;

        default:
            return state;
    }
}