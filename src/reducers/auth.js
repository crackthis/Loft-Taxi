import {LOG_IN, LOG_OUT, SAVE_TOKEN, SAVE_CARD_TO_STATE} from "../actions";

const initialState = {
    isLoggedIn: false,
    token: "",
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
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
            return {
                ...state, ...action.payload
            }
        }
        default:
            return state
    }
}