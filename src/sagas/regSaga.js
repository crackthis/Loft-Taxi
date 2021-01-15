import { takeEvery, call } from 'redux-saga/effects';
import {serverSignUp} from "../api";
import {SIGN_UP} from "../actions";

export function* registrationSaga(action) {
    const {email, password, name_user, surname_user} = action.payload;
    const result = yield call(serverSignUp, email, password, name_user, surname_user)
    const resultSuccess = result.success;
    if(resultSuccess) {
        alert("Регистрация прошла успешно");
    } else {
        console.log("error");
    }
}

export function* signUpSaga() {
    yield takeEvery(SIGN_UP, registrationSaga)
}