export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGN_UP = 'SIGN_UP';
export const LOAD_CARD = 'PAYMENT_LOAD';
export const SAVE_CARD = 'PAYMENT_SAVE';


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
export const loadCard = () => ({
    type: LOAD_CARD
});