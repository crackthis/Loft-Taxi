import {ROUTE_ONE, ROUTE_TWO, SAVE_ADDRESS_LIST, SAVE_READY_ROUTE} from "../actions";

const initialState = {
    addressList: [],
    routeOne: "",
    routeTwo: "",
    readyRoute: [],
}

export default function address(state = initialState, action) {
    switch(action.type) {
        case ROUTE_ONE: {
            return {...state, routeOne: action.payload}
        }
        case ROUTE_TWO: {
            return {...state, routeTwo: action.payload}
        }
        case SAVE_ADDRESS_LIST: {
            return {...state, addressList: action.payload}
        }
        case SAVE_READY_ROUTE: {
            return {...state, readyRoute: action.payload}
        }
        default:
            return state
    }
}
