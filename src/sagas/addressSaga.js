import { takeEvery, call, put } from 'redux-saga/effects';
import {serverAddressList} from "../api";
import {LOAD_ADDRESS_LIST, saveAddressList} from "../actions";

export function* loadAddressSaga() {
    const { addresses } = yield call(serverAddressList);
    yield put(saveAddressList(addresses));
}

export function* addressSaga() {
    yield takeEvery(LOAD_ADDRESS_LIST, loadAddressSaga)
}

