import { Actions } from 'react-native-router-flux';
import { 
    VALIDATE_ACCOUNT_LOGIN_TO_HOME, ENTERED_CODE_CHANGED, 
    ACCOUNT_SELECTED, DIMISS_MODAL, LOAD_RANCHES, INVALID_CODE
 } from './types';
 import BranchController from '../controller/BranchController';

 export const getBranches = () => {
     return (dispatch) => {
        BranchController.getBranches()
        .then((branches) => {
            console.log('braches', branches);
            dispatch({type: LOAD_RANCHES, payload: branches })
        })
        .catch((error) => {
            console.log(error);
        })
     }
     
 }

export const onCodeChange = (code) => {
    return (dispatch) => {
        dispatch({type: ENTERED_CODE_CHANGED, payload: code})
    }
}

export const validateAccount = ({account, code}) => {
    console.log('see o', account, 'code >.', code);
    return (dispatch) => {
        if(account.branchcode === code){
            dispatch({type: VALIDATE_ACCOUNT_LOGIN_TO_HOME, payload: account});
            
        } else{
            dispatch({type: INVALID_CODE, payload: {}});
        }
        
    }
}

export const selectedAccount = (account) => {
    return (dispatch) => {
        dispatch({type: ACCOUNT_SELECTED, payload: account})
    }
}

export const dismissModal = () => {
    return (dispatch) => {
        dispatch({type:DIMISS_MODAL, payload: ''})
    }
}

