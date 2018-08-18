import { combineReducers } from 'redux';
import { alerts } from './pop-up-alert.reducers';
import { authentication } from './authentication.reducer';

const rootReducers = combineReducers({
    alerts,
    authentication
});

export default rootReducers;