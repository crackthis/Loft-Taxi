import { takeEvery, call, put } from 'redux-saga/effects';
import {serverSaveCard, serverLoadCard} from "./api";
import {SAVE_CARD} from "./actions";

export function* saveYourCardSaga(action) {
    console.log(action);
    const { cardName, expiryDate, cardNumber, cvc, authToken } = action.payload;
    const result = yield call(serverSaveCard, cardNumber, expiryDate, cardName, cvc, authToken);
    if(result.success) {
        console.log("done");
    } else {
        console.log("error");
    }
}

export function* saveCardSaga() {
    yield takeEvery(SAVE_CARD, saveYourCardSaga);
}