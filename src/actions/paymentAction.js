import { Actions } from 'react-native-router-flux';
import { NO_CARD_DETECTED, HIDE_MODAL, CARD_DETECTED,
    ACCOUNT_SELECTED, AMOUNT_CHANGE, VALUE_CHANGE, PIN_CHANGE,
    COMMENT_CHANGE,PAYMENT 
} from './types';
import PaymentProcessor from '../Helpers/PaymentProcessor';

export const confirmCard = () => {
    if(!PaymentProcessor.isCardInserted()){
        return (dispatch) => {
            dispatch({type: NO_CARD_DETECTED, payload: ''});
        }
    }else{
        return (dispatch) => {
            dispatch({type: CARD_DETECTED, payload: ''});
        }
    }
}

export const showNextStage = () => {
    return (dispatch) => {
        dispatch({type: CARD_DETECTED, payload: ''});
    }
}

export const hideAlert = () => {
    return (dispatch) => {
        dispatch({type: HIDE_MODAL, payload: ''});
    }
}

export const onChangeAmount = (amount) => {
    if(/^\d+$/.test(amount)){
        return(dispatch) => {
            dispatch({type:AMOUNT_CHANGE, payload:amount})
        }
    }
    return(dispatch) => {
        dispatch({type:'', payload:''});
    }
}

export const onChangePin = (pin) => {
    return (dispatch) => {
        dispatch({type:PIN_CHANGE, payload:pin})
    }
}

export const onChangeComment = (comment) => {
    return (dispatch) => {
        dispatch({type:COMMENT_CHANGE, payload:comment})
    }
}

export const onValueChange = (value) => {
    return (dispatch) => {
        dispatch({type:VALUE_CHANGE, payload:value})
    }
}

export const procesPayment = ({ comment, accountType, pin, amount}) => {
    return (dispatch) => {
        dispatch({type: PAYMENT, payload: ''});
        Actions.paymentSuccessful();
    }
}
