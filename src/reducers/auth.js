import {LOG_IN, LOG_OUT, SAVE_TOKEN, LOAD_CARD} from "../actions";

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
            return {...state, isLoggedIn: false}
        }
        case SAVE_TOKEN: {
            return {...state, token: action.payload}
        }
        case LOAD_CARD: {
            return {...state, action }
        }
        default:
            return state
    }
}