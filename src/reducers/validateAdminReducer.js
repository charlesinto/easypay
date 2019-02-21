import {  
    VALIDATE_ACCOUNT_LOGIN_TO_HOME, ACCOUNT_SELECTED,
     ENTERED_CODE_CHANGED, DIMISS_MODAL, LOAD_RANCHES, INVALID_CODE, GO_TO_ACCOUNT
 } from '../actions/types';

const INITIAL_STATE = {
    branches: [], 
    accountDetail:{
    branchid: null, branchcode: null, branchname: null
    },
    isModalVisible: false,
    code: '',
    error: false,
    loggingSuccess: false
};

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GO_TO_ACCOUNT:
            return {...state, loggingSuccess:false}
        case LOAD_RANCHES: 
            return {...state, branches: action.payload}
        case VALIDATE_ACCOUNT_LOGIN_TO_HOME:
            return { ...state,code:'',loggingSuccess:true, isModalVisible: false };
        case ACCOUNT_SELECTED:
            const { branchcode, branchname, branchid} = action.payload;
            return { ...state, 
                accountDetail:{
                    branchcode, branchname, branchid
                },
                isModalVisible: true,
                error: false,
                code:''
            }
        case ENTERED_CODE_CHANGED:
            return {
                ...state, code: action.payload,
                error: false
            }
        case DIMISS_MODAL:
            return {
                ...state, isModalVisible: false, error: false
            }
        case INVALID_CODE:
            return {...state, error:true}
        default:
            return { ...state };
    }
};