import { alertUserConst } from '../constants';
import { alertActions } from '.';

export const userActions = {
    login
};

function login(username,password){
    return dispatch => {
         dispatch(request({ username }));
        if(username === 'admin' && password === 'admin'){
            console.log('berhasil');
            dispatch(alertActions.success('Login success',true));
        }
        console.log('username from actions', username);
        console.log('password from actions', password);
    };

     function request(user) { return { type: alertUserConst.LOGIN_REQUEST, user } } 
    //  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}
