import { 
    EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOADING, LOGIN_FAILED
 } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', loading: false, logInFailed: false };

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_FAILED: 
            return { ...state, loading: false, logInFailed: true}
        case LOADING:
            return {...state, loading:true, logInFailed:false }
        case EMAIL_CHANGE:
            return { ...state, ...action.payload, logInFailed:false };
        case PASSWORD_CHANGE:
            return { ...state, ...action.payload, logInFailed:false };
        case LOGIN_USER_SUCCESS: 
            return { ...state, ...action.payload, loading: false, logInFailed:false };
        default:
            return { ...state };
    }
};

