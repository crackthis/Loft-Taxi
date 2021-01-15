import {takeEvery, call, put} from 'redux-saga/effects';
import {serverSaveCard} from "../api";
import {SAVE_CARD, saveCardToState} from "../actions";

export function* saveYourCardSaga(action) {
    const { cardName, expiryDate, cardNumber, cvc, authToken } = action.payload;
    const result = yield call(serverSaveCard, cardNumber, expiryDate, cardName, cvc, authToken);
    if(result.success) {
        yield put(saveCardToState(cardNumber, expiryDate, cardName, cvc));
    } else {
        console.log("error");
    }
}

export function* saveCardSaga() {
    yield takeEvery(SAVE_CARD, saveYourCardSaga);
}