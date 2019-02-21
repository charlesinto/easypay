import { combineReducers } from 'redux';
import authReducer from './authReducer';
import validateAdminReducer from './validateAdminReducer';
import paymentReducer from './paymentReducer';

export default combineReducers({
    auth: authReducer,
    accountEntry: validateAdminReducer,
    payment: paymentReducer
});
