export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGN_UP = 'SIGN_UP';
export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_TO_STATE = 'SAVE_CARD_TO_STATE';
export const LOAD_ADDRESS_LIST = 'LOAD_ADDRESS_LIST';
export const SAVE_ADDRESS_LIST = 'SAVE_ADDRESS_LIST';
export const ROUTE_ONE = 'ROUTE_ONE';
export const ROUTE_TWO = 'ROUTE_TWO';
export const LOAD_READY_ROUTE = 'LOAD_READY_ROUTE';
export const SAVE_READY_ROUTE = 'SAVE_READY_ROUTE';

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: {email, password}
});
export const saveToken = (token) => ({
    type: SAVE_TOKEN,
    payload: token,
});

export const signUp = (email, password, name_user, surname_user) => ({
    type: SIGN_UP,
    payload: {email, password, name_user, surname_user}
});

export const saveCard = (cardNumber, expiryDate, cardName, cvc, authToken) => ({
    type: SAVE_CARD,
    payload: {cardNumber, expiryDate, cardName, cvc, authToken}
});

export const saveCardToState = (cardNumber, expiryDate, cardName, cvc) => ({
    type: SAVE_CARD_TO_STATE,
    payload: {cardNumber, expiryDate, cardName, cvc}
});

export const loadAddressList = () => ({type: LOAD_ADDRESS_LIST});

export const saveAddressList = (addressList) => ({
    type: SAVE_ADDRESS_LIST,
    payload: addressList
})

export const saveRouteOne = (route) => ({
    type: ROUTE_ONE,
    payload: route,
});

export const saveRouteTwo = (route) => ({
    type: ROUTE_TWO,
    payload: route,
});

export const loadReadyRoute = (routeOne, routeTwo) => ({
    type: LOAD_READY_ROUTE,
    payload: {routeOne, routeTwo}
});

export const saveReadyRoute = (readyRoute) => ({
    type: SAVE_READY_ROUTE,
    payload: readyRoute,
})
