import {LOG_IN, LOG_OUT, SAVE_TOKEN} from "../actions";

const initialState = {
    isLoggedIn: false,
    token: "",
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            return {isLoggedIn: true}
        }
        case LOG_OUT: {
            return {isLoggedIn: false}
        }
        case SAVE_TOKEN: {
            return {...state, token: action.payload}
        }
        default:
            return state
    }
}