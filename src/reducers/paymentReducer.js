import { NO_CARD_DETECTED, CARD_DETECTED, HIDE_MODAL,
    VALUE_CHANGE, PIN_CHANGE, COMMENT_CHANGE, AMOUNT_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    comment:'',
    accountType: '',
    pin:'',
    amount:'',
    isCardInserted: false,
    showCardAlert: false
}

export default ( state=INITIAL_STATE, actions) => {
    switch(actions.type){
        case NO_CARD_DETECTED:
            return {...state, isCardInserted: false, showCardAlert: true};
        case CARD_DETECTED:
            return { ...state, isCardInserted: true}
        case HIDE_MODAL:
            return {...state, showCardAlert:false}
        case AMOUNT_CHANGE:
            return {...state, amount: actions.payload}
        case VALUE_CHANGE:
            return {...state, accountType:actions.payload}
        case PIN_CHANGE:
            return {...state, pin:actions.payload}
        case COMMENT_CHANGE:
            return {...state, comment:actions.payload}
        default:
            return {...state};
    }
}