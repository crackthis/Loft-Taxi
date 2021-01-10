import { takeEvery, call, put } from 'redux-saga/effects';
import {serverLoadCard, serverLogin} from "../api";
import {AUTHENTICATE, logIn, saveCardToState, loadAddressList} from "../actions";


export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const result = yield call(serverLogin, email, password)
    const resultSuccess = result.success;
    if(resultSuccess) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('token', result.token);
        const {cardNumber, expiryDate, cardName, cvc} = yield call(serverLoadCard, localStorage.token);
        yield put(saveCardToState(cardNumber, expiryDate, cardName, cvc));
        yield put(logIn());
        yield put(loadAddressList());
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}