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

        case alertConstants.CLEAR : 
            return {
                visible:false
            }
        break;

        default:
            return state;
    }
}