import { takeEvery, call, put } from 'redux-saga/effects';
import {serverLogin} from "./api";
import {AUTHENTICATE, logIn, saveToken} from "./actions";

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const result = yield call(serverLogin, email, password)
    const resultSuccess = result.success
    if(resultSuccess) {
        yield put(logIn());
        yield put(saveToken(result.token));
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('token', result.token);
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}