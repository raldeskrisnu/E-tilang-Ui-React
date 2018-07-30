import { alertUserConst } from '../constants';
import { alertActions } from '.';
import history from '../helpers/history';

export const userActions = {
    login
};

function login(username,password){
    return dispatch => {
         dispatch(request({ username }));
        if(username === 'admin' && password === 'admin'){
            dispatch(success('Login success'));
            dispatch(alertActions.success('Login success'));
            history.push('/dashboard');
            localStorage.setItem('user','todo');
        } else {
            dispatch(failure('Login success'));
            dispatch(alertActions.error("username or password not match"));
        }
    };

     function request(user) { return { type: alertUserConst.LOGIN_REQUEST, user } } 
     function failure(error) { return { type: alertUserConst.LOGIN_FAILED, error } }
     function success(user) { return { type: alertUserConst.LOGIN_SUCCESS, user } }
}
