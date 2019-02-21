import { Actions } from 'react-native-router-flux';
import { GO_TO_ACCOUNT} from './types';

export const goToAccount = () => {
    return (dispatch) => {
        dispatch({type: GO_TO_ACCOUNT, payload:''})
        Actions.selectAccount({type:'reset'});
    }
    
}

export const goToLogin = () => {
    return (dispatch) => {
        dispatch({type: '', payload:''})
        Actions.auth({type: 'reset'}); 
    }
    
}

export const goToPayment = () => {
    return (dispatch) => {
         dispatch({type: '', payload: ''});
         Actions.paymentScreen();
     }
 }
 
 export const gotToPrev = () => {
     return (dispatch) => {
         dispatch({type: '', payload: ''});
         Actions.pop();
     }
 }

 export const goToHome = () => {
     return (dispatch) => {
         dispatch({type:'', payload:''})
         Actions.home()
     }
 }