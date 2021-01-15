import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./sagas/authSaga";
import { signUpSaga } from "./sagas/regSaga";
import { saveCardSaga } from "./sagas/paymentSaga";
import { addressSaga } from "./sagas/addressSaga";
import { readyRouteSaga } from "./sagas/routeSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(saveCardSaga);
sagaMiddleware.run(addressSaga);
sagaMiddleware.run(readyRouteSaga);