import { alertUserConst } from '../constants';

let user =localStorage.getItem('user');
console.log(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case alertUserConst.LOGIN_REQUEST:
      return {
        loggedIn:true,
        blabla:true,
        user: action.user
      };
    case alertUserConst.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        blabla:false,
        user: action.user
      };
    case alertUserConst.LOGIN_FAILED:
    return {
      loggedIn: true,
      blabla:false
    };
    case alertUserConst.LOGOUT:
      return {};
    default:
      return state
  }
}