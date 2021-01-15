import { takeEvery, call, put } from 'redux-saga/effects';
import { serverReadyRoute } from "../api";
import { LOAD_READY_ROUTE, saveReadyRoute } from "../actions";

export function* loadReadyRouteSaga(action) {
    const { routeOne, routeTwo } = action.payload;
    const result = yield call(serverReadyRoute, routeOne, routeTwo);
    yield put(saveReadyRoute(result));
}

export function* readyRouteSaga() {
    yield takeEvery(LOAD_READY_ROUTE, loadReadyRouteSaga)
}