import {LOG_IN, LOG_OUT, SAVE_TOKEN, SAVE_CARD_TO_STATE} from "../actions";

const initialState = {
    isLoggedIn: false,
    token: "",
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
    cardIsSaved: Boolean
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            return {...state, isLoggedIn: true}
        }
        case LOG_OUT: {
            localStorage.clear();
            return {...state, isLoggedIn: false}
        }
        case SAVE_TOKEN: {
            return {...state, token: action.payload}
        }
        case SAVE_CARD_TO_STATE: {
            if(action.payload.cardNumber === undefined ||
                action.payload.expiryDate === undefined ||
                action.payload.cardName === undefined ||
                action.payload.cvc === undefined) {
                    return {
                        ...state, cardIsSaved: true
                    }
            } else {
                return {
                    ...state, ...action.payload, cardIsSaved: false
                }
            }
        }
        default:
            return state
    }
}