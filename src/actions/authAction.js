import { Actions } from 'react-native-router-flux';
import  { AsyncStorage } from 'react-native';
import AuthController from '../controller/AuthController';
import { 
    EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOADING, LOGIN_FAILED
 } from './types';
import { validateAccount } from '.';

export const authenticateUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOADING, payload: { email, password } });
        dispatch({ type: LOGIN_USER_SUCCESS, payload: { email, password } });
        Actions.main();
        // AuthController.handleUserLogin({email, password})
        //                 .then(response => {
        //                     console.log('response', response);
        //                     if(response === 200){

        //                         dispatch({ type: LOGIN_USER_SUCCESS, payload: { email, password } });
        //                         console.log('token', AsyncStorage.getItem('token'));
        //                         Actions.main();
        //                    }else{
        //                         dispatch({ type: LOGIN_FAILED, payload: {}});
        //                    }
        //                 })
        //                 .catch(error => {
        //                     dispatch({ type: LOGIN_FAILED, payload: {}});
        //                     console.log('error', error);
        //                 })
       
       
    };
};

export const loginFailed = () => {
    console.log('failed tow')
    return (dispatch) => {
        console.log('failed')
        dispatch({ type: LOGIN_FAILED, payload: {}});
    }
}

export const loginOperationResponse = ( ) => {
    console.log('here is called');
}

export const emailChange = ({ email }) => {
    return (dispatch) => {
        dispatch({ type: EMAIL_CHANGE, payload: { email } }); 
    };
};

export const passwordChange = ({ password }) => {
    return (dispatch) => {
        dispatch({ type: PASSWORD_CHANGE, payload: { password } });
    };
};

