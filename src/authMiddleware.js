import {logIn, saveToken} from "./actions";
import {serverLogin} from "./api";
import {AUTHENTICATE} from "./actions";

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const result = await serverLogin(email, password);
        const resultSuccess = result.success;
        if(resultSuccess) {
            store.dispatch(logIn());
            store.dispatch(saveToken(result.token));
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('token', result.token);
            console.log(localStorage);
        }
    } else {
        next(action);
    }
}